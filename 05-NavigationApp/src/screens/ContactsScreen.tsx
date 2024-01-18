import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

export const ContactsScreen = () => {

    const { signIn, authState } = useContext(AuthContext)

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>ContactsScreen</Text>

            {
                !authState.isLoggedIn && <Button
                    title="SignIn"
                    onPress={signIn}
                />
            }
        </View>
    )
}
