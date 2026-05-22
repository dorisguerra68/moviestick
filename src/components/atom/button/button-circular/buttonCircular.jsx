import "./buttonCircular.css";

    const ButtonCircular = ({ icon, onClick, variant = "primary", className = "" }) => {
    return (
        <button
        className={`circular-button ${variant} ${className}`}
        onClick={onClick}
        type="button"
        >
        {icon}
        </button>
    );
    };

export default ButtonCircular;