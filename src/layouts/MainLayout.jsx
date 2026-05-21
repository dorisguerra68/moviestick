    import React from "react";
    import Menu from "./../components/organisms/menu/menu";
    import Footer from "./../components/organisms/footer/footer";
    import MovieCarousel from "../components/organisms/carrusel/Carrusel"; 
    import '../App.css';

    const MainLayout = ({ children }) => {
    return (
        <div className="layout-wrapper">
        <Menu />
        
        <div className="carousel-layout-container" style={{ padding: '20px 0' }}>
            <MovieCarousel />
        </div>

        <main className="content-area">
            {children}
        </main>

        <Footer />
        </div>
    );
    };

    export default MainLayout;
