import React from 'react';
import { useDispatch } from 'react-redux';

import * as searchActions from '../store/actions/search.action';

const SearchInput = ({ searchValue, setSearchValue, type, setType }) => {
    const dispatch = useDispatch();

    const handleKeyDown = e => {
        if (e.keyCode === 13) {
            dispatch(searchActions.resetSearchState());
            setType(type);
            setSearchValue(e.target.value);
        }
    };

    return (
        <div className="search-input">
            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{type ? type : 'All'}</button>
                    <div className="dropdown-menu">
                        <button className="dropdown-item" onClick={() => setType("movie")}>Movie</button>
                        <button className="dropdown-item" onClick={() => setType("series")}>Series</button>
                        <button className="dropdown-item" onClick={() => setType("episode")}>Episode</button>
                    </div>
                </div>
                <input type="text" className="form-control" onKeyDown={(e) => handleKeyDown(e)} placeholder={searchValue} />
            </div>
        </div>
    );
};

export default SearchInput;