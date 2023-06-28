import React from "react";
import useLocalStorage from 'use-local-storage';

import Navbar from "./components/Navbar";
import Accueil from "./components/Accueil";
import Presentation from "./components/Presentation";
import Competences from "./components/Competences";
import Projets from "./components/Projets";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Accueil />
      <Presentation />
      <Competences />
      <Projets />
      <Contact />
    </>
  );
}

export default App;