import * as searchTypes from '../types/search.type';

export const setSearchInput = inputValue => {
    return {
        type: searchTypes.SET_SEARCH_INPUT,
        payload: inputValue
    }
}

export const setSearchYear = year => {
    return {
        type: searchTypes.SET_SEARCH_YEAR,
        payload: year
    }
}

export const setSearchType = type => {
    return {
        type: searchTypes.SET_SEARCH_TYPE,
        payload: type
    }
}

export const setSearchPage = page => {
    return {
        type: searchTypes.SET_SEARCH_PAGE,
        payload: page
    }
}

export const resetSearchState = _ => {
    return {
        type: searchTypes.RESET_SEARCH_STATE
    }
}