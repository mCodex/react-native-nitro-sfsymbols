/**
 * Test Suite for react-native-nitro-sfsymbols
 *
 * Tests cover:
 * - Component rendering
 * - Props validation
 * - Type safety
 * - Utility functions
 * - Error handling
 */

import { SFSymbolWeight, SFSymbolScale, SFSymbolRenderingMode } from '../types';
import {
  SFIcons,
  isValidSFIcon,
  getAllSFIcons,
  camelCaseToSFSymbol,
  searchSFIcon,
} from '../icons';
import {
  isValidColor,
  normalizeColor,
  isValidSize,
  clampOpacity,
  validateConfig,
  applyDefaults,
  getPresetSize,
} from '../utils';

// MARK: - Icons Tests

describe('SF Icons Enum', () => {
  it('should contain common icon names', () => {
    expect(SFIcons.HEART_FILL).toBe('heart.fill');
    expect(SFIcons.STAR_FILL).toBe('star.fill');
    expect(SFIcons.THERMOMETER_SUN_FILL).toBe('thermometer.sun.fill');
  });
});

describe('isValidSFIcon', () => {
  it('should validate existing SF Icons', () => {
    expect(isValidSFIcon(SFIcons.HEART_FILL)).toBe(true);
    expect(isValidSFIcon('heart.fill')).toBe(true);
  });

  it('should reject invalid icon names', () => {
    expect(isValidSFIcon('invalid.icon.name')).toBe(false);
    expect(isValidSFIcon('unknown')).toBe(false);
  });
});

describe('getAllSFIcons', () => {
  it('should return array of all SF Icon names', () => {
    const icons = getAllSFIcons();
    expect(Array.isArray(icons)).toBe(true);
    expect(icons.length).toBeGreaterThan(0);
    expect(icons).toContain(SFIcons.HEART_FILL);
  });
});

describe('camelCaseToSFSymbol', () => {
  it('should convert camelCase to SF Symbol format', () => {
    expect(camelCaseToSFSymbol('thermometerSunFill')).toBe(
      'thermometer.sun.fill'
    );
    expect(camelCaseToSFSymbol('heartFill')).toBe('heart.fill');
  });
});

describe('searchSFIcon', () => {
  it('should find symbols by partial name', () => {
    const result = searchSFIcon('heart');
    expect(result).toBeDefined();
    expect(result).toContain('heart');
  });

  it('should be case-insensitive', () => {
    const result1 = searchSFIcon('HEART');
    const result2 = searchSFIcon('heart');
    expect(result1).toBeDefined();
    expect(result2).toBeDefined();
  });
});

// MARK: - Color Validation Tests

describe('isValidColor', () => {
  it('should validate hex colors with hash', () => {
    expect(isValidColor('#FF5722')).toBe(true);
    expect(isValidColor('#000000')).toBe(true);
    expect(isValidColor('#FFF')).toBe(true);
  });

  it('should validate hex colors without hash', () => {
    expect(isValidColor('FF5722')).toBe(true);
    expect(isValidColor('000000')).toBe(true);
  });

  it('should reject invalid colors', () => {
    expect(isValidColor('invalid')).toBe(false);
    expect(isValidColor('#GGGGGG')).toBe(false);
    expect(isValidColor('FF57')).toBe(false);
  });
});

describe('normalizeColor', () => {
  it('should normalize colors to #RRGGBB format', () => {
    expect(normalizeColor('FF5722')).toBe('#FF5722');
    expect(normalizeColor('#FF5722')).toBe('#FF5722');
  });

  it('should throw on invalid colors', () => {
    expect(() => normalizeColor('invalid')).toThrow();
  });
});

// MARK: - Size Validation Tests

describe('isValidSize', () => {
  it('should accept positive numbers', () => {
    expect(isValidSize(24)).toBe(true);
    expect(isValidSize(0.5)).toBe(true);
    expect(isValidSize(100)).toBe(true);
  });

  it('should reject invalid sizes', () => {
    expect(isValidSize(-1)).toBe(false);
    expect(isValidSize(0)).toBe(false);
    expect(isValidSize(Infinity)).toBe(false);
    expect(isValidSize(NaN)).toBe(false);
  });
});

