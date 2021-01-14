import axios from 'axios';
import {Button} from "react-bootstrap"
import {useState} from 'react'
import React from 'react';


function SearchBar(props) {
	const [searchTerm, setSearchTerm]= useState('')

	const handleChange = async(e) =>{
		setSearchTerm(e.target.value)
		const response = await axios
			.get(`https://www.omdbapi.com/?s=${e.target.value}&i=tt3896198&apikey=52140488&type=movie`)
			.catch((error) => {
				console.log(error);
			});
		props.setMovieList(response.data.Search);
	}

	const handleClick = () => {
		props.setMovieList([])
		setSearchTerm('')
	}
	

    return (<form>
        <input placeholder="title" value={searchTerm} onChange={(e) => handleChange(e)} /> <Button onClick={()=>handleClick()}>Clear</Button>
    </form>)
}

export default SearchBar
