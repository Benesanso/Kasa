import React, { useState } from 'react';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './collapse.scss'

function Collapse({ title, content, }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <div className="collapse">
        <h2 className='collapse-title'>{title}</h2>
        <button className="collapse-header">
        <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="collapse-icon" onClick={toggleCollapse} />
      </button>
      {isOpen && (
        <div className="collapse-content-container">
          <div className='collapse-content'>
            <div className='collapse-text'>{content}</div>
          </div>
        </div>
      )}
    </div>
  );
}
export default Collapse;
