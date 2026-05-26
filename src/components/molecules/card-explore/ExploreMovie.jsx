import { useEffect, useState } from "react";
import MovieCard from "../../../views/MovieCard/moviecard"; 

function ExploreMovie() {
const [movies, setMovies] = useState([]);
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=es-ES&page=1`)
    .then(res => res.json())
    .then(data => setMovies(data.results));
}, []);

return (
    <div className="explore-grid">
    {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
    ))}
    </div>
);
}

export default ExploreMovie;
