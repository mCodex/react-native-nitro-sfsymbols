/**
 * SF Symbols Rendering Configuration Types
 *
 * This module provides comprehensive TypeScript types, enums, and interfaces
 * for configuring SF Symbols rendering in React Native applications.
 * SF Symbols are only available on iOS 13+. Android usage will render a stub/placeholder.
 *
 * @module types
 */

/**
 * Represents the scale of an SF Symbol.
 * Different scales provide different visual weights for the symbol.
 *
 * @enum {string}
 * @see https://developer.apple.com/design/human-interface-guidelines/sf-symbols
 */
export enum SFSymbolScale {
  /** Small scale - suitable for compact layouts */
  SMALL = 'small',
  /** Medium scale - default and most commonly used */
  MEDIUM = 'medium',
  /** Large scale - for prominent displays */
  LARGE = 'large',
}

/**
 * Represents the weight of an SF Symbol.
 * Weight affects the visual thickness of the symbol stroke.
 *
 * @enum {string}
 * @see https://developer.apple.com/design/human-interface-guidelines/sf-symbols
 */
export enum SFSymbolWeight {
  /** Ultralight weight - 100 */
  ULTRALIGHT = 'ultralight',
  /** Thin weight - 200 */
  THIN = 'thin',
  /** Light weight - 300 */
  LIGHT = 'light',
  /** Regular weight - 400 (default) */
  REGULAR = 'regular',
  /** Medium weight - 500 */
  MEDIUM = 'medium',
  /** Semibold weight - 600 */
  SEMIBOLD = 'semibold',
  /** Bold weight - 700 */
  BOLD = 'bold',
  /** Heavy weight - 800 */
  HEAVY = 'heavy',
  /** Black weight - 900 */
  BLACK = 'black',
}

/**
 * Represents the rendering mode of an SF Symbol.
 * Different modes affect how the symbol is colored and rendered.
 *
 * @enum {string}
 * @see https://developer.apple.com/design/human-interface-guidelines/sf-symbols
 */
export enum SFSymbolRenderingMode {
  /** Monochrome - uses the tint color for the entire symbol */
  MONOCHROME = 'monochrome',
  /** Hierarchical - uses hierarchical coloring with opacity variations */
  HIERARCHICAL = 'hierarchical',
  /** Palette - uses multiple colors from a palette */
  PALETTE = 'palette',
  /** Multicolor - uses predefined colors (iOS 16+) */
  MULTICOLOR = 'multicolor',
}

/**
 * Represents the theme of SF Symbol rendering.
 * Themes control how symbols adapt to appearance changes.
 *
 * @enum {string}
 */
export enum SFSymbolTheme {
  /** Monochrome single color theme */
  MONOCHROME = 'monochrome',
  /** Two-color hierarchical theme */
  HIERARCHICAL = 'hierarchical',
  /** Multi-color palette theme */
  PALETTE = 'palette',
}

/**
 * Configuration for hierarchical coloring of SF Symbols.
 * Hierarchical mode uses primary and secondary colors with varying opacity.
 *
 * @interface SFSymbolHierarchicalConfig
 */
export interface SFSymbolHierarchicalConfig {
  /** Primary color for the hierarchy (typically 100% opacity) */
  primaryColor?: string;
  /** Secondary color for the hierarchy (typically 60% opacity) */
  secondaryColor?: string;
  /** Tertiary color for the hierarchy (typically 30% opacity) */
  tertiaryColor?: string;
}

/**
 * Configuration for palette coloring of SF Symbols.
 * Palette mode allows specifying multiple distinct colors.
 *
 * @interface SFSymbolPaletteConfig
 */
export interface SFSymbolPaletteConfig {
  /** Primary color for palette rendering */
  primaryColor: string;
  /** Secondary color for palette rendering */
  secondaryColor?: string;
  /** Tertiary color for palette rendering */
  tertiaryColor?: string;
}

/**
 * Animation configuration for SF Symbols.
 * Note: Animation support depends on iOS version and symbol availability.
 *
 * @interface SFSymbolAnimationConfig
 */
export interface SFSymbolAnimationConfig {
  /** Whether to enable animations for the symbol */
  enabled?: boolean;
  /** Animation type to apply */
  type?: SFSymbolAnimationType;
  /** Whether to repeat the animation */
  repeating?: boolean;
}

/**
 * Supported animation types for SF Symbols (iOS 17+).
 *
 * @enum {string}
 */
export enum SFSymbolAnimationType {
  /** No animation */
  NONE = 'none',
  /** Bounce animation */
  BOUNCE = 'bounce',
  /** Scale animation */
  SCALE = 'scale',
  /** Pulse animation */
  PULSE = 'pulse',
  /** Rotate animation */
  ROTATE = 'rotate',
  /** Appear animation */
  APPEAR = 'appear',
  /** Disappear animation */
  DISAPPEAR = 'disappear',
  /** Replace animation */
  REPLACE = 'replace',
}

/**
 * Comprehensive configuration for rendering an SF Symbol.
 * This interface provides type-safe access to all SF Symbol customization options.
 *
 * @interface SFSymbolConfig
 * @example
 * ```ts
 * const config: SFSymbolConfig = {
 *   name: 'thermometer.sun.fill',
 *   size: 24,
 *   weight: SFSymbolWeight.SEMIBOLD,
 *   scale: SFSymbolScale.MEDIUM,
 *   tintColor: '#FF5722',
 * };
 * ```
 */
export interface SFSymbolConfig {
  /** Name of the SF Symbol to render (e.g., 'thermometer.sun.fill') */
  name: string;

  /** Size of the symbol in points. Accepts any positive number. */
  size?: number;

  /** Weight of the symbol stroke */
  weight?: SFSymbolWeight;

  /** Scale variant of the symbol */
  scale?: SFSymbolScale;

  /** Primary tint color for the symbol (hex color string) */
  tintColor?: string;

  /** Rendering mode for the symbol */
  renderingMode?: SFSymbolRenderingMode;

  /** Hierarchical color configuration (used when renderingMode is HIERARCHICAL) */
  hierarchical?: SFSymbolHierarchicalConfig;

  /** Palette color configuration (used when renderingMode is PALETTE) */
  palette?: SFSymbolPaletteConfig;

  /** Animation configuration for the symbol */
  animation?: SFSymbolAnimationConfig;

  /** Opacity of the symbol (0-1) */
  opacity?: number;

  /** Whether to enable variable color (iOS 16+) */
  variableColor?: boolean;

  /** Whether to reduce symbol complexity on lower-end devices */
  reduceComplexity?: boolean;
}

/**
 * Props for the SFSymbolView component.
 * Extends standard React Native view props with SF Symbol specific configuration.
 *
 * @interface SFSymbolViewProps
 */
export interface SFSymbolViewProps extends SFSymbolConfig {
  /** Test ID for testing purposes */
  testID?: string;

  /** Accessibility label for screen readers */
  accessibilityLabel?: string;

  /** Accessibility hint for screen readers */
  accessibilityHint?: string;
}
