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
 * This comprehensive set includes 200+ symbols organized by category from SF Symbols 7.
 *
 * @enum {string}
 * @example
 * ```tsx
 * <SFSymbolView name={SFIcons.THERMOMETER_SUN_FILL} />
 * ```
 */
export enum SFIcons {
  // ==================== Weather (15) ====================
  THERMOMETER_SUN_FILL = 'thermometer.sun.fill',
  THERMOMETER_SNOWFLAKE = 'thermometer.snowflake',
  THERMOMETER = 'thermometer',
  CLOUD = 'cloud',
  CLOUD_FILL = 'cloud.fill',
  CLOUD_SUN = 'cloud.sun',
  CLOUD_SUN_FILL = 'cloud.sun.fill',
  CLOUD_RAIN = 'cloud.rain',
  CLOUD_RAIN_FILL = 'cloud.rain.fill',
  CLOUD_SNOW = 'cloud.snow',
  CLOUD_SNOW_FILL = 'cloud.snow.fill',
  WIND = 'wind',
  WIND_SNOW = 'wind.snow',
  TORNADO = 'tornado',
  HURRICANE = 'hurricane',

  // ==================== Navigation & Arrows (30) ====================
  CHEVRON_LEFT = 'chevron.left',
  CHEVRON_RIGHT = 'chevron.right',
  CHEVRON_UP = 'chevron.up',
  CHEVRON_DOWN = 'chevron.down',
  CHEVRON_LEFT_SLASH_CHEVRON_RIGHT = 'chevron.left.slash.chevron.right',
  CHEVRON_UP_CHEVRON_DOWN = 'chevron.up.chevron.down',
  ARROW_LEFT = 'arrow.left',
  ARROW_RIGHT = 'arrow.right',
  ARROW_UP = 'arrow.up',
  ARROW_DOWN = 'arrow.down',
  ARROW_UP_LEFT = 'arrow.up.left',
  ARROW_UP_RIGHT = 'arrow.up.right',
  ARROW_DOWN_LEFT = 'arrow.down.left',
  ARROW_DOWN_RIGHT = 'arrow.down.right',
  ARROW_LEFT_CIRCLE = 'arrow.left.circle',
  ARROW_LEFT_CIRCLE_FILL = 'arrow.left.circle.fill',
  ARROW_RIGHT_CIRCLE = 'arrow.right.circle',
  ARROW_RIGHT_CIRCLE_FILL = 'arrow.right.circle.fill',
  ARROW_UP_CIRCLE = 'arrow.up.circle',
  ARROW_UP_CIRCLE_FILL = 'arrow.up.circle.fill',
  ARROW_DOWN_CIRCLE = 'arrow.down.circle',
  ARROW_DOWN_CIRCLE_FILL = 'arrow.down.circle.fill',
  ARROW_TURN_UP_LEFT = 'arrow.turn.up.left',
  ARROW_TURN_UP_RIGHT = 'arrow.turn.up.right',
  ARROW_TURN_DOWN_LEFT = 'arrow.turn.down.left',
  ARROW_TURN_DOWN_RIGHT = 'arrow.turn.down.right',
  ARROW_UP_AND_DOWN = 'arrow.up.and.down',
  ARROW_LEFT_AND_RIGHT = 'arrow.left.and.right',
  ARROW_CLOCKWISE = 'arrow.clockwise',
  ARROW_COUNTERCLOCKWISE = 'arrow.counterclockwise',

  // ==================== Common UI Controls (25) ====================
  PLUS = 'plus',
  PLUS_CIRCLE = 'plus.circle',
  PLUS_CIRCLE_FILL = 'plus.circle.fill',
  PLUS_SQUARE = 'plus.square',
  PLUS_SQUARE_FILL = 'plus.square.fill',
  MINUS = 'minus',
  MINUS_CIRCLE = 'minus.circle',
  MINUS_CIRCLE_FILL = 'minus.circle.fill',
  MINUS_SQUARE = 'minus.square',
  MINUS_SQUARE_FILL = 'minus.square.fill',
  MULTIPLY = 'multiply',
  MULTIPLY_CIRCLE = 'multiply.circle',
  MULTIPLY_CIRCLE_FILL = 'multiply.circle.fill',
  XMARK = 'xmark',
  XMARK_CIRCLE = 'xmark.circle',
  XMARK_CIRCLE_FILL = 'xmark.circle.fill',
  XMARK_SQUARE = 'xmark.square',
  XMARK_SQUARE_FILL = 'xmark.square.fill',
  CHECKMARK = 'checkmark',
  CHECKMARK_CIRCLE = 'checkmark.circle',
  CHECKMARK_CIRCLE_FILL = 'checkmark.circle.fill',
  CHECKMARK_SQUARE = 'checkmark.square',
  CHECKMARK_SQUARE_FILL = 'checkmark.square.fill',
  EXCLAMATIONMARK = 'exclamationmark',
  EXCLAMATIONMARK_CIRCLE_FILL = 'exclamationmark.circle.fill',

