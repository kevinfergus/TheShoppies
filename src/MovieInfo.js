import { useState, useEffect } from 'react';
import axios from 'axios';

function MovieInfo(props) {
	useEffect(async () => {
		const response = await axios.get(`http://www.omdbapi.com/?i=${props.selection.imdbID}&apikey=52140488`);
	});

	return <div> Hello </div>;
}
export default MovieInfo;
