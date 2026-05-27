        import React from 'react';
    

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
