import Topbar from "./components/Topbar/Topbar";
import Intro from "./components/Intro/Intro";
import Portfolio from "./components/Portfolio/Portfolio";
import Works from "./components/Works/Works";
import Testimonials from "./components/Testimonials/Testimonials";
import Contacts from "./components/Contacts/Contacts";
import Menu from "./components/Menu/Menu";
import AboutUs from "./components/About Us/AboutUs"

import { useState } from "react";

import "./App.scss"

function App() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <AboutUs />
        <Works />
        <Portfolio />
        <Testimonials />
        <Contacts />
      </div>
    </div >
  );
}

export default App;
