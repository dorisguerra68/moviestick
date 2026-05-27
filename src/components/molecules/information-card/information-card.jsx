import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./information-card.css";

function InformationCard() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);
  const [directorInfo, setDirectorInfo] = useState(null);

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  // Función para calcular edad
  function calcularEdad(fecha) {
    if (!fecha) return "No disponible";
    const nacimiento = new Date(fecha);
    const hoy = new Date();
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
    edad--;
    }
    return edad;
}

  // Obtener información general de la película + créditos
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=es-ES`
    )
      .then((res) => res.json())
      .then((data) => setMovie(data));

    fetch(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=es-ES`
    )
      .then((res) => res.json())
      .then((data) => setCredits(data));
  }, [id]);

  // Obtener información extendida del director
  useEffect(() => {
    if (!credits) return;

    const director = credits.crew.find((person) => person.job === "Director");
    if (!director) return;

    fetch(
      `https://api.themoviedb.org/3/person/${director.id}?api_key=${API_KEY}&language=es-ES&append_to_response=movie_credits`
    )
      .then((res) => res.json())
      .then((data) => setDirectorInfo(data));
  }, [credits]);

  if (!movie || !credits) {
    return <p>Cargando...</p>;
  }

  const director = credits.crew.find((person) => person.job === "Director");
  const actors = credits.cast.slice(0, 5);

  return (
    <div className="movie-info-container">
      {/* POSTER */}
      <img
        className="movie-info-poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      {/* COLUMNA DERECHA */}
      <div className="movie-info-details">
        <h1 className="movie-info-title">{movie.title}</h1>

        <p className="movie-info-description">
          <strong>Descripción:</strong> {movie.overview}
        </p>

        <p className="movie-info-description">
          <strong>Fecha de estreno:</strong> {movie.release_date}
        </p>

        <p className="movie-info-description">
          <strong>Director:</strong> {director ? director.name : "No disponible"}
        </p>

        {/* ACTORES PRINCIPALES */}
        <div className="movie-info-extra">
          <h3>ACTORES PRINCIPALES</h3>
          <ul>
            {actors.map((actor) => (
              <li key={actor.id}>
                {actor.name} — {actor.character}
              </li>
            ))}
          </ul>
        </div>

        {/* INFORMACIÓN EXTENDIDA DEL DIRECTOR */}
        {directorInfo && (
          <div className="movie-info-extra">
            <h3>DIRECTOR — INFORMACIÓN</h3>

            <p>
              <strong>Nombre:</strong> {directorInfo.name}
            </p>
            <p>
              <strong>Fecha de nacimiento:</strong>{" "}
              {directorInfo.birthday || "No disponible"}
            </p>
            <p>
              <strong>Edad:</strong> {calcularEdad(directorInfo.birthday)}
            </p>
            <p>
              <strong>Lugar de nacimiento:</strong>{" "}
              {directorInfo.place_of_birth || "No disponible"}
            </p>

            <h4>Películas dirigidas</h4>
            <ul>
              {directorInfo.movie_credits.crew
                .filter((item) => item.job === "Director")
                .slice(0, 5)
                .map((movie) => (
                  <li key={movie.id}>
                    {movie.title}{" "}
                    {movie.release_date
                      ? `(${movie.release_date.slice(0, 4)})`
                      : ""}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default InformationCard;
