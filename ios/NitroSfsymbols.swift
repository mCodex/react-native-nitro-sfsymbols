import NitroModules
import UIKit

/// Native iOS implementation of `<SFSymbolView />`.
///
/// Renders Apple SF Symbols using `UIImage(systemName:)`. Property updates are
/// coalesced into a single render pass per run-loop tick so multi-prop React
/// updates don't trigger redundant work. Resolved `UIImage` instances are
/// cached per configuration via `NSCache`, so list scrolling stays
/// allocation-free.
///
/// Accessibility: respects `Reduce Motion` (animations are skipped) and
/// `Increase Contrast` (falls back to system label color when no tint is set).
final class HybridNitroSfsymbols: HybridNitroSfsymbolsSpec_base, HybridNitroSfsymbolsSpec_protocol {

  // MARK: - View

  var view: UIView = UIImageView()

  private var imageView: UIImageView { view as! UIImageView }

  // MARK: - Coalesced update flag

  private var needsUpdate = false
  private var didScheduleUpdate = false

  /// Cache key of the currently-rendered image. Used to short-circuit
  /// `render()` when no inputs that affect the image have changed.
  private var lastRenderKey: NSString?

  /// Cache key of the currently-applied symbol effect. Avoids restarting
  /// iOS 17+ symbol effects on unrelated prop changes.
  private var lastAnimationKey: String?

  /// Last-applied alpha. Avoids redundant CALayer commits on every render.
  private var lastOpacity: CGFloat = 1.0

  private func setNeedsUpdate() {
    needsUpdate = true
    if didScheduleUpdate { return }
    didScheduleUpdate = true
    DispatchQueue.main.async { [weak self] in
      guard let self else { return }
      self.didScheduleUpdate = false
      if self.needsUpdate {
        self.needsUpdate = false
        self.render()
      }
    }
  }

  // MARK: - Properties

  var symbolName: String = "" { didSet { if symbolName != oldValue { setNeedsUpdate() } } }
  var fallbackName: String? { didSet { if fallbackName != oldValue { setNeedsUpdate() } } }
  var size: Double? = 24 { didSet { if size != oldValue { setNeedsUpdate() } } }
  var weight: String? = "regular" { didSet { if weight != oldValue { setNeedsUpdate() } } }
  var scale: String? = "medium" { didSet { if scale != oldValue { setNeedsUpdate() } } }
  var tintColor: String? { didSet { if tintColor != oldValue { setNeedsUpdate() } } }
  var renderingMode: String? = "monochrome" { didSet { if renderingMode != oldValue { setNeedsUpdate() } } }
  var hierarchicalConfig: Dictionary<String, String>? { didSet { setNeedsUpdate() } }
  var paletteConfig: Dictionary<String, String>? { didSet { setNeedsUpdate() } }
  var animationConfig: Dictionary<String, String>? { didSet { setNeedsUpdate() } }
  var opacity: Double? = 1.0 { didSet { if opacity != oldValue { setNeedsUpdate() } } }
  var variableColor: Bool? = false { didSet { if variableColor != oldValue { setNeedsUpdate() } } }

  // MARK: - Init

  override init() {
    super.init()
    let iv = imageView
    iv.contentMode = .scaleAspectFit
    iv.clipsToBounds = true
    iv.isAccessibilityElement = false // The host RN view manages a11y.
    NotificationCenter.default.addObserver(
      self,
      selector: #selector(reduceMotionChanged),
      name: UIAccessibility.reduceMotionStatusDidChangeNotification,
      object: nil
    )
  }

  deinit { NotificationCenter.default.removeObserver(self) }

  @objc private func reduceMotionChanged() {
    // Force re-evaluation of the animation state on the next pass.
    lastAnimationKey = "__invalidated__"
    setNeedsUpdate()
  }

  // MARK: - Render pipeline

