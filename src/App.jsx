import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import "./App.css";
import { Home } from './Pages/Home.jsx'
import { Diagnostics } from './Pages/Diagnostics.jsx'
import { Maintenance } from './Pages/Maintenance.jsx'
import { Repairment } from './Pages/Repairment.jsx'
import { Supply } from './Pages/Supply.jsx'
import { Contacts } from './Pages/Contacts.jsx'
import { About } from './Pages/About.jsx'

import "./App.css";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/diagnostics" element={<Diagnostics />} />
          <Route path="/service/maintenance" element={<Maintenance />} />
          <Route path="/service/repairment" element={<Repairment />} />
          <Route path="/service/supply" element={<Supply />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
