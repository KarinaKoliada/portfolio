import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import Home from "components/Home/Home";
import About from "components/About/About";
import Projects from "components/Projects/Projects";
import Contacts from "components/Contacts/Contacts";

export const App = () => {
  return (
    <div>
      <NavBar />
      <main className="main-with-fixed-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contacts />} />

        </Routes>
      </main>
      <Footer />
    </div>
  );
};
