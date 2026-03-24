import { useNavigate } from 'react-router-dom'
import styles from "./FavoriteImages.module.css"
import { useFavoriteImages } from '../../contexts/FavoriteImagesContext'
import ImageGallery from '../ImageGallery/ImageGallery'

const FavoriteImages = () => {

    const { favoriteImages } = useFavoriteImages();
    const navigate = useNavigate();

    return (
        <div className={styles.favoriteImagesContainer}>
            <button className={styles.returnButton} onClick={() => navigate("/")}>return home</button>
            {favoriteImages.length === 0 ? (
                <p className={styles.noImageMessage}>no favorite images</p>
            ) : (
                <div className={styles.favoriteImagesGalleryDiv}>
                    {favoriteImages.map((image) => (
                        <ImageGallery
                            key={image.id}
                            id={image.id}
                            name={image.name}
                            image={image.image}
                            onLikeClick={() => { }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FavoriteImages