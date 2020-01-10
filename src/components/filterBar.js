import React from 'react'
import PropTypes from 'prop-types'



export default function FilterBar(props){

  function handleFilterChange(e){
    const val = e.target.value
    props.onSelectionHandler(val)
  }

  console.log('render', props.filterValue)
  return(
    <div className={'filter-bar'}>
    <div className="filter-bar__label">{props.filterValue/2}</div>
    <input className={'filter-bar__input'} 
      type='range' 
      min='0' 
      max='20'
      value={props.filterValue}
      onChange={handleFilterChange}
      />
    </div>
  )

}


FilterBar.propTypes = {
  onSelectionHandler: PropTypes.func,
  filterValue: PropTypes.number.isRequired
}