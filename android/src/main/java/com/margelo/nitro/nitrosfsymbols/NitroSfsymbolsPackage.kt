package com.margelo.nitro.nitrosfsymbols

import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager

import com.margelo.nitro.nitrosfsymbols.views.HybridNitroSfsymbolsManager

class NitroSfsymbolsPackage : BaseReactPackage() {
    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        return listOf(HybridNitroSfsymbolsManager())
    }

    companion object {
        init {
            System.loadLibrary("nitrosfsymbols")
        }
    }
}
