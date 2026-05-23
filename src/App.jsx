import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./views/Home/home.jsx";
import Explore from "./views/Explore/explore.jsx";


function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
        
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
