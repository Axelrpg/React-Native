import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator';
import { AuthContext } from '../context/AuthContext';

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> { }

interface RouteParams {
    id: number;
    name: string;
}

export const PersonScreen = ({ route, navigation }: Props) => {

    const params = route.params

    const { changeUsername, authState } = useContext(AuthContext)

    useEffect(() => {
        navigation.setOptions({
            title: params.name
        })
    }, [])

    useEffect(() => {
        if (authState.isLoggedIn) {
            changeUsername(params.name)
        } else {
            console.log('No se pudo cambiar el username')
        }
    }, [])

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}
