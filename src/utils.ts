/**
 * Utility Functions for SF Symbols
 *
 * This module provides helper functions for working with SF Symbols,
 * including color parsing, configuration validation, and prop optimization.
 *
 * @module utils
 */

import type {
  SFSymbolConfig,
  SFSymbolViewProps,
  SFSymbolHierarchicalConfig,
  SFSymbolPaletteConfig,
} from './types';
import { SF_SYMBOL_DEFAULTS } from './icons';

/**
 * Validates if a color string is a valid hex color
 * @param {string} color - Color string to validate
 * @returns {boolean} Whether the color is valid
 * @example
 * ```ts
 * isValidColor('#FF5722') // true
 * isValidColor('FF5722') // true
 * isValidColor('invalid') // false
 * ```
 */
export function isValidColor(color: string): boolean {
  const hexColorRegex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  return hexColorRegex.test(color);
}

/**
 * Normalize color string to #RRGGBB format
 * @param {string} color - Color string (hex with or without #)
 * @returns {string} Normalized color in #RRGGBB format
 * @throws {Error} If color format is invalid
 * @example
 * ```ts
 * normalizeColor('FF5722') // '#FF5722'
 * normalizeColor('#FF5722') // '#FF5722'
 * ```
 */
export function normalizeColor(color: string): string {
  if (!isValidColor(color)) {
    throw new Error(`Invalid color format: ${color}. Expected hex color.`);
  }

  if (color.startsWith('#')) {
    return color.length === 7 ? color : `#${color.slice(1)}`;
  }

  return `#${color}`;
}

/**
 * Validate that size is a positive number
 * @param {number} size - Size value to validate
 * @returns {boolean} Whether the size is valid
 */
export function isValidSize(size: number): boolean {
  return typeof size === 'number' && size > 0 && isFinite(size);
}

/**
 * Clamp opacity value between 0 and 1
 * @param {number} opacity - Opacity value
 * @returns {number} Clamped opacity (0-1)
 */
export function clampOpacity(opacity: number): number {
  return Math.max(0, Math.min(1, opacity));
}

/**
 * Validate SF Symbol configuration
 * @param {Partial<SFSymbolConfig>} config - Configuration to validate
 * @returns {string[]} Array of validation errors (empty if valid)
 * @example
 * ```ts
 * const errors = validateConfig({ name: '', size: -1 });
 * // errors: ['name is required', 'size must be positive']
 * ```
 */
export function validateConfig(config: Partial<SFSymbolConfig>): string[] {
  const errors: string[] = [];

  if (!config.name || typeof config.name !== 'string') {
    errors.push('name is required and must be a string');
  }

  if (config.size !== undefined && !isValidSize(config.size)) {
    errors.push('size must be a positive number');
  }

  if (config.tintColor !== undefined && !isValidColor(config.tintColor)) {
    errors.push(
      `tintColor must be a valid hex color, got: ${config.tintColor}`
    );
  }

  if (config.opacity !== undefined) {
    if (
      typeof config.opacity !== 'number' ||
      config.opacity < 0 ||
      config.opacity > 1
    ) {
      errors.push('opacity must be a number between 0 and 1');
    }
  }

  return errors;
}

/**
 * Merge default configuration with provided configuration
 * @param {Partial<SFSymbolConfig>} config - User configuration
 * @returns {Required<SFSymbolConfig>} Configuration with defaults applied
 */
export function applyDefaults(config: Partial<SFSymbolConfig>): SFSymbolConfig {
  return {
    name: config.name || '',
    size: config.size,
    weight: config.weight,
    scale: config.scale,
    tintColor: config.tintColor ?? SF_SYMBOL_DEFAULTS.TINT_COLOR,
    renderingMode: config.renderingMode,
    hierarchical: config.hierarchical,
    palette: config.palette,
    animation: config.animation,
    opacity: config.opacity ?? SF_SYMBOL_DEFAULTS.OPACITY,
    variableColor: config.variableColor ?? false,
    reduceComplexity: config.reduceComplexity ?? false,
  };
}

