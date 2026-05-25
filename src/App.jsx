import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./views/Home/home.jsx";
import Explore from "./views/Explore/explore.jsx";
import MovieInfo from "./views/MovieInfo/MovieInfo.jsx";

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
