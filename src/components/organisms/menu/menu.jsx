//import React from "react";
import "./menu.css";
import Icons from "../../atom/icons/icons";
import  logoImg from "../../../assets/imagen/logoMovieStick.png";

const Menu = () => {
    return (
        <nav className="menu-container">
    
        <button className="menu-button">   
            <Icons src="/icono/menu1.png" alt="Abrir Menú" className="menu-icon" />    
        </button>     

        <div className="nav-logo">
            <img src={logoImg} alt="Logo MovieStick" className="logo-main" />
        </div>

        
        <button className="nav-btn-search">
            <Icons src="/icono/lupa.png" alt="Buscar" className="search-icon" />
        </button>
        </nav>  
    );
    };

export default Menu;
