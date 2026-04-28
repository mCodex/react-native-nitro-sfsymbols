/**
 * Curated SF Symbols catalog (~270 entries, SF Symbols 7).
 *
 * The catalog is exported as a `const` object so unused entries are
 * dead-code-eliminated by Metro/webpack. Treat it as opt-in: importing from
 * `react-native-nitro-sfsymbols/icons` is the only way to pull it into your
 * bundle — the core component supports any string name without it.
 *
 * Apple ships 6,000+ SF Symbols. Pass any other name as a plain string:
 *
 * ```tsx
 * <SFSymbolView name="figure.run.circle.fill" />
 * ```
 *
 * @see https://developer.apple.com/sf-symbols/
 * @module icons
 */

/**
 * Curated SF Symbol names. Tree-shakable: only the entries you reference
 * survive the production bundle.
 *
 * @example
 * ```ts
 * import { SFIcons } from 'react-native-nitro-sfsymbols/icons';
 *
 * <SFSymbolView name={SFIcons.HEART_FILL} />
 * ```
 */
export const SFIcons = {
  // Weather
  THERMOMETER: 'thermometer',
  THERMOMETER_SUN_FILL: 'thermometer.sun.fill',
  THERMOMETER_SNOWFLAKE: 'thermometer.snowflake',
  CLOUD: 'cloud',
  CLOUD_FILL: 'cloud.fill',
  CLOUD_SUN: 'cloud.sun',
  CLOUD_SUN_FILL: 'cloud.sun.fill',
  CLOUD_RAIN: 'cloud.rain',
  CLOUD_RAIN_FILL: 'cloud.rain.fill',
  CLOUD_SNOW: 'cloud.snow',
  CLOUD_SNOW_FILL: 'cloud.snow.fill',
  WIND: 'wind',
  WIND_SNOW: 'wind.snow',
  TORNADO: 'tornado',
  HURRICANE: 'hurricane',

  // Navigation & Arrows
  CHEVRON_LEFT: 'chevron.left',
  CHEVRON_RIGHT: 'chevron.right',
  CHEVRON_UP: 'chevron.up',
  CHEVRON_DOWN: 'chevron.down',
  ARROW_LEFT: 'arrow.left',
  ARROW_RIGHT: 'arrow.right',
  ARROW_UP: 'arrow.up',
  ARROW_DOWN: 'arrow.down',
  ARROW_UP_LEFT: 'arrow.up.left',
  ARROW_UP_RIGHT: 'arrow.up.right',
  ARROW_DOWN_LEFT: 'arrow.down.left',
  ARROW_DOWN_RIGHT: 'arrow.down.right',
  ARROW_LEFT_CIRCLE: 'arrow.left.circle',
  ARROW_LEFT_CIRCLE_FILL: 'arrow.left.circle.fill',
  ARROW_RIGHT_CIRCLE: 'arrow.right.circle',
  ARROW_RIGHT_CIRCLE_FILL: 'arrow.right.circle.fill',
  ARROW_UP_CIRCLE: 'arrow.up.circle',
  ARROW_UP_CIRCLE_FILL: 'arrow.up.circle.fill',
  ARROW_DOWN_CIRCLE: 'arrow.down.circle',
  ARROW_DOWN_CIRCLE_FILL: 'arrow.down.circle.fill',
  ARROW_CLOCKWISE: 'arrow.clockwise',
  ARROW_COUNTERCLOCKWISE: 'arrow.counterclockwise',

  // UI Controls
  PLUS: 'plus',
  PLUS_CIRCLE: 'plus.circle',
  PLUS_CIRCLE_FILL: 'plus.circle.fill',
  PLUS_SQUARE: 'plus.square',
  PLUS_SQUARE_FILL: 'plus.square.fill',
  MINUS: 'minus',
  MINUS_CIRCLE: 'minus.circle',
  MINUS_CIRCLE_FILL: 'minus.circle.fill',
  MINUS_SQUARE: 'minus.square',
  MINUS_SQUARE_FILL: 'minus.square.fill',
  MULTIPLY: 'multiply',
  MULTIPLY_CIRCLE: 'multiply.circle',
  MULTIPLY_CIRCLE_FILL: 'multiply.circle.fill',
  XMARK: 'xmark',
  XMARK_CIRCLE: 'xmark.circle',
  XMARK_CIRCLE_FILL: 'xmark.circle.fill',
  CHECKMARK: 'checkmark',
  CHECKMARK_CIRCLE: 'checkmark.circle',
  CHECKMARK_CIRCLE_FILL: 'checkmark.circle.fill',
  EXCLAMATIONMARK: 'exclamationmark',
  EXCLAMATIONMARK_CIRCLE_FILL: 'exclamationmark.circle.fill',
  EXCLAMATIONMARK_TRIANGLE: 'exclamationmark.triangle',
  EXCLAMATIONMARK_TRIANGLE_FILL: 'exclamationmark.triangle.fill',
  QUESTIONMARK: 'questionmark',
  QUESTIONMARK_CIRCLE: 'questionmark.circle',
  QUESTIONMARK_CIRCLE_FILL: 'questionmark.circle.fill',

  // Media & Playback
  PLAY: 'play',
  PLAY_FILL: 'play.fill',
  PLAY_CIRCLE: 'play.circle',
  PLAY_CIRCLE_FILL: 'play.circle.fill',
  PAUSE: 'pause',
  PAUSE_FILL: 'pause.fill',
  PAUSE_CIRCLE: 'pause.circle',
  PAUSE_CIRCLE_FILL: 'pause.circle.fill',
  STOP: 'stop',
  STOP_FILL: 'stop.fill',
  PLAYPAUSE: 'playpause',
  PLAYPAUSE_FILL: 'playpause.fill',
  BACKWARD_FILL: 'backward.fill',
  FORWARD_FILL: 'forward.fill',
  BACKWARD_END_FILL: 'backward.end.fill',
  FORWARD_END_FILL: 'forward.end.fill',

  // Share & Action
  SQUARE_AND_ARROW_UP: 'square.and.arrow.up',
  SQUARE_AND_ARROW_UP_FILL: 'square.and.arrow.up.fill',
  SQUARE_AND_ARROW_DOWN: 'square.and.arrow.down',
  SQUARE_AND_ARROW_DOWN_FILL: 'square.and.arrow.down.fill',
  SQUARE_AND_PENCIL: 'square.and.pencil',
  PAPERPLANE: 'paperplane',
  PAPERPLANE_FILL: 'paperplane.fill',
  LINK: 'link',
  LINK_CIRCLE_FILL: 'link.circle.fill',

  // Communication
  ENVELOPE: 'envelope',
  ENVELOPE_FILL: 'envelope.fill',
  ENVELOPE_OPEN: 'envelope.open',
  ENVELOPE_OPEN_FILL: 'envelope.open.fill',
  PHONE: 'phone',
  PHONE_FILL: 'phone.fill',
  MESSAGE: 'message',
  MESSAGE_FILL: 'message.fill',
  BUBBLE_LEFT: 'bubble.left',
  BUBBLE_LEFT_FILL: 'bubble.left.fill',
  BUBBLE_RIGHT: 'bubble.right',
  BUBBLE_RIGHT_FILL: 'bubble.right.fill',

  // Search & Settings
  MAGNIFYINGGLASS: 'magnifyingglass',
  MAGNIFYINGGLASS_CIRCLE: 'magnifyingglass.circle',
  MAGNIFYINGGLASS_CIRCLE_FILL: 'magnifyingglass.circle.fill',
  GEAR: 'gear',
  GEARSHAPE: 'gearshape',
  GEARSHAPE_FILL: 'gearshape.fill',
  SLIDER_HORIZONTAL_3: 'slider.horizontal.3',
  ELLIPSIS: 'ellipsis',
  ELLIPSIS_CIRCLE: 'ellipsis.circle',
  ELLIPSIS_CIRCLE_FILL: 'ellipsis.circle.fill',
  POWER: 'power',

  // User & Account
  PERSON: 'person',
  PERSON_FILL: 'person.fill',
  PERSON_CIRCLE: 'person.circle',
  PERSON_CIRCLE_FILL: 'person.circle.fill',
  PERSON_2: 'person.2',
  PERSON_2_FILL: 'person.2.fill',
  PERSON_3: 'person.3',
  PERSON_3_FILL: 'person.3.fill',
  PERSON_CROP_CIRCLE: 'person.crop.circle',
  PERSON_CROP_CIRCLE_FILL: 'person.crop.circle.fill',
  PERSON_BADGE_PLUS: 'person.badge.plus',
  PERSON_BADGE_PLUS_FILL: 'person.badge.plus.fill',
  PERSON_BADGE_MINUS: 'person.badge.minus',
  PERSON_BADGE_MINUS_FILL: 'person.badge.minus.fill',

  // Security
  KEY: 'key',
  KEY_FILL: 'key.fill',
  LOCK: 'lock',
  LOCK_FILL: 'lock.fill',
  LOCK_OPEN: 'lock.open',
  LOCK_OPEN_FILL: 'lock.open.fill',
  LOCK_SLASH: 'lock.slash',
  SHIELD: 'shield',
  SHIELD_FILL: 'shield.fill',
  CHECKMARK_SHIELD_FILL: 'checkmark.shield.fill',

  // Files & Documents
  BOOKMARK: 'bookmark',
  BOOKMARK_FILL: 'bookmark.fill',
  FOLDER: 'folder',
  FOLDER_FILL: 'folder.fill',
  FOLDER_BADGE_PLUS: 'folder.badge.plus',
  FOLDER_BADGE_PLUS_FILL: 'folder.badge.plus.fill',
  FOLDER_BADGE_MINUS: 'folder.badge.minus',
  FOLDER_BADGE_MINUS_FILL: 'folder.badge.minus.fill',
  FILE: 'doc',
  FILE_FILL: 'doc.fill',
  DOC: 'doc',
  DOC_FILL: 'doc.fill',
  DOC_TEXT: 'doc.text',
  DOC_TEXT_FILL: 'doc.text.fill',
  DOC_ON_DOC: 'doc.on.doc',
  DOC_ON_DOC_FILL: 'doc.on.doc.fill',
  TRASH: 'trash',
  TRASH_FILL: 'trash.fill',
  ARCHIVEBOX: 'archivebox',
  ARCHIVEBOX_FILL: 'archivebox.fill',
  TRAY: 'tray',
  TRAY_FILL: 'tray.fill',
  TRAY_FULL_FILL: 'tray.full.fill',
  PAPERCLIP: 'paperclip',

  // Commerce
  CART: 'cart',
  CART_FILL: 'cart.fill',
  CART_BADGE_PLUS: 'cart.badge.plus',
  CART_BADGE_PLUS_FILL: 'cart.badge.plus.fill',
  CART_BADGE_MINUS: 'cart.badge.minus',
  CART_BADGE_MINUS_FILL: 'cart.badge.minus.fill',
  BAG: 'bag',
  BAG_FILL: 'bag.fill',
  CREDITCARD: 'creditcard',
  CREDITCARD_FILL: 'creditcard.fill',
  DOLLARSIGN_CIRCLE: 'dollarsign.circle',
  DOLLARSIGN_CIRCLE_FILL: 'dollarsign.circle.fill',
  EUROSIGN_CIRCLE: 'eurosign.circle',
  EUROSIGN_CIRCLE_FILL: 'eurosign.circle.fill',
  GIFT: 'gift',
  GIFT_FILL: 'gift.fill',

  // Activity & Health
  HEART: 'heart',
  HEART_FILL: 'heart.fill',
  HEART_CIRCLE: 'heart.circle',
  HEART_CIRCLE_FILL: 'heart.circle.fill',
  HEART_SLASH: 'heart.slash',
  HEART_SLASH_FILL: 'heart.slash.fill',
  STAR: 'star',
  STAR_FILL: 'star.fill',
  STAR_CIRCLE: 'star.circle',
  STAR_CIRCLE_FILL: 'star.circle.fill',
  STAR_SLASH: 'star.slash',
  STAR_LEFTHALF_FILL: 'star.lefthalf.fill',
  FLAME: 'flame',
  FLAME_FILL: 'flame.fill',
  LIGHTBULB: 'lightbulb',
  LIGHTBULB_FILL: 'lightbulb.fill',
  LIGHTBULB_SLASH: 'lightbulb.slash',
  BOLT: 'bolt',
  BOLT_FILL: 'bolt.fill',
  BOLT_CIRCLE: 'bolt.circle',
  BOLT_CIRCLE_FILL: 'bolt.circle.fill',
  FLAG: 'flag',
  FLAG_FILL: 'flag.fill',
  FLAG_CIRCLE: 'flag.circle',
  FLAG_CIRCLE_FILL: 'flag.circle.fill',

  // Notification
  BELL: 'bell',
  BELL_FILL: 'bell.fill',
  BELL_CIRCLE: 'bell.circle',
  BELL_CIRCLE_FILL: 'bell.circle.fill',
  BELL_SLASH: 'bell.slash',
  BELL_SLASH_FILL: 'bell.slash.fill',

  // Maps & Location
  LOCATION: 'location',
  LOCATION_FILL: 'location.fill',
  LOCATION_CIRCLE: 'location.circle',
  LOCATION_CIRCLE_FILL: 'location.circle.fill',
  LOCATION_SLASH: 'location.slash',
  LOCATION_NORTH: 'location.north',
  LOCATION_NORTH_FILL: 'location.north.fill',
  MAPPIN: 'mappin',
  MAPPIN_CIRCLE: 'mappin.circle',
  MAPPIN_CIRCLE_FILL: 'mappin.circle.fill',
  MAPPIN_AND_ELLIPSE: 'mappin.and.ellipse',
  MAP: 'map',
  MAP_FILL: 'map.fill',
  COMPASS: 'compass',
  COMPASS_FILL: 'compass.fill',

  // Time & Date
  CLOCK: 'clock',
  CLOCK_FILL: 'clock.fill',
  CLOCK_CIRCLE: 'clock.circle',
  ALARM: 'alarm',
  ALARM_FILL: 'alarm.fill',
  CALENDAR: 'calendar',
  CALENDAR_CIRCLE: 'calendar.circle',
  CALENDAR_CIRCLE_FILL: 'calendar.circle.fill',
  CALENDAR_BADGE_PLUS: 'calendar.badge.plus',
  CALENDAR_BADGE_MINUS: 'calendar.badge.minus',
  TIMER: 'timer',
  STOPWATCH: 'stopwatch',
  STOPWATCH_FILL: 'stopwatch.fill',

  // Shapes
  CIRCLE: 'circle',
  CIRCLE_FILL: 'circle.fill',
  SQUARE: 'square',
  SQUARE_FILL: 'square.fill',
  TRIANGLE: 'triangle',
  TRIANGLE_FILL: 'triangle.fill',
  RECTANGLE: 'rectangle',
  RECTANGLE_FILL: 'rectangle.fill',
  HEXAGON: 'hexagon',
  HEXAGON_FILL: 'hexagon.fill',
  CAPSULE: 'capsule',
  CAPSULE_FILL: 'capsule.fill',

  // Text & Editing
  PENCIL: 'pencil',
  PENCIL_CIRCLE: 'pencil.circle',
  PENCIL_CIRCLE_FILL: 'pencil.circle.fill',
  PENCIL_TIP: 'pencil.tip',
  PAINTBRUSH: 'paintbrush',
  PAINTBRUSH_FILL: 'paintbrush.fill',
  TEXTFORMAT: 'textformat',
  TEXTFORMAT_SIZE: 'textformat.size',

  // Image & Media
  PHOTO: 'photo',
  PHOTO_FILL: 'photo.fill',
  PHOTO_ON_RECTANGLE: 'photo.on.rectangle',
  CAMERA: 'camera',
  CAMERA_FILL: 'camera.fill',
  CAMERA_CIRCLE: 'camera.circle',
  CAMERA_CIRCLE_FILL: 'camera.circle.fill',
  CAMERA_ROTATE: 'camera.rotate',
  CAMERA_ROTATE_FILL: 'camera.rotate.fill',
  VIDEO: 'video',
  VIDEO_FILL: 'video.fill',
  VIDEO_CIRCLE_FILL: 'video.circle.fill',

  // Audio
  SPEAKER: 'speaker',
  SPEAKER_FILL: 'speaker.fill',
  SPEAKER_SLASH: 'speaker.slash',
  SPEAKER_SLASH_FILL: 'speaker.slash.fill',
  MUSIC_NOTE: 'music.note',
  MUSIC_NOTE_LIST: 'music.note.list',
  MIC: 'mic',
  MIC_FILL: 'mic.fill',
  MIC_SLASH: 'mic.slash',
  MIC_SLASH_FILL: 'mic.slash.fill',

  // Tools & Home
  WRENCH: 'wrench',
  WRENCH_FILL: 'wrench.fill',
  HAMMER: 'hammer',
  HAMMER_FILL: 'hammer.fill',
  PRINTER: 'printer',
  PRINTER_FILL: 'printer.fill',
  HOUSE: 'house',
  HOUSE_FILL: 'house.fill',
  BOOK: 'book',
  BOOK_FILL: 'book.fill',
  BOOKS_VERTICAL: 'books.vertical',
  BOOKS_VERTICAL_FILL: 'books.vertical.fill',
  BRIEFCASE: 'briefcase',
  BRIEFCASE_FILL: 'briefcase.fill',

  // Misc
  INFO: 'info',
  INFO_CIRCLE: 'info.circle',
  INFO_CIRCLE_FILL: 'info.circle.fill',
  KEYBOARD: 'keyboard',
} as const;

/** Curated catalog name. Useful for typing user-facing pickers. */
export type SFIcon = (typeof SFIcons)[keyof typeof SFIcons];
