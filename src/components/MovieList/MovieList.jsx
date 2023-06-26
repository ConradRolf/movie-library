import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Carousel from 'react-material-ui-carousel';
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
        <>
            <Container fixed>
                <Typography gutterBottom variant="h5" component="div">
                    Movie List
                </Typography>
                <div className="carousel-container">
                <Carousel>
                    {movies.map(movie => (
                        <MovieItem movie={movie} />
                    ))}
                </Carousel>
                </div>
            </Container>
        </>
    );
}

export default MovieList;