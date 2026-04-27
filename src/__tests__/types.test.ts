import { describe, expect, it } from '@jest/globals';
import { SFIcons } from '../icons';
import {
  minTouchTargetStyle,
  SFSymbolAnimationType,
  SFSymbolRenderingMode,
  SFSymbolScale,
  SFSymbolWeight,
} from '../types';

describe('constants', () => {
  it('SFSymbolWeight values match Apple identifiers', () => {
    expect(SFSymbolWeight.REGULAR).toBe('regular');
    expect(SFSymbolWeight.ULTRALIGHT).toBe('ultralight');
    expect(SFSymbolWeight.BLACK).toBe('black');
    expect(Object.keys(SFSymbolWeight)).toHaveLength(9);
  });

  it('SFSymbolScale has small/medium/large', () => {
    expect(SFSymbolScale.SMALL).toBe('small');
    expect(SFSymbolScale.MEDIUM).toBe('medium');
    expect(SFSymbolScale.LARGE).toBe('large');
  });

  it('SFSymbolRenderingMode covers all 4 modes', () => {
    expect(SFSymbolRenderingMode.MONOCHROME).toBe('monochrome');
    expect(SFSymbolRenderingMode.HIERARCHICAL).toBe('hierarchical');
    expect(SFSymbolRenderingMode.PALETTE).toBe('palette');
    expect(SFSymbolRenderingMode.MULTICOLOR).toBe('multicolor');
  });

  it('SFSymbolAnimationType includes iOS 17 effects', () => {
    expect(SFSymbolAnimationType.BOUNCE).toBe('bounce');
    expect(SFSymbolAnimationType.PULSE).toBe('pulse');
    expect(SFSymbolAnimationType.REPLACE).toBe('replace');
    expect(SFSymbolAnimationType.VARIABLE_COLOR).toBe('variableColor');
  });

  it('minTouchTargetStyle meets Apple HIG / WCAG 2.5.8', () => {
    expect(minTouchTargetStyle.minWidth).toBe(44);
    expect(minTouchTargetStyle.minHeight).toBe(44);
  });
});

describe('SFIcons catalog', () => {
  it('exposes well-known symbols as dot-separated strings', () => {
    expect(SFIcons.HEART_FILL).toBe('heart.fill');
    expect(SFIcons.STAR_FILL).toBe('star.fill');
    expect(SFIcons.THERMOMETER_SUN_FILL).toBe('thermometer.sun.fill');
  });

  it('catalog values are non-empty strings', () => {
    const values = Object.values(SFIcons);
    for (const v of values) {
      expect(typeof v).toBe('string');
      expect(v.length).toBeGreaterThan(0);
    }
  });

  it('contains a curated set (>= 200 entries)', () => {
    expect(Object.keys(SFIcons).length).toBeGreaterThanOrEqual(200);
  });
});
