//mport "./menu.css";
import Icons from "../../atom/icons/icons";
import  logoImg from "../../../assets/imagen/logoMovieStick.png";
import menuIcon from "../../../assets/icono/menu.png";
import searchIcon from "../../../assets/icono/lupa.png";

const Menu = () => {
    return (
        <nav className="menu-container">
    
        <button className="menu-button" aria-label="Abrir menú"> 
            <Icons src={menuIcon} alt="Abrir Menú" className= "icon" className="menu-icon" />    
        </button>     

        <div className="nav-logo">
            <img src={logoImg} alt="Logo MovieStick" className="logo-main" />
        </div>

        
        <button className="nav-btn-search" aria-label="Buscar">
            <Icons src={searchIcon} alt="Buscar" className= "icon" className="search-icon" />
        </button>
        </nav>  
    );
    };

export default Menu;
