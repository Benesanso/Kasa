import React, { useState } from 'react';
import { faChevronUp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './collapse.scss'

function Collapse({ title, content, }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <div className='collapse'>
      <h2 className='title'>{title}</h2>
      <button className={`header ${isOpen ? 'active' : ''}`} >
        <FontAwesomeIcon icon={faChevronUp} className={`icon ${isOpen ? 'rotate' : ''}`} onClick={toggleCollapse} />
      </button>
      {isOpen && (
        <div className="content-container">
          <div className='text'>{content}</div>
        </div>
      )}
    </div>
  );
}
export default Collapse;
