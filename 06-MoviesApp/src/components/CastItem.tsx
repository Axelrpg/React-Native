import React from 'react'
import { Cast } from '../interfaces/movieCastInterface'
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
    actor: Cast;
}

export const CastItem = ({ actor }: Props) => {

    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return (
        <View style={styles.container}>
            {
                actor.profile_path && (
                    <Image
                        source={{ uri }}
                        style={{ width: 50, height: 50, borderRadius: 10 }}
                    />
                )
            }

            <View style={styles.actorInfo}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
                    {actor.name}
                </Text>
                <Text style={{ color: 'black', fontSize: 16 }}>
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    actorInfo: {
        marginLeft: 10,
        marginTop: 4
    },
    container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowRadius: 7,
        shadowOpacity: 0.25,
        elevation: 10,
        marginLeft: 20,
        paddingRight: 15,
        height: 50,
    },
})
