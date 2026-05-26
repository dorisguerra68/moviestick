    import { useParams } from "react-router-dom";
    import { useEffect, useState } from "react";
    import './information-card.css';

    function InformationCard() {
    const { id } = useParams(); // ID de la película desde la URL
    const [movie, setMovie] = useState(null);
    const [credits, setCredits] = useState(null);

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(() => {
        // Información general de la película
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES`)
        .then(res => res.json())
        .then(data => setMovie(data));

        // Actores y director
        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=es-ES`)
        .then(res => res.json())
        .then(data => setCredits(data));
    }, [id]);

    if (!movie || !credits) {
        return <p>Cargando...</p>;
    }

    const director = credits.crew.find(person => person.job === "Director");
    const actors = credits.cast.slice(0, 5);

    return (
        <div style={{ padding: "20px" }}>
        <h1>{movie.title}</h1>

        <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            style={{ width: "200px", borderRadius: "10px" }}
        />

        <p><strong>Descripción:</strong> {movie.overview}</p>
        <p><strong>Fecha de estreno:</strong> {movie.release_date}</p>
        <p><strong>Director:</strong> {director ? director.name : "No disponible"}</p>

        <h3>Actores principales</h3>
        <ul>
            {actors.map(actor => (
            <li key={actor.id}>
                {actor.name} — {actor.character}
            </li>
            ))}
        </ul>
        </div>
    );
    }

    export default InformationCard;
