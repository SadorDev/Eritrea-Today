import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";

import Editorial from "./pages/Editorial";
import Magazines from "./pages/Magazines";
import Newspapers from "./pages/Newspapers";
import PressRelease from "./pages/PressRelease";

import Articles from "./pages/Articles/Articles";
import ArtsandSports from "./pages/Articles/SubPages/ArtsandSports";
import General from "./pages/Articles/SubPages/General";
import NationBuilding from "./pages/Articles/SubPages/NationBuilding";

import AboutEritrea from "./pages/AboutEritrea/AboutEritrea";
import Erina from "./pages/AboutEritrea/SubPages/Erina";
import HistoryandCulture from "./pages/AboutEritrea/SubPages/HistoryandCulture";
import Proverbs from "./pages/AboutEritrea/SubPages/Proverbs";
import TodayInHistory from "./pages/AboutEritrea/SubPages/TodayInHistory";


import More from "./pages/More/More";
import ContactUs from "./pages/More/SubPages/ContactUs"

import AppLayout from "./pages/AppLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="articles" element={<Articles />} />
        <Route path="articles/artsandsports" element={<ArtsandSports />} />
        <Route path="articles/general" element={<General />} />
        <Route path="articles/nationbuilding" element={<NationBuilding />} />

        <Route path="abouteritrea" element={<AboutEritrea />} />
        <Route path="abouteritrea/erina" element={<Erina />} />
        <Route path="abouteritrea/historyandculture" element={<HistoryandCulture />} />
        <Route path="abouteritrea/proverbs" element={<Proverbs />} />
        <Route path="abouteritrea/todayinhistory" element={<TodayInHistory />} />


        <Route path="editorial" element={<Editorial />} />
        <Route path="pressrelease" element={<PressRelease />} />
        <Route path="newspapers" element={<Newspapers />} />
        <Route path="magazines" element={<Magazines />} />

        <Route path="more" element={<More />} />
        <Route path="more/contactus" element={<ContactUs />} />

        <Route path="app" element={<AppLayout />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
