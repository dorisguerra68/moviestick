    import "./home.css";
    import { useNavigate } from "react-router-dom";
    import Button from "../../components/atom/button/button.jsx";

    const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">

      
        <div className="home-logo">
            <img src="/src/assets/imagen/logoMovieStick.png" alt="Logo MovieStick" />
        </div>


       
        <div className="home-enter-button">
            <Button 
            text="Entrar"
            variant="primary"
            onClick={() => navigate("/explore")}
            />
        </div>

        </div>
    );
    };

    export default Home;
