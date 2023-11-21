import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar/Navbar";
import Contact from "./components/Contact/Contact";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Default from "./components/Default/Default";
// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Intro />
//       <Skills />
//       <Education />
//       <Contact />
//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <Skills />
              <Education />
              <Contact />
            </>
          }
        />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Default />} />
      </Routes>
    </Router>
  );
};

export default App;
