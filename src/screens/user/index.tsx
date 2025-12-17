import { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import UserList from '../../components/userList';
import { fetchUsers } from '../../store/thunks/userThunks';
import createStyles from './styles';
import { useTheme } from '@react-navigation/native';

const UsersScreen = () => {
  const { users, loading, error } = useSelector((state: RootState) => ({
    users: state.users.users,
    loading: state.users.loading,
    error: state.users.error,
  }));
  const dispatch = useDispatch();
  const { colors } = useTheme();
  const styles = createStyles(colors);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <View style={styles.container}>
      <UserList
        data={users}
        loading={loading}
        error={error}
        onPullRefresh={() => dispatch(fetchUsers())}
        isFromUsers={true}
      />
    </View>
  );
};

export default UsersScreen;
