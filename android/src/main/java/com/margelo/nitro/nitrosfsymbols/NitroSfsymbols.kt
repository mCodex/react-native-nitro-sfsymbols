package com.margelo.nitro.nitrosfsymbols

import android.view.View
import android.widget.FrameLayout
import android.widget.TextView
import android.graphics.Color
import com.facebook.proguard.annotations.DoNotStrip
import com.facebook.react.uimanager.ThemedReactContext
import com.margelo.nitro.core.Promise

/**
 * HybridNitroSfsymbols - Android Stub Implementation
 *
 * ⚠️  IMPORTANT: SF Symbols are exclusive to Apple's iOS platform and are not available on Android.
 *
 * This is a STUB implementation that prevents the application from crashing on Android.
 * It renders a placeholder view instead of SF Symbols.
 *
 * According to Apple's licensing and design guidelines:
 * - SF Symbols can only be used on Apple platforms (iOS, macOS, watchOS, tvOS)
 * - The SF Symbols font and rendering engine are proprietary to Apple
 * - Using SF Symbols outside Apple's ecosystem violates the SF Symbols license agreement
 *
 * For Android, we recommend:
 * 1. Using Material Design Icons (https://fonts.google.com/icons)
 * 2. Using other open-source icon libraries
 * 3. Creating your own icon set for Android
 * 4. Using platform-specific implementations with feature detection
 *
 * Example of platform-specific approach:
 * ```tsx
 * import { Platform } from 'react-native';
 * import { SFSymbolView, SFIcons } from 'react-native-nitro-sfsymbols';
 * import { MaterialIcon } from 'your-material-icons-library';
 *
 * if (Platform.OS === 'ios') {
 *   return <SFSymbolView name={SFIcons.HEART_FILL} />;
 * } else {
 *   return <MaterialIcon name="favorite" />;
 * }
 * ```
 *
 * @class HybridNitroSfsymbols
 */
@DoNotStrip
class HybridNitroSfsymbols(val context: ThemedReactContext) : HybridNitroSfsymbolsSpec() {

  // MARK: - Properties

  /// The main placeholder view (since SF Symbols are iOS-exclusive)
  override val view: View = createPlaceholderView()

  /// Placeholder for symbol name (not used on Android)
  private var _name: String = ""

  /// Placeholder for symbol size (not used on Android)
  private var _size: Double? = 24.0

  /// Placeholder for symbol weight (not used on Android)
  private var _weight: String? = "regular"

  /// Placeholder for symbol scale (not used on Android)
  private var _scale: String? = "medium"

  /// Placeholder for symbol tint color
  private var _tintColor: String? = "#000000"

  /// Placeholder for rendering mode (not used on Android)
  private var _renderingMode: String? = "monochrome"

  /// Placeholder for hierarchical config (not used on Android)
  private var _hierarchicalConfig: Map<String, String>? = null

  /// Placeholder for palette config (not used on Android)
  private var _paletteConfig: Map<String, String>? = null

  /// Placeholder for animation config (not used on Android)
  private var _animationConfig: Map<String, String>? = null

  /// Placeholder for opacity (not used on Android)
  private var _opacity: Double? = 1.0

  /// Placeholder for variable color flag (not used on Android)
  private var _variableColor: Boolean? = false

  /// Placeholder for reduce complexity flag (not used on Android)
  private var _reduceComplexity: Boolean? = false

  // MARK: - Props

  /**
   * Symbol name property (stub - not functional on Android)
   * For Android, use Material Design Icons or another cross-platform icon library
   */
  override var name: String
    get() = _name
    set(value) {
      _name = value
      logWarning("Symbol name \"$value\" set on Android (SF Symbols not available)")
    }

  /**
   * Symbol size property (stub - not functional on Android)
   */
  override var size: Double?
    get() = _size
    set(value) {
      _size = value
      logWarning("Symbol size set on Android (SF Symbols not available)")
    }

  /**
   * Symbol weight property (stub - not functional on Android)
   */
  override var weight: String?
    get() = _weight
    set(value) {
      _weight = value
      logWarning("Symbol weight \"$value\" set on Android (SF Symbols not available)")
    }

  /**
   * Symbol scale property (stub - not functional on Android)
   */
  override var scale: String?
    get() = _scale
    set(value) {
      _scale = value
      logWarning("Symbol scale \"$value\" set on Android (SF Symbols not available)")
    }

