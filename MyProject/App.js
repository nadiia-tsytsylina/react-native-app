import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen';
import Home from './src/Screens/Home';

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Medium': require('./src/Fonts/Roboto-Medium.ttf'),
    'Roboto-Regular': require('./src/Fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        ></MainStack.Screen>
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
