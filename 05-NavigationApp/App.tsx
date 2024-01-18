import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StackNavigator } from './src/navigator/StackNavigator';
import { BasicSideMenu } from './src/navigator/BasicSideMenu';
import { SideMenu } from './src/navigator/SideMenu';
import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <NavigationContainer
      
    >
      {/* <StackNavigator /> */}
      {/* <BasicSideMenu /> */} 
      <SideMenu />
      {/* <Tabs /> */}
    </NavigationContainer>
  )
}

export default App
