import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import UserList from '../../components/userList/userList';

const FavUsers = () => {
  const favUsers = useSelector((state: RootState) => state.favUsers.favUsers);

  return (
    <View style={styles.container}>
      <UserList data={favUsers} loading={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
});

export default FavUsers;
