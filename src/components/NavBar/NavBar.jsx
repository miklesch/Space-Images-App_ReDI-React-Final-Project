import styles from "./NavBar.module.css"
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types';

const NavBar = ({ children }) => {

  const navigate = useNavigate();

  const goToFavorites = () => {
    navigate("/results/favorites");
  }

  return (
    <div className={styles.navBar}>
      <div className={styles.navBarContentWrapper}>
        {children}
      </div>
      <div className={styles.rightSection}>
        <button className={styles.heartButton} onClick={goToFavorites}>
          <i className="fa-solid fa-heart"></i>
        </button>
      </div>
    </div>
  )
}

NavBar.propTypes = {
  children: PropTypes.node.isRequired
};

export default NavBar

