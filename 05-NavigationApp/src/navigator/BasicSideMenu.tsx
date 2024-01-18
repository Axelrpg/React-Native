import { createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { StackNavigator } from './StackNavigator'
import { SettingsScreen } from '../screens/SettingsScreen'
import { useWindowDimensions } from 'react-native'

const Drawer = createDrawerNavigator()

export const BasicSideMenu = () => {

    const { width } = useWindowDimensions()

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={SettingsScreen} />
        </Drawer.Navigator>
    )
}
