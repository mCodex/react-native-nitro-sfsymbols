/**
 * SF Symbols Example Application
 *
 * This example demonstrates the key features of react-native-nitro-sfsymbols:
 * - Basic symbol rendering
 * - Color customization
 * - Weight and scale variations
 * - Hierarchical and palette rendering modes
 * - Accessibility support
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
  SFSymbolRenderingMode,
} from 'react-native-nitro-sfsymbols';

/**
 * Example 1: Simple Symbol Rendering
 * Shows basic usage with default styling
 */
function SimpleExample() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Simple Rendering</Text>
      <View style={styles.symbolGrid}>
        <SFSymbolView
          name={SFIcons.THERMOMETER_SUN_FILL}
          size={32}
          tintColor="#FF5722"
          accessibilityLabel="Thermometer with sun"
        />
        <SFSymbolView
          name={SFIcons.HEART_FILL}
          size={32}
          tintColor="#E91E63"
          accessibilityLabel="Heart"
        />
        <SFSymbolView
          name={SFIcons.STAR_FILL}
          size={32}
          tintColor="#FFB300"
          accessibilityLabel="Star"
        />
      </View>
    </View>
  );
}

/**
 * Example 2: Weight Variations
 * Shows how different weights affect symbol appearance
 */
function WeightExample() {
  const weights = [
    SFSymbolWeight.THIN,
    SFSymbolWeight.LIGHT,
    SFSymbolWeight.REGULAR,
    SFSymbolWeight.SEMIBOLD,
    SFSymbolWeight.BOLD,
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Weight Variations</Text>
      <View style={styles.symbolGrid}>
        {weights.map((weight) => (
          <View key={weight} style={styles.symbolContainer}>
            <SFSymbolView
              name={SFIcons.BELL_FILL}
              size={24}
              weight={weight}
              tintColor="#2196F3"
              accessibilityLabel={`Bell with ${weight} weight`}
            />
            <Text style={styles.symbolLabel}>{weight}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

/**
 * Example 3: Scale Variations
 * Shows small, medium, and large scale options
 */
function ScaleExample() {
  const scales = [
    SFSymbolScale.SMALL,
    SFSymbolScale.MEDIUM,
    SFSymbolScale.LARGE,
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Scale Variations</Text>
      <View style={styles.symbolGrid}>
        {scales.map((scale) => (
          <View key={scale} style={styles.symbolContainer}>
            <SFSymbolView
              name={SFIcons.PLAY_FILL}
              size={24}
              scale={scale}
              tintColor="#4CAF50"
              accessibilityLabel={`Play button with ${scale} scale`}
            />
            <Text style={styles.symbolLabel}>{scale}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

/**
 * Example 4: Color Modes
 * Demonstrates monochrome and hierarchical rendering modes
 */
function ColorModeExample() {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Rendering Modes</Text>

      <Text style={styles.exampleLabel}>Monochrome</Text>
      <View style={styles.symbolRow}>
        <SFSymbolView
          name={SFIcons.LOCATION_CIRCLE_FILL}
          size={32}
          tintColor="#9C27B0"
          renderingMode={SFSymbolRenderingMode.MONOCHROME}
          accessibilityLabel="Location in monochrome"
        />
      </View>

      <Text style={styles.exampleLabel}>Hierarchical</Text>
      <View style={styles.symbolRow}>
        <SFSymbolView
          name={SFIcons.FOLDER_FILL}
          size={32}
          renderingMode={SFSymbolRenderingMode.HIERARCHICAL}
          hierarchical={{
            primaryColor: '#FF5722',
            secondaryColor: '#FF8A65',
          }}
          accessibilityLabel="Folder in hierarchical mode"
        />
      </View>

      <Text style={styles.exampleLabel}>Palette</Text>
      <View style={styles.symbolRow}>
        <SFSymbolView
          name={SFIcons.PERSON_3_FILL}
          size={32}
          renderingMode={SFSymbolRenderingMode.PALETTE}
          palette={{
            primaryColor: '#2196F3',
            secondaryColor: '#4CAF50',
            tertiaryColor: '#FFB300',
          }}
          accessibilityLabel="Three people in palette mode"
        />
      </View>
    </View>
  );
}

/**
 * Example 5: Interactive Controls
 * Demonstrates dynamic symbol updates
 */
function InteractiveExample() {
  const [size, setSize] = useState(24);
  const [color, setColor] = useState('#2196F3');

  const colors = ['#FF5722', '#E91E63', '#2196F3', '#4CAF50', '#FFB300'];

  const getColorButtonStyle = (c: string) => ({
    ...styles.colorButton,
    backgroundColor: c,
    borderWidth: color === c ? 3 : 0,
  });

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Interactive Control</Text>

      <View style={styles.symbolRow}>
        <SFSymbolView
          name={SFIcons.HEART_FILL}
          size={size}
          tintColor={color}
          accessibilityLabel={`Heart icon at ${size}pt with color ${color}`}
          accessibilityHint="Size and color can be controlled with buttons below"
        />
      </View>

      <Text style={styles.controlLabel}>Size: {Math.round(size)}pt</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setSize(Math.max(16, size - 4))}
        >
          <Text style={styles.buttonText}>−</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setSize(Math.min(48, size + 4))}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.controlLabel}>Color</Text>
      <View style={styles.buttonRow}>
        {colors.map((c) => (
          <TouchableOpacity
            key={c}
            style={getColorButtonStyle(c)}
            onPress={() => setColor(c)}
          />
        ))}
      </View>
    </View>
  );
}

/**
 * Example 6: Common Symbols Grid
 * Shows a variety of commonly used symbols
 */
function SymbolGridExample() {
  const symbols = [
    { icon: SFIcons.HEART_FILL, label: 'Heart' },
    { icon: SFIcons.STAR_FILL, label: 'Star' },
    { icon: SFIcons.PHONE_FILL, label: 'Phone' },
    { icon: SFIcons.ENVELOPE_FILL, label: 'Mail' },
    { icon: SFIcons.GEAR, label: 'Settings' },
    { icon: SFIcons.LOCATION_FILL, label: 'Location' },
    { icon: SFIcons.CLOCK_FILL, label: 'Clock' },
    { icon: SFIcons.BELL_FILL, label: 'Bell' },
  ];

  const colors = ['#FF5722', '#E91E63', '#2196F3', '#4CAF50'];

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Symbol Gallery</Text>
      <View style={styles.gridContainer}>
        {symbols.map((item, index) => (
          <View key={item.icon} style={styles.gridItem}>
            <SFSymbolView
              name={item.icon}
              size={28}
              tintColor={colors[index % colors.length]}
              accessibilityLabel={item.label}
            />
            <Text style={styles.gridLabel}>{item.label}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

/**
 * Main App Component
 * Combines all examples into a scrollable view
 */
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>SF Symbols Examples</Text>
        <Text style={styles.subtitle}>
          iOS Only - Using React Native Nitro Modules
        </Text>

        <SimpleExample />
        <WeightExample />
        <ScaleExample />
        <ColorModeExample />
        <InteractiveExample />
        <SymbolGridExample />

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            For more SF Symbols, visit:{'\n'}
            https://developer.apple.com/sf-symbols/
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
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 16,
    color: '#000',
  },
  exampleLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#666',
    marginTop: 12,
    marginBottom: 8,
  },
  controlLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
    marginTop: 12,
    marginBottom: 8,
  },
  symbolGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 16,
  },
  symbolRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
  },
  symbolContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  symbolLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '23%',
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
  },
  gridLabel: {
    fontSize: 10,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },
  button: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#FFF',
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#000',
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
});
