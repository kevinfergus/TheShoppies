import { useEffect } from 'react';
import axios from 'axios';
import {db}from './firebase'
require("firebase/firestore");


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

	const handleThumbClick =(e) => {
		const title= props.selection.Title
		const movieDocRef = db.collection("ratings").doc(title);
		const rating = e.target.value


		let documentData
	 movieDocRef.get().then(function(doc) {
			if (doc.exists) {
				documentData=doc.data()
			} else {
				// doc.data() will be undefined in this case
				documentData=0
			}
		}).catch(function(error) {
			console.log("Error getting document:", error);
		});

		console.log('DATA', documentData)

		


	
	
 		return db.runTransaction(function(transaction) {
  
    		return transaction.get(movieDocRef).then(function(movieDoc) {
       			 if (!movieDoc.exists) {
           			 throw "Document does not exist!";
       			 }

        
					const newRating = movieDoc.data().thumbsUP + 1
					console.log('rating', rating)
					console.log('newRating', newRating)
					if(rating==='thumbsUP') {
							transaction.update(movieDocRef, { thumbsUP: newRating });
					}
					if(rating==="thumbsDOWN") {
						transaction.update(movieDocRef, { thumbsEVEN: newRating });
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
