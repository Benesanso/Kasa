import React, { useState } from 'react';
import Chevron from '../../assets/VectorHaut.png';
import './collapse.scss'

function Collapse({ title, content, }) {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état d'ouverture/fermeture du contenu
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <div className='collapse'>
      {/* Titre du collapsible */}
      <h2 className='title'>{title}</h2>
      {/* Bouton d'expansion/réduction */}
      <button className={`header ${isOpen ? 'active' : ''}`}>
        <img src={Chevron} className={`icon ${isOpen ? 'rotate' : ''}`} onClick={toggleCollapse} alt="Flèche" />
      </button>

      {/* Contenu du collapse */}
      {isOpen && (
        <div className="content-container">
          <div className='text'>{content}</div>
        </div>
      )}
    </div>
  );
}
export default Collapse;
