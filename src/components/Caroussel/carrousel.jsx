import ChevronLeft from '../../assets/Vector-Left.png'
import ChevronRight from '../../assets/Vector-Right.png'
import './caroussel.scss';
import { useState } from 'react';

  const Carrousel = ({appartPicture}) => {
  // État pour suivre l'index de la diapositive actuelle
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentSlide((currentSlide +1)% appartPicture.length);
  };

  // Fonction pour passer à la diapositive précédente
  const prevSlide = () => {
    setCurrentSlide((currentSlide + appartPicture.length -1)% appartPicture.length);
  };

  // Variable indiquant si les boutons de navigation doivent être affichés
  const shouldRenderButtons = appartPicture.length > 1;

  return (
    <div className="carousel">
      {/* Boutons de navigation */}
      {shouldRenderButtons && (
        <>
        <button className="prev" onClick={prevSlide}>
          <img src={ChevronLeft} className="chevron-icon-left" alt='chevron gauche' />
        </button>
        <button className="next" onClick={nextSlide}>
          <img src={ChevronRight} className="chevron-icon-right" alt='chevron droit' />
        </button>
        </>
      )}

      {/* Conteneur des images */}
      <div className="carousel-images">
        {/* Image de la diapositive actuelle */}
        <img className='slider-image' src={appartPicture[currentSlide]} alt="Photos du logement" />
        {/* Affichage du numéro de la diapositive actuelle */}
        {shouldRenderButtons && <p className='number-image'>{currentSlide + 1}/{appartPicture.length}</p>}
      </div>
    </div>
  );
};
export default Carrousel;
