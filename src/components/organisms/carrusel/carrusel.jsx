import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import axios from "axios";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import arrowLeft from "../../../assets/icono/flecha-izquierda.png";
import arrowRight from "../../../assets/icono/flecha-derecha .png";

// 1. Las flechas siempre se pone fuera 
const NextArrow = ({ onClick }) => (
    <img 
        src={arrowRight} 
        onClick={onClick} 
    
        alt="next" 
    />
);

const PrevArrow = ({ onClick }) => (
    <img 
        src={arrowLeft} 
        onClick={onClick}  
        alt="prev" 
    />
);

const MovieCarousel = () => {
    const [movies, setMovies] = useState([]);
    const VITE_TMDB_API_KEY = "41c16a266efd11cce68eceeceb499478"; 

    useEffect(() => {
        const getData = async () => {
            try {
                // aqui pongo /movie/popular a la URL
                const { data } = await axios.get("https://themoviedb.org/3", {
                    params: { api_key: VITE_TMDB_API_KEY, language: "es-ES" }
                });
                const topTen = data.results.slice(0, 10);
                setMovies(topTen);
            } catch (error) {
                console.error("Error cargando API:", error);
            }
        };
        getData();
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />, 
        prevArrow: <PrevArrow />,
        arrows: true
    };

    return (
        <div className="carousel-wrapper">
            {movies.length > 0 && (
                <Slider {...settings}>
                    {movies.map((movie) => (
                        <div key={movie.id} className="movie-slide">
                            <img
                                src={`https://tmdb.org{movie.poster_path}`}
                                alt={movie.title}
                                className="movie-poster"
                            />
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default MovieCarousel;
