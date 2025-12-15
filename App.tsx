/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { useColorScheme } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/AppNavigator';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { store } from './src/store';
import { Provider } from 'react-redux';

function App() {
  const scheme = useColorScheme();
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NavigationContainer
          theme={scheme === 'dark' ? DarkTheme : DefaultTheme}
        >
          <RootNavigator />
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
}

export default App;
