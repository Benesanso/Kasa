import React from 'react';
import '../Tags/tags.scss';

const Tags = ({ appartTag }) => {
  return (
    // Div contenant les tags
    <div className='tags'> {/* Mapping des tags */}{appartTag.map((tag, index) => (
      // Balise span pour chaque tag
      <span className='tag' key={index}>{tag}</span>
      ))}
    </div>
  );
}

export default Tags;
