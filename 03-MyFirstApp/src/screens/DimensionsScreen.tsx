import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

/* const { width, height } = Dimensions.get('window') */

export const DimensionsScreen = () => {

    const { width, height } = useWindowDimensions()

    return (
        <View>
            <View style={styles.container}>
                <View style={{
                    ...styles.purpleBox,
                    width: width * 0.5,
                }} />
                <View style={styles.orangeBox} />
            </View>
            <Text>W: {width}, H: {height} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: 200,
        backgroundColor: "red",
    },
    purpleBox: {
        width: '50%',
        height: '50%',
        backgroundColor: "#5856D6",
    },
    orangeBox: {
        width: '50%',
        height: '50%',
        backgroundColor: "#F0A23B",
    },

})