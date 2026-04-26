import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import Masters from './components/Masters';
import InstagramFeed from './components/InstagramFeed';
import About from './components/About';
import Reviews from './components/Reviews';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import PersonalCabinet from './components/PersonalCabinet';
import LoginModal from './components/LoginModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [cabinetOpen, setCabinetOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [preselectedMaster, setPreselectedMaster] = useState<number | undefined>(undefined);

  const handleBooking = (masterId?: number) => {
    setPreselectedMaster(masterId);
    setBookingOpen(true);
  };

  const handleNavLogin = () => {
    if (isLoggedIn) {
      setCabinetOpen(true);
    } else {
      setLoginOpen(true);
    }
  };

  const handleLogin = (name: string) => {
    setIsLoggedIn(true);
    setUserName(name);
    setLoginOpen(false);
    setCabinetOpen(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
    setCabinetOpen(false);
  };

  const handleRebook = () => {
    setCabinetOpen(false);
    setBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] antialiased">
      {/* Navigation */}
      <Navbar
        onBooking={() => handleBooking()}
        onLogin={handleNavLogin}
        isLoggedIn={isLoggedIn}
        userName={userName}
      />

      {/* Main Content */}
      <main>
        <Hero onBooking={() => handleBooking()} />
        <Marquee />
        <Services onBooking={() => handleBooking()} />
        <Masters onBooking={handleBooking} />
        <InstagramFeed />
        <Reviews />
        <About />
        <CtaBanner onBooking={() => handleBooking()} />
      </main>

      <Footer />

      {/* Floating Book Button (mobile sticky) */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <button
          onClick={() => handleBooking()}
          className="w-14 h-14 bg-[#4A3728] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#8B6F47] transition-colors duration-300 active:scale-95"
          aria-label="Записаться"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
            <line x1="12" y1="14" x2="12" y2="18"/>
            <line x1="10" y1="16" x2="14" y2="16"/>
          </svg>
        </button>
      </div>

      {/* Modals */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        preselectedMasterId={preselectedMaster}
      />

      <PersonalCabinet
        isOpen={cabinetOpen}
        onClose={() => setCabinetOpen(false)}
        onLogout={handleLogout}
        onRebook={handleRebook}
      />

      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
}
