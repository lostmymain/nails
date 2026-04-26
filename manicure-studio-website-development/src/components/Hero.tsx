import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onBooking: () => void;
}

export default function Hero({ onBooking }: HeroProps) {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background */}
      <div ref={parallaxRef} className="absolute inset-0 scale-110">
        <img
          src="/images/hero-bg.jpg"
          alt="Soft & Sharp Studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/95 via-[#FAF8F5]/70 to-[#FAF8F5]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full pt-20">
        <div className="max-w-2xl">
          {/* Tag */}
          <div className="inline-flex items-center gap-2 mb-8">
            <div className="w-8 h-px bg-[#8B6F47]" />
            <span className="text-xs font-light tracking-[0.3em] text-[#8B6F47] uppercase">
              Премиальная студия маникюра
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] text-[#2C2C2C] mb-6">
            Искусство
            <br />
            <em className="italic text-[#8B6F47]">безупречных</em>
            <br />
            ногтей
          </h1>

          {/* Subtext */}
          <p className="text-[#4A3728]/60 font-light tracking-wide text-base md:text-lg leading-relaxed mb-10 max-w-md">
            Мы создаём не просто маникюр — мы создаём детали,
            которые замечают. Каждый визит — ритуал заботы о себе.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onBooking}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#4A3728] text-white text-sm font-light tracking-[0.2em] uppercase hover:bg-[#8B6F47] transition-all duration-400"
            >
              Записаться онлайн
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </button>
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[#C8B89A] text-[#4A3728] text-sm font-light tracking-[0.2em] uppercase hover:border-[#8B6F47] hover:text-[#8B6F47] transition-all duration-300"
            >
              Наши услуги
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14">
            {[
              { num: '5+', label: 'лет опыта' },
              { num: '2 000+', label: 'клиентов' },
              { num: '4.9', label: 'рейтинг' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-serif text-2xl md:text-3xl font-light text-[#4A3728]">{s.num}</div>
                <div className="text-xs font-light tracking-widest text-[#4A3728]/50 uppercase mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <div className="w-px h-10 bg-gradient-to-b from-transparent to-[#C8B89A]" />
        <ArrowDown size={14} className="text-[#C8B89A]" />
      </div>
    </section>
  );
}
