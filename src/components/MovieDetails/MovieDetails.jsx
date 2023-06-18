import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';

function MovieDetails() {

    const dispatch = useDispatch();
    const history = useHistory();
    const details = useSelector(store => store.genres);

    const backButton = () => {
        dispatch({ type: 'RESET' })
        history.push('/')
    }

    return (
        <div>
            <button onClick={backButton}>Go Back</button>
            <h1>Bees?</h1>
            {details.map(detail => {
                    return (
                        <div key={detail.id} >
                            <p>{detail.title}, {detail.name}</p>
                        </div>
                    );
                })}
        </div>
    )
}

export default MovieDetails