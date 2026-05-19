import React from "react";
import "./button.css";

const Button = ({ text, onClick, variant = "primary", className = "" }) => {
    return (
        <button
            className={`base-button ${variant} ${className}`}
            onClick={onClick} >
            {text}
            </button>
    );
};

export default Button;