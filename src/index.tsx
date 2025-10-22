/**
 * React Native SF Symbols Component Library
 *
 * Provides a type-safe, performant wrapper around native SF Symbols rendering
 * for iOS using React Native Nitro Modules. Android will use stubs since
 * SF Symbols are exclusive to Apple's platforms.
 *
 * @module react-native-nitro-sfsymbols
 * @example
 * ```tsx
 * import { SFSymbolView, SFIcons, SFSymbolWeight } from 'react-native-nitro-sfsymbols';
 *
 * export function App() {
 *   return (
 *     <SFSymbolView
 *       name={SFIcons.THERMOMETER_SUN_FILL}
 *       size={32}
 *       weight={SFSymbolWeight.SEMIBOLD}
 *       tintColor="#FF5722"
 *     />
 *   );
 * }
 * ```
 */

import { getHostComponent } from 'react-native-nitro-modules';
import { forwardRef, useMemo } from 'react';
import type {
  NitroSfsymbolsMethods,
  NitroSfsymbolsProps,
} from './NitroSfsymbols.nitro';
import type { SFSymbolViewProps } from './types';
import { SFSymbolWeight, SFSymbolScale, SFSymbolRenderingMode } from './types';

// Generate the native host component
const NitroSfsymbolsConfig = require('../nitrogen/generated/shared/json/NitroSfsymbolsConfig.json');

const NitroSfsymbolsViewComponent = getHostComponent<
  NitroSfsymbolsProps,
  NitroSfsymbolsMethods
>('NitroSfsymbols', () => NitroSfsymbolsConfig);

/**
 * Normalizes and validates SF Symbol configuration before rendering.
 * This function ensures all required props are present and properly formatted.
 *
 * @internal
 * @param {SFSymbolViewProps} props - Raw component props
 * @returns {NitroSfsymbolsProps} Normalized props for native rendering
 */
function normalizeSymbolProps(props: SFSymbolViewProps): NitroSfsymbolsProps {
  if (!props.name || typeof props.name !== 'string') {
    throw new Error(
      'SFSymbolView requires a valid "name" prop. Example: SFIcons.THERMOMETER_SUN_FILL'
    );
  }

  return {
    name: props.name,
    size: props.size,
    weight: props.weight ?? SFSymbolWeight.REGULAR,
    scale: props.scale ?? SFSymbolScale.MEDIUM,
    tintColor: props.tintColor,
    renderingMode: props.renderingMode ?? SFSymbolRenderingMode.MONOCHROME,
    hierarchicalConfig: props.hierarchical
      ? (props.hierarchical as unknown as Record<string, string>)
      : undefined,
    paletteConfig: props.palette
      ? (props.palette as unknown as Record<string, string>)
      : undefined,
    animationConfig: props.animation
      ? (props.animation as unknown as Record<string, string>)
      : undefined,
    opacity: props.opacity,
    variableColor: props.variableColor,
    reduceComplexity: props.reduceComplexity,
  };
}

/**
 * SFSymbolView is a high-performance, type-safe component for rendering
 * Apple's SF Symbols on iOS using React Native Nitro Modules.
 *
 * SF Symbols provide a consistent, scalable way to display icons across
 * Apple platforms. This component handles iOS rendering natively and
 * provides stubs for Android compatibility.
 *
 * @component
 * @example
 * ```tsx
 * // Simple usage with default styling
 * <SFSymbolView name={SFIcons.HEART_FILL} />
 *
 * // With customization
 * <SFSymbolView
 *   name={SFIcons.STAR_FILL}
 *   size={40}
 *   weight={SFSymbolWeight.BOLD}
 *   scale={SFSymbolScale.LARGE}
 *   tintColor="#FFD700"
 *   renderingMode={SFSymbolRenderingMode.HIERARCHICAL}
 *   hierarchical={{
 *     primaryColor: '#FF5722',
 *     secondaryColor: '#FF8A65',
 *   }}
 *   animation={{ enabled: true, type: 'bounce' }}
 *   accessibilityLabel="Favorite star"
 * />
 * ```
 *
 * @param {SFSymbolViewProps} props - Component props
 * @param {string} props.name - Required SF Symbol name (e.g., 'thermometer.sun.fill')
 * @param {number} [props.size=24] - Size of the symbol in points
 * @param {SFSymbolWeight} [props.weight='regular'] - Stroke weight
 * @param {SFSymbolScale} [props.scale='medium'] - Symbol scale
 * @param {string} [props.tintColor='#000000'] - Hex color for tint
 * @param {SFSymbolRenderingMode} [props.renderingMode='monochrome'] - Rendering mode
 * @param {SFSymbolHierarchicalConfig} [props.hierarchical] - Hierarchical colors
 * @param {SFSymbolPaletteConfig} [props.palette] - Palette colors
 * @param {SFSymbolAnimationConfig} [props.animation] - Animation settings
 * @param {number} [props.opacity=1] - Symbol opacity (0-1)
 * @param {boolean} [props.variableColor=false] - Enable variable colors
 * @param {boolean} [props.reduceComplexity=false] - Reduce for low-end devices
 * @param {string} [props.testID] - Test identifier
 * @param {string} [props.accessibilityLabel] - Accessibility label for screen readers
 * @param {string} [props.accessibilityHint] - Accessibility hint for screen readers
 *
 * @returns {React.ReactElement} Rendered SF Symbol view
 */
export const SFSymbolView = forwardRef<
  React.ComponentRef<typeof NitroSfsymbolsViewComponent>,
  SFSymbolViewProps & { style?: any }
>(({ style, ...props }, ref) => {
  // Memoize normalized props to prevent unnecessary re-renders
  const normalizedProps = useMemo(() => normalizeSymbolProps(props), [props]);

  return (
    <NitroSfsymbolsViewComponent
      {...normalizedProps}
      ref={ref}
      style={[{ width: props.size ?? 24, height: props.size ?? 24 }, style]}
    />
  );
});

SFSymbolView.displayName = 'SFSymbolView';

// Re-export types and constants for public API
export type { SFSymbolConfig, SFSymbolViewProps } from './types';
export {
  SFSymbolWeight,
  SFSymbolScale,
  SFSymbolRenderingMode,
  SFSymbolTheme,
  SFSymbolAnimationType,
  type SFSymbolHierarchicalConfig,
  type SFSymbolPaletteConfig,
  type SFSymbolAnimationConfig,
} from './types';
export {
  SFIcons,
  SF_SYMBOL_DEFAULTS,
  isValidSFIcon,
  getAllSFIcons,
  camelCaseToSFSymbol,
  searchSFIcon,
} from './icons';
