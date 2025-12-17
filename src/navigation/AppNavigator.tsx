import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './BottomTabs';
import UserDetailsScreen from '../screens/userDetails';
import { RootStackParamList } from './types';

const Stack = createStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UserDetails"
        component={UserDetailsScreen}
        options={{ title: 'User Details' }}
      />
    </Stack.Navigator>
  );
};

export default RootNavigator;
