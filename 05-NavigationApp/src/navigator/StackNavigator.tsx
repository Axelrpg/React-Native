import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { Page1Screen } from '../screens/Page1Screen';
import { Page2Screen } from '../screens/Page2Screen';
import { Page3Screen } from '../screens/Page3Screen';
import { PersonScreen } from '../screens/PersonScreen';

export type RootStackParams = {
    Page1Screen: undefined,
    Page2Screen: undefined,
    Page3Screen: undefined,
    PersonScreen: { id: number, name: string }
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'white'
                },
                headerStyle: {
                    elevation: 0,
                    shadowColor: 'transparent'
                }
            }}
        >
            <Stack.Screen name="Page1Screen" options={{ headerShown: false }} component={Page1Screen} />
            <Stack.Screen name="Page2Screen" options={{ headerShown: false }} component={Page2Screen} />
            <Stack.Screen name="Page3Screen" options={{ headerShown: false }} component={Page3Screen} />
            <Stack.Screen name="PersonScreen" options={{ headerShown: false }} component={PersonScreen} />
        </Stack.Navigator>
    );
}