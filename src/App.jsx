import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";

import Editorial from "./pages/Editorial";
import Magazines from "./pages/Magazines";
import Newspapers from "./pages/Newspapers";
import PressRelease from "./pages/PressRelease";
import Articles from "./pages/Articles/Articles";
import AboutEritrea from "./pages/AboutEritrea/AboutEritrea";
import More from "./pages/More/More";

import AppLayout from "./pages/AppLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="articles" element={<Articles />} />
        <Route path="abouteritrea" element={<AboutEritrea />} />
        <Route path="editorial" element={<Editorial />} />
        <Route path="pressrelease" element={<PressRelease />} />
        <Route path="newspapers" element={<Newspapers />} />
        <Route path="magazines" element={<Magazines />} />
        <Route path="more" element={<More />} />

        <Route path="app" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
