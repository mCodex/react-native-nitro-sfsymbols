<div align="center">

# react-native-nitro-sfsymbols ✨

> 🍎 Render Apple **SF Symbols** natively in React Native via [Nitro Modules](https://nitro.margelo.com/). Type-safe, accessible, tree-shakable.

[![npm](https://img.shields.io/npm/v/react-native-nitro-sfsymbols)](https://www.npmjs.com/package/react-native-nitro-sfsymbols)
[![npm downloads](https://img.shields.io/npm/dm/react-native-nitro-sfsymbols)](https://www.npmjs.com/package/react-native-nitro-sfsymbols)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-6-blue.svg)](https://www.typescriptlang.org/)
[![Nitro Modules](https://img.shields.io/badge/Nitro-0.35-purple.svg)](https://nitro.margelo.com/)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](./CONTRIBUTING.md)

</div>

---

## 📚 Table of Contents

- [✨ Highlights](#-highlights)
- [📦 Install](#-install)
- [🚀 Usage](#-usage)
- [♿ Accessibility](#-accessibility)
- [📖 API](#-api)
- [⏫ Migrating from 1.x](#-migrating-from-1x)
- [⚡ Performance notes](#-performance-notes)
- [🤝 Contributing](#-contributing)
- [💬 Support](#-support)
- [🙏 Acknowledgments](#-acknowledgments)
- [📄 License](#-license)

---

## ✨ Highlights

- 🎯 **Native rendering** through `UIImage(systemName:)` — no bridge overhead.
- 🎨 **All four rendering modes**: monochrome, hierarchical, palette, multicolor.
- 💫 **iOS 17+ symbol effects**: `bounce`, `pulse`, `scale`, `rotate`, `appear`, `disappear`, `replace`, `variableColor`.
- 🚀 **Per-instance image cache** keeps list scrolling allocation-free.
- 🌳 **Tree-shakable**: the icon catalog is opt-in via a subpath export — the core ships at ~1.5 KB.
- ♿ **WCAG 2.2 AA-friendly**: decorative-by-default, Dynamic Type support, Reduce Motion respected, *Increase Contrast* aware.
- 🛡️ **Strict TypeScript 6**: literal-union types, `as const` constants, full IDE autocomplete.

| Platform | Support | Minimum |
|----------|---------|---------|
| 🍎 iOS | full | 16.0 |
| 💻 macOS / 📺 tvOS / 🥽 visionOS | full | latest |
| 🤖 Android | empty placeholder (logs a single warning) | — |

---

## 📦 Install

```bash
yarn add react-native-nitro-sfsymbols react-native-nitro-modules
cd ios && pod install
```

> ℹ️ `react-native-nitro-modules >= 0.35` is required.

---

## 🚀 Usage

```tsx
import { SFSymbolView, SFSymbolWeight } from 'react-native-nitro-sfsymbols';

export function FavoriteButton({ active }: { active: boolean }) {
  return (
    <SFSymbolView
      name={active ? 'heart.fill' : 'heart'}
      size={28}
      weight={SFSymbolWeight.SEMIBOLD}
      tintColor={active ? '#FF3B30' : '#8E8E93'}
      animation={active ? { type: 'bounce' } : undefined}
      accessibilityLabel={active ? 'Remove favorite' : 'Add favorite'}
      accessibilityRole="button"
    />
  );
}
```

### 📂 Optional curated catalog

For autocomplete on the most-used symbols, import from the `/icons` subpath:

```tsx
import { SFIcons } from 'react-native-nitro-sfsymbols/icons';

<SFSymbolView name={SFIcons.HEART_FILL} />;
```

The catalog is **opt-in** — consumers who pass arbitrary strings pay zero
catalog cost in their bundle.

### 🎨 Hierarchical / palette colors

```tsx
<SFSymbolView
  name="cloud.sun.fill"
  renderingMode="hierarchical"
  hierarchical={{ primary: '#FFB300' }}
/>

<SFSymbolView
  name="cloud.bolt.rain.fill"
  renderingMode="palette"
  palette={{ primary: '#2196F3', secondary: '#FFB300', tertiary: '#90CAF9' }}
/>
```

### 💫 Animations (iOS 17+)

```tsx
<SFSymbolView name="bell.fill" animation={{ type: 'bounce', repeating: false }} />
```

> 🧘 Animations are silently skipped when **Reduce Motion** is enabled (WCAG 2.3.3).

---

## ♿ Accessibility

`SFSymbolView` is **decorative by default** — without an `accessibilityLabel`
it's hidden from VoiceOver and TalkBack (WCAG 1.1.1 Non-text Content). Pass
either of:

- `accessibilityLabel="Add to favorites"` — explicit label.
- `accessibilityAutoLabel` — derive a label from the symbol name (`"heart.fill"` → `"Heart"`).

For icon-only pressables, spread `minTouchTargetStyle` onto the wrapping
`Pressable` to meet Apple HIG / WCAG 2.5.8 (minimum 44×44 hit area):

```tsx
import { Pressable } from 'react-native';
import { SFSymbolView, minTouchTargetStyle } from 'react-native-nitro-sfsymbols';

<Pressable style={minTouchTargetStyle} onPress={onTap}>
  <SFSymbolView name="ellipsis" accessibilityLabel="More options" accessibilityRole="button" />
</Pressable>;
```

`size` honors the user's Dynamic Type setting by default (capped at 2× via
`maxFontSizeMultiplier`). When the user enables *Increase Contrast*, an
omitted `tintColor` falls back to the system label color for guaranteed
contrast.

---

## 📖 API

| Prop | Type | Default |
|------|------|---------|
| `name` | `string` (or `SFIcon` from `/icons`) | required |
| `fallbackName` | `string` | `undefined` |
| `size` | `number` | `24` |
| `weight` | `SFSymbolWeight` | `'regular'` |
| `scale` | `SFSymbolScale` | `'medium'` |
| `tintColor` | `string` (hex `#RRGGBB` / `#RGB` / `#RRGGBBAA`) | system label |
| `renderingMode` | `SFSymbolRenderingMode` | `'monochrome'` |
| `hierarchical` | `{ primary; secondary?; tertiary? }` | — |
| `palette` | `{ primary; secondary?; tertiary? }` | — |
| `animation` | `{ type; repeating? }` | — |
| `opacity` | `number` (`0`–`1`) | `1` |
| `allowFontScaling` | `boolean` | `true` |
| `maxFontSizeMultiplier` | `number` | `2` |
| `accessibilityAutoLabel` | `boolean` | `false` |

Standard `accessibilityLabel`, `accessibilityHint`, `accessibilityRole`,
`testID`, `style`, etc. are forwarded.

---

## ⏫ Migrating from 1.x

1. **Bump `react-native-nitro-modules` to `>= 0.35`.**
2. **Imports**: `SFIcons` moved to a subpath:
   ```diff
   - import { SFIcons } from 'react-native-nitro-sfsymbols';
   + import { SFIcons } from 'react-native-nitro-sfsymbols/icons';
   ```
3. **Removed runtime helpers** (use the constants directly):
   - `isValidSFIcon`, `getAllSFIcons`, `camelCaseToSFSymbol`, `searchSFIcon`
   - `isValidColor`, `normalizeColor`, `clampOpacity`, `validateConfig`,
     `applyDefaults`, `optimizeProps`, `createHierarchicalConfig`,
     `createPaletteConfig`, `dimensionToSymbolSize`, `getPresetSize`
4. **Constants are now plain objects** (no longer `enum`s). Member access is
   identical (`SFSymbolWeight.BOLD`); the type is a string-literal union.
5. **Color config keys**: `primaryColor` → `primary`, `secondaryColor` → `secondary`, etc.
   ```diff
   - hierarchical={{ primaryColor: '#FF5722' }}
   + hierarchical={{ primary: '#FF5722' }}
   ```
6. **`SFSymbolTheme`** was a duplicate of `SFSymbolRenderingMode` — removed. Use `SFSymbolRenderingMode`.
7. **`tintColor` is now `string`** (hex). Pass `'#RRGGBB'`, `'#RGB'`, or `'#RRGGBBAA'`. Numeric/`processColor` values were silently dropped before — switching to a string keeps the type honest.
8. **`variableColor` boolean prop removed**. Use `animation={{ type: 'variableColor' }}` instead, which is the actual iOS 17+ symbol effect.
9. **The icon catalog is now curated**. Some 1.x entries were removed or renamed (e.g. `TOGGLE_POWER` → `POWER`). If TypeScript reports an unknown member, look up the symbol on Apple's [SF Symbols app](https://developer.apple.com/sf-symbols/) and pass its name as a plain string — every prop accepts arbitrary strings, so missing catalog entries are never blocking.
10. **iOS 16+ minimum**.

The full release notes live in [CHANGELOG.md](./CHANGELOG.md).

---

## ⚡ Performance notes

- 🧠 The native side caches resolved `UIImage` instances per configuration with
  an 8 MB `NSCache`. Repeated re-renders with identical props are
  zero-allocation.
- 🔁 Property updates within a single React commit are coalesced into one
  render pass via the run loop.
- 🎨 The hex color parser keeps a 32-entry LRU cache.
- 📦 The catalog is shipped behind a subpath export — only consumers that
  `import 'react-native-nitro-sfsymbols/icons'` pay for it.

---

## 🤝 Contributing

Contributions are very welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md)
for the development workflow, and our [Code of Conduct](./CODE_OF_CONDUCT.md)
to keep the project a safe and inclusive space.

Quick start:

```bash
git clone https://github.com/mCodex/react-native-nitro-sfsymbols.git
cd react-native-nitro-sfsymbols
yarn
yarn typecheck && yarn lint && yarn test
```

To run the example app:

```bash
cd example && yarn ios
```

---

## 💬 Support

- 🐛 Found a bug? [Open an issue](https://github.com/mCodex/react-native-nitro-sfsymbols/issues/new/choose).
- 💡 Have an idea? [Start a discussion](https://github.com/mCodex/react-native-nitro-sfsymbols/discussions).
- ⭐ Like the project? Star it on [GitHub](https://github.com/mCodex/react-native-nitro-sfsymbols) — it helps a lot!

---

## 🙏 Acknowledgments

- [Margelo](https://margelo.com/) for [Nitro Modules](https://nitro.margelo.com/) — the foundation that makes this library tick.
- Apple's [SF Symbols](https://developer.apple.com/sf-symbols/) team for an incredible icon system.
- Everyone who has [contributed](https://github.com/mCodex/react-native-nitro-sfsymbols/graphs/contributors) to this project. 💖

---

## 📄 License

MIT © [Mateus Andrade](https://github.com/mCodex)
