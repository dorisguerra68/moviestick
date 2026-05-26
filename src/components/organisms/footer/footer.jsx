import React from 'react';
import './footer.css';
import Icons from "../../atom/icons/icons";
import HomeIcon from "../../../assets/icono/casa.png";
import ExploreIcon from "../../../assets/icono/explorar.png";
import FavoritesIcon from "../../../assets/icono/me-gusta.png";
import ProfileIcon from "../../../assets/icono/usuario.png";

const Footer = () => {
    return (
        <footer className="footer-container">
            <button className="footer-btn" aria-label="Inicio"> 
            <Icons src={HomeIcon} alt= "Inicio" className='footer-icon' />
            </button>

            <button className="footer-btn" aria-label ="Exploral"> 
            <Icons src={ExploreIcon} alt= "Explorar" className='footer-icon' />
            </button>

            <button className="footer-btn" aria-label="Favoritos"> 
            <Icons src={FavoritesIcon} alt= "Favoritos" className='footer-icon' />
            </button>
            <button className="footer-btn"> 
            <Icons src={ProfileIcon} alt= "Perfil" className='footer-icon' />
            </button>

        </footer>
    );
}
export default Footer;