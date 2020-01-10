import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { getNewMovies } from './utilities/apiClient'
import MoviesList from './components/moviesList'
import FilterBar from './components/filterBar'

function App() {
  /*
    I put the isLoading in the movieData state otherwise 
    I would need to change the state once for the movie data I recieved and once to chnage the isLoading flag.
    Which means two rerenders and lower performance
  */
  const [movieData, setMovieData] = React.useState({isLoading: true}) 
  const [filterValue, setFilter] = React.useState(0) //I hadle the filter state here because it needs to be passed into the movieList component

  React.useEffect(() => {

    getNewMovies((data) => {
      setMovieData(state => ({...state, ...data, isLoading: false}))
    },(error) => console.log("Error", error))
  }, []);

  return (
    <div className="App">
        <FilterBar filterValue={filterValue} onSelectionHandler={setFilter}/>
        <MoviesList movieData={movieData.results} minRating={filterValue/2}/>
    </div>
  );
}

export default App;
