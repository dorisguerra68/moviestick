    import React, { useState, useEffect } from "react";
    import Slider from "react-slick";
    import axios from "axios";

   
    import "slick-carousel/slick/slick.css";
    import "slick-carousel/slick/slick-theme.css";

    // Tus iconos de la carpeta assets/icons
    import arrowLeft from "./assets/icons/flecha-izquierda.png";
    import arrowRight from "./assets/icons/flecha-derecha.png";

    // Componentes para tus flechas personalizadas
    const NextArrow = ({ onClick }) => (
    <img 
        src={arrowRight} 
        onClick={onClick} 
        style={{ width: "40px", position: "absolute", right: "-50px", top: "50%", cursor: "pointer", zIndex: 10 }} 
        alt="next" 
    />
    );

    const PrevArrow = ({ onClick }) => (
    <img 
        src={arrowLeft} 
        onClick={onClick} 
        style={{ width: "40px", position: "absolute", left: "-50px", top: "50%", cursor: "pointer", zIndex: 10 }} 
        alt="prev" 
    />
    );

    const MovieCarousel = () => {
    const [movies, setMovies] = useState([]);
    const API_KEY = "TU_API_KEY_AQUI"; // ⬅️ PON TU KEY AQUÍ

    useEffect(() => {
        const getData = async () => {
        try {
            const { data } = await axios.get("https://themoviedb.org", {
            params: { api_key: API_KEY, language: "es-ES" }
            });
            setMovies(data.results);
        } catch (error) {
            console.error("Error cargando API:", error);
        }
        };
        getData();
    }, []);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4, // 4 como en tu diseño
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div style={{ width: "85%", margin: "0 auto", padding: "50px 0" }}>
        <Slider {...settings}>
            {movies.map((movie) => (
            <div key={movie.id} style={{ padding: "0 10px" }}>
                <img
                src={`https://tmdb.org{movie.poster_path}`}
                alt={movie.title}
                style={{ width: "100%", borderRadius: "15px" }}
                />
            </div>
            ))}
        </Slider>
        </div>
    );
    };

    export default MovieCarousel;
