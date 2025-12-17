import { StyleSheet } from 'react-native';
import { Theme } from '@react-navigation/native';

const createStyles = (colors: Theme['colors']) =>
  StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      marginTop: 8,
      fontSize: 14,
      color: colors.text,
    },
    loader: {
      color: colors.text,
    },
  });

export default createStyles;
