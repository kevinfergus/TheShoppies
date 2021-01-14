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
		<div>
		<Container fluid>
	
		<div className="App-header">
			The Shoppies
		<Row>
		
		<div className="App">
			<Col>
			<img src={pic} className="App-logo" alt="logo" />
				<div>{selection? '' : <SearchBar movieList={movieList} setMovieList={setMovieList}></SearchBar>}</div>
				<div>{movieList? <ListMovies movieList={movieList}  nominees={nominees} setSelection={setSelection} selection={selection} nominees={nominees} setPic={setPic} setNominees={setNominees}/> : ''}</div>
				</Col>

			<Col><Nominees nominees={nominees} setNominees={setNominees}></Nominees> </Col>	
				
		</div>
		</Row>
		</div>
	</Container>
	</div>
	);
}

export default App;
