import React from 'react'
import '../Cards/card.scss';

 function Card({ cover, title}) {
  return (
    <div className='card-location'>
      {/* Image de couverture de la carte */}
      <img src={cover} alt="location" />
      {/* Titre de la carte */}
      <h2>{title}</h2>      
    </div>
  )
}
export default Card