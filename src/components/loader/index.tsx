import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import { LoaderProps } from './types';
import createStyles from './styles';
import { useTheme } from '@react-navigation/native';

const Loader = ({
  size = 'large',
  color,
  text,
  containerStyle,
  textStyle,
}: LoaderProps) => {
  const { colors } = useTheme();
  const styles = createStyles(colors);
  return (
    <View style={[styles.container, containerStyle]}>
      <ActivityIndicator size={size} color={color || styles.loader.color} />
      {text ? <Text style={[styles.text, textStyle]}>{text}</Text> : null}
    </View>
  );
};

export default Loader;
