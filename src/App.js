import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getNewMovies } from './utilities/apiClient'

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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
