package com.margelo.nitro.nitrosfsymbols

import com.facebook.react.BaseReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider
import com.facebook.react.uimanager.ViewManager

import com.margelo.nitro.nitrosfsymbols.views.HybridNitroSfsymbolsManager

class NitroSfsymbolsPackage : BaseReactPackage() {
    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        return listOf(HybridNitroSfsymbolsManager())
    }

    override fun getModule(
        name: String,
        reactContext: ReactApplicationContext,
    ): NativeModule? = null

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
        return ReactModuleInfoProvider { mutableMapOf<String, ReactModuleInfo>() }
    }

    companion object {
        init {
            System.loadLibrary("nitrosfsymbols")
        }
    }
}
