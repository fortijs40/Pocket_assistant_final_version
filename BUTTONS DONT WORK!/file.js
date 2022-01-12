import 'react-native-gesture-handler';
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import App from './App';

import Notes from './screens/Notes';

const Stack = createStackNavigator();

export default function Copy() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={App} options={{ title: 'Home Screen' }}/>
        <Stack.Screen name="Notes" component={Notes} options={{ title: 'Notes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}