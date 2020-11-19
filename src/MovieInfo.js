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
	
		var sfDocRef = movieDocRef


sfDocRef.set({ population: sfDocRef.population });

return db.runTransaction(function(transaction) {
    // This code may get re-run multiple times if there are conflicts.
    return transaction.get(sfDocRef).then(function(sfDoc) {
        if (!sfDoc.exists) {
            throw "Document does not exist!";
        }

        // Add one person to the city population.
        // Note: this could be done without a transaction
        //       by updating the population using FieldValue.increment()
        var newPopulation = sfDoc.data().population + 1;
        transaction.update(sfDocRef, { population: newPopulation });
    });
}).then(function() {
    console.log("Transaction successfully committed!");
}).catch(function(error) {
    console.log("Transaction failed: ", error);
});

 

		// return db.runTransaction(function(transaction) {
  
    	// 	return transaction.get(movieDocRef).then(function(movieDoc) {
       	// 		 if (!movieDoc.exists) {
        //    			 throw "Document does not exist!";
       	// 		 }

        
		// 			const newRating = movieDoc.data().thumbsUP + 1
		// 			console.log('rating', rating)
		// 			console.log('newRating', newRating)
		// 			if(rating==='thumbsUP') {
		// 					transaction.update(movieDocRef, { thumbsUP: newRating });
		// 			}
		// 			if(rating==="thumbsDOWN") {
		// 				transaction.update(movieDocRef, { thumbsEVEN: newRating });
		// 			}
    	// 	});
		// }).then(function() {
   		//  console.log("Transaction successfully committed!");
		// }).catch(function(error) {
   		//  console.log("Transaction failed: ", error);
		// });

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
