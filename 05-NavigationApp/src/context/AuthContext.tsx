import { createContext, useReducer } from "react";
import { authReducer } from "./AuthReducer";

// Estado del contexto
export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

// Lo usaremos para decirle a React como luce y que expone el contexto
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    signOut: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (username: string) => void;
}

// Crear el contexto
export const AuthContext = createContext({} as AuthContextProps)

// Componente proveedor del estado
export const AuthProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({type: 'changeFavIcon', payload: iconName})
    }

    const changeUsername = (username: string) => {
        dispatch({type: 'changeUsername', payload: username})
    }

    const signIn = () => {
        dispatch({type: 'signIn'})
    }

    const signOut = () => {
        dispatch({type: 'logout'})
    }

    return (
        <AuthContext.Provider value={{
            authState: authState,
            signIn: signIn,
            signOut: signOut,
            changeFavoriteIcon: changeFavoriteIcon,
            changeUsername: changeUsername,
        }}>
            {children}
        </AuthContext.Provider>
    )
}