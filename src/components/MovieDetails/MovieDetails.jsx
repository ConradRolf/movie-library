import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// importing all necessary tools for the app

function MovieDetails() {

    // creating variables for the tools we need to use
    const dispatch = useDispatch();
    const history = useHistory();
    const details = useSelector(store => store.genres);
    const movies = useSelector(store => store.movies);

    // creating a function to go back to the home page and reset the stores that we have in the index
    const backButton = () => {
        dispatch({ type: 'RESET_DETAILS' })
        dispatch({ type: 'RESET_MOVIES' })
        history.push('/')
    }

    return (
        <div>
            <button onClick={backButton}>Go Back</button>
            {/* mapping over the single movie that was added into the store after it was reset */}
            {movies.map(movie => {
                return (
                    <div key={movie.id} >
                        <h3>{movie.title}</h3>
                        <img src={movie.poster} alt={movie.title} />
                    </div>
                );
            })}
            <h3>Genres:</h3>
            {/* mapping over the details that were retrieved for the movie */}
            {details.map(detail => {
                return (
                    // i was used for the key because using the movie id caused an error with duplicate keys
                    <div key={detail.id} >
                        <p>{detail.name}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default MovieDetails