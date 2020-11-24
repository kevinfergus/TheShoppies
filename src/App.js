import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ListMovies from './ListMovies';
import SearchBar from './SearchBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Col, Row} from 'react-bootstrap'


function App() {
	const [ movieList, setMovieList ] = useState([]);
	const [ selection, setSelection ] = useState();
	const[pic, setPic]=useState(logo)
	
	return (
		<div className="App">
			
			<Container className={styles.center} >
				<Row xs={5} md={10} lg={15}>
				<Col>
				<img src={pic} className="App-logo" alt="logo" />
				<div>{selection? '' : <SearchBar movieList={movieList} setMovieList={setMovieList}></SearchBar>}</div>
				<div>{movieList? <ListMovies movieList={movieList} selection={selection} setSelection={setSelection} setPic={setPic}/> : ''}</div>
				</Col>
				</Row>
				
			</Container>
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
