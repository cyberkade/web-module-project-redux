import React from 'react';
import { connect } from 'react-redux';
import { removeFavorite } from '../actions/favoritesActions';
import { Link } from 'react-router-dom';


const FavoriteMovieList = (props) => {

    console.log(props.favorites)
    const favorites = props.favorites;
    
    const handleDelete = (e, id) => {
        console.log("Favorite id: ",id);
        e.preventDefault();
        // const filtered = props.favorites.filter((movie) => movie.id !== Number(id))
        props.removeFavorite(id)
    }
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span><span onClick={(e) => handleDelete(e, movie.id)} class="material-icons">remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state) => {
    console.log(state);
    return({
        favorites: state.favoriteMovies.favorites
    })
}

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);