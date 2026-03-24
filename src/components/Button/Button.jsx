import styles from "./Button.module.css"
import PropTypes from 'prop-types';

const Button = ({ isSelected, onClick, label }) => {

    return (
        <div>
            <button
                className={`${styles.button} ${isSelected ? styles.selected : ""} `} 
                onClick={onClick}>
                {label}
            </button>
        </div>
    )
}
Button.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
}

export default Button