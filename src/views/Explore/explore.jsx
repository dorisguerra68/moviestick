    import React from 'react';
    import MovieCarousel from '../../components/organisms/carrusel/carrusel.jsx';
    import './explore.css';
    import ExploreMovie from "../../components/molecules/card-explore/card-cartelera.jsx";

    const Explore = () => {
    return (
        <div className="explore-page">
        
        <section style={{ marginBottom: '40px' }}>
            <h2 style={{ color: 'white', marginLeft: '50px' }}>Populares</h2>
            <MovieCarousel />
        </section>

        {/* Aquí puedes tener el resto de tu contenido de explorar */}
        <div className="explore-grid">
            <ExploreMovie />
            {/* Tus otras películas o filtros */}
        </div>
        </div>
    );
    };

    export default Explore;
