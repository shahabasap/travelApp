import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/navigation/RootNavigator';
import { useWindowDimensions } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks';




export default function App() {
  useDeviceOrientation()
  return (
    <>

      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}