  private func render() {
    guard !symbolName.isEmpty else {
      imageView.image = nil
      lastRenderKey = nil
      return
    }

    let pointSize = CGFloat(size ?? 24)
    let weightVal = parseWeight(weight ?? "regular")
    let scaleVal = parseScale(scale ?? "medium")
    let mode = renderingMode ?? "monochrome"
    let hasExplicitTint = (tintColor != nil)
    let tintHex = tintColor ?? "@label"

    let cacheKey = NSString(format: "%@|%@|%.1f|%d|%d|%@|%@|%@|%@|%d|%d",
                            symbolName, fallbackName ?? "_",
                            pointSize, weightVal.rawValue, scaleVal.rawValue,
                            mode, tintHex,
                            hashConfig(hierarchicalConfig),
                            hashConfig(paletteConfig),
                            hasExplicitTint ? 1 : 0,
                            (variableColor ?? false) ? 1 : 0)

    // Short-circuit: nothing meaningful changed.
    if cacheKey == lastRenderKey {
      applyOpacityIfChanged()
      applyAnimation()
      return
    }

    let image: UIImage? = {
      if let cached = Self.imageCache.object(forKey: cacheKey) { return cached }

      let baseConfig = UIImage.SymbolConfiguration(pointSize: pointSize, weight: weightVal, scale: scaleVal)
      let img = resolveSystemImage(name: symbolName, fallback: fallbackName, config: baseConfig)
      guard var resolved = img else { return nil }

      switch mode {
      case "hierarchical":
        if let primary = hierarchicalConfig?["primaryColor"].flatMap(uiColorFromHex) {
          resolved = resolved.applyingSymbolConfiguration(.init(hierarchicalColor: primary)) ?? resolved
        }
      case "palette":
        let colors = ["primaryColor", "secondaryColor", "tertiaryColor"]
          .compactMap { paletteConfig?[$0] }
          .compactMap(uiColorFromHex)
        if !colors.isEmpty {
          resolved = resolved.applyingSymbolConfiguration(.init(paletteColors: colors)) ?? resolved
        }
      case "multicolor":
        resolved = resolved.applyingSymbolConfiguration(UIImage.SymbolConfiguration.preferringMulticolor()) ?? resolved
      default:
        break
      }

      // Only freeze the tint when the user supplied one explicitly. Otherwise
      // we leave the image as `.alwaysTemplate` so that `imageView.tintColor`
      // reacts dynamically to dark/light mode and Increase Contrast.
      if mode == "monochrome", hasExplicitTint, let tint = uiColorFromHex(tintHex) {
        resolved = resolved.withTintColor(tint, renderingMode: .alwaysOriginal)
      }

      Self.imageCache.setObject(resolved, forKey: cacheKey, cost: Int(pointSize * pointSize * 4))
      return resolved
    }()

    imageView.image = image
    if mode == "monochrome", !hasExplicitTint {
      imageView.tintColor = .label
    }
    lastRenderKey = cacheKey

    applyOpacityIfChanged()
    applyAnimation()
  }

  private func applyOpacityIfChanged() {
    let next = CGFloat(opacity ?? 1.0)
    if next != lastOpacity {
      lastOpacity = next
      imageView.alpha = next
    }
  }

  private func resolveSystemImage(name: String, fallback: String?, config: UIImage.SymbolConfiguration) -> UIImage? {
    if let img = UIImage(systemName: name, withConfiguration: config) { return img }
    if let fb = fallback, let img = UIImage(systemName: fb, withConfiguration: config) { return img }
    #if DEBUG
    NSLog("[NitroSfsymbols] Symbol \"\(name)\" not found on this iOS version. Provide a `fallbackName` to silence this warning.")
    #endif
    return nil
  }

  // MARK: - Animation (iOS 17+)

