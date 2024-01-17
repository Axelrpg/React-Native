import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Task6Screen = () => {
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
        flex: 2,
        backgroundColor: '#5856D6',
        borderWidth: 10,
        borderColor: 'white',
    },
    orangeBox: {
        flex: 2,
        backgroundColor: '#F0A23B',
        borderWidth: 10,
        borderColor: 'white',
    },
    blueBox: {
        flex: 4,
        backgroundColor: '#28C4D9',
        borderWidth: 10,
        borderColor: 'white',
    },
});
