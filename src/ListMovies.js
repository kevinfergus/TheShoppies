import MovieInfo from './MovieInfo';
import {Button} from "react-bootstrap"


function ListMovies(props) {

	const handleInfo= (movie)=>{
		console.log("movie", movie)
		props.setSelection(movie);
		console.log("selection", props.selection)
	}

	const handleClick = (movie)=>{ 
		console.log("movie", movie)
		if(props.nominees.length<5) 
			{ props.setNominees([...props.nominees, movie]) } 
			else( alert("Nominations are full!") ) }
	return(
		<div>
			<div>
				{props.selection? <MovieInfo selection={props.selection} setSelection={props.setSelection} setPic={props.setPic} handleInfo={handleInfo}/> : 
					props.movieList.map((movie) => (
					<div key={movie.imdbId} value={movie.title}>
						<div className="font-weight-bold">{movie.Title}</div>
						{movie.Year}
						<br></br>
						<Button className="btn primary mr-1" onClick={(movie)=>handleInfo(movie)}>More</Button>
						<Button className="btn primary mr-1" onClick={(movie)=>handleClick(movie)}>Nominate</Button>
					</div>
				))}
			</div>
		</div>
	)


}
export default ListMovies;
