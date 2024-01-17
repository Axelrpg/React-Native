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
import { Task3Screen } from './src/screens/tasks/Task3Screen'
import { TaskGeneralScreen } from './src/screens/tasks/TaskGeneralScreen'
import { Task4Screen } from './src/screens/tasks/Task4Screen'
import { Task5Screen } from './src/screens/tasks/Task5Screen'
import { Task6Screen } from './src/screens/tasks/Task6Screen'
import { Task7Screen } from './src/screens/tasks/Task7Screen'
import { Task8Screen } from './src/screens/tasks/Task8Screen'
import { Task9Screen } from './src/screens/tasks/Task9Screen'
import { Task10Screen } from './src/screens/tasks/Task10Screen'

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
      {/* <TaskGeneralScreen /> */}
      {/* <Task1Screen /> */}
      {/* <Task2Screen /> */}
      {/* <Task3Screen /> */}
      {/* <Task4Screen /> */}
      {/* <Task5Screen /> */}
      {/* <Task6Screen /> */}
      {/* <Task7Screen /> */}
      {/* <Task8Screen /> */}
      {/* <Task9Screen /> */}
      <Task10Screen />
    </SafeAreaView>
  )
}
