import { useEffect } from 'react';
import axios from 'axios';
import {db}from './firebase'
import firebase from "firebase/app";
import "firebase/firestore"


function MovieInfo(props) {

	const fetchMovieInfo = async() => {

		const response = await axios.get(`http://www.omdbapi.com/?i=${props.selection.imdbID}&apikey=52140488`);
		props.setSelection(response.data)

	}
	useEffect( () => {
		fetchMovieInfo()
	}, []);

	const handleBackClick = ()=>  {
		props.setSelection(false)
	}

	const  handleThumbClick =async(e) => {
		const title= props.selection.Title
		const movieDocRef = db.collection("ratings").doc(title);
		const rating = e.target.value

		///wrap the set call in a function that you can call if it doesn't exist




		
		db.runTransaction(function(transaction) {
  
    		return transaction.get(movieDocRef).then(function(movieDoc) {
       			 if (!movieDoc.exists) {
					if(rating==="thumbsUP") 
						{
							movieDocRef.set({thumbsUP: 1}).then(function() {
								console.log("Document successfully written!");
							})
							.catch(function(error) {
								console.error("Error writing document: ", error);
							});
						}
					if (rating ==="thumbsDOWN") {
						movieDocRef.set({thumbsDOWN: 1})
					}
       			 }

					else {
					const newRating = movieDoc.data().thumbsUP + 1
					console.log('new rating', newRating)
	
					if(rating==='thumbsUP') {
							transaction.update(movieDocRef, { thumbsUP: newRating });
					}
					if(rating==="thumbsDOWN") {
						transaction.update(movieDocRef, { thumbsDOWN: newRating });
					}
				}
    		});
		}).then(function() {
   		 console.log("Transaction successfully committed!");
		}).catch(function(error) {
   		 console.log("Transaction failed: ", error);
		});
		

	
	


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
			<button type="button" onClick={()=>handleBackClick()}>Back</button>
			<button type ="button" value="thumbsUP" onClick={(e)=>handleThumbClick(e)}>Thumbs Up</button>
			<button type ="button" value="thumbsDOWN" onClick={(e)=>handleThumbClick(e)}>Thumbs Down</button>

		</div>
	)
}
export default MovieInfo;
