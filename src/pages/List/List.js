import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as movieActions from '../../store/actions/movie.action';
import * as searchActions from '../../store/actions/search.action';

import SearchInput from '../../components/SearchInput';
import YearFilter from '../../components/YearFilter';
import ListPagination from '../../components/ListPagination';
import MovieTable from '../../components/MovieTable';
import Loading from '../../components/Loading';

const List = () => {
    const dispatch = useDispatch();
    const searchInput = useSelector(store => store.searchReducer.searchInput);
    const searchYear = useSelector(store => store.searchReducer.searchYear);
    const searchType = useSelector(store => store.searchReducer.searchType);
    const page = useSelector(store => store.searchReducer.page);
    const movies = useSelector(store => store.movieReducer.movies);
    const isLoading = useSelector(store => store.movieReducer.isLoading);
    const error = useSelector(store => store.movieReducer.error);

    React.useEffect(() => {
        dispatch(movieActions.getMovie(searchInput, searchYear, searchType, page));
        return () => {
        }
    }, [dispatch, searchInput, searchYear, searchType, page]);

    if (isLoading) {
        return <Loading />;
    };

    if (error) {
        return (
            <div className="list-container">
                <div className="search-wrapper">
                    <SearchInput
                        searchValue={searchInput}
                        setSearchValue={val => dispatch(searchActions.setSearchInput(val))}
                        type={searchType}
                        setType={type => dispatch(searchActions.setSearchType(type))}
                    />
                    <YearFilter year={searchYear} setYear={() => dispatch(searchActions.setSearchYear)} />
                </div>
                <p>{error}</p>
            </div>
        );
    };

    return (
        <div className="list-container">
            <div className="search-wrapper">
                <SearchInput
                    searchValue={searchInput}
                    setSearchValue={val => dispatch(searchActions.setSearchInput(val))}
                    type={searchType}
                    setType={type => dispatch(searchActions.setSearchType(type))}
                />
                <YearFilter year={searchYear} setYear={year => dispatch(searchActions.setSearchYear(year))} />
            </div>
            {movies &&
                <div>
                    <MovieTable movies={movies.Search} />
                    <ListPagination
                        resultsNumber={Number(movies.totalResults)}
                        currentPage={page}
                        setPageNumber={page => dispatch(searchActions.setSearchPage(page))}
                    />
                </div>
            }
        </div>
    );
}

export default List;
