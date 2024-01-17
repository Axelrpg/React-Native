import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type TextColor = 'white' | 'black'

interface Props {
    text: string
    textColor?: TextColor
    color?: string
    action: (textNumber: string) => void
}

export const CalculatorButton = ({
    text,
    textColor = 'white',
    color = '#2D2D2D',
    action
}: Props) => {
    return (

        <TouchableOpacity
            onPress={() => action(text)}
        >
            <View style={{
                ...styles.button,
                backgroundColor: color,
                width: (text === '0') ? 160 : 70
            }}>
                <Text style={{
                    ...styles.buttonText,
                    color: textColor
                }}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 70,
        width: 70,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'black',
        fontWeight: 'bold',
    },
})
