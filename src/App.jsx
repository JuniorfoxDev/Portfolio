import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Navbar from './Components/Navbar';
import { useEffect } from 'react';
import axios from 'axios';  // ✅ Import axios

function App() {
  useEffect(() => {
    axios.post('https://portfolio-server-vaibhav.vercel.app/track-visit')
      .then(() => {
        console.log('Visit logged successfully');
      })
      .catch((err) => {
        console.error('Error logging visit:', err);
      });
  }, []);  // ✅ empty dependency array → run once on load

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Skills' element={<Skills />} />
          <Route path='/Projects' element={<Project />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
