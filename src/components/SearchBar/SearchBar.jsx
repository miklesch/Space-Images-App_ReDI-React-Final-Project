import { useEffect, useState } from 'react'
import styles from "./SearchBar.module.css"
import PropTypes from 'prop-types';

const SearchBar = ({ setSearch, hiddenValue }) => {

  const [inputValue, setInputValue] = useState(hiddenValue || "");

  useEffect(() => {
    setSearch(`${hiddenValue} hubble nasa`);
  }, [hiddenValue, setSearch]);

  const [searchClasses, setSearchClasses] = useState([styles.search]);

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    setInputValue(userInput);
    setSearch(`${userInput} hubble nasa`);
    
  };

  const toggleMouseEnter = () => {
    if (searchClasses.includes(styles.mouseEnterBorder)) {
      setSearchClasses(
        searchClasses.filter((c) => c !== styles.mouseEnterBorder)
      );
      return;
    } else {
      setSearchClasses([...searchClasses, styles.mouseEnterBorder]);
    }
  };

  const toggleFocus = () => {
    if (searchClasses.includes(styles.focusedBorder)) {
      setSearchClasses(searchClasses.filter((c) => c !== styles.focusedBorder));
      return;
    } else {
      setSearchClasses([...searchClasses, styles.focusedBorder]);
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        className={searchClasses.join(" ")}
        placeholder="Search Images..."
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onMouseEnter={toggleMouseEnter}
        onMouseLeave={toggleMouseEnter}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
      />
    </div>
  )
}
SearchBar.propTypes = {
  setSearch: PropTypes.func.isRequired,
  hiddenValue: PropTypes.string
}

export default SearchBar