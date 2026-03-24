import { useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import styles from './SpaceImagesView.module.css'
import SearchBar from '../components/SearchBar/SearchBar'
import FilterButtons from '../components/FilterButtons/FilterButtons'
import ImageGallery from '../components/ImageGallery/ImageGallery'
import NavBar from '../components/NavBar/NavBar'

const SpaceImagesView = () => {

    const [selectedSpaceImages, setSelectedSpaceImages] = useState([]);
    const [spaceImages, setSpaceImages] = useState([]);
    const [search, setSearch] = useState("hubble nasa");
    const [likes, setLikes] = useState({});
   
    const fetchAPIData = async (query) => {
        console.log("Fetching data with query: ", query) 
        const url = `/api/fetchImages?query=${encodeURIComponent(query)}`
       
        try {
            const response = await fetch(url);
            console.log("API response status: ", response.status)

            if (!response.ok) {
                console.error(`API response status: ${response.status}`)
                throw new Error(`Network response was not ok`)
            }
    
            const apiData = await response.json();
            console.log("API data:", apiData)
            if (apiData && apiData.results) {
                const images = apiData.results.map((item) => ({
                    name: item.alt_description || "No Title",
                    src: item.urls.regular || "",
                    id: item.id || item.alt_description,
                }));
                setSpaceImages(images);
                console.log("data response >> ", apiData);
                console.log("image response >>", images);
            } else {
                setSpaceImages([]);
                console.log("API response does not contain the expected data structure");
            }
        } catch (error) {
            console.log("error fetching data >> ", error)
            setSpaceImages([]);
        }
    };

    const debouncedFetchAPIData = useDebouncedCallback((query) => {
        fetchAPIData(query);
    }, 500);

    useEffect(() => {
        console.log("Search term: ", search);
        if (search) {
            debouncedFetchAPIData(search)
        }
    }, [search, debouncedFetchAPIData]);

    const handleSpaceImageClick = (name) => {
        const nextItems = selectedSpaceImages.includes(name)
            ? selectedSpaceImages.filter((item) => item !== name)
            : [...selectedSpaceImages, name];
        setSelectedSpaceImages(nextItems)
    };

    const handleLikeClick = (name) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [name]: !prevLikes[name],
        }));
    };

    const handleFilterButtonClick = (filterValue) => {
        console.log("Filter button clicked: ", filterValue);
        setSearch(`hubble nasa ${filterValue}`);
    };

    return (
        <>
            <div className={styles.App}>
                <NavBar>
                    <h2>Space Images Gallery</h2>
                    <SearchBar setSearch={setSearch} hiddenValue="hubble nasa" />
                    <FilterButtons onFilterClick={handleFilterButtonClick} />
                </NavBar>
                <div className={styles.spaceImageViewWrapper}>
                    <div className={styles.imageGalleryDiv}>
                        {spaceImages.length > 0 ? (
                            spaceImages.map((image) => (
                                <ImageGallery
                                    key={image.id}
                                    id={image.id}
                                    name={image.name}
                                    image={image.src}
                                    isLiked={likes[image.name]}
                                    onClick={() => handleSpaceImageClick(image.name)}
                                    onLikeClick={() => handleLikeClick(image.name)}
                                />
                            ))
                        ) : (
                            <p>No Images found :(</p>
                        )}
                    </div>
                    <footer>
                    </footer>
                </div>
            </div>
        </>
    );
};

export default SpaceImagesView;