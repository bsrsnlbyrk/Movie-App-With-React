import * as searchTypes from '../types/search.type';

const initialState = {
    searchInput: 'pokemon',
    searchYear: null,
    searchType: null,
    page: 1
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case searchTypes.SET_SEARCH_INPUT:
            return { ...state, searchInput: payload }
        case searchTypes.SET_SEARCH_YEAR:
            return { ...state, searchYear: payload }
        case searchTypes.SET_SEARCH_TYPE:
            return { ...state, searchType: payload }
        case searchTypes.SET_SEARCH_PAGE:
            return { ...state, page: payload }
        case searchTypes.RESET_SEARCH_STATE:
            return { ...initialState }
        default:
            return state
    }
}
