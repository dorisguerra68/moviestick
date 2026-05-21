        import React from 'react';
    import MovieCarousel from '../components/MovieCarousel'; // Ajusta la ruta

    const Explore = () => {
    return (
        <div className="explore-page">
        {/* El carrusel solo se renderiza aquí */}
        <section style={{ marginBottom: '40px' }}>
            <h2 style={{ color: 'white', marginLeft: '50px' }}>Populares</h2>
            <MovieCarousel />
        </section>

        {/* Aquí puedes tener el resto de tu contenido de explorar */}
        <div className="explore-grid">
            {/* Tus otras películas o filtros */}
        </div>
        </div>
    );
    };

    export default Explore;
