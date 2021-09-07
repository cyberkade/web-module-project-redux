export const TOGGLE_FAVORITES = "TOGGLE_FAVORITE";
export const ADD_FAVORITES = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";


export const toggleFavorites = ()=>{
    return({type: TOGGLE_FAVORITES});
}

export const addFavorites = (movieData)=>{
    return({type: ADD_FAVORITES, payload:movieData});
}

export const removeFavorite = (id)=>{
    return({type: REMOVE_FAVORITE, payload:id});
}

