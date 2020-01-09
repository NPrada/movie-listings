import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { getNewMovies } from './utilities/apiClient'
import MoviesList from './components/moviesList'


function App() {
  /*
    I put the isLoading in the movieData state otherwise 
    I would need to change the state once for the movie data I recieved and once to chnage the isLoading flag.
    Which means two rerenders and lower performance
  */
  const [movieData, setMovieData] = React.useState({isLoading: true}) 

  React.useEffect(() => {

    getNewMovies((data) => {
      setMovieData(state => ({...state, ...data, isLoading: false}))
    },(error) => console.log("Error", error))
  }, []);
  
  console.log(movieData)

  return (
    <div className="App">
  
        <MoviesList movieData={movieData.results}/>
    </div>
  );
}

export default App;
