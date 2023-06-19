import React from 'react';
import '../Tags/tags.scss';

const Tags = ({ appartTag }) => {
  return (
    <div className='tags'>{appartTag.map((tag, index) => (
        <span className='tag' key={index}>{tag}</span>
      ))}
    </div>
  );
}

export default Tags;
