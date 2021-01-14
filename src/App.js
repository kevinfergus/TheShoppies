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
	const [submitted, setSubmitted] = useState(false)
	console.log(submitted)
	return (
	
		<Container fluid>
	
		<div className="App-header">
			<Row className="App-header">
			The Shoppies
			<img src={pic} className="App-logo" alt="logo"/>
			<Nominees nominees={nominees} setNominees={setNominees} setMovieList={setMovieList} submitted={submitted} setSubmitted={setSubmitted}></Nominees>
			</Row>
		
	
			<Row className="App Text" style={{width: window.innerWidth}}>
				<div>{selection || submitted? '' : <SearchBar movieList={movieList} setMovieList={setMovieList}></SearchBar>}</div>
				<div>{movieList? <ListMovies movieList={movieList}  nominees={nominees} setSelection={setSelection} selection={selection} nominees={nominees} setPic={setPic} setNominees={setNominees}/> : ''}</div>
			</Row>			
			</div>
		</Container>		
	
	
	

	);
}

export default App;
