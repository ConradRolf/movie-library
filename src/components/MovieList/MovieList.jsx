import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem'
// importing all necessary tools for the app

function MovieList() {

    // creating variables for the tools we need to use
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    // allows the movies to load on page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {/* mapping over the movies that are stored within the movies store */}
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            {/* routes to a component to create each individual item */}
                            <MovieItem movie={movie} />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;