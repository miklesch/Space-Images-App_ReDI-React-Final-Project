import React from 'react'
import styles from "./Button.module.css"

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

export default Button