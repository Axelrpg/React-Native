import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { StackNavigator } from './StackNavigator'
import { SettingsScreen } from '../screens/SettingsScreen'

const Drawer = createDrawerNavigator()

export const BasicSideMenu = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="StackNavigator" component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        </Drawer.Navigator>
    )
}
