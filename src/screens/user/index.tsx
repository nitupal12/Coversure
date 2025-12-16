import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import UserList from '../../components/userList/userList';
import { fetchUsers } from '../../store/thunks/userThunks';

const UsersScreen = () => {
  const { users, loading, error } = useSelector((state: RootState) => ({
    users: state.users.users,
    loading: state.users.loading,
    error: state.users.error,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <View style={styles.container}>
      <UserList data={users} loading={loading} error={error} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default UsersScreen;