  // ==================== Media & Playback (20) ====================
  PLAY = 'play',
  PLAY_FILL = 'play.fill',
  PLAY_CIRCLE = 'play.circle',
  PLAY_CIRCLE_FILL = 'play.circle.fill',
  PAUSE = 'pause',
  PAUSE_FILL = 'pause.fill',
  PAUSE_CIRCLE = 'pause.circle',
  PAUSE_CIRCLE_FILL = 'pause.circle.fill',
  STOP = 'stop',
  STOP_FILL = 'stop.fill',
  STOP_CIRCLE = 'stop.circle',
  STOP_CIRCLE_FILL = 'stop.circle.fill',
  PLAYPAUSE = 'playpause',
  PLAYPAUSE_FILL = 'playpause.fill',
  BACKWARD_FILL = 'backward.fill',
  FORWARD_FILL = 'forward.fill',
  BACKWARD_END_FILL = 'backward.end.fill',
  FORWARD_END_FILL = 'forward.end.fill',
  EJECT = 'eject',
  EJECT_FILL = 'eject.fill',

  // ==================== Share & Action (15) ====================
  SQUARE_AND_ARROW_UP = 'square.and.arrow.up',
  SQUARE_AND_ARROW_UP_FILL = 'square.and.arrow.up.fill',
  SQUARE_AND_ARROW_DOWN = 'square.and.arrow.down',
  SQUARE_AND_ARROW_DOWN_FILL = 'square.and.arrow.down.fill',
  SQUARE_AND_ARROW_UP_ON_SQUARE = 'square.and.arrow.up.on.square',
  SQUARE_AND_ARROW_UP_ON_SQUARE_FILL = 'square.and.arrow.up.on.square.fill',
  SQUARE_AND_ARROW_DOWN_ON_SQUARE = 'square.and.arrow.down.on.square',
  SQUARE_AND_ARROW_DOWN_ON_SQUARE_FILL = 'square.and.arrow.down.on.square.fill',
  SQUARE_AND_PENCIL = 'square.and.pencil',
  SQUARE_AND_PENCIL_FILL = 'square.and.pencil.fill',
  PAPERPLANE = 'paperplane',
  PAPERPLANE_FILL = 'paperplane.fill',
  LINK = 'link',
  LINK_CIRCLE = 'link.circle',
  LINK_CIRCLE_FILL = 'link.circle.fill',

  // ==================== Communication (20) ====================
  ENVELOPE = 'envelope',
  ENVELOPE_FILL = 'envelope.fill',
  ENVELOPE_CIRCLE = 'envelope.circle',
  ENVELOPE_CIRCLE_FILL = 'envelope.circle.fill',
  ENVELOPE_OPEN = 'envelope.open',
  ENVELOPE_OPEN_FILL = 'envelope.open.fill',
  PHONE = 'phone',
  PHONE_FILL = 'phone.fill',
  PHONE_CIRCLE = 'phone.circle',
  PHONE_CIRCLE_FILL = 'phone.circle.fill',
  PHONE_BADGE_PLUS = 'phone.badge.plus',
  PHONE_BADGE_PLUS_FILL = 'phone.badge.plus.fill',
  TELEPHONE = 'teletype',
  MESSAGE = 'message',
  MESSAGE_FILL = 'message.fill',
  MESSAGE_CIRCLE = 'message.circle',
  MESSAGE_CIRCLE_FILL = 'message.circle.fill',
  BUBBLE_LEFT = 'bubble.left',
  BUBBLE_LEFT_FILL = 'bubble.left.fill',
  BUBBLE_RIGHT = 'bubble.right',

