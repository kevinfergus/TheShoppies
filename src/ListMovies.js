import MovieInfo from './MovieInfo';



function ListMovies(props) {

	const handleClick = (movie)=>{
		props.setSelection(movie);
	}

	return(
		<div>
			<div>
				{props.selection? <MovieInfo selection={props.selection} setSelection={props.setSelection} setPic={props.setPic}/> : 
				
				props.movieList.map((movie) => (
					<div key={movie.imdbId} value={movie.title} onClick={() => handleClick(movie)}>
						{movie.Title}
						{movie.Year}
					</div>
				))}
			</div>
		</div>
	)


}
export default ListMovies;
