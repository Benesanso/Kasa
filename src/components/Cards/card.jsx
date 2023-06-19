import React from 'react'
import '../Cards/card.scss';

 function Card({ cover, title}) {
  return (
    <div className='card-location'>
      <img src={cover} alt="location" />
      <h2>{title}</h2>      
    </div>
  )
}
export default Card