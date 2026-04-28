/**
 * Nitro view specification for `<SFSymbolView />`.
 *
 * This file is consumed by Nitrogen at build time to generate the iOS / Android
 * bridge code. Keep it minimal — every field becomes a native prop.
 *
 * @module NitroSfsymbols.nitro
 */

import type { HybridView, HybridViewMethods, HybridViewProps } from 'react-native-nitro-modules';

/**
 * Native props for the SF Symbol view. These are the *wire* types — the
 * public component (`SFSymbolView`) exposes a richer, friendlier surface
 * around them.
 */
export interface NitroSfsymbolsProps extends HybridViewProps {
  /** SF Symbol name, e.g. `"heart.fill"`. */
  symbolName: string;
  /** Symbol to render if `symbolName` doesn't resolve. */
  fallbackName?: string;
  /** Effective point size after Dynamic Type scaling. */
  size?: number;
  /** Stroke weight string (mirrors `SFSymbolWeight`). */
  weight?: string;
  /** Visual scale string (mirrors `SFSymbolScale`). */
  scale?: string;
  /** Hex tint color (`#RRGGBB` or `#RRGGBBAA`). */
  tintColor?: string;
  /** Rendering mode string (mirrors `SFSymbolRenderingMode`). */
  renderingMode?: string;
  /** `{ primaryColor, secondaryColor?, tertiaryColor? }` hex strings. */
  hierarchicalConfig?: Record<string, string>;
  /** `{ primaryColor, secondaryColor?, tertiaryColor? }` hex strings. */
  paletteConfig?: Record<string, string>;
  /** `{ type, repeating? }` (`repeating` is `'true'` | `'false'`). */
  animationConfig?: Record<string, string>;
  /** `0`–`1`. */
  opacity?: number;
}

/** No imperative methods are exposed on the native view. */
export type NitroSfsymbolsMethods = HybridViewMethods;

export type NitroSfsymbols = HybridView<NitroSfsymbolsProps, NitroSfsymbolsMethods>;
