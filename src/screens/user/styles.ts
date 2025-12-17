import { StyleSheet } from 'react-native';
import { Theme } from '@react-navigation/native';

const createStyles = (colors: Theme['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: colors.background,
    },
  });

export default createStyles;
