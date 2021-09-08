import { TOGGLE_FAVORITES, ADD_FAVORITES, REMOVE_FAVORITE } from '../actions/favoritesActions.js';
import movies from './../data.js';

const initialState = {
    favorites: movies,
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITES:
            return {
                ...state,
                favorites: [...state.favorites, action.payload]
            }
        case REMOVE_FAVORITE:
            const filtered = state.favorites.filter((movie) => movie.id !== Number(action.payload) )
            return {
                ...state,
                favorites: filtered
            }
        default:
            return state;
    }
}

export default reducer;