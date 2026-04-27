/**
 * Public TypeScript types for `react-native-nitro-sfsymbols`.
 *
 * Constants are exported as `as const` objects (instead of `enum`) so they
 * tree-shake cleanly and don't emit runtime helpers into the consuming bundle.
 *
 * @module types
 */

import type { ColorValue, ViewProps, ViewStyle } from 'react-native';

// ---------------------------------------------------------------------------
// Constants (tree-shakable, zero runtime cost beyond the literal values)
// ---------------------------------------------------------------------------

/**
 * Stroke weight of the symbol. Mirrors `UIImage.SymbolWeight`.
 *
 * @see https://developer.apple.com/documentation/uikit/uiimage/symbolweight
 */
export const SFSymbolWeight = {
  ULTRALIGHT: 'ultralight',
  THIN: 'thin',
  LIGHT: 'light',
  REGULAR: 'regular',
  MEDIUM: 'medium',
  SEMIBOLD: 'semibold',
  BOLD: 'bold',
  HEAVY: 'heavy',
  BLACK: 'black',
} as const;
export type SFSymbolWeight = (typeof SFSymbolWeight)[keyof typeof SFSymbolWeight];

/**
 * Visual scale of the symbol. Mirrors `UIImage.SymbolScale`.
 *
 * @see https://developer.apple.com/documentation/uikit/uiimage/symbolscale
 */
export const SFSymbolScale = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;
export type SFSymbolScale = (typeof SFSymbolScale)[keyof typeof SFSymbolScale];

/**
 * How colors are applied to the symbol's layers.
 *
 * - `monochrome` — single tint color (default; cheapest).
 * - `hierarchical` — primary color with opacity-derived secondary/tertiary layers.
 * - `palette` — distinct colors per layer.
 * - `multicolor` — Apple's predefined per-symbol colors.
 *
 * @see https://developer.apple.com/documentation/uikit/uiimage/symbolconfiguration
 */
export const SFSymbolRenderingMode = {
  MONOCHROME: 'monochrome',
  HIERARCHICAL: 'hierarchical',
  PALETTE: 'palette',
  MULTICOLOR: 'multicolor',
} as const;
export type SFSymbolRenderingMode =
  (typeof SFSymbolRenderingMode)[keyof typeof SFSymbolRenderingMode];

/**
 * Animation effect to apply to the symbol (iOS 17+).
 *
 * @see https://developer.apple.com/documentation/symbols/symboleffect
 */
export const SFSymbolAnimationType = {
  BOUNCE: 'bounce',
  PULSE: 'pulse',
  SCALE: 'scale',
  ROTATE: 'rotate',
  APPEAR: 'appear',
  DISAPPEAR: 'disappear',
  REPLACE: 'replace',
  VARIABLE_COLOR: 'variableColor',
} as const;
export type SFSymbolAnimationType =
  (typeof SFSymbolAnimationType)[keyof typeof SFSymbolAnimationType];

// ---------------------------------------------------------------------------
// Configuration shapes
// ---------------------------------------------------------------------------

/**
 * Hierarchical color layers. Used when {@link SFSymbolRenderingMode.HIERARCHICAL}
 * is set. Only `primary` is required; `secondary`/`tertiary` are derived from
 * `primary` by the system when omitted.
 */
export interface SFSymbolHierarchicalConfig {
  /** Hex color (`#RRGGBB`) for the primary (most opaque) layer. */
  primary: string;
  /** Optional override for the secondary layer. */
  secondary?: string;
  /** Optional override for the tertiary layer. */
  tertiary?: string;
}

/**
 * Distinct colors per symbol layer. Used when {@link SFSymbolRenderingMode.PALETTE}
 * is set.
 */
export interface SFSymbolPaletteConfig {
  /** Hex color (`#RRGGBB`) for the primary layer. */
  primary: string;
  /** Hex color for the secondary layer. */
  secondary?: string;
  /** Hex color for the tertiary layer. */
  tertiary?: string;
}

/**
 * Symbol animation configuration (iOS 17+). Animations are silently no-ops on
 * older iOS versions and on devices with **Reduce Motion** enabled.
 */
export interface SFSymbolAnimationConfig {
  /** Animation type to apply. */
  type: SFSymbolAnimationType;
  /** Repeat the animation indefinitely. Default: `false`. */
  repeating?: boolean;
}

