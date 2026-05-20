import './App.css';
import MainLayout from './layouts/MainLayout'; // Importamos tu nuevo layout

function App() {
  return (
    /* MainLayout ya trae el Menú y el Footer dentro */
    <MainLayout>
      <div className="app-container">
        {/* Aquí van mis páginas o el contenido principal */}
        <section className="content">
          <h2>Próximamente: Carrusel y Películas</h2>
          {/* Aquí llamo a la servicio de API más adelante */}
        </section>
      </div>
    </MainLayout>
  );
}

export default App;