  /**
   * Tint color property (applied to placeholder background)
   */
  override var tintColor: String?
    get() = _tintColor
    set(value) {
      _tintColor = value
      if (value != null) {
        updatePlaceholderColor(value)
      }
    }

  /**
   * Rendering mode property (stub - not functional on Android)
   */
  override var renderingMode: String?
    get() = _renderingMode
    set(value) {
      _renderingMode = value
      logWarning("Rendering mode \"$value\" set on Android (SF Symbols not available)")
    }

  /**
   * Hierarchical config property (stub - not functional on Android)
   */
  override var hierarchicalConfig: Map<String, String>?
    get() = _hierarchicalConfig
    set(value) {
      _hierarchicalConfig = value
      logWarning("Hierarchical config set on Android (SF Symbols not available)")
    }

  /**
   * Palette config property (stub - not functional on Android)
   */
  override var paletteConfig: Map<String, String>?
    get() = _paletteConfig
    set(value) {
      _paletteConfig = value
      logWarning("Palette config set on Android (SF Symbols not available)")
    }

  /**
   * Animation config property (stub - not functional on Android)
   */
  override var animationConfig: Map<String, String>?
    get() = _animationConfig
    set(value) {
      _animationConfig = value
      logWarning("Animation config set on Android (SF Symbols not available)")
    }

  /**
   * Opacity property (stub - not functional on Android)
   */
  override var opacity: Double?
    get() = _opacity
    set(value) {
      _opacity = value
      logWarning("Opacity set on Android (SF Symbols not available)")
    }

  /**
   * Variable color property (stub - not functional on Android)
   */
  override var variableColor: Boolean?
    get() = _variableColor
    set(value) {
      _variableColor = value
      logWarning("Variable color set on Android (SF Symbols not available)")
    }

  /**
   * Reduce complexity property (stub - not functional on Android)
   */
  override var reduceComplexity: Boolean?
    get() = _reduceComplexity
    set(value) {
      _reduceComplexity = value
      logWarning("Reduce complexity set on Android (SF Symbols not available)")
    }

  // MARK: - Methods

  /**
   * Update symbol method (stub - not functional on Android)
   * This method is called when symbol configuration changes
   */
  override fun updateSymbol(config: Map<String, String>): Promise<Unit> {
    return Promise.async {
      logWarning("updateSymbol() called on Android (SF Symbols not available)")
    }
  }

  /**
   * Animate symbol method (stub - not functional on Android)
   * This method would animate the symbol on iOS
   */
  override fun animateSymbol(animationType: String): Promise<Unit> {
    return Promise.async {
      logWarning("animateSymbol() called on Android (SF Symbols not available)")
    }
  }

  // MARK: - Private Helpers

  /**
   * Create a placeholder view for Android
   * Shows a simple container with a message indicating SF Symbols unavailability
   */
  private fun createPlaceholderView(): View {
    val container = FrameLayout(context)
    container.setBackgroundColor(Color.parseColor("#E8E8E8"))

    val textView = TextView(context)
    textView.text = "⚠️ SF Symbols\n(iOS only)"
    textView.textSize = 12f
    textView.setTextColor(Color.parseColor("#666666"))
    textView.gravity = android.view.Gravity.CENTER
    textView.setPadding(8, 8, 8, 8)

    container.addView(
      textView,
      FrameLayout.LayoutParams(
        FrameLayout.LayoutParams.MATCH_PARENT,
        FrameLayout.LayoutParams.MATCH_PARENT
      )
    )

    return container
  }

  /**
   * Update placeholder background color
   */
  private fun updatePlaceholderColor(hexColor: String) {
    try {
      val color = Color.parseColor(hexColor)
      view.setBackgroundColor(color)
    } catch (e: Exception) {
      logWarning("Invalid color format: $hexColor")
    }
  }

  /**
   * Log warning message for development
   * These warnings help developers identify that SF Symbols are not available on Android
   */
  private fun logWarning(message: String) {
    android.util.Log.w(
      "SFSymbols-Android",
      "⚠️  $message. " +
        "SF Symbols are exclusive to iOS. " +
        "Use Material Design Icons or another icon library for Android. " +
        "See: https://fonts.google.com/icons"
    )
  }
}