  // ==================== Search & Settings (15) ====================
  MAGNIFYINGGLASS = 'magnifyingglass',
  MAGNIFYINGGLASS_CIRCLE = 'magnifyingglass.circle',
  MAGNIFYINGGLASS_CIRCLE_FILL = 'magnifyingglass.circle.fill',
  PLUS_MAGNIFYINGGLASS = 'plus.magnifyingglass',
  MINUS_MAGNIFYINGGLASS = 'minus.magnifyingglass',
  GEAR = 'gear',
  GEARSHAPE = 'gearshape',
  GEARSHAPE_FILL = 'gearshape.fill',
  SLIDERS_HORIZONTAL_3 = 'slider.horizontal.3',
  ELLIPSIS = 'ellipsis',
  ELLIPSIS_CIRCLE = 'ellipsis.circle',
  ELLIPSIS_CIRCLE_FILL = 'ellipsis.circle.fill',
  TOGGLE_POWER = 'power',
  CONTROL = 'control',

  // ==================== User & Account (20) ====================
  PERSON = 'person',
  PERSON_FILL = 'person.fill',
  PERSON_CIRCLE = 'person.circle',
  PERSON_CIRCLE_FILL = 'person.circle.fill',
  PERSON_2 = 'person.2',
  PERSON_2_FILL = 'person.2.fill',
  PERSON_3 = 'person.3',
  PERSON_3_FILL = 'person.3.fill',
  PERSON_CROP_CIRCLE = 'person.crop.circle',
  PERSON_CROP_CIRCLE_FILL = 'person.crop.circle.fill',
  PERSON_BADGE_PLUS = 'person.badge.plus',
  PERSON_BADGE_PLUS_FILL = 'person.badge.plus.fill',
  PERSON_BADGE_MINUS = 'person.badge.minus',
  PERSON_BADGE_MINUS_FILL = 'person.badge.minus.fill',
  PERSON_CROP_SQUARE = 'person.crop.square',
  PERSON_CROP_SQUARE_FILL = 'person.crop.square.fill',

  // ==================== Security & Protection (15) ====================
  KEY = 'key',
  KEY_FILL = 'key.fill',
  LOCK = 'lock',
  LOCK_FILL = 'lock.fill',
  LOCK_CIRCLE = 'lock.circle',
  LOCK_CIRCLE_FILL = 'lock.circle.fill',
  LOCK_OPEN = 'lock.open',
  LOCK_OPEN_FILL = 'lock.open.fill',
  LOCK_SLASH = 'lock.slash',
  LOCK_SLASH_FILL = 'lock.slash.fill',
  SHIELD = 'shield',
  SHIELD_FILL = 'shield.fill',
  SHIELD_SLASH = 'shield.slash',
  SHIELD_SLASH_FILL = 'shield.slash.fill',
  CHECKMARK_SHIELD_FILL = 'checkmark.shield.fill',

  // ==================== File & Document (25) ====================
  BOOKMARK = 'bookmark',
  BOOKMARK_FILL = 'bookmark.fill',
  BOOKMARK_CIRCLE = 'bookmark.circle',
  BOOKMARK_CIRCLE_FILL = 'bookmark.circle.fill',
  FOLDER = 'folder',
  FOLDER_FILL = 'folder.fill',
  FOLDER_CIRCLE = 'folder.circle',
  FOLDER_CIRCLE_FILL = 'folder.circle.fill',
  FOLDER_BADGE_PLUS = 'folder.badge.plus',
  FOLDER_BADGE_PLUS_FILL = 'folder.badge.plus.fill',
  FOLDER_BADGE_MINUS = 'folder.badge.minus',
  FOLDER_BADGE_MINUS_FILL = 'folder.badge.minus.fill',
  FILE = 'file',
  FILE_FILL = 'file.fill',
  DOC = 'doc',
  DOC_FILL = 'doc.fill',
  DOC_TEXT = 'doc.text',
  DOC_TEXT_FILL = 'doc.text.fill',
  DOC_ON_DOC = 'doc.on.doc',
  DOC_ON_DOC_FILL = 'doc.on.doc.fill',
  TRASH = 'trash',
  TRASH_FILL = 'trash.fill',
  TRASH_CIRCLE = 'trash.circle',
  TRASH_CIRCLE_FILL = 'trash.circle.fill',
  ARCHIVEBOX = 'archivebox',
  ARCHIVEBOX_FILL = 'archivebox.fill',

