import React from "react";
import "./menu.css";

const Menu = () => {
    return (
        <nav className="menu-container">
        {/* 1. Corregido el doble "button" */}
        <button className="menu-button">   
            <img src="/icono/menu1.png" alt="Menu" className="menu-icon" />    
        </button>     

        <div className="nav-logo">
            <img src="/imagen/logoMovieStick.png" alt="Logo MovieStick" className="logo-main" />
        </div>

        {/* 2. Corregida clase del botón y de la imagen para diferenciarlas */}
        <button className="nav-btn-search">
            <img src="/icono/lupa.png" alt="Buscar" className="search-icon" />
        </button>
        </nav>  
    );
    };

export default Menu;
