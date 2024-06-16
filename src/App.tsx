import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Anime from './pages/Anime';
import Home from './pages/Home';
import Top from './pages/Top';
import NotFound from './pages/NotFound';
import SeasonsNow from './pages/Seasons/Now';
import Footer from './Components/Footer';

const App: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const [showFooter, setShowFooter] = useState<boolean>(true);


  return(
    <Router>
      {showNavbar && <Navbar />}
        <div className='font-poppins'>
          <Routes>
            <Route path='/' element={<Home setShowNavbar={setShowNavbar} setShowFooter={setShowFooter}/>} />
            <Route path='/top' element={<Top setShowNavbar={setShowNavbar} setShowFooter={setShowFooter}/>} /> 
            <Route path='/anime/:title' element={<Anime setShowNavbar={setShowNavbar} setShowFooter={setShowFooter}/>}/>
            <Route path='/anime/seasons/now' element={<SeasonsNow setShowNavbar={setShowNavbar} setShowFooter={setShowFooter}/>}/>
            <Route path='*' element={<NotFound setShowNavbar={setShowNavbar} setShowFooter={setShowFooter}/>}/>
          </Routes>
        </div>
      {showFooter && <Footer />}
    </Router>
  )
}

export default App;
