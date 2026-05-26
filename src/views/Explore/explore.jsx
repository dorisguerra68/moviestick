import './explore.css';
import ExploreMovie from "../../components/molecules/card-explore/ExploreMovie.jsx";
import Menu from "../../components/organisms/menu/menu.jsx";

const Explore = () => {
return (
    <div className="explore-page">

    <section className="explore-section">
        <h2>Populares</h2>
        <Menu />
    </section>

      {/* Aquí se muestran las películas */}
    <ExploreMovie />

    </div>
);
};

export default Explore;
