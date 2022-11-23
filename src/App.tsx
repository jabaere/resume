import React, {useContext} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./index.css";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { Dashboard } from "./screens/Dashboard";
import { Cv } from "./screens/Cv";
import { Projects } from "./screens/Projects";
import { Header } from "./components/Header";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeContext from "./context/ThemeContext";

function App() {
  const location = useLocation();
  const { color1, color2 } = useContext(ThemeContext);


  return (
    <ThemeProvider>
      <div
        className="App"
        id="app"
        style={{
          backgroundImage: `linear-gradient(300deg, ${color1} 35%, ${color2} 150%)`,
        }}
      >
        <Header />
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.key}>
            <Route key="/" path="/" element={<Home />} />
            <Route key="cv" path="/cv" element={<Cv />} />
            <Route key="about" path="/about" element={<About />} />
            <Route key="projects" path="/projects" element={<Projects />} />
            <Route key="play" path="/play" element={<Dashboard />} />
          </Routes>
        </AnimatePresence>
      </div>
    </ThemeProvider>
  );
}

export default App;
