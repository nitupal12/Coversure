import { ViewStyle, TextStyle } from 'react-native';

export type LoaderProps = {
  size?: 'small' | 'large' | number;
  color?: string;
  text?: string;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
};
