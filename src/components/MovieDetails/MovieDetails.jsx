import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function MovieDetails() {

    const history = useHistory();
    const details = useSelector(store => store.genres);

    const backButton = () => {
        history.push('/')
    }

    return (
        <div>
            <button onClick={backButton}>Go Back</button>
            <h1>Bees?</h1>
        </div>
    )
}

export default MovieDetails