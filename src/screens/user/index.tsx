import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';

const UserList = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {users.map(e => (
        <Text>{e.name}</Text>
      ))}
    </View>
  );
};

export default UserList;
