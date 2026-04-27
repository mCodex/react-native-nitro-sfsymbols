/**
 * `react-native-nitro-sfsymbols` — public entry point.
 *
 * @packageDocumentation
 */

import { forwardRef, memo, useMemo } from 'react';
import { type ColorValue, PixelRatio } from 'react-native';
import { getHostComponent } from 'react-native-nitro-modules';
import NitroSfsymbolsConfig from './generated/NitroSfsymbolsConfig.json';
import type { NitroSfsymbolsMethods, NitroSfsymbolsProps } from './NitroSfsymbols.nitro';
import type {
  SFSymbolAnimationConfig,
  SFSymbolHierarchicalConfig,
  SFSymbolPaletteConfig,
  SFSymbolViewProps,
} from './types';

const HostView = getHostComponent<NitroSfsymbolsProps, NitroSfsymbolsMethods>(
  'NitroSfsymbols',
  () => NitroSfsymbolsConfig
);

const DEFAULT_SIZE = 24;
const DEFAULT_MAX_FONT_SCALE = 2;

/** Convert a `{ primary, secondary?, tertiary? }` config to the wire shape. */
function toWireColors(
  config: SFSymbolHierarchicalConfig | SFSymbolPaletteConfig | undefined
): Record<string, string> | undefined {
  if (!config) return undefined;
  const out: Record<string, string> = { primaryColor: config.primary };
  if (config.secondary) out.secondaryColor = config.secondary;
  if (config.tertiary) out.tertiaryColor = config.tertiary;
  return out;
}

function toWireAnimation(
  config: SFSymbolAnimationConfig | undefined
): Record<string, string> | undefined {
  if (!config) return undefined;
  return {
    type: config.type,
    repeating: config.repeating ? 'true' : 'false',
  };
}

function resolveColor(color: ColorValue | undefined): string | undefined {
  if (color == null) return undefined;
  if (typeof color === 'string') return color;
  // OpaqueColorValue / number — let RN handle resolution downstream.
  return undefined;
}

/**
 * Derive a human-readable accessibility label from an SF Symbol name.
 *
 * @example
 * ```ts
 * deriveAccessibilityLabel('heart.fill') // 'Heart'
 * deriveAccessibilityLabel('person.crop.circle.fill') // 'Person'
 * ```
 *
 * @internal
 */
function deriveAccessibilityLabel(name: string): string {
  const root = name.split('.')[0] ?? name;
  return root.charAt(0).toUpperCase() + root.slice(1);
}

/**
 * `<SFSymbolView />` — render an Apple SF Symbol natively.
 *
 * Accessibility: by default an `SFSymbolView` is treated as **decorative** and
 * hidden from screen readers (WCAG 1.1.1 Non-text Content). To expose it to
 * assistive technology, pass either `accessibilityLabel` or
 * `accessibilityAutoLabel`.
 *
 * Performance: props are fed straight to the native view; React.memo prevents
 * re-renders when shallow-equal props are passed. The native view caches
 * resolved `UIImage` instances per configuration, so list scrolling stays
 * allocation-free.
 *
 * @example
 * ```tsx
 * import { SFSymbolView, SFSymbolWeight } from 'react-native-nitro-sfsymbols';
 *
 * export function FavoriteButton({ active }: { active: boolean }) {
 *   return (
 *     <SFSymbolView
 *       name={active ? 'heart.fill' : 'heart'}
 *       size={28}
 *       weight={SFSymbolWeight.SEMIBOLD}
 *       tintColor={active ? '#FF3B30' : '#8E8E93'}
 *       animation={active ? { type: 'bounce' } : undefined}
 *       accessibilityLabel={active ? 'Remove favorite' : 'Add favorite'}
 *       accessibilityRole="button"
 *     />
 *   );
 * }
 * ```
 */
export const SFSymbolView = memo(
  forwardRef<React.ComponentRef<typeof HostView>, SFSymbolViewProps>(
    function SFSymbolView(props, ref) {
      const {
        name,
        fallbackName,
        size = DEFAULT_SIZE,
        weight,
        scale,
        tintColor,
        renderingMode,
        hierarchical,
        palette,
        animation,
        opacity,
        variableColor,
        allowFontScaling = true,
        maxFontSizeMultiplier = DEFAULT_MAX_FONT_SCALE,
        accessibilityLabel,
        accessibilityAutoLabel,
        accessibilityHint,
        accessibilityRole,
        accessibilityLanguage,
        accessibilityElementsHidden,
        importantForAccessibility,
        testID,
        style,
      } = props;

      if (__DEV__ && (typeof name !== 'string' || name.length === 0)) {
        // eslint-disable-next-line no-console
        console.warn(
          '[react-native-nitro-sfsymbols] `name` is required and must be a non-empty string.'
        );
      }

      // Dynamic Type: scale `size` with the user's preferred text size,
      // capped at `maxFontSizeMultiplier` (WCAG 1.4.4).
      const effectiveSize = useMemo(() => {
        if (!allowFontScaling) return size;
        const scaleFactor = Math.min(PixelRatio.getFontScale(), maxFontSizeMultiplier);
        return size * scaleFactor;
      }, [size, allowFontScaling, maxFontSizeMultiplier]);

      // Wire-format conversions are memoized on stable inputs only.
      const hierarchicalConfig = useMemo(() => toWireColors(hierarchical), [hierarchical]);
      const paletteConfig = useMemo(() => toWireColors(palette), [palette]);
      const animationConfig = useMemo(() => toWireAnimation(animation), [animation]);

      // Accessibility: decorative by default, informative when labelled.
      const hasLabel = !!accessibilityLabel || accessibilityAutoLabel === true;
      const resolvedLabel =
        accessibilityLabel ?? (accessibilityAutoLabel ? deriveAccessibilityLabel(name) : undefined);

      const sizeStyle = useMemo(
        () => ({ width: effectiveSize, height: effectiveSize }),
        [effectiveSize]
      );

      return (
        <HostView
          ref={ref}
          symbolName={name}
          fallbackName={fallbackName}
          size={effectiveSize}
          weight={weight}
          scale={scale}
          tintColor={resolveColor(tintColor)}
          renderingMode={renderingMode}
          hierarchicalConfig={hierarchicalConfig}
          paletteConfig={paletteConfig}
          animationConfig={animationConfig}
          opacity={opacity}
          variableColor={variableColor}
          testID={testID}
          accessible={hasLabel}
          accessibilityLabel={resolvedLabel}
          accessibilityHint={hasLabel ? accessibilityHint : undefined}
          accessibilityRole={hasLabel ? (accessibilityRole ?? 'image') : undefined}
          accessibilityLanguage={hasLabel ? accessibilityLanguage : undefined}
          accessibilityElementsHidden={accessibilityElementsHidden ?? !hasLabel}
          importantForAccessibility={
            importantForAccessibility ?? (hasLabel ? 'yes' : 'no-hide-descendants')
          }
          style={style != null ? [sizeStyle, style] : sizeStyle}
        />
      );
    }
  )
);

// ---------------------------------------------------------------------------
// Public API surface
// ---------------------------------------------------------------------------

export type {
  SFIconName,
  SFSymbolAnimationConfig,
  SFSymbolHierarchicalConfig,
  SFSymbolPaletteConfig,
  SFSymbolViewProps,
} from './types';
export {
  minTouchTargetStyle,
  SFSymbolAnimationType,
  SFSymbolRenderingMode,
  SFSymbolScale,
  SFSymbolWeight,
} from './types';
