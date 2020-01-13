import React from 'react'
import PropTypes from 'prop-types'

export default function MovieCard(props){

  const {title, rating, imageUrl} = props

  // const imgCDNUrlHighQuality = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2';
  const imgCDNUrlLowQuality = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

  return(
    <div className={'movie-card'}>
        <img className={'movie-card__poster'} src={imgCDNUrlLowQuality + imageUrl} alt={'movie-poster'}/>
        <div className={'movie-card__details'}>
          <h1 className="movie-card__details__title">{title}</h1>
          <div className={"movie-card__details__rating"}>
          <img className={'movie-card__details__rating__icon'} src={process.env.PUBLIC_URL+"/assets/star.svg"} alt={'rating-icon'}/>
            <div className={'movie-card__details__rating__text'}>{rating}</div>
          </div>
        </div>

    </div>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
}