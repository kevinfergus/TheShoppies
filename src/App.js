import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import ListMovies from './ListMovies';

function App() {
	const [ movieList, setMovieList ] = useState([]);

	async function handleChange(e) {
		const response = await axios
			.get(`http://www.omdbapi.com/?s=${e.target.value}&i=tt3896198&apikey=52140488`)
			.catch((error) => {
				console.log(error);
			});
		console.log('RESPONSE', response.data.Search);
		setMovieList(response.data.Search);
	}
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<form>
					<input placeholder="title" onChange={(e) => handleChange(e)} />
				</form>
				<ListMovies movieList={movieList} />
			</header>
		</div>
	);
}

export default App;
