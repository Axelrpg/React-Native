import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> {
}

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
                    <Text style={styles.bigButtonText}>Pedro</Text>
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
                    <Text style={styles.bigButtonText}>Maria</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
