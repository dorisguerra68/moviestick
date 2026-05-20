import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

    export const fetchPopularMovies = async () => {
    try {
        const response = await axios.get(`${BASE_URL}/movie/popular`, {
            params: {
                api_key: API_KEY,
                language: 'es-ES',
                page: 1
            }
        });
        
        // Axios guarda los datos en la propiedad .data
        return response.data.results;
        
    } catch (error) {
        // Axios captura errores de red y de códigos de estado (401, 404, etc.)
        console.error("Error con Axios:", error.response?.data || error.message);
        return [];
    }
};