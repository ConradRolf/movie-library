import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
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
            <Grid 
                item sm={6} lg={3}
                direction="column"
                alignItems="center"
                justifyContent="center">
                <Card sx={{ width: '100%' }}>
                    {movies.map(movie => {
                        return (
                            <img src={movie.poster}></img>
                        )
                    })}
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {movies.map(movie => {
                                return (
                                    <p>{movie.title}</p>
                                )
                            })}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            Genres:
                        </Typography>
                        <Typography varient="body2" color="text.secondary">
                            {details.map(detail => {
                                return (
                                    <div key={detail.id} >
                                        <p>{detail.name}</p>
                                    </div>
                                );
                            })}
                        </Typography>
                        <CardActions>
                            <Button onClick={backButton} size="medium">
                                Go Back
                            </Button>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}

export default MovieDetails