import React from 'react'
import { HelloWorldScreen } from './src/screens/HelloWorldScreen'
import { CounterScreen } from './src/screens/CounterScreen'
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen'
import { SafeAreaView } from 'react-native'
import { DimensionsScreen } from './src/screens/DimensionsScreen'
import { PositionScreen } from './src/screens/PositionScreen'
import { FlexScreen } from './src/screens/FlexScreen'
import { Task1Screen } from './src/screens/tasks/Task1Screen'
import { Task2Screen } from './src/screens/tasks/Task2Screen'

export const App = () => {
  return (
    //<HelloWorldScreen />
    // <CounterScreen />
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: '#28425B',
    }}>
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      {/* <Task1Screen /> */}
      <Task2Screen />
    </SafeAreaView>
  )
}
