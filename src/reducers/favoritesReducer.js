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
        default:
            return state;
    }
}

export default reducer;