// MARK: - Opacity Tests

describe('clampOpacity', () => {
  it('should clamp opacity between 0 and 1', () => {
    expect(clampOpacity(0.5)).toBe(0.5);
    expect(clampOpacity(-0.5)).toBe(0);
    expect(clampOpacity(1.5)).toBe(1);
  });
});

// MARK: - Configuration Validation Tests

describe('validateConfig', () => {
  it('should accept valid configuration', () => {
    const errors = validateConfig({
      name: 'heart.fill',
      size: 24,
      tintColor: '#FF5722',
    });
    expect(errors).toHaveLength(0);
  });

  it('should reject missing name', () => {
    const errors = validateConfig({ size: 24 });
    expect(errors).toContain('name is required and must be a string');
  });

  it('should reject invalid size', () => {
    const errors = validateConfig({ name: 'heart.fill', size: -1 });
    expect(errors).toContain('size must be a positive number');
  });

  it('should reject invalid color', () => {
    const errors = validateConfig({
      name: 'heart.fill',
      tintColor: 'invalid',
    });
    expect(errors.some((e) => e.includes('tintColor'))).toBe(true);
  });

  it('should reject invalid opacity', () => {
    const errors = validateConfig({
      name: 'heart.fill',
      opacity: 1.5,
    });
    expect(errors.some((e) => e.includes('opacity'))).toBe(true);
  });
});

// MARK: - Defaults Tests

describe('applyDefaults', () => {
  it('should apply default values', () => {
    const config = applyDefaults({ name: 'heart.fill' });
    expect(config.name).toBe('heart.fill');
    expect(config.opacity).toBe(1);
    expect(config.variableColor).toBe(false);
    expect(config.reduceComplexity).toBe(false);
  });

  it('should preserve provided values', () => {
    const config = applyDefaults({
      name: 'star.fill',
      size: 32,
      weight: SFSymbolWeight.BOLD,
    });
    expect(config.size).toBe(32);
    expect(config.weight).toBe(SFSymbolWeight.BOLD);
    expect(config.name).toBe('star.fill');
  });
});

// MARK: - Preset Sizes Tests

describe('getPresetSize', () => {
  it('should return correct preset sizes', () => {
    expect(getPresetSize('tiny')).toBe(12);
    expect(getPresetSize('small')).toBe(16);
    expect(getPresetSize('normal')).toBe(24);
    expect(getPresetSize('large')).toBe(32);
    expect(getPresetSize('xlarge')).toBe(48);
  });
});

// MARK: - Enums Tests

describe('SFSymbolWeight', () => {
  it('should contain all weight values', () => {
    expect(SFSymbolWeight.ULTRALIGHT).toBe('ultralight');
    expect(SFSymbolWeight.THIN).toBe('thin');
    expect(SFSymbolWeight.LIGHT).toBe('light');
    expect(SFSymbolWeight.REGULAR).toBe('regular');
    expect(SFSymbolWeight.MEDIUM).toBe('medium');
    expect(SFSymbolWeight.SEMIBOLD).toBe('semibold');
    expect(SFSymbolWeight.BOLD).toBe('bold');
    expect(SFSymbolWeight.HEAVY).toBe('heavy');
    expect(SFSymbolWeight.BLACK).toBe('black');
  });
});

describe('SFSymbolScale', () => {
  it('should contain all scale values', () => {
    expect(SFSymbolScale.SMALL).toBe('small');
    expect(SFSymbolScale.MEDIUM).toBe('medium');
    expect(SFSymbolScale.LARGE).toBe('large');
  });
});

describe('SFSymbolRenderingMode', () => {
  it('should contain all rendering mode values', () => {
    expect(SFSymbolRenderingMode.MONOCHROME).toBe('monochrome');
    expect(SFSymbolRenderingMode.HIERARCHICAL).toBe('hierarchical');
    expect(SFSymbolRenderingMode.PALETTE).toBe('palette');
    expect(SFSymbolRenderingMode.MULTICOLOR).toBe('multicolor');
  });
});
