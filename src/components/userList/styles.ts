import { StyleSheet } from 'react-native';
import { Theme } from '@react-navigation/native';

const createStyles = (colors: Theme['colors']) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    header: {
      fontSize: 10,
      marginBottom: 10,
      color: colors.text,
    },
    userList: {
      flex: 1,
      flexDirection: 'row',
      padding: 12,
      alignItems: 'center',
      borderColor: colors.border,
      borderWidth: 1,
      width: '100%',
      backgroundColor: colors.card,
    },
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatarText: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    info: {
      marginLeft: 14,
      flex: 1,
    },
    name: {
      fontSize: 16,
      fontWeight: '600',
      color: colors.text,
    },
    email: {
      color: colors.text,
      marginTop: 4,
      opacity: 0.7,
    },
    company: {
      color: colors.text,
      fontSize: 12,
      marginTop: 2,
      opacity: 0.6,
    },
    footer: {
      paddingVertical: 12,
      alignItems: 'center',
    },
    searchContainer: {
      paddingHorizontal: 12,
      paddingVertical: 18,
      backgroundColor: colors.background,
    },
    searchInput: {
      height: 44,
      backgroundColor: colors.card,
      borderRadius: 12,
      paddingHorizontal: 14,
      fontSize: 16,
      color: colors.text,

      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.1,
      shadowRadius: 2,
    },
  });

export default createStyles;
