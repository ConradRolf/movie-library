function MovieItem(props) {

    const getDetails = () => {
        dispatch({ type: 'FETCH_MOVIE', payload: movie.id })
    }

    return (
        <>
            <h3>{props.movie.title}</h3>
            <img onClick={getDetails} src={props.movie.poster} alt={props.movie.title} />
        </>
    );
}

export default MovieItem