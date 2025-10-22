/**
 * SF Symbols Example Application - Delightful & Concise
 *
 * A streamlined showcase of react-native-nitro-sfsymbols with:
 * - Interactive weight & scale selector
 * - Live color picker
 * - Organized icon showcase by category
 * - Smooth animations and polished UX
 */

import { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  SFSymbolView,
  SFIcons,
  SFSymbolWeight,
  SFSymbolScale,
} from 'react-native-nitro-sfsymbols';

// Icon categories with samples
const ICON_CATEGORIES = [
  {
    name: '🎨 UI Controls',
    icons: [
      { label: 'Plus', name: SFIcons.PLUS_CIRCLE_FILL },
      { label: 'Minus', name: SFIcons.MINUS_CIRCLE_FILL },
      { label: 'Check', name: SFIcons.CHECKMARK_CIRCLE_FILL },
      { label: 'Close', name: SFIcons.XMARK_CIRCLE_FILL },
      { label: 'Settings', name: SFIcons.GEAR },
      { label: 'Search', name: SFIcons.MAGNIFYINGGLASS },
      { label: 'Menu', name: SFIcons.ELLIPSIS_CIRCLE },
      { label: 'Info', name: SFIcons.INFO_CIRCLE_FILL },
    ],
  },
  {
    name: '❤️ Activity',
    icons: [
      { label: 'Heart', name: SFIcons.HEART_FILL },
      { label: 'Star', name: SFIcons.STAR_FILL },
      { label: 'Flame', name: SFIcons.FLAME_FILL },
      { label: 'Bolt', name: SFIcons.BOLT_CIRCLE_FILL },
      { label: 'Bulb', name: SFIcons.LIGHTBULB_FILL },
      { label: 'Bell', name: SFIcons.BELL_FILL },
      { label: 'Flag', name: SFIcons.FLAG },
      { label: 'Bookmark', name: SFIcons.BOOKMARK_FILL },
    ],
  },
  {
    name: '📁 Files',
    icons: [
      { label: 'Folder', name: SFIcons.FOLDER_FILL },
      { label: 'File', name: SFIcons.FILE_FILL },
      { label: 'Document', name: SFIcons.DOC_TEXT_FILL },
      { label: 'Trash', name: SFIcons.TRASH_FILL },
      { label: 'Archive', name: SFIcons.ARCHIVEBOX_FILL },
      { label: 'Tray', name: SFIcons.TRAY_FILL },
      { label: 'Badge+', name: SFIcons.FOLDER_BADGE_PLUS_FILL },
      { label: 'Badge-', name: SFIcons.FOLDER_BADGE_MINUS_FILL },
    ],
  },
  {
    name: '🛒 Commerce',
    icons: [
      { label: 'Cart', name: SFIcons.CART_FILL },
      { label: 'Bag', name: SFIcons.BAG_FILL },
      { label: 'Card', name: SFIcons.CREDITCARD_FILL },
      { label: 'Gift', name: SFIcons.GIFT_FILL },
      { label: 'Money', name: SFIcons.DOLLARSIGN_CIRCLE_FILL },
      { label: 'Euro', name: SFIcons.EUROSIGN_CIRCLE_FILL },
      { label: 'Cart+', name: SFIcons.CART_BADGE_PLUS_FILL },
      { label: 'Cart-', name: SFIcons.CART_BADGE_MINUS_FILL },
    ],
  },
  {
    name: '📱 Communication',
    icons: [
      { label: 'Phone', name: SFIcons.PHONE_FILL },
      { label: 'Message', name: SFIcons.MESSAGE_FILL },
      { label: 'Envelope', name: SFIcons.ENVELOPE_FILL },
      { label: 'Bubble', name: SFIcons.BUBBLE_LEFT_FILL },
      { label: 'Video', name: SFIcons.VIDEO_FILL },
      { label: 'Camera', name: SFIcons.CAMERA_FILL },
      { label: 'Mic', name: SFIcons.MIC_FILL },
      { label: 'Speaker', name: SFIcons.SPEAKER_FILL },
    ],
  },
  {
    name: '🗺️ Location',
    icons: [
      { label: 'Location', name: SFIcons.LOCATION_FILL },
      { label: 'Pin', name: SFIcons.MAPPIN_CIRCLE_FILL },
      { label: 'Map', name: SFIcons.MAP_FILL },
      { label: 'Compass', name: SFIcons.COMPASS_FILL },
      { label: 'North', name: SFIcons.LOCATION_NORTH_FILL },
      { label: 'Globe', name: SFIcons.TOGGLE_POWER },
      { label: 'Link', name: SFIcons.LINK_CIRCLE_FILL },
      { label: 'Safari', name: SFIcons.MAGNIFYINGGLASS_CIRCLE },
    ],
  },
  {
    name: '⏰ Time',
    icons: [
      { label: 'Clock', name: SFIcons.CLOCK_FILL },
      { label: 'Alarm', name: SFIcons.ALARM_FILL },
      { label: 'Timer', name: SFIcons.TIMER },
      { label: 'Stopwatch', name: SFIcons.STOPWATCH_FILL },
      { label: 'Calendar', name: SFIcons.CALENDAR },
      { label: 'Hourglass', name: SFIcons.LIGHTBULB_FILL },
      { label: 'Watch', name: SFIcons.BELL_FILL },
      { label: 'Date', name: SFIcons.CALENDAR_CIRCLE_FILL },
    ],
  },
  {
    name: '🎬 Media',
    icons: [
      { label: 'Play', name: SFIcons.PLAY_FILL },
      { label: 'Pause', name: SFIcons.PAUSE_FILL },
      { label: 'Stop', name: SFIcons.STOP_FILL },
      { label: 'Next', name: SFIcons.FORWARD_END_FILL },
      { label: 'Previous', name: SFIcons.BACKWARD_END_FILL },
      { label: 'Volume', name: SFIcons.SPEAKER_FILL },
      { label: 'Mute', name: SFIcons.SPEAKER_SLASH_FILL },
      { label: 'Music', name: SFIcons.MUSIC_NOTE },
    ],
  },
];

