import axios from 'axios';

function SearchBar(props) {


    async function handleChange(e) {
		const response = await axios
			.get(`http://www.omdbapi.com/?s=${e.target.value}&i=tt3896198&apikey=52140488`)
			.catch((error) => {
				console.log(error);
			});
		props.setMovieList(response.data.Search);
	}

    return (<form>
        <input placeholder="title" onChange={(e) => handleChange(e)} />
    </form>)
}

export default SearchBar