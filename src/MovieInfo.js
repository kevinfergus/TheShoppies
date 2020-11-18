import { useState, useEffect } from 'react';
import axios from 'axios';

function MovieInfo(props) {

	const fetchMovieInfo = async() => {

		const response = await axios.get(`http://www.omdbapi.com/?i=${props.selection.imdbID}&apikey=52140488`);
		props.setSelection(response.data)

	}
	useEffect( () => {
		fetchMovieInfo()
	}, []);

	const handleClick = ()=>  {
		props.setSelection(false)
	}
	return (
		<div>
			<table>  
				<tr>
   					<th>Title</th>
    				<th>Director</th>
					<th>Year of Release</th>


 				 </tr>
  				<tr>
					<td>{props.selection.Title}</td>
    				<td>${props.selection.Director}</td>
					<td>{props.selection.Year}</td>
  				</tr>
  			</table>
			<button type="button" onClick={()=>handleClick()}>Back</button>
			<button type ="button" value="thumbs up">Thumbs Up</button>
			<button type ="button" value="thumbs down">Thumbs Down</button>

		</div>
	)
}
export default MovieInfo;
