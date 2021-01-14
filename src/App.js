import logo from './logo.png';
import './App.css';
import { useState } from 'react';
import ListMovies from './ListMovies';
import SearchBar from './SearchBar'
import Nominees from './Nominees'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap'
import React from 'react';

const App = ()=> {
	const [ movieList, setMovieList ] = useState([]);
	const [ selection, setSelection ] = useState();
	const[pic, setPic]=useState(logo)
	const [nominees, setNominees] =useState([])

	console.log(nominees)
	return (
	
		<Container fluid>
	
		<div className="App-header">
			<Row className="App-header">
			The Shoppies
			<img src={pic} className="App-logo" alt="logo" />
			<Nominees nominees={nominees} setNominees={setNominees}></Nominees>
			</Row>
		
	
			<Row className="App">
				<div>{selection? '' : <SearchBar movieList={movieList} setMovieList={setMovieList}></SearchBar>}</div>
				<div>{movieList? <ListMovies movieList={movieList}  nominees={nominees} setSelection={setSelection} selection={selection} nominees={nominees} setPic={setPic} setNominees={setNominees}/> : ''}</div>
			</Row>			
			</div>
		</Container>		
	
	
	

	);
}

export default App;
