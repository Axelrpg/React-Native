import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/Ionicons'
import { colors } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

interface Props {
    iconName: string
}

export const TouchableIcon = ({ iconName }: Props) => {

    const { changeFavoriteIcon, authState } = useContext(AuthContext)

    return (
        <TouchableOpacity
            onPress={() => {
                if (authState.isLoggedIn) {
                    changeFavoriteIcon(iconName)
                } else {
                    console.log('No puedes cambiar el icono si no estas logueado')
                }
            }}
        >
            <Icon
                name={iconName}
                size={80}
                color={colors.primary}
            />
        </TouchableOpacity>
    )
}
