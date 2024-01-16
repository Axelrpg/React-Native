import { StyleSheet, Text, View } from "react-native"

export const BoxObjectModelScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Box Object Model Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
    },
    title: {
        fontSize: 20,
        paddingHorizontal: 100,
        paddingVertical: 20,
        marginHorizontal: 20,
        borderWidth: 10,
        // width: 250,
        // height: 150,
        // backgroundColor: "red",
    },
});
