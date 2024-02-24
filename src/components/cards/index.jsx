// Card.js
import React, { useState } from 'react';
import './styles.css';
import { FaHeart } from 'react-icons/fa';

const MediaCard = ({ title, description }) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleFavorite = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={handleFavorite}>
        <FaHeart className={isFavorited ? 'favorited' : ''} />
      </button>
    </div>
  );
};

export default MediaCard;
