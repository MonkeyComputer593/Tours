/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TourGrid from './components/TourGrid';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import TourDetailPage from './pages/TourDetailPage';

// Component to handle scroll on navigation
function ScrollHandler() {
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      const hash = location.hash.replace('#', '');
      if (hash) {
        // Delay to ensure page is rendered
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            // Account for fixed navbar (64px = h-16)
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
            window.scrollTo({ top: offsetPosition, behavior: 'auto' });
          }
        }, 150);
      } else if (location.pathname === '/' && !location.hash) {
        // Home page without hash - scroll to top
        window.scrollTo({ top: 0, behavior: 'auto' });
      }
    };

    handleScroll();
    
    // Also listen for hash changes
    window.addEventListener('hashchange', handleScroll);
    return () => window.removeEventListener('hashchange', handleScroll);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollHandler />
      <Routes>
        {/* Route for individual tour pages */}
        <Route path="/tours/:slug" element={<TourDetailPage />} />
        
        {/* Main page with all sections */}
        <Route path="/*" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

function MainPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#F27D26]/30 selection:text-[#F27D26]">
      <Navbar />
      
      <main>
        <Hero />
        <TourGrid />
        <AboutUs />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
