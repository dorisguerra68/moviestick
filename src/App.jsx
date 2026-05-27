import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./views/Home/home.jsx";
import Explore from "./views/Explore/explore.jsx";
import InformationCard from "./components/molecules/information-card/information-card.jsx"; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />

          {/* Ruta dinámica para ver la información de una película */}
          <Route path="/movie/:id" element={<InformationCard />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
