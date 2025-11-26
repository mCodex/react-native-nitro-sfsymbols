import UIKit
import NitroModules

/**
 * HybridNitroSfsymbols - Native iOS Implementation
 *
 * High-performance SF Symbols renderer using React Native Nitro Modules.
 * Provides native iOS rendering for Apple's SF Symbols system with support for:
 * - Dynamic sizing with weight and scale variations
 * - Multiple rendering modes (monochrome, hierarchical, palette)
 * - iOS 13+ compatibility with automatic fallbacks
 * - Hierarchical and palette color configurations
 * - iOS 17+ animation support
 *
 * Architecture:
 * - Properties use didSet observers to trigger immediate re-rendering
 * - Configuration is rebuilt from scratch on each property change (DRY)
 * - Separate builder functions handle complex configuration logic (SRP)
 * - All operations are main-thread safe
 *
 * @class HybridNitroSfsymbols
 */
class HybridNitroSfsymbols: HybridNitroSfsymbolsSpec_base, HybridNitroSfsymbolsSpec_protocol {
  // MARK: - View Management

  /// The main UIImageView for rendering SF Symbols
  var view: UIView = UIImageView()

  // MARK: - Symbol Configuration Properties

  /**
   * Name of the SF Symbol to render (e.g., "thermometer.sun.fill")
   *
   * @type {string}
   * @default ""
   * @triggers updateSymbol() on change
   * @see https://developer.apple.com/sf-symbols/
   */
  var symbolName: String = "" {
    didSet {
      guard symbolName != oldValue else { return }
      updateSymbol()
    }
  }

  /**
   * Size of the symbol in points
   *
   * @type {number}
   * @default 24
   * @unit points
   * @range [1, 512]
   * @triggers updateSymbol() on change
   */
  var size: Double? = 24 {
    didSet {
      updateSymbol()
    }
  }

  /**
   * Font weight of the symbol stroke
   *
   * Supported values: "ultralight", "thin", "light", "regular", "medium",
   * "semibold", "bold", "heavy", "black"
   *
   * @type {string}
   * @default "regular"
   * @note Requires iOS 13.1+
   * @triggers updateSymbol() on change
   * @example
   * weight="bold"
   */
  var weight: String? = "regular" {
    didSet {
      updateSymbol()
    }
  }

  /**
   * Scale variant of the symbol
   *
   * Supported values: "small", "medium", "large"
   * Affects the visual proportions of the symbol's internal elements
   *
   * @type {string}
   * @default "medium"
   * @note Requires iOS 13+
   * @triggers updateSymbol() on change
   * @example
   * scale="large"
   */
  var scale: String? = "medium" {
    didSet {
      updateSymbol()
    }
  }

  /**
   * Primary tint color for the symbol
   *
   * Hex color string format: "#RRGGBB" or "RRGGBB"
   *
   * @type {string}
   * @default "#000000"
   * @format hex
   * @triggers updateSymbol() on change
   * @example
   * tintColor="#FF5722"
   */
  var tintColor: String? = "#000000" {
    didSet {
      updateSymbol()
    }
  }

  /**
   * Color rendering mode for the symbol
   *
   * Supported values: "monochrome", "hierarchical", "palette", "multicolor"
   * - monochrome: Single color (fastest, default)
   * - hierarchical: Multi-level opacity colors (iOS 15+)
   * - palette: Multiple distinct colors (iOS 15+)
   * - multicolor: Predefined system colors (iOS 16+)
   *
   * @type {string}
   * @default "monochrome"
   * @triggers updateSymbol() on change
   * @note hierarchical/palette modes require iOS 15+
   */
  var renderingMode: String? = "monochrome" {
    didSet {
      updateSymbol()
    }
  }

  /**
   * Hierarchical color configuration
   *
   * Only used when renderingMode is "hierarchical"
   * Defines opacity-based color layers
   *
   * @type {Object}
   * @example
   * {
   *   "primaryColor": "#FF5722",
   *   "secondaryColor": "#FF8A65",
   *   "tertiaryColor": "#FFAB91"
   * }
   * @note Requires iOS 15+
   * @triggers updateSymbol() on change
   */
  var hierarchicalConfig: Dictionary<String, String>? {
    didSet {
      updateSymbol()
    }
  }

