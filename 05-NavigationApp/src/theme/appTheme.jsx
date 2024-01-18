import { StyleSheet } from "react-native";

export const colors = {
    primary: '#5856D6',
};

export const styles = StyleSheet.create({
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    avatarContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    bigButton: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
    },
    bigButtonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    centerContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerContentSideBar: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    globalMargin: {
        marginHorizontal: 20,
    },
    menuButton: {
        marginVertical: 10,
    },
    menuContainer: {
        marginVertical: 30,
        marginHorizontal: 50,
    },
    menuText: {
        color: 'black',
        fontSize: 20,
    },
    title: {
        color: 'black',
        fontSize: 30,
        marginBottom: 10,
    },
});