        //import React from 'react';
        import './explore.css';
        import ExploreMovie from "../../components/molecules/card-explore/card-cartelera.jsx";
        //import MovieCarousel from "../../components/organisms/carrusel/carrusel.jsx"; 
        import Menu from "../../components/organisms/menu/menu.jsx";
        const Explore = () => {
        return (
            <div className="explore-page">
        
            <section className="explore-section">
                <h2 >Populares</h2>
                <Menu />
            </section>

            
                <ExploreMovie />
        
    

            </div>
            
        );
        };

        export default Explore;
