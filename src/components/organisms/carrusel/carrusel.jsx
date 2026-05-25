       import { useState, useEffect } from "react";

        import Slider from "react-slick";
        import axios from "axios";

        import "slick-carousel/slick/slick.css";
        import "slick-carousel/slick/slick-theme.css";

        import arrowLeft from "../../../assets/icono/flecha-izquierda.png";
        import arrowRight from "../../../assets/icono/flecha-derecha.png";

        // Flechas del carrusel
        const NextArrow = ({ onClick }) => (
    <div onClick={onClick}>
        <img src={arrowRight} alt="next" />
    </div>
    );

    const PrevArrow = ({ onClick }) => (
    <div onClick={onClick}>
        <img src={arrowLeft} alt="prev" />
    </div>
    );

        const MovieCarousel = () => {
        const [movies, setMovies] = useState([]);

        const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

            useEffect(() => {
                const getData = async () => {
                try {
                    const { data } = await axios.get(
                    "https://api.themoviedb.org/3/movie/popular/",
                    {
                        params: {
                        api_key: API_KEY,
                        language: "es-ES",
                        page: 1,
                        },
                    }
                    );
                    
                    console.log(data.results);


                const topTen = data.results.slice(0, 10);
                setMovies(topTen);
            } catch (error) {
                console.error("Error cargando API:", error);
            }
            };

            getData();

        }, [API_KEY]);


        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />,
            arrows: true,
        };

        return (
            <div className="carousel-wrapper">
            {movies.length > 0 && (
                <Slider {...settings}>
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-slide">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
