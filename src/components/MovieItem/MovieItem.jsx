import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// importing all necessary tools for the app

function MovieItem(props) {

    const history = useHistory()
    const dispatch = useDispatch();

    const getDetails = () => {
        console.log('You clicked on: ', props.movie.title, props.movie.id)
        dispatch({ type: 'RESET_MOVIES' })
        dispatch({ type: 'FETCH_MOVIE', payload: props.movie.id })
        dispatch({ type: 'FETCH_DETAILS', payload: props.movie.id })
        history.push('/details')
    }

    return (
        <>
            {/* <h3>{props.movie.title}</h3>
            <img onClick={getDetails} src={props.movie.poster} alt={props.movie.title} /> */}
            <Card sx={{ width: '100%' }}>
                <CardMedia
                    sx={{ height: 400 }}
                    image={props.movie.poster}
                    title={props.movie.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.movie.title}
                    </Typography>
                    <CardActions>
                        <Button onClick={getDetails} size="small">
                            Details
                        </Button>
                    </CardActions>
                </CardContent>
            </Card>
        </>
    );
}

export default MovieItem