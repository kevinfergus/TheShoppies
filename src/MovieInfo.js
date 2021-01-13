import { useEffect } from 'react';
import axios from 'axios';
import {Button,Table, Row} from 'react-bootstrap'
import logo from './logo.png';
import './App.css';




const MovieInfo = (props) => {

	const fetchMovieInfo = async() => {
		const response = await axios.get(`http://www.omdbapi.com/?i=${props.selection.imdbID}&apikey=52140488`);
		props.setSelection(response.data)
		props.setPic(response.data.Poster)

	}
	useEffect( () => {
		fetchMovieInfo()
	}, []);

	const handleBackClick = ()=>  {
		props.setSelection(false)
		props.setPic(logo)
	}
	const createDoc = (rating, movieDocRef) => {
			if(rating==="thumbsUP") 
					{
						 movieDocRef.set({thumbsUP: 1, thumbsDOWN: 0}).then(function() {
							console.log("Document successfully written!");
						})
						.catch(function(error) {
							console.error("Error writing document: ", error);
						});
					}
					if (rating ==="thumbsDOWN") {
						movieDocRef.set({thumbsUP: 0, thumbsDOWN: 1} ).then(function() {
						   console.log("Document successfully written!");
					
					   }).catch(function(error) {
						   console.error("Error writing document: ", error);
					   });
				   }
	}


	const  handleThumbClick =(e) => {
	
	}
	return (
		<div className="col-centered">
			<table className="Table">  
				<tr>
   					<th>Title</th>
    				<th>Director</th>
					<th>Year of Release</th>
				</tr>
  				<tr>
					<td>{props.selection.Title}</td>
    				<td>{props.selection.Director}</td>
					<td>{props.selection.Year}</td>
  				</tr>
  			</table>
			  <br></br>
			<Button onClick={()=>handleBackClick()} className="mr-2">Back</Button>
			<Button  value="thumbsUP" onClick={()=>props.handleNomination(props.selection)} className="mr-2">Nominate</Button>
		</div>
	)
}




export default MovieInfo;
