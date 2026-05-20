//import React from 'react';
import './footer.css';
import Icons from "../../atom/icons/icons";

const Footer = () => {
    return (
        <footer className="footer-container">
            <button className="footer-btn" aria-label="Inicio"> 
            <Icons src="/icono/casa.png" alt= "Inicio" className='footer-icon' />
            </button>

            <button className="footer-btn" aria-label ="Exploral"> 
            <Icons src="/icono/explorar.png" alt= "Explorar" className='footer-icon' />
            </button>

            <button className="footer-btn" aria-label="Favoritos"> 
            <Icons src="/icono/me-gusta.png" alt= "Favoritos" className='footer-icon' />
            </button>
            <button className="footer-btn"> 
            <Icons src="/icono/usuario.png" alt= "Perfil" className='footer-icon' />
            </button>

        </footer>
    );
}
export default Footer;