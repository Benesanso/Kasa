import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './caroussel.scss';
import { useState } from 'react';

  const Carrousel = ({appartPicture}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide +1)% appartPicture.length);
   };

   const prevSlide = () => {
    setCurrentSlide((currentSlide + appartPicture.length -1)% appartPicture.length);
    };

  const shouldRenderButtons = appartPicture.length > 1;

  return (
    <div className="carousel">
      {shouldRenderButtons && (
        <>
          <button className="prev" onClick={prevSlide}>
            <FontAwesomeIcon icon={faChevronLeft} className="chevron-icon-left" />
          </button>
          <button className="next" onClick={nextSlide}>
            <FontAwesomeIcon icon={faChevronRight} className="chevron-icon-right" />
          </button>
        </>
      )}
      <div className="carousel-images">
        <img className='slider-image' src={appartPicture[currentSlide]} alt="Photos du logement" />
        {shouldRenderButtons && <p className='number-image'>{currentSlide + 1}/{appartPicture.length}</p>}
      </div>
    </div>
  );
};
export default Carrousel;
