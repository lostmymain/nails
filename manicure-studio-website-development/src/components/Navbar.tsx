import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onBooking: () => void;
  onLogin: () => void;
  isLoggedIn: boolean;
  userName: string;
}

export default function Navbar({ onBooking, onLogin, isLoggedIn, userName }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Услуги', href: '#services' },
    { label: 'Мастера', href: '#masters' },
    { label: 'Работы', href: '#gallery' },
    { label: 'О нас', href: '#about' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass border-b border-[#E8E0D0]/60 shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-7 h-7 rounded-full bg-[#8B6F47] flex items-center justify-center">
              <span className="text-white text-xs font-light tracking-widest">S</span>
            </div>
            <span className="font-serif text-xl md:text-2xl font-light tracking-wider text-[#2C2C2C]">
              Soft & Sharp
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-light tracking-widest text-[#4A3728]/70 hover:text-[#4A3728] transition-colors duration-200 uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <button
                onClick={onLogin}
                className="flex items-center gap-2 text-sm text-[#4A3728]/70 hover:text-[#4A3728] transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-[#C8B89A]/30 flex items-center justify-center">
                  <span className="text-xs font-medium text-[#4A3728]">
                    {userName.charAt(0)}
                  </span>
                </div>
                <span className="font-light tracking-wide">{userName.split(' ')[0]}</span>
              </button>
            ) : (
              <button
                onClick={onLogin}
                className="text-sm font-light tracking-widest text-[#4A3728]/70 hover:text-[#4A3728] transition-colors uppercase"
              >
                Войти
              </button>
            )}
            <button
              onClick={onBooking}
              className="px-6 py-2.5 bg-[#4A3728] text-white text-sm font-light tracking-widest uppercase hover:bg-[#8B6F47] transition-all duration-300"
            >
              Записаться
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onBooking}
              className="px-4 py-2 bg-[#4A3728] text-white text-xs font-light tracking-wider uppercase"
            >
              Записаться
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1 text-[#4A3728]"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-400 overflow-hidden ${
            menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
          style={{ background: 'rgba(250, 248, 245, 0.98)' }}
        >
          <div className="px-6 py-4 flex flex-col gap-4 border-t border-[#E8E0D0]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-light tracking-widest text-[#4A3728]/70 uppercase py-1"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); onLogin(); }}
              className="text-sm font-light tracking-widest text-[#4A3728]/70 uppercase py-1 text-left"
            >
              {isLoggedIn ? `Кабинет — ${userName.split(' ')[0]}` : 'Войти'}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
