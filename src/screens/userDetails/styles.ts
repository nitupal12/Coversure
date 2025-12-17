import { StyleSheet } from 'react-native';
import { Theme } from '@react-navigation/native';

const createStyles = (colors: Theme['colors']) =>
  StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: colors.background,
      flexGrow: 1,
    },
    header: {
      alignItems: 'center',
      marginBottom: 20,
    },
    avatar: {
      width: 90,
      height: 90,
      borderRadius: 45,
      marginBottom: 12,
    },
    initialsCircle: {
      width: 90,
      height: 90,
      borderRadius: 45,
      backgroundColor: colors.primary,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 12,
    },
    initials: {
      color: colors.text,
      fontSize: 32,
      fontWeight: '700',
    },
    name: {
      fontSize: 22,
      fontWeight: '700',
      color: colors.text,
    },
    card: {
      backgroundColor: colors.background,
      borderColor: colors.border,
      borderWidth: 1,
      borderRadius: 12,
      padding: 12,
      marginBottom: 24,
    },
    buttonStyle: {
      paddingVertical: 12,
      borderBottomWidth: 1,
      borderBottomColor: '#E5E7EB',
    },
    label: {
      fontSize: 12,
      color: colors.text,
      marginBottom: 4,
    },
    value: {
      fontSize: 16,
      color: colors.text,
      marginLeft: 10,
    },
    favoriteBtn: {
      backgroundColor: colors.primary,
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
    },
    favoriteText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '600',
    },
    footer: {
      paddingVertical: 12,
      alignItems: 'center',
    },
    cardTouchableContainer: {
      flexDirection: 'row',
      paddingVertical: 10,
    },
  });

export default createStyles;
