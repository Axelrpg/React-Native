import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { TopTapNavigator } from './TopTabNavigator';

export const Tabs = () => {
    return Platform.OS === 'ios'
        ? <TabsIOS />
        : <TabsAndroid />
}

const BottomTabAndroid = createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
        <BottomTabAndroid.Navigator
            sceneAnimationEnabled={true}
            barStyle={{
                backgroundColor: colors.primary
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: 'white',
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                    fontWeight: 'bold',
                },
                tabBarIcon: ({ color, focused }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'bandage-outline';
                            break;
                        case 'TopTapNavigator':
                            iconName = 'barbell-outline';
                            break;
                        case 'StackNavigator':
                            iconName = 'bonfire-outline';
                            break;
                    }
                    return <Icon name={iconName} size={20} color={color} />
                }
            })}
        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: 'Tab 1' }} component={Tab1Screen} />
            <BottomTabAndroid.Screen name="TopTapNavigator" options={{ title: 'TopTapNavigator' }} component={TopTapNavigator} />
            <BottomTabAndroid.Screen name="StackNavigator" options={{ title: 'Stack Navigator' }} component={StackNavigator} />
        </BottomTabAndroid.Navigator>
    );
}

const BottomTabIOS = createBottomTabNavigator();

const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            sceneContainerStyle={{
                backgroundColor: 'white'
            }}
            screenOptions={({ route }) => ({
                tabBarActiveTintColor: colors.primary,
                tabBarStyle: {
                    borderTopColor: colors.primary,
                    borderTopWidth: 0,
                    elevation: 0,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                    fontWeight: 'bold',
                },
                tabBarIcon: ({ color, focused, size }) => {
                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1';
                            break;
                        case 'Tab2Screen':
                            iconName = 'T2';
                            break;
                        case 'StackNavigator':
                            iconName = 'ST';
                            break;
                    }
                    return <Text style={{ color }}>{iconName}</Text>
                }
            })}
        >
            {/* <Tab.Screen name="Tab1Screen" options={{
                headerShown: false,
                title: 'Tab 1',
                tabBarIcon: (props) => <Text style={{ color: props.color }}>T1</Text>
            }} component={Tab1Screen} /> */}
            <BottomTabIOS.Screen name="Tab1Screen" options={{ headerShown: false, title: 'Tab 1' }} component={Tab1Screen} />
            <BottomTabIOS.Screen name="TopTapNavigator" options={{ headerShown: false, title: 'TopTapNavigator' }} component={TopTapNavigator} />
            <BottomTabIOS.Screen name="StackNavigator" options={{ headerShown: false, title: 'Stack Navigator' }} component={StackNavigator} />
        </BottomTabIOS.Navigator>
    );
}