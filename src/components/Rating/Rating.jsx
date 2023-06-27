import React from 'react';
import Stargrey from '../../assets/stargrey.png'
import Starred from '../../assets/starred.png'
import './rating.scss'

const Rating = ({ rating }) => {
// Tableau des étoiles
const stars = [1, 2, 3, 4, 5];

  return (
    <div className="rating">
      {/* Mapping des étoiles */}
      {stars.map((star) =>
        rating >= star ? (
          // Affichage de l'étoile rouge si la note est supérieure ou égale à l'étoile actuelle
          <img
            key={star.toString()}
            className="icon"
            src={Starred}
            alt="red star"
          />
        ) : (
          // Affichage de l'étoile grise
          <img
            key={star.toString()}
            className="icon"
            src={Stargrey}
            alt="grey star"
          />
        )
      )}
    </div>
  )
}
export default Rating;
