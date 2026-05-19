//import React from 'react';
import './App.css';
import Menu from './layouts/atom/menu/menu.jsx'; 
import Footer from './layouts/atom/footer/footer.jsx';

  function App() {
    return (
      /* Usamos la clase app-container que definimos en el CSS para el fondo y el ancho móvil */
      <div className="app-container">
        
      
        <Menu />

        
        <main className="content">
          {/* Carrusel, Filtros, Listado, etc. */}
        </main>

      <footer>
        <Footer/>
      </footer>

      </div>
      
    );
  }

  export default App;
