import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RootStackParams } from '../navigator/Navigation'
import { useMovieDetails } from '../hooks/useMovieDetails';
import { ActivityIndicator } from 'react-native';
import { MovieDetails } from '../components/MovieDetails';
import Icon from 'react-native-vector-icons/Ionicons';

const { height: screenHeight } = Dimensions.get('screen');

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> { }

export const DetailScreen = ({ route, navigation }: Props) => {

    const { movie } = route.params;
    const uri = `https://image.tmdb.org/t/p/w400${movie.poster_path}`;

    const { isLoading, cast, movieDetail } = useMovieDetails(movie.id);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }

    return (
        <ScrollView>

            {/* Botón para cerrar */}
            <View style={styles.backButton}>
                <TouchableOpacity
                    onPress={() => navigation.pop()}
                >
                    <Icon
                        name={'arrow-back-outline'}
                        size={50}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                <View style={styles.imageBorder}>
                    <Image
                        source={{ uri }}
                        style={styles.image}
                    />
                </View>
            </View>

            <View style={styles.marginContainer}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.subtitle}>{movie.original_title}</Text>
            </View>

            <MovieDetails
                movieDetail={movieDetail!}
                cast={cast}
            />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 30,
        left: 10,
        color: 'white'
    },
    image: {
        flex: 1,
    },
    imageBorder: {
        flex: 1,
        overflow: 'hidden',
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25
    },
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,
        elevation: 15,
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subtitle: {
        fontSize: 16,
        opacity: 0.8,
        color: 'black'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    }
})
