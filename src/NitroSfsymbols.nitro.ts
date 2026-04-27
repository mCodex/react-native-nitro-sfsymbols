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
  /** Hex tint color (`#RRGGBB`). */
  tintColor?: string;
  /** Rendering mode string (mirrors `SFSymbolRenderingMode`). */
  renderingMode?: string;
  /** `{ primary, secondary?, tertiary? }` hex colors. */
  hierarchicalConfig?: Record<string, string>;
  /** `{ primary, secondary?, tertiary? }` hex colors. */
  paletteConfig?: Record<string, string>;
  /** `{ type, repeating? }`. */
  animationConfig?: Record<string, string>;
  /** `0`–`1`. */
  opacity?: number;
  /** Variable-color rendering (iOS 16+). */
  variableColor?: boolean;
  /**
   * @deprecated Reserved for future use. Currently a no-op.
   */
  reduceComplexity?: boolean;
}

/**
 * Imperative methods on the native view. Reserved for future use; not part of
 * the public API.
 *
 * @internal
 */
export interface NitroSfsymbolsMethods extends HybridViewMethods {
  /** @internal */
  updateSymbol(config: Record<string, string>): Promise<void>;
  /** @internal */
  animateSymbol(animationType: string): Promise<void>;
}

export type NitroSfsymbols = HybridView<NitroSfsymbolsProps, NitroSfsymbolsMethods>;
