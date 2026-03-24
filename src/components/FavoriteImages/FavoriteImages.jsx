import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styles from "./FavoriteImages.module.css"
import { useFavoriteImages } from '../../contexts/FavoriteImagesContext'
import ImageGallery from '../ImageGallery/ImageGallery'


const FavoriteImages = () => {

    const { favoriteImages } = useFavoriteImages();
    const navigate = useNavigate();
    if (favoriteImages.length === 0) {
        return (
            <div className={styles.favoriteImagesContainer}>
                <button className={styles.returnButton} onClick={() => navigate("/")}>return home</button>
                <p className={styles.noImageMessage}>no favorite images</p>
            </div>
        );
    };

    return (
        <div className={styles.favoriteImagesContainer}>

            <button className={styles.returnButton} onClick={() => navigate("/")}>return home</button>

            <div className={styles.favoriteImagesGalleryDiv}>
                {favoriteImages.length > 0 ? (
                    favoriteImages.map((image) => (
                        <ImageGallery
                            key={image.id}
                            id={image.id}
                            name={image.name}
                            image={image.image}
                        />
                    ))
                ) : (
                    <p>No Images found :(</p>
                )}
            </div>
        </div>
    );
};

export default FavoriteImages