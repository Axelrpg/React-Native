import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Fab } from '../components/Fab'

export const CounterScreen = () => {

    const [counter, setCounter] = useState(10)

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Contador: {counter}
            </Text>

            <Fab
                title="-1"
                onPress={() => setCounter(counter - 1)}
                position='bl'
            />

            <Fab
                title="+1"
                onPress={() => setCounter(counter + 1)}
            />
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        top: -15
    },
    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: .30,
        shadowRadius: 4.65,
        elevation: 8
    },
    fabLocationBottomLeft: {
        position: 'absolute',
        bottom: 25,
        left: 25
    },
    fabLocationBottomRight: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabText: {
        fontSize: 25,
        color: 'white',
        fontWeight: 'bold'
    }
})
