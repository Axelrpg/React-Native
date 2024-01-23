import React from 'react'
import { Image, Text, View } from 'react-native'

export const WhiteLogo = () => {
    return (
        <View style={{
            alignItems: 'center'
        }}>
            <Image
                source={require('../assets/react-logo-white.png')}
                style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'stretch'
                }}
            />

        </View>
    )
}
