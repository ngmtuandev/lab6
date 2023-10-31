import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ScreenOne from './src/ScreenOne';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenTwo from './src/ScreenTwo';
import ScreenThree from './src/ScreenThree';
import ScreenFour from './src/ScreenFour';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Home" component={ScreenOne} /> */}
        <Stack.Screen name="List" component={ScreenTwo} />
        <Stack.Screen name="Products" component={ScreenThree} />
        <Stack.Screen name="Item" component={ScreenFour} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
