import { useState, useEffect, useCallback } from 'react';
import './card-cartelera.css';

import { Link } from 'react-router-dom';

const MovieCard = ({ id, title, image }) => {  
    const imageUrl = `https://image.tmdb.org/t/p/w342${image}`;

    return (
        <Link to={`/movie/${id}`} className="card-link">
            <div className="card-cartelera">
                <img src={imageUrl} alt={title} className="card-image" />
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                </div>
            </div>
        </Link>
    );
};


const ExploreMovie = () => {   
    const [movies, setMovies] = useState([]); 
    const [page, setPage] = useState(1); 
    const [loading, setLoading] = useState(false); 

    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;     
    const API_URL = "https://api.themoviedb.org/3/movie/popular";

        const fetchMovies = useCallback(async () => {
            setLoading(true);   
            try {
                const response = await fetch(
                    `${API_URL}?api_key=${API_KEY}&language=es-ES&page=${page}`
                );
                const data = await response.json();

                if (data && Array.isArray(data.results)) {
                    setMovies(prev => [...prev, ...data.results]);
                }
            } catch (error) {
                console.error('Error:', error);
            } finally { 
                setLoading(false); 
            }
        }, [page, API_KEY]);

        useEffect(() => {
        fetchMovies();
        }, [fetchMovies]);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
            if (scrollTop + clientHeight >= scrollHeight - 500 && !loading) {
                setPage(prev => prev + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); 
    }, [loading]);

    return (
        <div className="card-cartelera-container">
            {movies.map((movie, index) => (
                <MovieCard 
                    key={`${movie.id}-${index}`} 
                    title={movie.title} 
                    image={movie.poster_path} 
                />
            ))} 
            {loading && <div className="loader">Cargando...</div>}
        </div>
    );
};

export default ExploreMovie;