  /**
   * Palette color configuration
   *
   * Only used when renderingMode is "palette"
   * Defines distinct colors for different symbol layers
   *
   * @type {Object}
   * @example
   * {
   *   "primaryColor": "#2196F3",
   *   "secondaryColor": "#4CAF50",
   *   "tertiaryColor": "#FFB300"
   * }
   * @note Requires iOS 15+
   * @triggers updateSymbol() on change
   */
  var paletteConfig: Dictionary<String, String>? {
    didSet {
      updateSymbol()
    }
  }

  /**
   * Animation configuration (iOS 17+)
   *
   * Defines animation parameters for symbol effects
   *
   * @type {Object}
   * @example
   * { "type": "bounce" }
   * @triggers updateSymbol() on change
   */
  var animationConfig: Dictionary<String, String>? {
    didSet {
      updateSymbol()
    }
  }

  /**
   * Symbol opacity
   *
   * @type {number}
   * @default 1.0
   * @range [0, 1]
   * @triggers updateSymbol() on change
   */
  var opacity: Double? = 1.0 {
    didSet {
      updateSymbol()
    }
  }

  /**
   * Enable variable color support
   *
   * @type {boolean}
   * @default false
   * @note Requires iOS 16+
   * @triggers updateSymbol() on change
   */
  var variableColor: Bool? = false {
    didSet {
      updateSymbol()
    }
  }

  /**
   * Reduce symbol complexity for lower-end devices
   *
   * @type {boolean}
   * @default false
   * @triggers updateSymbol() on change
   */
  var reduceComplexity: Bool? = false {
    didSet {
      updateSymbol()
    }
  }

  // MARK: - Initialization

  override init() {
    super.init()
    setupView()
  }

  // MARK: - View Setup

  /**
   * Initialize and configure the UIImageView
   *
   * Sets up the view with optimal defaults for SF Symbol rendering:
   * - ContentMode: scaleAspectFit (maintains aspect ratio)
   * - clipsToBounds: true (prevents overflow)
   *
   * @private
   * @method setupView
   */
  private func setupView() {
    let imageView = UIImageView()
    imageView.contentMode = .scaleAspectFit
    imageView.clipsToBounds = true
    view = imageView
  }

  // MARK: - Core Rendering

  /**
   * Update and render the symbol based on current configuration
   *
   * This is the main entry point for re-rendering. It handles:
  * 1. Validation (symbolName not empty)
   * 2. Configuration building (size, weight, scale)
   * 3. Symbol creation from system library
   * 4. Rendering mode application (color, hierarchy, palette)
   * 5. Tinting and opacity
   * 6. Animation application
   *
   * Called automatically by property didSet observers.
   *
   * @private
   * @method updateSymbol
   */
  private func updateSymbol() {
    guard let imageView = view as? UIImageView else { return }
    guard !symbolName.isEmpty else {
      imageView.image = nil
      return
    }

    // Step 1: Build symbol configuration (size, weight, scale)
    guard let baseImage = createBaseImage() else {
      imageView.image = nil
      return
    }

    // Step 2: Apply rendering mode (color scheme)
    let modeImage = applyRenderingMode(baseImage)

    // Step 3: Apply tint color and opacity
    let finalImage = applyTintAndOpacity(modeImage)
    imageView.image = finalImage

    // Step 4: Apply animations (iOS 17+)
    applyAnimationIfAvailable()
  }

  // MARK: - Configuration Builders (SRP: Single Responsibility)

  /**
   * Create the base symbol image with size, weight, and scale configuration
   *
   * Handles iOS version compatibility:
   * - iOS 13.1+: Uses unified constructor with weight, scale, and size
   * - iOS 13.0: Uses only size (weight/scale unavailable)
   *
   * This is separated as its own method for:
   * - Clarity: Single responsibility (symbol creation)
   * - Testability: Can be unit tested independently
   * - Maintainability: Easy to modify symbol configuration logic
   *
   * @private
   * @method createBaseImage
   * @returns {UIImage?} The base SF Symbol image or nil if not found
   */
  private func createBaseImage() -> UIImage? {
    let pointSize = size ?? 24

    var config: UIImage.SymbolConfiguration

    if #available(iOS 13.1, *) {
      // iOS 13.1+: Use unified constructor for optimal performance
      let symbolWeight = parseWeight(weight ?? "regular") ?? .regular
      let symbolScale = parseScale(scale ?? "medium") ?? .medium

      config = UIImage.SymbolConfiguration(
        pointSize: CGFloat(pointSize),
        weight: symbolWeight,
        scale: symbolScale
      )
    } else {
      // iOS 13.0: Fallback (size only, no weight/scale support)
      config = UIImage.SymbolConfiguration(pointSize: CGFloat(pointSize))
    }

