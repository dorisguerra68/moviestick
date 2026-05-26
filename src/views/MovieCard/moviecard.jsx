
import { useNavigate } from "react-router-dom";
import "./moviecard.css";

function MovieCard({ movie }) {
const navigate = useNavigate();

return (
    <div className="movie-card" onClick={() => navigate(`/movie/${movie.id}`)}>
    <img
        className="movie-card-img"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
    />

    <h3 className="movie-card-title">{movie.title}</h3>
    </div>
);
}

export default MovieCard;
