import logo from './logo.png';
import './App.css';
import { useState } from 'react';
import ListMovies from './ListMovies';
import SearchBar from './SearchBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react"

function App() {
	const [ movieList, setMovieList ] = useState([]);
	const [ selection, setSelection ] = useState();
	const[pic, setPic]=useState(logo)
	
	return (
		<div className="App-header">
			Movie Rater
		<div className="App">
			<img src={pic} className="App-logo" alt="logo" />
				<div>{selection? '' : <SearchBar movieList={movieList} setMovieList={setMovieList}></SearchBar>}</div>
				<div>{movieList? <ListMovies movieList={movieList} selection={selection} setSelection={setSelection} setPic={setPic}/> : ''}</div>
				
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
