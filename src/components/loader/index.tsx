import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import styles from './styles';
import { LoaderProps } from './types';

const Loader = ({
  size = 'large',
  color = '#000',
  text,
  containerStyle,
  textStyle,
}: LoaderProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <ActivityIndicator size={size} color={color} />
      {text ? <Text style={[styles.text, textStyle]}>{text}</Text> : null}
    </View>
  );
};

export default Loader;
