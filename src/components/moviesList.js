import React from 'react'
import './moviesList.scss'
import MovieCard from './movieCard'
import PropTypes from 'prop-types'

export default function MoviesList(props){

  const {
    movieData = [], 
    minRating = 0
  } = props;

  const cardsToRender = []

  movieData.forEach((movie) => {
    console.log(movie)

    if(movie.vote_average >= minRating){
      cardsToRender.push(
        <MovieCard
          key={movie.id}
          title={movie.title}
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