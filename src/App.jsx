import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import { uparrow } from './assets'
import Footer from './components/Footer'
import Gallery from './pages/gallery/Gallery'
import Donation from './pages/donation/Donation'
import About from './pages/about/About'

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };
 
    window.addEventListener('scroll', handleScroll);
 
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="z-[100] fixed w-full top-0">
        <Navbar />
      </div>
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/gallery'  element={<Gallery />} />
        <Route path='/donation'  element={<Donation />} />
        <Route path='/about'  element={<About />} />
      </Routes>
      {showScrollButton && (
        <button onClick={scrollToTop} className='fixed bottom-[30px] right-[20px] p-2 rounded-full z-[5] bg-[goldenrod]'>
          <img src={uparrow} className='h-7 w-7' alt="" />
        </button>
      ) }
      <div>
        <Footer />
      </div>
    </>
  )
}

export default App