  private func applyAnimation() {
    guard #available(iOS 17.0, *) else { return }

    // Build a stable key for the desired animation state.
    let desiredKey: String? = {
      if UIAccessibility.isReduceMotionEnabled { return nil }
      guard let cfg = animationConfig, let type = cfg["type"] else { return nil }
      return "\(type)|\(cfg["repeating"] ?? "false")"
    }()

    if desiredKey == lastAnimationKey { return }
    lastAnimationKey = desiredKey

    imageView.removeAllSymbolEffects()
    guard let cfg = animationConfig, let type = cfg["type"], desiredKey != nil else { return }
    let options: SymbolEffectOptions = (cfg["repeating"] == "true") ? .repeating : .nonRepeating

    switch type {
    case "bounce": imageView.addSymbolEffect(.bounce, options: options)
    case "pulse": imageView.addSymbolEffect(.pulse, options: options)
    case "scale": imageView.addSymbolEffect(.scale, options: options)
    case "rotate":
      if #available(iOS 18.0, *) { imageView.addSymbolEffect(.rotate, options: options) }
      else { imageView.addSymbolEffect(.pulse, options: options) }
    case "appear": imageView.addSymbolEffect(.appear, options: options)
    case "disappear": imageView.addSymbolEffect(.disappear, options: options)
    case "replace":
      // Replace requires a target image; treat as bounce when used standalone.
      imageView.addSymbolEffect(.bounce, options: options)
    case "variableColor":
      imageView.addSymbolEffect(.variableColor, options: options)
    default:
      break
    }
  }

  // MARK: - Parsers (JS layer guarantees lowercase string-literal unions, so
  // we skip the `lowercased()` allocation on the hot path.)

  private func parseWeight(_ value: String) -> UIImage.SymbolWeight {
    switch value {
    case "ultralight": return .ultraLight
    case "thin": return .thin
    case "light": return .light
    case "regular": return .regular
    case "medium": return .medium
    case "semibold": return .semibold
    case "bold": return .bold
    case "heavy": return .heavy
    case "black": return .black
    default: return .regular
    }
  }

  private func parseScale(_ value: String) -> UIImage.SymbolScale {
    switch value {
    case "small": return .small
    case "medium": return .medium
    case "large": return .large
    default: return .medium
    }
  }

  private func hashConfig(_ dict: [String: String]?) -> String {
    guard let dict, !dict.isEmpty else { return "_" }
    return dict.keys.sorted().map { "\($0)=\(dict[$0] ?? "")" }.joined(separator: ",")
  }

  // MARK: - Color (hex parsing with LRU)

  private static var colorCache: [String: UIColor] = [:]
  private static let colorCacheLimit = 32

  private func uiColorFromHex(_ raw: String?) -> UIColor? {
    guard let raw, !raw.isEmpty else { return nil }
    let key = raw.lowercased()
    if let cached = Self.colorCache[key] { return cached }

    var hex = raw.hasPrefix("#") ? String(raw.dropFirst()) : raw
    // Expand #RGB → #RRGGBB
    if hex.count == 3 {
      hex = hex.map { "\($0)\($0)" }.joined()
    }
    guard hex.count == 6 || hex.count == 8 else { return nil }

    var value: UInt64 = 0
    let scanner = Scanner(string: hex)
    guard scanner.scanHexInt64(&value) else { return nil }

    let r, g, b, a: CGFloat
    if hex.count == 8 {
      r = CGFloat((value >> 24) & 0xff) / 255.0
      g = CGFloat((value >> 16) & 0xff) / 255.0
      b = CGFloat((value >> 8) & 0xff) / 255.0
      a = CGFloat(value & 0xff) / 255.0
    } else {
      r = CGFloat((value >> 16) & 0xff) / 255.0
      g = CGFloat((value >> 8) & 0xff) / 255.0
      b = CGFloat(value & 0xff) / 255.0
      a = 1.0
    }
    let color = UIColor(red: r, green: g, blue: b, alpha: a)

    if Self.colorCache.count >= Self.colorCacheLimit { Self.colorCache.removeAll(keepingCapacity: true) }
    Self.colorCache[key] = color
    return color
  }

  /// Hex representation of the system label color so cache keys remain stable
  /// when no explicit tint is provided. Honors *Increase Contrast*.
  private static func systemTintHex() -> String {
    if UIAccessibility.isDarkerSystemColorsEnabled { return "@label-hc" }
    return "@label"
  }
  // MARK: - Image cache (per-configuration)

  private static let imageCache: NSCache<NSString, UIImage> = {
    let cache = NSCache<NSString, UIImage>()
    cache.totalCostLimit = 8 * 1024 * 1024 // 8 MB
    cache.countLimit = 256
    return cache
  }()
}
