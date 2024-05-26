import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import "./App.css";
import { Home } from './Pages/Home.jsx'
import "./App.css";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
