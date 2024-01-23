import React, { useContext, useEffect } from 'react'
import { Alert, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { WhiteLogo } from '../components/WhiteLogo'
import { loginStyles } from '../theme/loginTheme'
import { useForm } from '../hooks/useForm'
import { StackScreenProps } from '@react-navigation/stack'
import { Background } from '../components/Background'
import { AuthContext } from '../context/AuthContext'

interface Props extends StackScreenProps<any, any> { }

export const RegisterScreen = ({ navigation }: Props) => {

    const { signUp, errorMessage, removeError } = useContext(AuthContext);

    const { email, password, name, onChange } = useForm({
        email: '',
        password: '',
        name: ''
    })

    useEffect(() => {
        if (errorMessage.length === 0) return;

        Alert.alert('Registro incorrecto', errorMessage, [{
            text: 'Ok',
            onPress: removeError
        }])
    }, [errorMessage])

    const onRegister = () => {
        console.log({ email, password, name })
        Keyboard.dismiss()

        signUp({ email, password, name })
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

                    <Text style={loginStyles.title}>Registro</Text>

                    <Text style={loginStyles.label}>Nombre</Text>
                    <TextInput
                        placeholder="Ingrese su nombre"
                        placeholderTextColor="rgba(255,255,255,0.4)"
                        keyboardType="email-address"
                        underlineColorAndroid="white"
                        style={[
                            loginStyles.inputField,
                            (Platform.OS === 'ios') && loginStyles.inputFieldIOS
                        ]}
                        selectionColor="white"
                        autoCapitalize='words'
                        autoCorrect={false}

                        value={name}
                        onChangeText={(value) => onChange(value, 'name')}
                        onSubmitEditing={onRegister}
                    />

                    <Text style={loginStyles.label}>Email</Text>
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
                        onSubmitEditing={onRegister}
                    />

                    <Text style={loginStyles.label}>Password</Text>
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
                        onSubmitEditing={onRegister}
                    />

                    <View style={loginStyles.buttonContainer}>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            style={loginStyles.loginButton}
                            onPress={onRegister}
                        >
                            <Text style={loginStyles.loginButtonText}>Crear cuenta</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={() => navigation.replace('LoginScreen')}
                        style={loginStyles.buttonReturn}
                    >
                        <Text style={loginStyles.link}>Login</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </>
    )
}
