import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import MainMenuScreen from './src/screens/MainMenuScreen';
import VillaScreen from './src/screens/VillaScreen';
import HotelScreen from './src/screens/HotelScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: { backgroundColor: '#2563EB' },
          headerTintColor: '#FFF',
          headerTitleStyle: { fontWeight: 'bold' },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainMenu" component={MainMenuScreen} options={{ title: 'Menu Utama', headerBackVisible: false }} />
        <Stack.Screen name="Villa" component={VillaScreen} options={{ title: 'Pilihan Vila' }} />
        <Stack.Screen name="Hotel" component={HotelScreen} options={{ title: 'Pilihan Kamar Hotel' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
