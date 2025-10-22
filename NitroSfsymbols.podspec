require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "NitroSfsymbols"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { 
    :ios => "13.0",
    :macos => "11.0",
    :tvos => "13.0",
    :visionos => "1.0"
  }
  s.source       = { :git => "https://github.com/mCodex/react-native-nitro-sfsymbols.git", :tag => "#{s.version}" }

  s.source_files = "ios/**/*.{h,m,mm,swift}"

  s.source_files = [
    "ios/**/*.{swift}",
    "ios/**/*.{m,mm}",
    "cpp/**/*.{hpp,cpp}",
  ]

  s.dependency 'React-jsi'
  s.dependency 'React-callinvoker'

  load 'nitrogen/generated/ios/NitroSfsymbols+autolinking.rb'
  add_nitrogen_files(s)

  install_modules_dependencies(s)
end
