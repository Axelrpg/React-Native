import { useEffect, useState } from "react";
import movieDB from "../api/movieDB";
import { MovieDetailInterface } from "../interfaces/movieDetailInterface";
import { Cast, MovieCastInterface } from "../interfaces/movieCastInterface";

interface MovieDetailsState {
    cast: Cast[];
    isLoading: boolean;
    movieDetail?: MovieDetailInterface;
}

const language = '?language=es-ES';

export const useMovieDetails = (movieId: number) => {
    const [state, setState] = useState<MovieDetailsState>({
        cast: [],
        isLoading: true,
        movieDetail: undefined
    });

    const getMovieDetails = async () => {
        const movieDetailPromise = await movieDB.get<MovieDetailInterface>(`/${movieId}${language}`);
        const movieCastPromise = await movieDB.get<MovieCastInterface>(`/${movieId}/credits${language}`);

        const [
            movieDetailResponse,
            movieCastResponse
        ] = await Promise.all([
            movieDetailPromise,
            movieCastPromise
        ]);

        setState({
            cast: movieCastResponse.data.cast,
            isLoading: false,
            movieDetail: movieDetailResponse.data
        });
    }

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        ...state
    }
}
