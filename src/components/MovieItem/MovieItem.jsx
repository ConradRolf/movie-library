import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

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
            <h3>{props.movie.title}</h3>
            <img onClick={getDetails} src={props.movie.poster} alt={props.movie.title} />
        </>
    );
}

export default MovieItem