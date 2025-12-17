import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Svg, { Rect, Circle, Line } from 'react-native-svg';
import { useTheme } from '@react-navigation/native';

const EmptyListSVG = () => {
  const { dark } = useTheme();

  const colors = {
    card: dark ? '#1F2937' : '#F3F4F6',
    avatar1: dark ? '#374151' : '#D1D5DB',
    avatar2: dark ? '#2D3748' : '#E5E7EB',
    line1: dark ? '#4B5563' : '#D1D5DB',
    line2: dark ? '#374151' : '#E5E7EB',
    title: dark ? '#E5E7EB' : '#374151',
    subtitle: dark ? '#9CA3AF' : '#6B7280',
  };

  return (
    <View style={styles.container}>
      <Svg width={200} height={220} viewBox="0 0 200 220">
        {/* Card */}
        <Rect
          x="20"
          y="30"
          width="160"
          height="160"
          rx="18"
          fill={colors.card}
        />

        {/* Row 1 */}
        <Circle cx="50" cy="60" r="14" fill={colors.avatar1} />
        <Line
          x1="80"
          y1="54"
          x2="150"
          y2="54"
          stroke={colors.line1}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <Line
          x1="80"
          y1="70"
          x2="130"
          y2="70"
          stroke={colors.line2}
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Row 2 */}
        <Circle cx="50" cy="95" r="14" fill={colors.avatar2} />
        <Line
          x1="80"
          y1="89"
          x2="155"
          y2="89"
          stroke={colors.line2}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <Line
          x1="80"
          y1="105"
          x2="140"
          y2="105"
          stroke={colors.card}
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Row 3 */}
        <Circle cx="50" cy="130" r="14" fill={colors.avatar1} />
        <Line
          x1="80"
          y1="124"
          x2="145"
          y2="124"
          stroke={colors.line1}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <Line
          x1="80"
          y1="140"
          x2="120"
          y2="140"
          stroke={colors.line2}
          strokeWidth="5"
          strokeLinecap="round"
        />

        {/* Row 4 */}
        <Circle cx="50" cy="165" r="14" fill={colors.avatar2} />
        <Line
          x1="80"
          y1="159"
          x2="150"
          y2="159"
          stroke={colors.line2}
          strokeWidth="6"
          strokeLinecap="round"
        />
        <Line
          x1="80"
          y1="175"
          x2="135"
          y2="175"
          stroke={colors.card}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </Svg>

      <Text style={[styles.title, { color: colors.title }]}>
        No favorite users added
      </Text>
      <Text style={[styles.subtitle, { color: colors.subtitle }]}>
        Please add your favorite users from the users list
      </Text>
    </View>
  );
};

export default EmptyListSVG;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 60,
  },
  title: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
  },
  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: '#6B7280',
  },
});
