import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StackNavigator } from './src/navigator/StackNavigator';
import { BasicSideMenu } from './src/navigator/BasicSideMenu';

const App = () => {
  return (
    <NavigationContainer>
      <BasicSideMenu /> 
    </NavigationContainer>
  )
}

export default App
