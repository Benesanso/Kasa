import React from 'react';
import Stargrey from '../../assets/stargrey.png'
import Starred from '../../assets/starred.png'
import './rating.scss'

const Rating = ({ rating }) => {
    const stars = [1, 2, 3, 4, 5];
    
      return (
        <div className="rating">
          {stars.map((star) =>
            rating >= star ? (
              <img
                key={star.toString()}
                className="icon"
                src={Starred}
                alt="red star"
              />
            ) : (
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
