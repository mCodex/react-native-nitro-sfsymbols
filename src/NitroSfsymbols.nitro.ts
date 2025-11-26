/**
 * Nitro SF Symbols Native Module Definition
 *
 * This file defines the interface between React Native and native iOS/Android code
 * for rendering SF Symbols. It uses Nitro Modules for optimal performance and
 * seamless native integration.
 *
 * @module NitroSfsymbols.nitro
 */

import type {
  HybridView,
  HybridViewMethods,
  HybridViewProps,
} from 'react-native-nitro-modules';

/**
 * Native props for the SF Symbol view.
 * These props are passed to native code and control symbol rendering.
 *
 * @interface NitroSfsymbolsProps
 */
export interface NitroSfsymbolsProps extends HybridViewProps {
  /**
   * Name of the SF Symbol to render (e.g., "thermometer.sun.fill")
   * @see https://developer.apple.com/sf-symbols/
   */
  symbolName: string;

  /**
   * Size of the symbol in points. Default: 24
   */
  size?: number;

  /**
   * Weight (thickness) of the symbol stroke
   * @default "regular"
   */
  weight?: string;

  /**
   * Scale variant of the symbol
   * @default "medium"
   */
  scale?: string;

  /**
   * Primary tint color for the symbol (hex color string)
   * @default "#000000"
   */
  tintColor?: string;

  /**
   * Rendering mode that determines how colors are applied
   * @default "monochrome"
   */
  renderingMode?: string;

  /**
   * Hierarchical color configuration
   * Used when renderingMode is "hierarchical"
   */
  hierarchicalConfig?: Record<string, string>;

  /**
   * Palette color configuration
   * Used when renderingMode is "palette"
   */
  paletteConfig?: Record<string, string>;

  /**
   * Animation configuration for the symbol (iOS 17+)
   */
  animationConfig?: Record<string, string>;

  /**
   * Opacity of the symbol (0-1)
   * @default 1
   */
  opacity?: number;

  /**
   * Enable variable color support (iOS 16+)
   * @default false
   */
  variableColor?: boolean;

  /**
   * Reduce symbol complexity for lower-end devices
   * @default false
   */
  reduceComplexity?: boolean;
}

/**
 * Methods available on the native SF Symbol view.
 *
 * @interface NitroSfsymbolsMethods
 */
export interface NitroSfsymbolsMethods extends HybridViewMethods {
  /**
   * Update the SF Symbol with new configuration
   * @param {Record<string, string>} config - Updated configuration
   * @returns {Promise<void>}
   */
  updateSymbol(config: Record<string, string>): Promise<void>;

  /**
   * Animate the SF Symbol (iOS 17+)
   * @param {string} animationType - Type of animation to apply
   * @returns {Promise<void>}
   */
  animateSymbol(animationType: string): Promise<void>;
}

/**
 * SF Symbol View Hybrid Object Type
 *
 * A HybridView that renders SF Symbols natively on iOS and provides
 * a stub on Android (since SF Symbols are iOS-exclusive).
 *
 * @type {HybridView<NitroSfsymbolsProps, NitroSfsymbolsMethods>}
 */
export type NitroSfsymbols = HybridView<
  NitroSfsymbolsProps,
  NitroSfsymbolsMethods
>;