/**
 * Optimize props for performance by memoization
 * Removes undefined values to reduce object comparison overhead
 *
 * @param {SFSymbolViewProps} props - Component props
 * @returns {Partial<SFSymbolViewProps>} Optimized props
 */
export function optimizeProps(
  props: SFSymbolViewProps
): Partial<SFSymbolViewProps> {
  const optimized: Partial<SFSymbolViewProps> = {};

  // Only include defined values
  if (props.name !== undefined) optimized.name = props.name;
  if (props.size !== undefined) optimized.size = props.size;
  if (props.weight !== undefined) optimized.weight = props.weight;
  if (props.scale !== undefined) optimized.scale = props.scale;
  if (props.tintColor !== undefined) optimized.tintColor = props.tintColor;
  if (props.renderingMode !== undefined)
    optimized.renderingMode = props.renderingMode;
  if (props.hierarchical !== undefined)
    optimized.hierarchical = props.hierarchical;
  if (props.palette !== undefined) optimized.palette = props.palette;
  if (props.animation !== undefined) optimized.animation = props.animation;
  if (props.opacity !== undefined) optimized.opacity = props.opacity;
  if (props.variableColor !== undefined)
    optimized.variableColor = props.variableColor;
  if (props.reduceComplexity !== undefined)
    optimized.reduceComplexity = props.reduceComplexity;
  if (props.testID !== undefined) optimized.testID = props.testID;
  if (props.accessibilityLabel !== undefined)
    optimized.accessibilityLabel = props.accessibilityLabel;
  if (props.accessibilityHint !== undefined)
    optimized.accessibilityHint = props.accessibilityHint;

  return optimized;
}

/**
 * Create a hierarchical color configuration with smart defaults
 * @param {Partial<SFSymbolHierarchicalConfig>} colors - Color overrides
 * @returns {SFSymbolHierarchicalConfig} Complete hierarchical config
 * @example
 * ```ts
 * const config = createHierarchicalConfig({ primaryColor: '#FF5722' });
 * // Returns colors with calculated secondary/tertiary variants
 * ```
 */
export function createHierarchicalConfig(
  colors: Partial<SFSymbolHierarchicalConfig> = {}
): SFSymbolHierarchicalConfig {
  return {
    primaryColor: colors.primaryColor,
    secondaryColor: colors.secondaryColor,
    tertiaryColor: colors.tertiaryColor,
  };
}

/**
 * Create a palette color configuration
 * @param {Partial<SFSymbolPaletteConfig>} colors - Color specification
 * @returns {SFSymbolPaletteConfig} Complete palette config
 * @throws {Error} If primary color is not provided
 */
export function createPaletteConfig(
  colors: Partial<SFSymbolPaletteConfig>
): SFSymbolPaletteConfig {
  if (!colors.primaryColor) {
    throw new Error('Palette configuration requires at least a primaryColor');
  }

  return {
    primaryColor: colors.primaryColor,
    secondaryColor: colors.secondaryColor,
    tertiaryColor: colors.tertiaryColor,
  };
}

/**
 * Convert React Native style dimensions to SF Symbol size
 * Useful for syncing view sizes with symbol size
 *
 * @param {number} dimension - Width or height in points
 * @returns {number} Appropriate SF Symbol size
 */
export function dimensionToSymbolSize(dimension: number): number {
  // If dimension is large enough, use it directly
  if (dimension >= 48) {
    return dimension;
  }

  // For small dimensions, use sensible defaults based on ranges
  if (dimension < 20) return 12;
  if (dimension < 32) return 16;
  return 24; // For 32-47
}

/**
 * Get recommended sizes for common use cases
 * @param {('tiny' | 'small' | 'normal' | 'large' | 'xlarge')} preset - Size preset
 * @returns {number} Recommended size in points
 */
export function getPresetSize(
  preset: 'tiny' | 'small' | 'normal' | 'large' | 'xlarge'
): number {
  const sizes: Record<
    'tiny' | 'small' | 'normal' | 'large' | 'xlarge',
    number
  > = {
    tiny: 12,
    small: 16,
    normal: 24,
    large: 32,
    xlarge: 48,
  };

  return sizes[preset];
}
