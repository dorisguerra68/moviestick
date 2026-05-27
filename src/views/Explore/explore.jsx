import './explore.css';
import ExploreMovie from "../../components/molecules/card-explore/ExploreMovie.jsx";


const Explore = () => {
return (
    <div className="explore-page">

    <section className="explore-section">
        <h2 className="title-primary">LAS PELÍCULAS MÁS POPULARES</h2>  
        <carrusel />
    </section>
    

      {/* Aquí se muestran las películas */}
    <ExploreMovie />

    </div>
);
};

export default Explore;
