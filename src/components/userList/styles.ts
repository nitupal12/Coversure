import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 10,
    marginBottom: 10,
  },
  userList: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
    alignItems: 'center',
    borderColor: '#E0E0E0',
    borderWidth: 1,
    width: '100%',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#4A90e2',
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
  },
  email: {
    color: '#555',
    marginTop: 4,
  },
  company: {
    color: '#777',
    fontSize: 12,
    marginTop: 2,
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  footer: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  searchContainer: {
    paddingHorizontal: 12,
    paddingVertical: 18,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 44,
    backgroundColor: '#F3F4F6',
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    color: '#111827',

    // Android shadow
    elevation: 2,

    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});

export default styles;
