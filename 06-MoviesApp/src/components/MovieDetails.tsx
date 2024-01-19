import React from 'react'
import { MovieDetailInterface } from '../interfaces/movieDetailInterface'
import { Cast } from '../interfaces/movieCastInterface';
import { FlatList, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import { CastItem } from './CastItem';

interface Props {
    movieDetail: MovieDetailInterface;
    cast: Cast[];
}

export const MovieDetails = ({ movieDetail, cast }: Props) => {
    return (
        <>
            {/* Details */}
            <View style={{ marginHorizontal: 20 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Icon
                        name="star-outline"
                        color="grey"
                        size={16}
                    />
                    <Text style={{ color: 'black' }}>{movieDetail.vote_average}</Text>

                    <View style={{ marginLeft: 5, flexDirection: 'row' }}>
                        {
                            movieDetail.genres.map(genre => (
                                <Text key={genre.id} style={{ marginLeft: 5, color: 'black' }}>- {genre.name}</Text>
                            ))
                        }
                    </View>
                </View>

                {/* Overview */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: 'black' }}>
                    Historia
                </Text>
                <Text style={{ fontSize: 16, color: 'black' }}>
                    {movieDetail.overview}
                </Text>

                {/* Budget */}
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', color: 'black' }}>
                    Presupuesto
                </Text>
                <Text style={{ fontSize: 16, color: 'black' }}>
                    {currencyFormatter.format(movieDetail.budget, { code: 'USD' })}
                </Text>
            </View >

            {/* Cast */}
            <View style={{ marginTop: 10, marginBottom: 75 }}>
                <Text style={{ fontSize: 23, marginTop: 10, fontWeight: 'bold', marginHorizontal: 20, color: 'black' }}>
                    Actores
                </Text>

                <FlatList
                    data={cast}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CastItem actor={item} />}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 10, height: 70, marginBottom: 10 }}
                />
            </View>
        </>
    )
}
