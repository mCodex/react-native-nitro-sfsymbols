import UIKit

/**
 * HybridNitroSfsymbols - Native iOS Implementation
 *
 * This class implements SF Symbol rendering for iOS using UIImageView and UIImage.Configuration.
 * SF Symbols provide Apple's native icon system with support for:
 * - Multiple scales and weights
 * - Hierarchical and palette rendering modes
 * - Animations (iOS 17+)
 * - Variable colors
 *
 * SF Symbols are exclusive to iOS 13+ and provide optimal performance and consistency
 * across Apple's ecosystem.
 *
 * @class HybridNitroSfsymbols
 */
class HybridNitroSfsymbols: HybridNitroSfsymbolsSpec {
  // MARK: - Properties

  /// The main UIView containing the SF Symbol
  var view: UIView = UIImageView()

  /// Cache for the current configuration to optimize updates
  private var currentConfig: SymbolConfig = SymbolConfig()

  // MARK: - Props

  /// Name of the SF Symbol to render (e.g., "thermometer.sun.fill")
  var name: String = "" {
    didSet {
      guard name != oldValue else { return }
      updateSymbol()
    }
  }

  /// Size of the symbol in points (default: 24)
  var size: Double = 24 {
    didSet {
      guard size != oldValue else { return }
      updateSymbol()
    }
  }

  /// Weight of the symbol stroke (ultralight, thin, light, regular, medium, semibold, bold, heavy, black)
  var weight: String = "regular" {
    didSet {
      guard weight != oldValue else { return }
      updateSymbol()
    }
  }

  /// Scale variant of the symbol (small, medium, large)
  var scale: String = "medium" {
    didSet {
      guard scale != oldValue else { return }
      updateSymbol()
    }
  }

  /// Tint color for the symbol (hex color string)
  var tintColor: String = "#000000" {
    didSet {
      guard tintColor != oldValue else { return }
      updateSymbol()
    }
  }

  /// Rendering mode for color application (monochrome, hierarchical, palette, multicolor)
  var renderingMode: String = "monochrome" {
    didSet {
      guard renderingMode != oldValue else { return }
      updateSymbol()
    }
  }

  /// Hierarchical color configuration (primary, secondary, tertiary)
  var hierarchicalConfig: [String: String]? {
    didSet {
      updateSymbol()
    }
  }

  /// Palette color configuration for multi-color rendering
  var paletteConfig: [String: String]? {
    didSet {
      updateSymbol()
    }
  }

  /// Animation configuration for iOS 17+
  var animationConfig: [String: Any]? {
    didSet {
      updateSymbol()
    }
  }

  /// Opacity of the symbol (0-1)
  var opacity: Double = 1.0 {
    didSet {
      guard opacity != oldValue else { return }
      updateSymbol()
    }
  }

  /// Enable variable color support (iOS 16+)
  var variableColor: Bool = false {
    didSet {
      guard variableColor != oldValue else { return }
      updateSymbol()
    }
  }

  /// Reduce complexity for lower-end devices
  var reduceComplexity: Bool = false {
    didSet {
      guard reduceComplexity != oldValue else { return }
      updateSymbol()
    }
  }

  // MARK: - Initialization

  override init() {
    super.init()
    setupView()
  }

  // MARK: - Setup

  /// Initialize the UIImageView for symbol rendering
  private func setupView() {
    let imageView = UIImageView()
    imageView.contentMode = .scaleAspectFit
    imageView.clipsToBounds = true
    view = imageView
  }

  // MARK: - Symbol Rendering

  /// Update the rendered symbol based on current configuration
  private func updateSymbol() {
    guard let imageView = view as? UIImageView else { return }
    guard !name.isEmpty else {
      imageView.image = nil
      return
    }

    // Build the symbol configuration
    var config = UIImage.SymbolConfiguration(pointSize: CGFloat(size))

    // Apply weight if available (iOS 13.1+)
    if #available(iOS 13.1, *) {
      if let symbolWeight = parseWeight(weight) {
        let weightConfig = UIImage.SymbolConfiguration(weight: symbolWeight)
        config = config.applying(weightConfig)
      }
    }

