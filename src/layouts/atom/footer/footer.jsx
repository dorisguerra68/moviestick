import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <button className="footer-btn"> 
            <img src="/public/icono/casa.png" alt= "Inicio" className='footer-icon' />
            </button>

            <button className="footer-btn"> 
            <img src="/public/icono/explorar.png" alt= "Exploral" className='footer-icon' />
            </button>

            <button className="footer-btn"> 
            <img src="/public/icono/me-gusta.png" alt= "Favoritos" className='footer-icon' />
            </button>
            <button className="footer-btn"> 
            <img src="/public/icono/usuario.png" alt= "Perfil" className='footer-icon' />
            </button>

        </footer>
    );
}
export default Footer;