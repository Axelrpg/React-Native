import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { AuthProvider } from './src/context/AuthContext';
import { SideMenu } from './src/navigator/SideMenu';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <SideMenu />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App