const COLORS = ['#FF5722', '#2196F3', '#4CAF50', '#FF9800', '#9C27B0'];
const WEIGHTS = [
  SFSymbolWeight.THIN,
  SFSymbolWeight.LIGHT,
  SFSymbolWeight.REGULAR,
  SFSymbolWeight.BOLD,
  SFSymbolWeight.BLACK,
];
const SCALES = [SFSymbolScale.SMALL, SFSymbolScale.MEDIUM, SFSymbolScale.LARGE];

export default function App() {
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedWeight, setSelectedWeight] = useState(2);
  const [selectedScale, setSelectedScale] = useState(1);

  const currentColor = COLORS[selectedColor];
  const currentWeight = WEIGHTS[selectedWeight];
  const currentScale = SCALES[selectedScale];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>SF Symbols</Text>
          <Text style={styles.subtitle}>Explore 400+ beautiful icons</Text>
        </View>

        {/* Live Preview */}
        <View style={styles.previewCard}>
          <SFSymbolView
            name={SFIcons.STAR}
            size={64}
            weight={currentWeight}
            scale={currentScale}
            tintColor={currentColor}
          />
          <Text style={styles.previewLabel}>Live Preview</Text>
        </View>

        {/* Color Picker */}
        <View style={styles.controlSection}>
          <Text style={styles.controlLabel}>🎨 Color</Text>
          <View style={styles.colorGrid}>
            {COLORS.map((color, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => setSelectedColor(idx)}
                style={[
                  styles.colorSwatch,
                  {
                    backgroundColor: color,
                  },
                  selectedColor === idx && styles.colorSwatchSelected,
                ]}
              />
            ))}
          </View>
        </View>

        {/* Weight Control */}
        <View style={styles.controlSection}>
          <Text style={styles.controlLabel}>🏋️ Weight</Text>
          <View style={styles.segmentControl}>
            {WEIGHTS.map((weight, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => setSelectedWeight(idx)}
                style={[
                  styles.segment,
                  selectedWeight === idx && styles.segmentActive,
                ]}
              >
                <Text
                  style={[
                    styles.segmentText,
                    selectedWeight === idx && styles.segmentTextActive,
                  ]}
                >
                  {weight === 'regular'
                    ? 'Regular'
                    : weight.charAt(0).toUpperCase() + weight.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Scale Control */}
        <View style={styles.controlSection}>
          <Text style={styles.controlLabel}>📐 Scale</Text>
          <View style={styles.segmentControl}>
            {SCALES.map((scale, idx) => (
              <TouchableOpacity
                key={idx}
                onPress={() => setSelectedScale(idx)}
                style={[
                  styles.segment,
                  selectedScale === idx && styles.segmentActive,
                ]}
              >
                <Text
                  style={[
                    styles.segmentText,
                    selectedScale === idx && styles.segmentTextActive,
                  ]}
                >
                  {scale.charAt(0).toUpperCase() + scale.slice(1)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Icon Showcase */}
        <View style={styles.showcaseSection}>
          <Text style={styles.showcaseTitle}>✨ Icon Gallery</Text>
          {ICON_CATEGORIES.map((category, catIdx) => (
            <View key={catIdx} style={styles.category}>
              <Text style={styles.categoryName}>{category.name}</Text>
              <View style={styles.iconGrid}>
                {category.icons.map((icon, iconIdx) => (
                  <View key={iconIdx} style={styles.iconItem}>
                    <View style={styles.iconBox}>
                      <SFSymbolView
                        name={icon.name}
                        size={28}
                        weight={currentWeight}
                        scale={currentScale}
                        tintColor={currentColor}
                      />
                    </View>
                    <Text style={styles.iconLabel}>{icon.label}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Built with React Native Nitro 🚀
          </Text>
          <Text style={styles.footerSubtext}>
            SF Symbols 7.0+ • Supports iOS 13+
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// MARK: - Styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginTop: 24,
    marginBottom: 8,
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 24,
  },
  previewCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 120,
  },
  previewLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 12,
  },
  controlSection: {
    marginBottom: 20,
  },
  controlLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginTop: 12,
    marginBottom: 8,
  },
  colorGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 12,
  },
  colorSwatch: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 2,
  },
  colorSwatchSelected: {
    borderWidth: 3,
    borderColor: '#000',
  },
  segmentControl: {
    flexDirection: 'row',
    backgroundColor: '#E0E0E0',
    borderRadius: 8,
    padding: 4,
    marginBottom: 12,
  },
  segment: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  segmentActive: {
    backgroundColor: '#2196F3',
  },
  segmentText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  segmentTextActive: {
    color: '#FFF',
    fontWeight: '600',
  },
  showcaseSection: {
    marginTop: 20,
  },
  showcaseTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000',
    marginBottom: 16,
  },
  category: {
    marginBottom: 24,
  },
  categoryName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1565C0',
    marginBottom: 12,
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  iconItem: {
    alignItems: 'center',
    marginBottom: 16,
    width: '25%',
  },
  iconBox: {
    width: 56,
    height: 56,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 6,
  },
  iconLabel: {
    fontSize: 9,
    color: '#666',
    textAlign: 'center',
  },
  footer: {
    marginTop: 32,
    marginBottom: 32,
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    lineHeight: 18,
  },
  footerSubtext: {
    fontSize: 11,
    color: '#999',
    textAlign: 'center',
    marginTop: 8,
  },
});
