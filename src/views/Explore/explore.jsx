        //import React from 'react';
        import './explore.css';
        import ExploreMovie from "../../components/molecules/card-explore/card-cartelera.jsx";
        import MovieCarousel from "../../components/organisms/carrusel/carrusel.jsx"; 

        const Explore = () => {
        return (
            <div className="explore-page">
        
            <section style={{ marginBottom: '40px' }}>
                <h2 style={{ color: 'white', marginLeft: '50px' }}>Populares</h2>
                <MovieCarousel/>
            </section>

            
                <ExploreMovie />
        
    

            </div>
            
        );
        };

        export default Explore;
