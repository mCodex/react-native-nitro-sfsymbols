/**
 * SF Symbols Icon Names and Utility Constants
 *
 * This module provides a curated set of commonly used SF Symbol names
 * and utility functions. This approach enables better tree-shaking and
 * reduces bundle size compared to generating all available symbols.
 *
 * Note: Apple provides 5000+ SF Symbols. This module includes the most
 * commonly used ones. For the complete list, visit:
 * https://developer.apple.com/sf-symbols/
 *
 * @module icons
 */

/**
 * Enum of commonly used SF Symbol names for improved type safety and IDE autocomplete.
 * Using enums allows for better tree-shaking and compile-time validation.
 *
 * @enum {string}
 * @example
 * ```tsx
 * <SFSymbolView name={SFIcons.THERMOMETER_SUN_FILL} />
 * ```
 */
export enum SFIcons {
  // Weather
  THERMOMETER_SUN_FILL = 'thermometer.sun.fill',
  THERMOMETER_LOW = 'thermometer.low',
  THERMOMETER_HIGH = 'thermometer.high',
  CLOUD_FILL = 'cloud.fill',
  CLOUD_SUN_FILL = 'cloud.sun.fill',
  CLOUD_RAIN_FILL = 'cloud.rain.fill',
  WIND = 'wind',
  SNOWFLAKE = 'snowflake',
  MOON_STARS_FILL = 'moon.stars.fill',
  SUN_MAX_FILL = 'sun.max.fill',

  // Navigation
  CHEVRON_LEFT = 'chevron.left',
  CHEVRON_RIGHT = 'chevron.right',
  CHEVRON_UP = 'chevron.up',
  CHEVRON_DOWN = 'chevron.down',
  ARROW_LEFT = 'arrow.left',
  ARROW_RIGHT = 'arrow.right',
  ARROW_UP = 'arrow.up',
  ARROW_DOWN = 'arrow.down',
  ARROW_LEFT_CIRCLE_FILL = 'arrow.left.circle.fill',
  ARROW_RIGHT_CIRCLE_FILL = 'arrow.right.circle.fill',

  // Common UI
  PLUS = 'plus',
  MINUS = 'minus',
  XMARK = 'xmark',
  CHECKMARK = 'checkmark',
  CHECKMARK_CIRCLE_FILL = 'checkmark.circle.fill',
  XMARK_CIRCLE_FILL = 'xmark.circle.fill',
  EXCLAMATION_MARK_TRIANGLE_FILL = 'exclamationmark.triangle.fill',
  QUESTION_CIRCLE_FILL = 'questionmark.circle.fill',

  // Media
  PLAY_FILL = 'play.fill',
  PAUSE_FILL = 'pause.fill',
  STOP_FILL = 'stop.fill',
  PLAY_CIRCLE_FILL = 'play.circle.fill',
  SQUARE_AND_ARROW_UP = 'square.and.arrow.up',
  SQUARE_AND_ARROW_DOWN = 'square.and.arrow.down',
  SQUARE_AND_ARROW_UP_ON_SQUARE_FILL = 'square.and.arrow.up.on.square.fill',

  // Communication
  ENVELOPE_FILL = 'envelope.fill',
  PHONE_FILL = 'phone.fill',
  PHONE_CIRCLE_FILL = 'phone.circle.fill',
  MESSAGE_FILL = 'message.fill',
  BUBBLE_LEFT_AND_BUBBLE_RIGHT_FILL = 'bubble.left.and.bubble.right.fill',

  // Search & Settings
  MAGNIFYINGGLASS = 'magnifyingglass',
  GEAR = 'gear',
  GEAR_BADGE = 'gear.badge',
  SLIDERS_HORIZONTAL = 'sliders.horizontal',
  ELLIPSIS = 'ellipsis',
  ELLIPSIS_CIRCLE = 'ellipsis.circle',

  // User & Account
  PERSON_FILL = 'person.fill',
  PERSON_CIRCLE_FILL = 'person.circle.fill',
  PERSON_2_FILL = 'person.2.fill',
  PERSON_3_FILL = 'person.3.fill',
  KEY_FILL = 'key.fill',
  LOCK_FILL = 'lock.fill',
  LOCK_OPEN_FILL = 'lock.open.fill',
  SHIELD_FILL = 'shield.fill',

