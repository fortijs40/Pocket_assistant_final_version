import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import HomeScreen from './screens/HomeScreen';

import SecondScreen from './screens/Notes';

const Stack = createStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ title: 'HomeScreen' }}/>
        <Stack.Screen name="Notes" component={SecondScreen} options={{ title: 'Notes' }} />
        <Stack.Screen name="Calendar" component={SecondScreen} options={{ title: 'Calendar' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}