  // ==================== Commerce & Shopping (20) ====================
  CART = 'cart',
  CART_FILL = 'cart.fill',
  CART_BADGE_PLUS = 'cart.badge.plus',
  CART_BADGE_PLUS_FILL = 'cart.badge.plus.fill',
  CART_BADGE_MINUS = 'cart.badge.minus',
  CART_BADGE_MINUS_FILL = 'cart.badge.minus.fill',
  BAG = 'bag',
  BAG_FILL = 'bag.fill',
  BAG_BADGE_PLUS = 'bag.badge.plus',
  BAG_BADGE_PLUS_FILL = 'bag.badge.plus.fill',
  BAG_BADGE_MINUS = 'bag.badge.minus',
  BAG_BADGE_MINUS_FILL = 'bag.badge.minus.fill',
  CREDITCARD = 'creditcard',
  CREDITCARD_FILL = 'creditcard.fill',
  DOLLARSIGN_CIRCLE = 'dollarsign.circle',
  DOLLARSIGN_CIRCLE_FILL = 'dollarsign.circle.fill',
  EUROSIGN_CIRCLE = 'eurosign.circle',
  EUROSIGN_CIRCLE_FILL = 'eurosign.circle.fill',
  GIFT = 'gift',
  GIFT_FILL = 'gift.fill',

  // ==================== Activity & Health (31) ====================
  HEART = 'heart',
  HEART_FILL = 'heart.fill',
  HEART_CIRCLE = 'heart.circle',
  HEART_CIRCLE_FILL = 'heart.circle.fill',
  HEART_SLASH = 'heart.slash',
  HEART_SLASH_FILL = 'heart.slash.fill',
  SUIT_HEART = 'suit.heart',
  SUIT_HEART_FILL = 'suit.heart.fill',
  STAR = 'star',
  STAR_FILL = 'star.fill',
  STAR_CIRCLE = 'star.circle',
  STAR_CIRCLE_FILL = 'star.circle.fill',
  STAR_SLASH = 'star.slash',
  STAR_SLASH_FILL = 'star.slash.fill',
  STAR_LEFTHALF_FILL = 'star.lefthalf.fill',
  FLAME = 'flame',
  FLAME_FILL = 'flame.fill',
  LIGHTBULB = 'lightbulb',
  LIGHTBULB_FILL = 'lightbulb.fill',
  LIGHTBULB_SLASH = 'lightbulb.slash',
  LIGHTBULB_SLASH_FILL = 'lightbulb.slash.fill',
  BOLT = 'bolt',
  BOLT_FILL = 'bolt.fill',
  BOLT_CIRCLE = 'bolt.circle',
  BOLT_CIRCLE_FILL = 'bolt.circle.fill',
  FLAG = 'flag',
  FLAG_FILL = 'flag.fill',
  FLAG_CIRCLE = 'flag.circle',
  FLAG_CIRCLE_FILL = 'flag.circle.fill',
  FLAG_SLASH = 'flag.slash',
  FLAG_SLASH_FILL = 'flag.slash.fill',

  // ==================== Notification & Alert (12) ====================
  BELL = 'bell',
  BELL_FILL = 'bell.fill',
  BELL_CIRCLE = 'bell.circle',
  BELL_CIRCLE_FILL = 'bell.circle.fill',
  BELL_SLASH = 'bell.slash',
  BELL_SLASH_FILL = 'bell.slash.fill',
  EXCLAMATIONMARK_TRIANGLE = 'exclamationmark.triangle',
  EXCLAMATIONMARK_TRIANGLE_FILL = 'exclamationmark.triangle.fill',
  QUESTIONMARK = 'questionmark',
  QUESTIONMARK_CIRCLE = 'questionmark.circle',
  QUESTIONMARK_CIRCLE_FILL = 'questionmark.circle.fill',
  EXCLAMATIONMARK_OCTAGON_FILL = 'exclamationmark.octagon.fill',

  // ==================== Maps & Location (20) ====================
  LOCATION = 'location',
  LOCATION_FILL = 'location.fill',
  LOCATION_CIRCLE = 'location.circle',
  LOCATION_CIRCLE_FILL = 'location.circle.fill',
  LOCATION_SLASH = 'location.slash',
  LOCATION_SLASH_FILL = 'location.slash.fill',
  LOCATION_NORTH = 'location.north',
  LOCATION_NORTH_FILL = 'location.north.fill',
  LOCATION_NORTH_LINE_FILL = 'location.north.line.fill',
  MAPPIN = 'mappin',
  MAPPIN_CIRCLE = 'mappin.circle',
  MAPPIN_CIRCLE_FILL = 'mappin.circle.fill',
  MAPPIN_SLASH = 'mappin.slash',
  MAPPIN_AND_ELLIPSE = 'mappin.and.ellipse',
  MAP = 'map',
  MAP_FILL = 'map.fill',
  COMPASS = 'compass',
  COMPASS_FILL = 'compass.fill',
  COMPASS_DRAWING = 'compass.drawing',

