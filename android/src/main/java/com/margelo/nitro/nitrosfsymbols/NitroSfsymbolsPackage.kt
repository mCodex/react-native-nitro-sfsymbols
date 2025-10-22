package com.margelo.nitro.nitrosfsymbols

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfoProvider
import com.facebook.react.uimanager.ViewManager

import nitrosfsymbols.views.HybridNitroSfsymbolsManager

class NitroSfsymbolsPackage : TurboReactPackage() {
    override fun getModule(name: String, reactContext: ReactApplicationContext): NativeModule? {
        return null
    }

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
        return ReactModuleInfoProvider { HashMap() }
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        return listOf(HybridNitroSfsymbolsManager())
    }

    companion object {
        init {
            System.loadLibrary("nitrosfsymbols")
        }
    }
}
