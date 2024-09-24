import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import LoginComponent from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default function RootNavigator() {
  return (

    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
      <Stack.Screen name="login" component={LoginComponent} />
      
    </Stack.Navigator>
  );
}
