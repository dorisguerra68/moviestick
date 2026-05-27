import { useEffect, useState, useCallback } from "react";
import MovieCard from "../../../views/MovieCard/moviecard"; 

function ExploreMovie() {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

 // Función para cargar películas
const fetchMovies = useCallback(async () => {
    if (loading) return; // evita llamadas dobles

    setLoading(true);

    try {
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=${page}`
    );
      const data = await res.json();

      if (data.results) {
  setMovies((prev) => {
    const combined = [...prev, ...data.results];

    const unique = combined.filter(
      (movie, index, self) =>
        index === self.findIndex((m) => m.id === movie.id)
    );

    return unique;
  });
}
    } catch (error) {
      console.error("Error cargando películas:", error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  // Cargar películas cuando cambia la página
  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  // Scroll infinito
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollTop + windowHeight >= fullHeight - 300 && !loading) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div className="explore-grid">
      {movies.map((movie, index) => (
        <MovieCard key={`${movie.id}-${index}`} movie={movie} />
      ))}

      {loading && <p style={{ textAlign: "center" }}>Cargando...</p>}
    </div>
  );
}

export default ExploreMovie;