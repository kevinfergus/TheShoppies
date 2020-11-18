import { useState, useEffect } from 'react';
import MovieInfo from './MovieInfo';

////maybe see if you can get back to intializing selection as an empty
//object, probably best practice

function ListMovies(props) {
	const [ selection, setSelection ] = useState(false);

	function handleClick(movie) {
		setSelection(movie);
	}

	if (props.movieList && !selection) {
		return props.movieList.map((movie) => (
			<div key={movie.imdbId} value={movie.title} onClick={() => handleClick(movie)}>
				{movie.Title}
				{movie.Year}
			</div>
		));
	} else if (selection) {
		return <MovieInfo selection={selection} setSelection={setSelection} />;
	} else {
		return <div />;
	}
}
export default ListMovies;
