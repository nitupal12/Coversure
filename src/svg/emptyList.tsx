import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Circle, Rect } from 'react-native-svg';

const EmptyListSVG = () => {
  return (
    <View style={{ alignItems: 'center' }}>
      <Svg width={120} height={120} viewBox="0 0 120 120">
        <Rect x="20" y="30" width="80" height="60" rx="8" fill="#E0E0E0" />
        <Circle cx="60" cy="60" r="12" fill="#BDBDBD" />
      </Svg>
      <Text style={{ marginTop: 12, color: '#777' }}>No users found</Text>
    </View>
  );
};

export default EmptyListSVG;
