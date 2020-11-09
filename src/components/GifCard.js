import React from 'react';
import './GifCard.css';

const GifCard = props => {
    const { id, url } = props;
    return (
      <div data-testid="gifcard" className="GifCard" key={id} id={id}>
        <img src={url} data-testid="image" />
      </div>
    );
}

export default GifCard;