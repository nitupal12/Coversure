import { JSX } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import UserListSkeleton from '../../components/userList/skeletonLoader';
import { useNavigation } from '@react-navigation/native';
import { UserListType, NavigationProp } from './types';
import { UserType } from '../../store/slices/types';

const UserList = ({ data, loading, error }: UserListType): JSX.Element => {
  const navigation = useNavigation<NavigationProp>();
  const renderUsers = ({ item }: { item: UserType }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('UserDetails', { userId: item.id })}
        style={styles.userList}
      >
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>Name:{item.name}</Text>
          <Text style={styles.email}>Email:{item.email}</Text>
          <Text style={styles.company}>Company:{item.company.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return <UserListSkeleton />;
  } else if (error) {
    Alert.alert(error);
  }

  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id.toString()}
      renderItem={renderUsers}
    />
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
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
});
