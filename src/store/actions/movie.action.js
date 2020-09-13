import Axios from "axios";
import * as movieTypes from '../types/movie.type';

export const getMovie = (searchValue, year, type, page) => async (dispatch, getState) => {

    try {
        dispatch({ type: movieTypes.GET_MOVIE_PENDING });
        const res = await Axios.get(`https://www.omdbapi.com/`,
            {
                params: {
                    s: searchValue,
                    y: year,
                    type,
                    page,
                    apikey: process.env.REACT_APP_API_KEY
                }
            }
        );

        if (res.data.Response === 'True') {
            dispatch({ type: movieTypes.GET_MOVIE_FULFILLED, payload: res.data });
        } else {
            dispatch({ type: movieTypes.GET_MOVIE_REJECTED, payload: res.data.Error });
        }


    } catch (error) {
        dispatch({ type: movieTypes.GET_MOVIE_REJECTED, payload: 'Filmler listelenemiyor' });
    }
}
export const getMovieDetail = (movieId) => async (dispatch, getState) => {
    try {
        dispatch({ type: movieTypes.GET_MOVIE_DETAIL_PENDING });

        const res = await Axios.get('https://www.omdbapi.com', {
            params: {
                i: movieId,
                apikey: process.env.REACT_APP_API_KEY
            }
        });

        if (res.data.Response === 'True') {
            dispatch({ type: movieTypes.GET_MOVIE_DETAIL_FULFILLED, payload: res.data });
        } else {
            dispatch({ type: movieTypes.GET_MOVIE_DETAIL_REJECTED, payload: res.data.Error });
        }



    } catch (error) {
        dispatch({ type: movieTypes.GET_MOVIE_REJECTED, payload: 'Bir hata oluştu. Lütfen daha sonra tekrar deneyin.' });
    }
}