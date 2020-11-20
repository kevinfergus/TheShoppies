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
	const createDoc = (rating, movieDocRef) => {
		if(rating==="thumbsUP") 
					{
						 movieDocRef.set({thumbsUP: 1, thumbsDOWN: 0}).then(function() {
							console.log("Document successfully written!");
							return 'Doc created'
						})
						.catch(function(error) {
							console.error("Error writing document: ", error);
						});
					}
					if (rating ==="thumbsDOWN") {
						movieDocRef.set({thumbsUP: 0, thumbsDOWN: 1} ).then(function() {
						   console.log("Document successfully written!");
						   return 'Doc created'
					   }).catch(function(error) {
						   console.error("Error writing document: ", error);
					   });
				   }
	}

	const updateDoc = (rating, movieDocRef) => {
		db.runTransaction(function(transaction) {
			return transaction.get(movieDocRef).then(function(movieDoc) {

			  if(movieDoc.exists) {
				  let newRating
					  if(rating==='thumbsUP') {
						  newRating = movieDoc.data().thumbsUP + 1	

						  transaction.update(movieDocRef, { thumbsUP: newRating });
						  return newRating
					  }
					  if(rating==="thumbsDOWN") {
						  newRating = movieDoc.data().thumbsDOWN + 1	

						  transaction.update(movieDocRef, { thumbsDOWN: newRating });
						  return newRating
					  }
			  }
			  else {
			  }

		  });
	  }).then(function() {
		  console.log("Transaction successfully committed!");
	  }).catch(function(error) {
		  console.log("Transaction failed: ", error);
	  })
	}

	const  handleThumbClick =(e) => {
		const title= props.selection.Title
		const movieDocRef = db.collection("ratings").doc(title);
		const rating = e.target.value
		let docExists 
		movieDocRef.get().then(function(doc) {
			if (doc.exists) {
				docExists=true
			} else {
				// doc.data() will be undefined in this case
				docExists=false
			}
		}).catch(function(error) {
			console.log("Error getting document:", error);
		});
	
	
		if(!docExists) {
			createDoc(rating, movieDocRef)
		}
		else {
			updateDoc(rating, movieDocRef)
		}

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