  // ==================== Time & Date (15) ====================
  CLOCK = 'clock',
  CLOCK_FILL = 'clock.fill',
  CLOCK_CIRCLE = 'clock.circle',
  CLOCK_CIRCLE_FILL = 'clock.circle.fill',
  ALARM = 'alarm',
  ALARM_FILL = 'alarm.fill',
  CALENDAR = 'calendar',
  CALENDAR_CIRCLE = 'calendar.circle',
  CALENDAR_CIRCLE_FILL = 'calendar.circle.fill',
  CALENDAR_BADGE_PLUS = 'calendar.badge.plus',
  CALENDAR_BADGE_MINUS = 'calendar.badge.minus',
  TIMER = 'timer',
  TIMER_CIRCLE = 'timer.circle',
  STOPWATCH = 'stopwatch',
  STOPWATCH_FILL = 'stopwatch.fill',

  // ==================== Shapes & Symbols (20) ====================
  CIRCLE = 'circle',
  CIRCLE_FILL = 'circle.fill',
  CIRCLE_LEFTHALF_FILL = 'circle.lefthalf.fill',
  CIRCLE_RIGHTHALF_FILL = 'circle.righthalf.fill',
  SQUARE = 'square',
  SQUARE_FILL = 'square.fill',
  SQUARE_LEFTHALF_FILL = 'square.lefthalf.fill',
  SQUARE_RIGHTHALF_FILL = 'square.righthalf.fill',
  TRIANGLE = 'triangle',
  TRIANGLE_FILL = 'triangle.fill',
  TRIANGLE_LEFTHALF_FILL = 'triangle.lefthalf.fill',
  TRIANGLE_RIGHTHALF_FILL = 'triangle.righthalf.fill',
  RECTANGLE = 'rectangle',
  RECTANGLE_FILL = 'rectangle.fill',
  HEXAGON = 'hexagon',
  HEXAGON_FILL = 'hexagon.fill',
  CAPSULE = 'capsule',
  CAPSULE_FILL = 'capsule.fill',
  RHOMBUS = 'rhombus',
  RHOMBUS_FILL = 'rhombus.fill',

  // ==================== Grid & Layout (12) ====================
  SQUARE_GRID_2X2 = 'square.grid.2x2',
  SQUARE_GRID_2X2_FILL = 'square.grid.2x2.fill',
  SQUARE_GRID_3X2 = 'square.grid.3x2',
  SQUARE_GRID_3X2_FILL = 'square.grid.3x2.fill',
  SQUARE_GRID_4X3_FILL = 'square.grid.4x3.fill',
  RECTANGLE_GRID_3X2 = 'rectangle.grid.3x2',
  RECTANGLE_GRID_3X2_FILL = 'rectangle.grid.3x2.fill',
  RECTANGLE_GRID_2X2 = 'rectangle.grid.2x2',
  RECTANGLE_GRID_2X2_FILL = 'rectangle.grid.2x2.fill',
  CIRCLE_GRID_3X3 = 'circle.grid.3x3',
  CIRCLE_GRID_3X3_FILL = 'circle.grid.3x3.fill',
  TABLE_BADGE_MORE = 'table.badge.more',

  // ==================== Text & Editing (18) ====================
  PENCIL = 'pencil',
  PENCIL_CIRCLE = 'pencil.circle',
  PENCIL_CIRCLE_FILL = 'pencil.circle.fill',
  PENCIL_SLASH = 'pencil.slash',
  PENCIL_TIP = 'pencil.tip',
  PAINTBRUSH = 'paintbrush',
  PAINTBRUSH_FILL = 'paintbrush.fill',
  HIGHLIGHTER = 'marker',
  A_LETTER = 'a',
  A_CIRCLE = 'a.circle',
  A_CIRCLE_FILL = 'a.circle.fill',
  A_SQUARE = 'a.square',
  A_SQUARE_FILL = 'a.square.fill',
  TEXTFORMAT = 'textformat',
  TEXTFORMAT_ALT = 'textformat.alt',
  TEXTFORMAT_SIZE = 'textformat.size',
  BOLD = 'bold',
  ITALIC = 'italic',

