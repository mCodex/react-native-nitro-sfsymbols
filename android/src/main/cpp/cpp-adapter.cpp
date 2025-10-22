#include <jni.h>
#include "nitrosfsymbolsOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::nitrosfsymbols::initialize(vm);
}
