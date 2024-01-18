import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const AlbumsScreen = () => {

    const { signOut, authState } = useContext(AuthContext)

    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>AlbumsScreen</Text>

            {
                authState.isLoggedIn && <Button
                    title="SignOut"
                    onPress={signOut}
                />
            }
        </View>
    )
}