// ---------------------------------------------------------------------------
// Public component props
// ---------------------------------------------------------------------------

/**
 * Branded string type for the curated SF Symbols catalog.
 *
 * Importing the catalog (`react-native-nitro-sfsymbols/icons`) widens the
 * `name` prop to the curated names while still allowing any string.
 */
export type SFIconName = string;

/**
 * Props for `<SFSymbolView />`.
 *
 * @example
 * ```tsx
 * import { SFSymbolView } from 'react-native-nitro-sfsymbols';
 *
 * <SFSymbolView
 *   name="heart.fill"
 *   size={32}
 *   tintColor="#FF3B30"
 *   accessibilityLabel="Favorite"
 * />
 * ```
 */
export interface SFSymbolViewProps
  extends Pick<
    ViewProps,
    | 'testID'
    | 'accessibilityLabel'
    | 'accessibilityHint'
    | 'accessibilityRole'
    | 'accessibilityLanguage'
    | 'accessibilityElementsHidden'
    | 'importantForAccessibility'
  > {
  /**
   * SF Symbol name (e.g. `"heart.fill"`).
   *
   * Tip: import `SFIcons` from `react-native-nitro-sfsymbols/icons` to get
   * autocomplete on the curated catalog while still allowing any string.
   */
  name: SFIconName;

  /**
   * Symbol point size. Default: `24`. When {@link allowFontScaling} is
   * enabled (the default), this value is scaled by the user's preferred
   * Dynamic Type setting (WCAG 1.4.4).
   */
  size?: number;

  /** Stroke weight. Default: `'regular'`. */
  weight?: SFSymbolWeight;

  /** Visual scale. Default: `'medium'`. */
  scale?: SFSymbolScale;

  /**
   * Color used to tint the symbol. When omitted and the user has *Increase
   * Contrast* enabled, the system label color is used for guaranteed contrast.
   */
  tintColor?: ColorValue;

  /** Color rendering mode. Default: `'monochrome'`. */
  renderingMode?: SFSymbolRenderingMode;

  /** Color layers for {@link SFSymbolRenderingMode.HIERARCHICAL}. */
  hierarchical?: SFSymbolHierarchicalConfig;

  /** Color layers for {@link SFSymbolRenderingMode.PALETTE}. */
  palette?: SFSymbolPaletteConfig;

  /** iOS 17+ animation effect. */
  animation?: SFSymbolAnimationConfig;

  /** Symbol opacity from `0` to `1`. Default: `1`. */
  opacity?: number;

  /** Enable variable-color rendering (iOS 16+). Default: `false`. */
  variableColor?: boolean;

  /**
   * Symbol to render if {@link name} cannot be resolved by iOS. Useful as a
   * graceful fallback for symbols added in newer iOS versions.
   */
  fallbackName?: SFIconName;

  /**
   * Scale {@link size} with the user's preferred Dynamic Type setting (WCAG
   * 1.4.4 Resize Text). Default: `true`.
   */
  allowFontScaling?: boolean;

  /**
   * Maximum Dynamic Type multiplier applied to {@link size}. Prevents extreme
   * accessibility text sizes from breaking layouts. Default: `2`.
   */
  maxFontSizeMultiplier?: number;

  /**
   * When no {@link accessibilityLabel} is provided, derive a human-readable
   * label from the symbol name (e.g. `"heart.fill"` → `"Heart"`). Default:
   * `false` (icon is treated as decorative and hidden from assistive tech —
   * see WCAG 1.1.1).
   */
  accessibilityAutoLabel?: boolean;

  /** Optional view style overrides. */
  style?: ViewStyle | ViewStyle[] | null;
}

/**
 * Recommended minimum hit-target style for icon-only pressables (Apple HIG /
 * WCAG 2.5.8). Spread onto the wrapping `Pressable`/`TouchableOpacity`:
 *
 * @example
 * ```tsx
 * <Pressable style={minTouchTargetStyle} onPress={onTap}>
 *   <SFSymbolView name="ellipsis" accessibilityLabel="More options" />
 * </Pressable>
 * ```
 */
export const minTouchTargetStyle = {
  minWidth: 44,
  minHeight: 44,
  alignItems: 'center',
  justifyContent: 'center',
} as const satisfies ViewStyle;