  // File & Document
  FOLDER_FILL = 'folder.fill',
  FOLDER_OPEN_FILL = 'folder.open.fill',
  FILE_FILL = 'file.fill',
  DOCUMENT_FILL = 'document.fill',
  TRASH_FILL = 'trash.fill',
  ARCHIVEBOX_FILL = 'archivebox.fill',

  // Commerce
  CART_FILL = 'cart.fill',
  BAG_FILL = 'bag.fill',
  CREDITCARD_FILL = 'creditcard.fill',
  DOLLARSIGN_CIRCLE_FILL = 'dollarsign.circle.fill',
  GIFT_FILL = 'gift.fill',

  // Activity & Health
  HEART_FILL = 'heart.fill',
  STAR_FILL = 'star.fill',
  FLAME_FILL = 'flame.fill',
  LIGHTBULB_FILL = 'lightbulb.fill',
  BELL_FILL = 'bell.fill',
  BELL_SLASH_FILL = 'bell.slash.fill',

  // Maps & Location
  LOCATION_FILL = 'location.fill',
  LOCATION_CIRCLE_FILL = 'location.circle.fill',
  MAPPIN_AND_ELLIPSE = 'mappin.and.ellipse',
  MAP_FILL = 'map.fill',
  COMPASS_DRAWING = 'compass.drawing',

  // Utilities
  INFO_CIRCLE_FILL = 'info.circle.fill',
  CLOCK_FILL = 'clock.fill',
  CALENDAR = 'calendar',
  TIMER = 'timer',
  STOPWATCH_FILL = 'stopwatch.fill',
}

/**
 * Default configuration values for SF Symbols.
 * These values are used when properties are not explicitly provided.
 *
 * @constant
 */
export const SF_SYMBOL_DEFAULTS = {
  /** Default symbol size in points */
  SIZE: 24,

  /** Default rendering mode */
  RENDERING_MODE: 'monochrome',

  /** Default symbol weight */
  WEIGHT: 'regular',

  /** Default symbol scale */
  SCALE: 'medium',

  /** Default opacity (fully opaque) */
  OPACITY: 1,

  /** Default tint color */
  TINT_COLOR: '#000000',
} as const;

/**
 * Type-safe helper to validate if a string is a valid icon name.
 * Useful for runtime validation when receiving symbols from external sources.
 *
 * @param {string} name - The symbol name to validate
 * @returns {boolean} Whether the name is a valid SF Symbol icon
 * @example
 * ```ts
 * if (isValidSFIcon('thermometer.sun.fill')) {
 *   // render symbol
 * }
 * ```
 */
export function isValidSFIcon(name: string): name is SFIcons {
  return Object.values(SFIcons).includes(name as SFIcons);
}

/**
 * Get all available SF Symbol icon names.
 * Useful for dynamic symbol selection or validation.
 *
 * @returns {string[]} Array of all valid SF Symbol names
 */
export function getAllSFIcons(): string[] {
  return Object.values(SFIcons);
}

/**
 * Convert a camelCase icon name to the SF Symbol format.
 * This is a utility function for programmatic symbol generation.
 *
 * @param {string} camelCaseName - Name in camelCase format
 * @returns {string} Name converted to SF Symbol format (lowercase with dots)
 * @example
 * ```ts
 * camelCaseToSFSymbol('thermometerSunFill') // 'thermometer.sun.fill'
 * ```
 */
export function camelCaseToSFSymbol(camelCaseName: string): string {
  return camelCaseName
    .replace(/([A-Z])/g, '.$1')
    .toLowerCase()
    .replace(/^\./, '');
}

/**
 * Get icon name by searching through available symbols.
 * Useful for case-insensitive lookups and typo tolerance.
 *
 * @param {string} searchTerm - Search term (case-insensitive)
 * @returns {string | undefined} Matching icon name or undefined
 * @example
 * ```ts
 * searchSFIcon('thermometer') // 'thermometer.sun.fill' (first match)
 * ```
 */
export function searchSFIcon(searchTerm: string): string | undefined {
  const term = searchTerm.toLowerCase();
  return getAllSFIcons().find((icon) => icon.includes(term));
}
