import { combineReducers } from 'redux';
import movieReducer from './movie.reducer';
import searchReducer from './search.reducer';

export default combineReducers({
    movieReducer,
    searchReducer
});
