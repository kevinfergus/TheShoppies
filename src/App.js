import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ListMovies from './ListMovies';
import SearchBar from './SearchBar'

function App() {
	const [ movieList, setMovieList ] = useState([]);
	const [ selection, setSelection ] = useState();
	
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<div>{selection? '' : <SearchBar movieList={movieList} setMovieList={setMovieList}></SearchBar>}</div>
				<div>{movieList? <ListMovies movieList={movieList} selection={selection} setSelection={setSelection}/> : ''}</div>
				
			</header>
		</div>
	);
}

export default App;
