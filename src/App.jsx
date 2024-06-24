import { BrowserRouter, Route, Routes } from "react-router-dom";
import Articles from "./pages/Article/Articles";
import Editoral from "./pages/Editoral";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>

    <Routes>

      <Route path="/" element={<Homepage />} />

      <Route path="aritcle" element={<Articles/> } />
      <Route path="editoral" element={<Editoral />} />

      </Routes>

    </BrowserRouter>
  );
};

export default App;
