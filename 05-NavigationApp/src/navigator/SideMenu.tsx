import { DrawerContentComponentProps, DrawerContentScrollView, createDrawerNavigator } from '@react-navigation/drawer'
import React from 'react'
import { StackNavigator } from './StackNavigator'
import { SettingsScreen } from '../screens/SettingsScreen'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { Tabs } from './Tabs'
import Icon from 'react-native-vector-icons/Ionicons'

const Drawer = createDrawerNavigator()

export const SideMenu = () => {

    return (
        <Drawer.Navigator
            drawerContent={(props) => <InternalMenu {...props} />}
            screenOptions={(props) => ({
                headerLeft: () => (
                    <TouchableOpacity
                        style={{ marginLeft: 10 }}
                        onPress={() => props.navigation.toggleDrawer()}
                    >
                        <Icon name="globe-outline" size={30} color={'black'} />
                    </TouchableOpacity>
                )
            })}
        >
            <Drawer.Screen name="Tabs" options={{ title: 'Navegación' }} component={Tabs} />
            <Drawer.Screen name="SettingsScreen" options={{ title: 'Ajustes' }} component={SettingsScreen} />
        </Drawer.Navigator>
    )
}

const InternalMenu = ({ navigation }: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>
            <View style={styles.avatarContainer}>
                <Image
                    source={{
                        uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png'
                    }}
                    style={styles.avatar}
                />
            </View>

            {/* Opciones de menú */}
            <View style={styles.menuContainer}>
                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => navigation.navigate('Tabs')}
                >
                    <View style={styles.centerContentSideBar}>
                        <Icon name="compass-outline" size={25} color="black" />
                        <Text style={styles.menuText}> Navegación</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => navigation.navigate('SettingsScreen')}
                >
                    <View style={styles.centerContentSideBar}>
                        <Icon name="cog-outline" size={25} color="black" />
                        <Text style={styles.menuText}> Ajustes</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}
