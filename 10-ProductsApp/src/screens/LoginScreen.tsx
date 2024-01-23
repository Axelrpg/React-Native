import React, { useContext, useEffect } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Background } from '../components/Background'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme'
import { useForm } from '../hooks/useForm'
import { StackScreenProps } from '@react-navigation/stack'
import { AuthContext } from '../context/AuthContext'

interface Props extends StackScreenProps<any, any> { }

export const LoginScreen = ({ navigation }: Props) => {

    const { signIn, errorMessage, removeError } = useContext(AuthContext)

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    })

    useEffect(() => {
        if (errorMessage.length === 0) return

        Alert.alert('Login incorrecto', errorMessage, [{
            text: 'Ok',
            onPress: removeError
        }])
    }, [errorMessage])

    const onLogin = () => {
        console.log({ email, password })
        Keyboard.dismiss()

        signIn({ email, password })
    }

    return (
        <>
            <Background />

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={(Platform.OS === 'ios') ? 'padding' : 'height'}
            >

                <View style={loginStyles.container}>

                    <WhiteLogo />

                    <Text style={loginStyles.title}>Login</Text>

                    <Text style={loginStyles.label}>Email:</Text>
                    <TextInput
                        placeholder="Ingrese su email"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"
                        autoCapitalize="none"
                        autoCorrect={false}

                        value={email}
                        onChangeText={(value) => onChange(value, 'email')}
                        onSubmitEditing={onLogin}
                    />

                    <Text style={loginStyles.label}>Password:</Text>
                    <TextInput
                        placeholder="***********"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        underlineColorAndroid="white"
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}

                        value={password}
                        onChangeText={(value) => onChange(value, 'password')}
                        onSubmitEditing={onLogin}
                    />

                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.loginButton}
                            onPress={onLogin}
                        >
                            <Text style={loginStyles.loginButtonText}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={loginStyles.newUserContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigation.replace('RegisterScreen')}
                        >
                            <Text style={loginStyles.link}>Nueva cuenta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </>
    )
}
