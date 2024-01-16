import React from 'react'
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native'

interface Props {
    title: string,
    position?: 'br' | 'bl'
    onPress: () => void
}

export const Fab = ({ title, position = 'br', onPress }: Props) => {

    const ios = () => {
        return (
            <TouchableOpacity
                onPress={onPress}
                activeOpacity={0.75}
                style={
                    (position === 'bl')
                        ? styles.fabLocationBottomLeft
                        : styles.fabLocationBottomRight
                }
            >
                <View style={styles.fab}>
                    <Text style={styles.fabText}>
                        {title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const android = () => {
        return (
            <View
                style={
                    (position === 'bl')
                        ? styles.fabLocationBottomLeft
                        : styles.fabLocationBottomRight
                }
            >
                <TouchableNativeFeedback
                    onPress={onPress}
                    background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}>

                    <View style={styles.fab}>
                        <Text style={styles.fabText}>
                            {title}
                        </Text>
                    </View>
                </TouchableNativeFeedback>
            </View >
        )
    }

    return (
        (Platform.OS === 'ios') ? ios() : android()
    )
}

const styles = StyleSheet.create({
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
    fabLocationBottomRight: {
        position: 'absolute',
        bottom: 25,
        right: 25
    },
    fabLocationBottomLeft: {
        position: 'absolute',
        bottom: 25,
        left: 25
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold'
    }
})
