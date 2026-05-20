import './App.css';
import MainLayout from './layouts/MainLayout'; 
import { useEffect } from 'react'; 
import { fetchPopularMovies } from './api/movieServi'; 

function App() {
  // useEffect es obligatorio para que la función se ejecute al cargar
  useEffect(() => {
    const getData = async () => {
      const movies = await fetchPopularMovies();
      console.log("Películas recibidas: ", movies);
    };
    getData();
  }, []); // El array vacío indica que solo se ejecute una vez
  
  return (
    <MainLayout>
      <div className="app-container">
        <section className="content">
          <h2>Próximamente: Carrusel y Películas</h2>
        </section>
      </div>
    </MainLayout>
  );
}

export default App;

