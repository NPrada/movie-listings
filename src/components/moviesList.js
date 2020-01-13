import React from 'react'
import MovieCard from './movieCard'
import PropTypes from 'prop-types'

export default function MoviesList(props){

  const {
    movieData = [], 
    minRating = 0
  } = props;

  const cardsToRender = []
  movieData.sort((a,b) => a.vote_average-b.vote_average).reverse() //sort the movies by rating
  movieData.forEach((movie) => {
    if(movie.vote_average >= minRating){
      cardsToRender.push(
        <MovieCard
          key={movie.id}
          title={movie.title}
          rating={movie.vote_average}
          imageUrl={movie.poster_path}
        />
      )
    }
  })

  return (
    <div className={'movies-list'}>
      {cardsToRender}
    </div>
  )
}

MoviesList.propTypes = {
  movieData: PropTypes.arrayOf(PropTypes.object),
  minRating: PropTypes.number,
}