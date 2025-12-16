import { JSX } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import UsersScreen from '../screens/user';
import FavUsers from '../screens/favUsers';
import { TabRouteName, RenderTabIconParams } from './types';
import FontAwesome from '@react-native-vector-icons/fontawesome';

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

const BottomTabs = () => {
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

export default BottomTabs;
