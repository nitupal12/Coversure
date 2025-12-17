import { View } from 'react-native';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import UserList from '../../components/userList';
import styles from './styles';

const FavUsers = () => {
  const favUsers = useSelector((state: RootState) => state.favorite.favUsers);

  return (
    <View style={styles.container}>
      <UserList data={favUsers} loading={false} />
    </View>
  );
};

export default FavUsers;
