import AsyncStorage from '@react-native-async-storage/async-storage';

import { createContext, useEffect, useReducer } from "react";
import { LoginData, LoginResponse, RegisterData, User } from "../interfaces/appInterfaces";
import { AuthState, authReducer } from "./authReducer";
import api from "../api/api";

type AuthContextProps = {
    errorMessage: string;
    token: string | null;
    user: User | null;
    status: 'checking' | 'authenticated' | 'not-authenticated';
    signUp: (registerData: RegisterData) => void;
    signIn: (loginData: LoginData) => void;
    logOut: () => void;
    removeError: () => void;
}

const authInitialState: AuthState = {
    status: 'checking',
    token: null,
    user: null,
    errorMessage: ''
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(authReducer, authInitialState);

    useEffect(() => {
        verifyToken();
    }, []);

    const verifyToken = async () => {
        const token = await AsyncStorage.getItem('token');

        // no token
        if (!token) return dispatch({ type: 'notAuthenticated' });

        // hay token
        const response = await api.get('/auth');

        if (response.status !== 200) {
            return dispatch({ type: 'notAuthenticated' });
        }

        await AsyncStorage.setItem('token', response.data.token);
        dispatch({
            type: 'signUp',
            payload: {
                token: response.data.token,
                user: response.data.usuario
            }
        });
    }

    // Login
    const signIn = async ({ email, password }: LoginData) => {
        try {
            const response = await api.post<LoginResponse>('/auth/login', {
                email,
                password
            });

            dispatch({
                type: 'signUp',
                payload: {
                    token: response.data.token,
                    user: response.data.user
                }
            });

            await AsyncStorage.setItem('token', response.data.token);
        } catch (error: any) {
            console.log(error.response.data.msg);

            dispatch({
                type: 'addError',
                payload: error.response.data.msg || 'Información incorrecta'
            });
        }
    }

    // Register
    const signUp = async ({ email, password, name }: RegisterData) => {
        try {
            const response = await api.post<LoginResponse>('/usuarios', {
                name,
                email,
                password
            });

            dispatch({
                type: 'signUp',
                payload: {
                    token: response.data.token,
                    user: response.data.user
                }
            });

            await AsyncStorage.setItem('token', response.data.token);
        } catch (error: any) {
            console.log(error.response.data.msg);

            dispatch({
                type: 'addError',
                payload: error.response.data.msg || 'Revise los datos ingresados'
            });
        }
    }

    // Cerrar sesión
    const logOut = async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'logOut' });
    }

    const removeError = () => {
        dispatch({ type: 'removeError' });
    }

    return (
        <AuthContext.Provider value={{
            ...state,
            signUp,
            signIn,
            logOut,
            removeError
        }}>
            {children}
        </AuthContext.Provider>
    )
}