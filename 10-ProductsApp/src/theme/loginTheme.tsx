import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
    buttonContainer: {
        alignItems: 'center',
        marginTop: 50
    },
    buttonReturn: {
        position: 'absolute',
        left: 20,
        top: 50,
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    container: {
        flex: 1,
        paddingHorizontal: 30,
        justifyContent: 'center',
        height: 600,
        marginBottom: 50
    },
    title: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
    },
    label: {
        marginTop: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    inputField: {
        color: 'white',
        marginTop: 5,
        fontSize: 20,
    },
    inputFieldIOS: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        paddingBottom: 5
    },
    loginButton: {
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 100
    },
    loginButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    newUserContainer: {
        alignItems: 'flex-end',
        marginTop: 10,
        marginRight: 10
    },
    link: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    }
});