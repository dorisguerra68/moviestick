    import "./Home.css";
    import { useNavigate } from "react-router-dom";
    import ButtonCircular from "../../components/ui/ButtonCircular/ButtonCircular.jsx";
    import Button from "../../components/ui/Button/Button.jsx";

    const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="home-container">

        {/* Logo */}
        <div className="home-logo">
            <img src="/logo-moviestick.png" alt="MovieStick" />
        </div>

        {/* Botón circular centrado debajo del logo */}
        <div className="home-center-button">
            <ButtonCircular 
            icon="☰"
            variant="ghost"
            onClick={() => navigate("/explore")}   // ← AQUÍ NAVEGA
            />
        </div>

        {/* Botón rectangular Entrar */}
        <Button 
            text="Entrar" 
            variant="primary"
            onClick={() => navigate("/explore")}     // ← TAMBIÉN NAVEGA
        />

        </div>
    );
    };

    export default Home;
