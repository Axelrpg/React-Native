import React from 'react'
import { Text, View } from 'react-native'

export const HelloWorldScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style={{
                fontSize: 40,
                fontWeight: 'bold'
            }}>
                ¡Hola Mundo!
            </Text>
        </View>
    )
}
