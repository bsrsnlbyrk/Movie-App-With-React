import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from "react-router-dom";

import * as movieActions from '../../store/actions/movie.action';

import Loading from '../../components/Loading';

const Detail = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const isLoading = useSelector(store => store.movieReducer.isLoading);
    const selectedMovieDetail = useSelector(store => store.movieReducer.selectedMovieDetail);
    const error = useSelector(store => store.movieReducer.error);

    React.useEffect(() => {
        dispatch(movieActions.getMovieDetail(id));
        return () => {
        }
    }, [dispatch, id]);

    if (isLoading) {
        return <Loading />;
    };

    if (error) {
        return (
            <div>
                <p>{error}</p>
            </div>
        );
    };

    return (
        <div className="detail-container">
            {selectedMovieDetail &&
                <div className="media">
                    <img src={selectedMovieDetail.Poster} className="align-self-center mr-3" alt={selectedMovieDetail.Title} />
                    <div className="media-body">
                        <h1 className="mt-0">{selectedMovieDetail.Title}</h1>
                        <h3 className="mt-0">{selectedMovieDetail.Type.toUpperCase()}</h3>
                        <h5 className="mt-0">{selectedMovieDetail.Country}</h5>
                        <p><b>Release Date:</b> {selectedMovieDetail.Released}</p>
                        <p className="mb-0"><b>Director:</b> {selectedMovieDetail.Director}</p>
                        <p className="mb-0"><b>Actors:</b> {selectedMovieDetail.Actors}</p>
                        <p className="mb-0"><b>Language:</b> {selectedMovieDetail.Language}</p>
                        <p className="mb-0"><b>Runtime:</b> {selectedMovieDetail.Runtime}</p>
                        <p className="mb-0"><b>ImdbID:</b> {selectedMovieDetail.imdbID}</p>
                        <p className="mb-0"><b>Imdb Rating:</b> {selectedMovieDetail.imdbRating}</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default Detail;
