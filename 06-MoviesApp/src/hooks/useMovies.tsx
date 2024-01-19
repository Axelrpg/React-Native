import { useEffect, useState } from 'react'
import movieDB from '../api/movieDB';
import { Movie, MovieDBMoviesResponse } from '../interfaces/movieInterface';

interface MoviesState {
    moviesNowPlaying: Movie[];
    moviesPopular: Movie[];
    moviesTopRated: Movie[];
    moviesUpcoming: Movie[];
}

const language = '?language=es-ES';

export const useMovies = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({
        moviesNowPlaying: [],
        moviesPopular: [],
        moviesTopRated: [],
        moviesUpcoming: []
    });

    const getMovies = async () => {

        const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>(`/now_playing${language}`);
        const popularPromise = movieDB.get<MovieDBMoviesResponse>(`/popular${language}`);
        const topRatedPromise = movieDB.get<MovieDBMoviesResponse>(`/top_rated${language}`);
        const upcomingPromise = movieDB.get<MovieDBMoviesResponse>(`/upcoming${language}`);

        const response = await Promise.all([
            nowPlayingPromise,
            popularPromise,
            topRatedPromise,
            upcomingPromise
        ]);

        setMoviesState({
            moviesNowPlaying: response[0].data.results,
            moviesPopular: response[1].data.results,
            moviesTopRated: response[2].data.results,
            moviesUpcoming: response[3].data.results
        });

        setIsLoading(false);
    }

    useEffect(() => {
        /* getMovies(); */
        getMovies();
    }, []);

    return {
        isLoading,
        ...moviesState
    }
}
