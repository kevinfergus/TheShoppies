import { useEffect } from 'react';
import axios from 'axios';
import {db}from './firebase'
import "firebase/firestore"
import {Button,Table, Row} from 'react-bootstrap'
import logo from './logo.png';
import './App.css';




function MovieInfo(props) {

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

	const updateDoc = (rating, movieDocRef) => {
		db.runTransaction(function(transaction) {
			return transaction.get(movieDocRef).then(function(movieDoc) {
				  let newRating
					  if(rating==='thumbsUP') {
						  newRating = movieDoc.data().thumbsUP + 1	

						  console.log(newRating)

						  transaction.update(movieDocRef, { thumbsUP: newRating });
						  return newRating
					  }
					  if(rating==="thumbsDOWN") {
						  newRating = movieDoc.data().thumbsDOWN + 1	

						  transaction.update(movieDocRef, { thumbsDOWN: newRating });
						  return newRating
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
			movieDocRef.get().then(function(doc) {
			console.log("doc in get", doc.exists)
			if (doc.exists) {
				updateDoc(rating, movieDocRef)
			} else {
				createDoc(rating, movieDocRef)
			}
		}).catch(function(error) {
			console.log("Error getting document:", error);
		});
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
			<Button  value="thumbsUP" onClick={(e)=>handleThumbClick(e)} className="mr-2">Thumbs Up</Button>
			<Button value="thumbsDOWN" onClick={(e)=>handleThumbClick(e)} className="mr-2">Thumbs Down</Button>
		</div>
	)
}




export default MovieInfo;
