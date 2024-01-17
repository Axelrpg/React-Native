import React from 'react'
import { StyleSheet, View } from 'react-native'

export const TaskGeneralScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.purpleBox} />
            <View style={styles.orangeBox} />
            <View style={styles.blueBox} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#28425B',
    },
    purpleBox: {
        width: 100,
        height: 100,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
    },
    orangeBox: {
        width: 100,
        height: 100,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
    },
    blueBox: {
        height: 100,
        width: 100,
        backgroundColor: '#28C4D9',
        borderWidth: 10,
        borderColor: 'white',
    },
});