  // ==================== Image & Media (15) ====================
  PHOTO = 'photo',
  PHOTO_FILL = 'photo.fill',
  PHOTO_ON_RECTANGLE = 'photo.on.rectangle',
  PHOTO_FILL_ON_RECTANGLE_FILL = 'photo.fill.on.rectangle.fill',
  CAMERA = 'camera',
  CAMERA_FILL = 'camera.fill',
  CAMERA_CIRCLE = 'camera.circle',
  CAMERA_CIRCLE_FILL = 'camera.circle.fill',
  CAMERA_ROTATE = 'camera.rotate',
  CAMERA_ROTATE_FILL = 'camera.rotate.fill',
  CAMERA_ON_RECTANGLE = 'camera.on.rectangle',
  CAMERA_ON_RECTANGLE_FILL = 'camera.on.rectangle.fill',
  VIDEO = 'video',
  VIDEO_FILL = 'video.fill',
  VIDEO_CIRCLE_FILL = 'video.circle.fill',

  // ==================== Audio & Music (12) ====================
  SPEAKER = 'speaker',
  SPEAKER_FILL = 'speaker.fill',
  SPEAKER_SLASH = 'speaker.slash',
  SPEAKER_SLASH_FILL = 'speaker.slash.fill',
  SPEAKER_ZZZ = 'speaker.zzz',
  SPEAKER_ZZZ_FILL = 'speaker.zzz.fill',
  MUSIC_NOTE = 'music.note',
  MUSIC_NOTE_LIST = 'music.note.list',
  MUSIC_HOUSE = 'music.house',
  MUSIC_HOUSE_FILL = 'music.house.fill',
  MIC = 'mic',
  MIC_FILL = 'mic.fill',

  // ==================== Utilities & Tools (20) ====================
  WRENCH = 'wrench',
  WRENCH_FILL = 'wrench.fill',
  HAMMER = 'hammer',
  HAMMER_FILL = 'hammer.fill',
  SCREWDRIVER = 'screwdriver',
  SCREWDRIVER_FILL = 'screwdriver.fill',
  EYEDROPPER = 'eyedropper',
  EYEDROPPER_HALFFULL = 'eyedropper.halffull',
  EYEDROPPER_FULL = 'eyedropper.full',
  PRINTER = 'printer',
  PRINTER_FILL = 'printer.fill',
  BANDAGE = 'bandage',
  BANDAGE_FILL = 'bandage.fill',
  BRIEFCASE = 'briefcase',
  BRIEFCASE_FILL = 'briefcase.fill',
  HOUSE = 'house',
  HOUSE_FILL = 'house.fill',
  BOOKS_VERTICAL = 'books.vertical',
  BOOKS_VERTICAL_FILL = 'books.vertical.fill',
  BOOK = 'book',
  BOOK_FILL = 'book.fill',

  // ==================== Numbers & Symbols (10) ====================
  NUMBER = 'number',
  NUMBER_CIRCLE = 'number.circle',
  NUMBER_CIRCLE_FILL = 'number.circle.fill',
  NUMBER_SQUARE = 'number.square',
  NUMBER_SQUARE_FILL = 'number.square.fill',
  DIVIDE = 'divide',
  DIVIDE_CIRCLE = 'divide.circle',
  DIVIDE_CIRCLE_FILL = 'divide.circle.fill',
  PERCENT = 'percent',
  SUM = 'sum',

  // ==================== Additional UI Elements (15) ====================
  GEAR_BADGE = 'gear.badge',
  TRAY = 'tray',
  TRAY_FILL = 'tray.fill',
  TRAY_2 = 'tray.2',
  TRAY_2_FILL = 'tray.2.fill',
  TRAY_FULL = 'tray.full',
  TRAY_FULL_FILL = 'tray.full.fill',
  PAPERCLIP = 'paperclip',
  PAPERCLIP_CIRCLE = 'paperclip.circle',
  PAPERCLIP_CIRCLE_FILL = 'paperclip.circle.fill',
  RECTANGLE_AND_PAPERCLIP = 'rectangle.and.paperclip',
  INFO = 'info',
  INFO_CIRCLE = 'info.circle',
  INFO_CIRCLE_FILL = 'info.circle.fill',
  KEYBOARD = 'keyboard',
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
