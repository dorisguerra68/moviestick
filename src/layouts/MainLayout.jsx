//import React from "react";
import Menu from "./../components/organisms/menu/menu";
import Footer from "./../components/organisms/footer/footer";
import './MainLayout..css';
import '../App.css';


    const MainLayout = ({ children }) => {
    return (
        <div className="layout-wrapper">
        <Menu />
        
        <main className="content-area">
            {children} {/* Aquí aparecerá el Home, Explorer, etc. */}
        </main>

        <Footer />
        </div>
    );
    };

    export default MainLayout;
