import React, { useEffect } from 'react'
import styles from "./ImageGallery.module.css"
import { useNavigate } from 'react-router-dom';
import { useFavoriteImages } from '../../contexts/FavoriteImagesContext';


const ImageGallery = ({ id, name, image, onClick, onLikeClick }) => {
  const navigate = useNavigate();
  const { addFavoriteImage, removeFavoriteImage, favoriteImages } = useFavoriteImages();
  const isLiked = favoriteImages.some((favImage) => favImage.id === id);

  const handleLikeClick = (e) => {
    e.stopPropagation();
    if (isLiked) {
      removeFavoriteImage(id);
    } else {
      addFavoriteImage({ id, name, image });
    }
    onLikeClick();
  };

  return (
    <div className={styles.imageGallery}>
      <div className={styles.imageGalleryContents}>
        <h3>{name}</h3>
        <img src={image} alt={name} className={styles.image} onClick={onClick} />
        <button
          className={`${styles.heartButton} ${isLiked ? styles.liked : ""}`}
          onClick={handleLikeClick}>
          <i className={isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}></i>
        </button>
      </div>
    </div>
  );
};

export default ImageGallery
