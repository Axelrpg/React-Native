import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/core'

export const Page2Screen = () => {

    const navigator = useNavigation();

    useEffect(() => {
        navigator.setOptions({
            title: 'Hola mundo',
            headerBackTitle: ''
        })
    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>Page 2 Screen</Text>

            <Button
                title="Ir a página 3"
                onPress={() => navigator.navigate('Page3Screen' as never)} // Corrige el nombre de la pantalla
            />

        </View>
    )
}
