import React from 'react'
import Carousel from 'react-native-snap-carousel';

import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native'
import { useMovies } from '../hooks/useMovies'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';

export const HomeScreen = () => {

    const {
        isLoading,
        moviesNowPlaying,
        moviesPopular,
        moviesTopRated,
        moviesUpcoming
    } = useMovies();
    const { top } = useSafeAreaInsets();
    const { width: windowWidth } = Dimensions.get('window');

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator color="red" size={100} />
            </View>
        )
    }

    return (
        <ScrollView>
            <View style={{ marginTop: top + 20 }}>

                {/* Carousel con peliculas */}
                <View style={{
                    height: 440,
                }}>
                    <Carousel
                        data={moviesNowPlaying}
                        renderItem={({ item }: any) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={0.9}
                    />
                </View>

                {/* Scroll horizontal de peliculas */}
                <HorizontalSlider title="Populares" movies={moviesPopular} />
                <HorizontalSlider title="Top Rated" movies={moviesTopRated} />
                <HorizontalSlider title="Upcoming" movies={moviesUpcoming} />
            </View>
        </ScrollView>
    )
}
