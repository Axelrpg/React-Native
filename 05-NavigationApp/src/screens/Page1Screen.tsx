import React, { useEffect } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { DrawerScreenProps } from '@react-navigation/drawer'

interface Props extends DrawerScreenProps<any, any> { }

export const Page1Screen = ({ navigation }: Props) => {

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page 1 Screen</Text>

            <Button
                title="Ir a página 2"
                onPress={() => navigation.navigate('Page2Screen')}
            />

            <Text style={{ color: 'black', marginVertical: 20, fontSize: 20, fontWeight: 'bold' }}>Navegar con argumentos</Text>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity
                    style={{
                        ...styles.bigButton,
                        backgroundColor: '#5856D6'
                    }}
                    onPress={() => navigation.navigate('PersonScreen', {
                        id: 1,
                        name: 'Pedro'
                    })}
                >
                    <View style={styles.centerContent}>
                        <Icon name="man-outline" size={25} color="white" />
                        <Text style={styles.bigButtonText}> Pedro</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        ...styles.bigButton,
                        backgroundColor: '#FF9427'
                    }}
                    onPress={() => navigation.navigate('PersonScreen', {
                        id: 1,
                        name: 'Maria'
                    })}
                >
                    <View style={styles.centerContent}>
                        <Icon name="woman-outline" size={25} color="white" />
                        <Text style={styles.bigButtonText}> Maria</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}