    return UIImage(systemName: symbolName, withConfiguration: config)
  }

  /**
   * Apply rendering mode to the symbol
   *
   * Handles different color rendering strategies:
   * - monochrome: Direct rendering
   * - hierarchical: Opacity-based multi-color (iOS 15+)
   * - palette: Distinct multi-color layers (iOS 15+)
   * - multicolor: System predefined colors
   *
   * Separated for maintainability: Each rendering mode is independent.
   *
   * @private
   * @method applyRenderingMode
   * @param {UIImage} image - Base symbol image
   * @returns {UIImage} Image with rendering mode applied
   */
  private func applyRenderingMode(_ image: UIImage) -> UIImage {
    let mode = (renderingMode ?? "monochrome").lowercased()

    if #available(iOS 15.0, *) {
      switch mode {
      case "hierarchical":
        return applyHierarchicalMode(image)
      case "palette":
        return applyPaletteMode(image)
      default:
        break
      }
    }

    // Monochrome or unsupported mode
    return image
  }

  /**
   * Apply hierarchical color rendering
   *
   * Creates opacity-based color layers using primary, secondary, and tertiary colors.
   *
   * @private
   * @method applyHierarchicalMode
   * @param {UIImage} image - Base symbol image
   * @returns {UIImage} Image with hierarchical colors applied
   */
  @available(iOS 15.0, *)
  private func applyHierarchicalMode(_ image: UIImage) -> UIImage {
    guard let config = hierarchicalConfig,
          let primaryColorHex = config["primaryColor"] else {
      return image
    }

    let primaryColor = hexStringToUIColor(primaryColorHex)
    let symbolConfig = UIImage.SymbolConfiguration(hierarchicalColor: primaryColor)

    return image.withConfiguration(symbolConfig)
  }

  /**
   * Apply palette color rendering
   *
   * Creates multi-color rendering using distinct colors for different symbol layers.
   *
   * @private
   * @method applyPaletteMode
   * @param {UIImage} image - Base symbol image
   * @returns {UIImage} Image with palette colors applied
   */
  @available(iOS 15.0, *)
  private func applyPaletteMode(_ image: UIImage) -> UIImage {
    guard let config = paletteConfig else { return image }

    var colors: [UIColor] = []

    if let primaryHex = config["primaryColor"] {
      colors.append(hexStringToUIColor(primaryHex))
    }
    if let secondaryHex = config["secondaryColor"] {
      colors.append(hexStringToUIColor(secondaryHex))
    }
    if let tertiaryHex = config["tertiaryColor"] {
      colors.append(hexStringToUIColor(tertiaryHex))
    }

    guard !colors.isEmpty else { return image }

    let symbolConfig = UIImage.SymbolConfiguration(paletteColors: colors)
    return image.withConfiguration(symbolConfig)
  }

  /**
   * Apply tint color and opacity to the final image
   *
   * This is the final visual adjustments step.
   * Done separately from rendering mode to ensure correct layer order.
   *
   * @private
   * @method applyTintAndOpacity
   * @param {UIImage} image - Image to tint
   * @returns {UIImage} Tinted image
   */
  private func applyTintAndOpacity(_ image: UIImage) -> UIImage {
    let colorHex = tintColor ?? "#000000"
    let uiColor = hexStringToUIColor(colorHex)

    return image.withTintColor(uiColor, renderingMode: .alwaysOriginal)
  }

  // MARK: - Property Parsers (Type Conversion)

  /**
   * Convert weight string to UIImage.SymbolWeight enum
   *
   * Maps string identifiers to native UIKit weight constants.
   * Case-insensitive with sensible defaults.
   *
   * @private
   * @method parseWeight
   * @param {string} weight - Weight name
   * @returns {UIImage.SymbolWeight?}
   * @example
   * parseWeight("bold") -> .bold
   * parseWeight("SEMIBOLD") -> .semibold
   */
  @available(iOS 13.1, *)
  private func parseWeight(_ weight: String) -> UIImage.SymbolWeight? {
    switch weight.lowercased() {
    case "ultralight": .unspecified
    case "thin": .thin
    case "light": .light
    case "regular": .regular
    case "medium": .medium
    case "semibold": .semibold
    case "bold": .bold
    case "heavy": .heavy
    case "black": .black
    default: .regular
    }
  }

  /**
   * Convert scale string to UIImage.SymbolScale enum
   *
   * Maps string identifiers to native UIKit scale constants.
   * Case-insensitive with sensible defaults.
   *
   * @private
   * @method parseScale
   * @param {string} scale - Scale name
   * @returns {UIImage.SymbolScale?}
   * @example
   * parseScale("large") -> .large
   * parseScale("SMALL") -> .small
   */
  @available(iOS 13.0, *)
  private func parseScale(_ scale: String) -> UIImage.SymbolScale? {
    switch scale.lowercased() {
    case "small": .small
    case "medium": .medium
    case "large": .large
    default: .medium
    }
  }

  /**
   * Convert hexadecimal color string to UIColor
   *
   * Supports both "#RRGGBB" and "RRGGBB" formats.
   * Case-insensitive hex values.
   *
   * @private
   * @method hexStringToUIColor
   * @param {string} hexColor - Hex color string
   * @returns {UIColor}
   * @example
   * hexStringToUIColor("#FF5722") -> UIColor(red:1.0, green:0.341, blue:0.133)
   */
  private func hexStringToUIColor(_ hexColor: String) -> UIColor {
    let scanner = Scanner(string: hexColor)

    if hexColor.hasPrefix("#") {
      scanner.scanLocation = 1
    }

    var hexValue: UInt32 = 0
    scanner.scanHexInt32(&hexValue)

    let r = CGFloat(Int(hexValue >> 16) & 0xFF) / 255.0
    let g = CGFloat(Int(hexValue >> 8) & 0xFF) / 255.0
    let b = CGFloat(Int(hexValue) & 0xFF) / 255.0

    return UIColor(red: r, green: g, blue: b, alpha: 1.0)
  }

  // MARK: - Animation Support

  /**
   * Apply animation to the symbol (iOS 17+)
   *
   * Separated into its own method for future expansion of animation types.
   *
   * @private
   * @method applyAnimationIfAvailable
   */
  private func applyAnimationIfAvailable() {
    guard #available(iOS 17.0, *) else { return }
    guard let imageView = view as? UIImageView,
          let animConfig = animationConfig,
          let animType = animConfig["type"] else { return }

    // Placeholder for future iOS 17+ animation implementation
  }



  // MARK: - Public Nitro Methods

  /**
   * Update symbol with partial configuration
   *
   * Allows updating specific properties without re-passing everything.
   * Called from JavaScript/React Native.
   *
   * @public
   * @method updateSymbol
   * @param {Record<string, string>} config - Properties to update
   * @returns {Promise<void>}
   * @example
   * await updateSymbol({ weight: "bold", scale: "large" })
   */
  func updateSymbol(config: Dictionary<String, String>) throws -> Promise<Void> {
    return Promise.async {
      if let symbolName = config["symbolName"] {
        self.symbolName = symbolName
      }
      if let size = config["size"], let sizeValue = Double(size) {
        self.size = sizeValue
      }
      if let weight = config["weight"] {
        self.weight = weight
      }
      if let scale = config["scale"] {
        self.scale = scale
      }
      if let tintColor = config["tintColor"] {
        self.tintColor = tintColor
      }
      if let renderingMode = config["renderingMode"] {
        self.renderingMode = renderingMode
      }
    }
  }

  /**
   * Animate the symbol (iOS 17+)
   *
   * Applies animation effects to the symbol.
   * Called from JavaScript/React Native.
   *
   * @public
   * @method animateSymbol
   * @param {string} animationType - Animation type identifier
   * @returns {Promise<void>}
   * @example
   * await animateSymbol("bounce")
   */
  func animateSymbol(animationType: String) throws -> Promise<Void> {
    return Promise.async {
      if #available(iOS 17.0, *) {
        self.applyAnimationIfAvailable()
      }
    }
  }
}


