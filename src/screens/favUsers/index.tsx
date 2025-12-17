import { View } from 'react-native';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import UserList from '../../components/userList';
import createStyles from './styles';
import { useTheme } from '@react-navigation/native';

const FavUsers = () => {
  const favUsers = useSelector((state: RootState) => state.favorite.favUsers);
  const { colors } = useTheme();
  const styles = createStyles(colors);

  return (
    <View style={styles.container}>
      <UserList data={favUsers} loading={false} />
    </View>
  );
};

export default FavUsers;
