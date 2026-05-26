        import React from 'react';
        import Menu from "./../components/organisms/menu/menu";
        import Footer from "./../components/organisms/footer/footer";

        import "../App.css";

        const MainLayout = ({ children }) => {
        return (
            <div className="layout-wrapper">

            {/* Menú superior */}
         

            {/* Contenido dinámico (Home, Explore, MovieInfo...) */}
            <main className="content-area">
                {children}
            </main>

            {/* Footer */}
          
            </div>
        );
        };

        export default MainLayout;
