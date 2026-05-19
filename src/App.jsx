//import React from 'react';
import './App.css';
import Menu from './layouts/atom/menu/menu.jsx'; 

function App() {
  return (
    /* Usamos la clase app-container que definimos en el CSS para el fondo y el ancho móvil */
    <div className="app-container">
      
      {/* Importamos el componente Menu */}
      <Menu />

      {/* Aquí irán los demás componentes que creemos más adelante */}
      <main className="content">
        {/* Carrusel, Filtros, Listado, etc. */}
      </main>

    </div>
  );
}

export default App;
