import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";

import * as movieActions from '../store/actions/movie.action';

export const MovieTable = ({ movies }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const goToMovieDetail = (movieId) => {
        dispatch(movieActions.getMovieDetail(movieId));
        history.push(`/detail/${movieId}`);
    }

    return (
        <div className="movies-table">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col">Title</th>
                        <th scope="col">Year</th>
                        <th scope="col">ImdbID</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map(movie =>
                        <tr onClick={() => goToMovieDetail(movie.imdbID)} key={movie.imdbID}>
                            <th scope="row"></th>
                            <td><img src={movie.Poster} alt={movie.Title} width="50" height="75" /></td>
                            <td>{movie.Title}</td>
                            <td>{movie.Year}</td>
                            <td>{movie.imdbID}</td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    )
}

export default MovieTable;
