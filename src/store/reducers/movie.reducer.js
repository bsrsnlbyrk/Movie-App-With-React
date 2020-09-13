import * as movieTypes from '../types/movie.type';

const initialState = {
    movies: null,
    selectedMovieDetail: null,
    isLoading: false,
    error: null
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case movieTypes.GET_MOVIE_DETAIL_PENDING:
            return { ...state, isLoading: true, error: null }
        case movieTypes.GET_MOVIE_DETAIL_FULFILLED:
            return { ...state, selectedMovieDetail: payload, isLoading: false }
        case movieTypes.GET_MOVIE_DETAIL_REJECTED:
            return { ...state, error: payload, isLoading: false, selectedMovieDetail: null }

        case movieTypes.GET_MOVIE_PENDING:
            return { ...state, isLoading: true, error: null }
        case movieTypes.GET_MOVIE_FULFILLED:
            return { ...state, movies: payload, isLoading: false }
        case movieTypes.GET_MOVIE_REJECTED:
            return { ...state, error: payload, isLoading: false, movies: null }
        default:
            return state
    }
}
