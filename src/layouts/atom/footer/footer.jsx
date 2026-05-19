//import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <button className="footer-btn"> 
            <img src="/icono/casa.png" alt= "Inicio" className='footer-icon' />
            </button>

            <button className="footer-btn"> 
            <img src="/icono/explorar.png" alt= "Explorar" className='footer-icon' />
            </button>

            <button className="footer-btn"> 
            <img src="/icono/me-gusta.png" alt= "Favoritos" className='footer-icon' />
            </button>
            <button className="footer-btn"> 
            <img src="/icono/usuario.png" alt= "Perfil" className='footer-icon' />
            </button>

        </footer>
    );
}
export default Footer;