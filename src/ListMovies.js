import MovieInfo from './MovieInfo';
import {Button} from "react-bootstrap"

function ListMovies(props) {


	const handleClick = (movie)=>{
		props.setSelection(movie);
	}
	const handleNomination = (movie) => {
		if(props.nominees.length<5) {
			props.setNominees([...props.nominees, movie])

		
		}
		else{
			alert("All 5 nominees used!")
		}
	
	}
	return(
		<div>
			<div>
				{props.selection? <MovieInfo selection={props.selection} handleNomination={handleNomination} setSelection={props.setSelection} setPic={props.setPic} nominees={props.nominees}/> : 
					props.movieList.map((movie) => (
					<div key={movie.imdbId} value={movie.title}>
						<div className="font-weight-bold">{movie.Title}</div>
						{movie.Year}
						<br></br>
						<Button onClick={() => handleClick(movie)} className="btn primary mr-1">More</Button>
						{props.nominees.includes(movie)? <Button className="btn primary mr-1" disabled onClick={()=>handleNomination(movie)}>Nominate</Button> :
						 <Button className="btn primary mr-1" onClick={()=>handleNomination(movie)}>Nominate</Button>}
					</div>
				))}
			</div>
		</div>
	)


}
export default ListMovies;
