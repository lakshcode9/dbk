import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Travel from './pages/Travel';
import Construction from './pages/Construction';
import Research from './pages/Research';
import Transport from './pages/Transport';
import Blog from './pages/Blog';
import Post1 from './pages/blog/Post1';
import Post2 from './pages/blog/Post2';
import Post3 from './pages/blog/Post3';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import CarRentals from './pages/CarRentals';
import CustomCursor from './components/CustomCursor';
import WhatsAppFloat from './components/WhatsAppFloat';
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <WhatsAppFloat />
      <ThemeToggle />
      <ParticleBackground />
      <div className="min-h-screen flex flex-col relative z-10 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/travel" element={<Travel />} />
            <Route path="/services/travel/car-rentals" element={<CarRentals />} />
            <Route path="/services/construction" element={<Construction />} />
            <Route path="/services/research" element={<Research />} />
            <Route path="/services/transport" element={<Transport />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/sustainable-construction" element={<Post1 />} />
            <Route path="/blog/top-travel-destinations" element={<Post2 />} />
            <Route path="/blog/research-methodology" element={<Post3 />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;