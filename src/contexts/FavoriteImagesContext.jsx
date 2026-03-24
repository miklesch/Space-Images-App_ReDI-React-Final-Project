import { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types';


export const FavoriteImagesContext = createContext({});

export const useFavoriteImages = () => useContext(FavoriteImagesContext);

export const FavoriteImagesProvider = ({ children }) => {
    const [favoriteImages, setFavoriteImages] = useState([]);

    const addFavoriteImage = (image) => {
        setFavoriteImages((prevImages) => {
            if (prevImages.some((img) => img.id === image.id)) {
                return prevImages;
            }
            return [...prevImages, image];
        });
    };

    const removeFavoriteImage = (id) => {
        setFavoriteImages((prevImages) =>
            prevImages.filter((img) => img.id !== id)
        );
    };

    return (
        <FavoriteImagesContext.Provider value={{ favoriteImages, addFavoriteImage, removeFavoriteImage }}>
            {children}
        </FavoriteImagesContext.Provider>
    );
};

FavoriteImagesProvider.propTypes = {
    children: PropTypes.node
};
