import { useState } from 'react';

function ListMovies(props) {
	if (props.movieList) {
		return props.movieList.map((movie) => (
			<li key={movie.title}>
				{movie.Title}
				{movie.Year}
			</li>
		));
	} else {
		return <div />;
	}
}
export default ListMovies;
