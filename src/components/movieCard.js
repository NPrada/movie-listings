import React from 'react'
import PropTypes from 'prop-types'
import './movieCard.scss'

export default function MovieCard(props){
  return(
    <div className={'movie-card'}>

        <h1 className="movie-card__title">{props.title}</h1>

    </div>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
}