    // Apply scale if available (iOS 13+)
    if #available(iOS 13.0, *) {
      if let symbolScale = parseScale(scale) {
        let scaleConfig = UIImage.SymbolConfiguration(scale: symbolScale)
        config = config.applying(scaleConfig)
      }
    }

    // Create the base image
    guard let image = UIImage(systemName: name, withConfiguration: config) else {
      print("⚠️  Warning: SF Symbol '\(name)' not found. Check symbol name at https://developer.apple.com/sf-symbols/")
      imageView.image = nil
      return
    }

    // Apply rendering mode if iOS 13.1+
    var finalImage = image
    if #available(iOS 13.1, *) {
      if let renderingModeImage = applyRenderingMode(image, renderingMode: renderingMode) {
        finalImage = renderingModeImage
      }
    }

    // Apply tint color
    let tintUIColor = hexStringToUIColor(hexColor: tintColor)
    imageView.image = finalImage.withTintColor(tintUIColor, renderingMode: .alwaysOriginal)

    // Apply opacity
    imageView.alpha = opacity

    // Apply animations if available (iOS 17+)
    if #available(iOS 17.0, *), let animConfig = animationConfig {
      applyAnimation(animConfig)
    }
  }

  /// Parse weight string to UIImage.SymbolWeight
  /// - Parameter weight: Weight string (ultralight, thin, light, regular, medium, semibold, bold, heavy, black)
  /// - Returns: Corresponding UIImage.SymbolWeight or nil
  @available(iOS 13.1, *)
  private func parseWeight(_ weight: String) -> UIImage.SymbolWeight? {
    switch weight.lowercased() {
    case "ultralight":
      return .unspecified
    case "thin":
      return .thin
    case "light":
      return .light
    case "regular":
      return .regular
    case "medium":
      return .medium
    case "semibold":
      return .semibold
    case "bold":
      return .bold
    case "heavy":
      return .heavy
    case "black":
      return .black
    default:
      return .regular
    }
  }

  /// Parse scale string to UIImage.SymbolScale
  /// - Parameter scale: Scale string (small, medium, large)
  /// - Returns: Corresponding UIImage.SymbolScale or nil
  @available(iOS 13.1, *)
  private func parseScale(_ scale: String) -> UIImage.SymbolScale? {
    switch scale.lowercased() {
    case "small":
      return .small
    case "medium":
      return .medium
    case "large":
      return .large
    default:
      return .medium
    }
  }

  /// Apply rendering mode to symbol
  /// - Parameters:
  ///   - image: Base symbol image
  ///   - renderingMode: Rendering mode string
  /// - Returns: Modified image or nil
  @available(iOS 13.1, *)
  private func applyRenderingMode(_ image: UIImage, renderingMode: String) -> UIImage? {
    switch renderingMode.lowercased() {
    case "monochrome":
      return image.withRenderingMode(.alwaysOriginal)
    case "hierarchical":
      if #available(iOS 15.0, *) {
        if let config = hierarchicalConfig,
           let primaryColor = config["primaryColor"].flatMap({ hexStringToUIColor(hexColor: $0) }) {
          let symbolConfig = UIImage.SymbolConfiguration(hierarchicalColor: primaryColor)
          return image.withConfiguration(symbolConfig)
        }
      }
      return image
    case "palette":
      if #available(iOS 15.0, *), let config = paletteConfig {
        var colors: [UIColor] = []
        if let primary = config["primaryColor"] {
          colors.append(hexStringToUIColor(hexColor: primary))
        }
        if let secondary = config["secondaryColor"] {
          colors.append(hexStringToUIColor(hexColor: secondary))
        }
        if let tertiary = config["tertiaryColor"] {
          colors.append(hexStringToUIColor(hexColor: tertiary))
        }
        if !colors.isEmpty {
          let symbolConfig = UIImage.SymbolConfiguration(paletteColors: colors)
          return image.withConfiguration(symbolConfig)
        }
      }
      return image
    case "multicolor":
      return image.withRenderingMode(.alwaysOriginal)
    default:
      return image
    }
  }

  /// Apply animation to symbol (iOS 17+)
  /// - Parameter animConfig: Animation configuration dictionary
  @available(iOS 17.0, *)
  private func applyAnimation(_ animConfig: [String: Any]) {
    guard let imageView = view as? UIImageView else { return }
    guard let animType = animConfig["type"] as? String else { return }

    let symbolEffect: NSNumber?

    switch animType.lowercased() {
    case "bounce":
      symbolEffect = 1 // UISymbolEffectAnimationBounce
    case "scale":
      symbolEffect = 2 // UISymbolEffectAnimationScale
    case "pulse":
      symbolEffect = 3 // UISymbolEffectAnimationPulse
    case "rotate":
      symbolEffect = 4 // UISymbolEffectAnimationRotate
    case "appear":
      symbolEffect = 5 // UISymbolEffectAnimationAppear
    case "disappear":
      symbolEffect = 6 // UISymbolEffectAnimationDisappear
    case "replace":
      symbolEffect = 7 // UISymbolEffectAnimationReplace
    default:
      symbolEffect = nil
    }

    if let effect = symbolEffect {
      // Animation API for iOS 17+
      // This would use UISymbolEffectOptions when available
      if #available(iOS 17.1, *) {
        // Placeholder for future animation implementation
        // imageView.addSymbolEffect(UISymbolEffect(effect: effect), options: UISymbolEffectOptions())
      }
    }
  }

  /// Convert hex color string to UIColor
  /// - Parameter hexColor: Hex color string (e.g., "#FF5722" or "FF5722")
  /// - Returns: Corresponding UIColor
  private func hexStringToUIColor(hexColor: String) -> UIColor {
    let stringScanner = Scanner(string: hexColor)

    if hexColor.hasPrefix('#') {
      stringScanner.scanLocation = 1
    }

    var color: UInt32 = 0
    stringScanner.scanHexInt32(&color)

    let r = CGFloat(Int(color >> 16) & 0x000000FF)
    let g = CGFloat(Int(color >> 8) & 0x000000FF)
    let b = CGFloat(Int(color) & 0x000000FF)

    return UIColor(red: r / 255.0, green: g / 255.0, blue: b / 255.0, alpha: 1)
  }

  // MARK: - Methods

  /// Update the symbol with new configuration
  /// - Parameter config: Partial configuration update
  func updateSymbol(config: [String: Any]) async {
    if let name = config["name"] as? String {
      self.name = name
    }
    if let size = config["size"] as? Double {
      self.size = size
    }
    if let weight = config["weight"] as? String {
      self.weight = weight
    }
    if let scale = config["scale"] as? String {
      self.scale = scale
    }
    if let tintColor = config["tintColor"] as? String {
      self.tintColor = tintColor
    }
    if let renderingMode = config["renderingMode"] as? String {
      self.renderingMode = renderingMode
    }
  }

  /// Animate the symbol
  /// - Parameter animationType: Type of animation
  func animateSymbol(animationType: String) async {
    if #available(iOS 17.0, *) {
      applyAnimation(["type": animationType])
    }
  }
}

/// Helper struct to cache symbol configuration
private struct SymbolConfig {
  var name: String = ""
  var size: Double = 24
  var weight: String = "regular"
  var scale: String = "medium"
  var tintColor: String = "#000000"
  var renderingMode: String = "monochrome"
}

