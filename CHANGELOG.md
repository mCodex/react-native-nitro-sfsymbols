# Changelog

All notable changes to this project will be documented in this file. The
format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] — 2026-04-27

### Highlights

- Aligned with **Nitro Modules 0.35**.
- **Tree-shakable catalog** moved to a subpath export (`react-native-nitro-sfsymbols/icons`).
- **WCAG 2.2 AA-friendly** out of the box.
- **~70% smaller** core bundle, ~60% smaller native side.

### Added

- `fallbackName` prop — render a backup symbol when `name` doesn't resolve.
- `accessibilityAutoLabel` prop — derive a label from the symbol name.
- `allowFontScaling` (default `true`) and `maxFontSizeMultiplier` (default `2`) — Dynamic Type support (WCAG 1.4.4).
- Native iOS 17 `addSymbolEffect` for `bounce`, `pulse`, `scale`, `rotate`, `appear`, `disappear`, `replace`, `variableColor`.
- `minTouchTargetStyle` export — Apple HIG / WCAG 2.5.8 compliant hit-target style.
- `SFSymbolAnimationType` constant.
- Per-configuration `NSCache` for resolved `UIImage`s (8 MB cap).
- 32-entry LRU for hex color parsing.
- Honors **Reduce Motion** (skips animations) and **Increase Contrast** (uses system label color when no tint is set).
- Dedicated `/icons` subpath export.

### Changed

- **Breaking**: enums replaced with `as const` objects (`SFSymbolWeight`, `SFSymbolScale`, `SFSymbolRenderingMode`, `SFSymbolAnimationType`). Member access is identical (`SFSymbolWeight.BOLD`); the type is now a string literal union.
- **Breaking**: `SFIcons` moved to `react-native-nitro-sfsymbols/icons` subpath.
- **Breaking**: hierarchical/palette config keys renamed (`primaryColor` → `primary`, `secondaryColor` → `secondary`, `tertiaryColor` → `tertiary`).
- **Breaking**: minimum iOS version raised to **16.0** (was 13.0).
- **Breaking**: `peerDependencies."react-native-nitro-modules"` now `>= 0.35`.
- Default `tintColor` is now the system label color (was hard-coded `#000000`) — automatic dark-mode and contrast support.
- Property updates are coalesced — multi-prop React renders trigger a single native render pass.

### Removed

- **Breaking**: `SFSymbolTheme` (duplicate of `SFSymbolRenderingMode`).
- **Breaking**: runtime helpers `isValidSFIcon`, `getAllSFIcons`, `camelCaseToSFSymbol`, `searchSFIcon`.
- **Breaking**: utility module (`isValidColor`, `normalizeColor`, `clampOpacity`, `validateConfig`, `applyDefaults`, `optimizeProps`, `createHierarchicalConfig`, `createPaletteConfig`, `dimensionToSymbolSize`, `getPresetSize`).
- `SF_SYMBOL_DEFAULTS` constant (defaults are documented per-prop).

### Fixed

- **iOS**: `parseWeight("ultralight")` previously returned `.unspecified` — now correctly returns `.ultraLight`.
- **iOS**: `opacity` prop is now actually applied to the view (was a silent no-op).
- **iOS**: replaced deprecated `Scanner.scanLocation` / `scanHexInt32` with `scanHexInt64`.
- **iOS**: 3-character hex colors (`#F00`) are now parsed correctly.
- **JS**: removed broken `useMemo(_, [props])` — memoization now keys on primitive deps only.
- **Android**: replaced 290 LOC of per-prop log spam with a single first-call warning.
