package com.margelo.nitro.nitrosfsymbols

import android.view.View
import com.facebook.proguard.annotations.DoNotStrip
import com.facebook.react.uimanager.ThemedReactContext
import java.util.concurrent.atomic.AtomicBoolean

/**
 * Android stub for `<SFSymbolView />`.
 *
 * SF Symbols are an Apple-only design system; on Android the component renders
 * an empty, zero-cost [View]. Pair `<SFSymbolView />` with a platform-specific
 * fallback (e.g. Material Symbols or `react-native-vector-icons`).
 *
 * The stub logs a single warning the first time it's instantiated to flag
 * misuse without spamming logcat.
 */
@DoNotStrip
class HybridNitroSfsymbols(val context: ThemedReactContext) : HybridNitroSfsymbolsSpec() {

  override val view: View = View(context)

  init {
    if (warned.compareAndSet(false, true)) {
      android.util.Log.w(
        "NitroSfsymbols",
        "SF Symbols are not available on Android. <SFSymbolView /> renders an empty placeholder. " +
          "Use a platform-specific icon library for Android (e.g. Material Symbols)."
      )
    }
  }

  override var symbolName: String = ""
  override var fallbackName: String? = null
  override var size: Double? = null
  override var weight: String? = null
  override var scale: String? = null
  override var tintColor: String? = null
  override var renderingMode: String? = null
  override var hierarchicalConfig: Map<String, String>? = null
  override var paletteConfig: Map<String, String>? = null
  override var animationConfig: Map<String, String>? = null
  override var opacity: Double? = null
  override var variableColor: Boolean? = null

  companion object {
    private val warned = AtomicBoolean(false)
  }
}
