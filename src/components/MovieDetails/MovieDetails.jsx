import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function MovieDetails() {

    const dispatch = useDispatch();
    const history = useHistory();
    const details = useSelector(store => store.genres);
    const movies = useSelector(store => store.movies);

    const backButton = () => {
        dispatch({ type: 'RESET_DETAILS' })
        dispatch({ type: 'RESET_MOVIES' })
        history.push('/')
    }

    return (
        <div>
            <button onClick={backButton}>Go Back</button>
            {movies.map(movie => {
                return (
                    <div key={movie.id} >
                        <h3>{movie.title}</h3>
                        <img src={movie.poster} alt={movie.title} />
                    </div>
                );
            })}
            <h3>Genres:</h3>
            {details.map((detail, i) => {
                return (
                    <div key={i} >
                        <p>{detail.name}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default MovieDetails