import { JSX } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from '@react-native-vector-icons/fontawesome';
import UsersScreen from '../screens/user';
import FavUsers from '../screens/favUsers';
import { TabRouteName, RenderTabIconParams } from './type';

const Tab = createBottomTabNavigator();

const renderTabIcon = ({
  routeName,
  color,
  size,
}: RenderTabIconParams): JSX.Element => {
  const icons: Record<TabRouteName, string> = {
    users: 'address-book',
    favorite: 'star',
  };

  return <FontAwesome name={icons[routeName]} size={size} color={color} />;
};

const RootNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitle: '',
        tabBarIcon: ({ color, size }) =>
          renderTabIcon({
            routeName: route.name as TabRouteName,
            color,
            size,
          }),
      })}
    >
      <Tab.Screen name="users" component={UsersScreen} />
      <Tab.Screen name="favorite" component={FavUsers} />
    </Tab.Navigator>
  );
};

export default RootNavigator;
