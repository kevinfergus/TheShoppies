import logo from './logo.png';
import './App.css';
import { useState } from 'react';
import ListMovies from './ListMovies';
import SearchBar from './SearchBar'
import Nominees from './Nominees'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"

const App = ()=> {
	const [ movieList, setMovieList ] = useState([]);
	const [ selection, setSelection ] = useState();
	const[pic, setPic]=useState(logo)
	const [nominees, setNominees] =useState([])

	console.log(nominees)
	return (
		<div className="App-header">
			The Shoppies
		<div className="App">
			<img src={pic} className="App-logo" alt="logo" />
				<div>{selection? '' : <SearchBar movieList={movieList} setMovieList={setMovieList}></SearchBar>}</div>
				<div>{movieList? <ListMovies movieList={movieList}  nominees={nominees} setSelection={setSelection} selection={selection} nominees={nominees} setPic={setPic} setNominees={setNominees}/> : ''}</div>
				<Nominees nominees={nominees} setNominees={setNominees}></Nominees>
				
		</div>
		</div>
	);
}
const styles = {
	center: {
	  marginLeft: "auto",
	  marginRight: "auto"
	}
  }

export default App;
