import { useState } from 'react';
import './App.module.css';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import OurYachts from './components/OurYachts';
import Advantages from './components/Advantages';
import RentAYacht from './components/RentAYacht';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import MobileMenu from './components/MobileMenu';

const navLinks = [
  { href: '#about-us', label: 'About' },
  { href: '#our-yachts', label: 'Yachts' },
  { href: '#reviews', label: 'Reviews' },
];

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((current) => !current);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <Header navLinks={navLinks} onMenuToggle={toggleMenu} onMenuClose={closeMenu} isMenuOpen={isMenuOpen} />

      <main>
        <Hero />
        <AboutUs />
        <OurYachts />
        <Advantages />
        <RentAYacht />
        <Reviews />
      </main>

      <Footer />
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </>
  );
}

export default App;
