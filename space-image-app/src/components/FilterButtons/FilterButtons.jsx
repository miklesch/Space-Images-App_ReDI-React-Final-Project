import React, { useState } from 'react'
import styles from "./FilterButtons.module.css"
import Button from '../Button/Button';

const FilterButtons = ({ onFilterClick }) => {

  const categories = ["All", "Galaxies", "Stars", "Nebula", "Planets"]
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const handleButtonClick = (category) => {
    setSelectedCategory(category);
    onFilterClick(category);
  };

  return (

    <div className={styles.filterButtonsWrapper}>
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => handleButtonClick(category)}
          isSelected={selectedCategory === category}
          label={category}
        />
      ))}
    </div>
  )
}

export default FilterButtons