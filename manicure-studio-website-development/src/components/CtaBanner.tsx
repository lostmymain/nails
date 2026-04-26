interface CtaBannerProps {
  onBooking: () => void;
}

export default function CtaBanner({ onBooking }: CtaBannerProps) {
  return (
    <section className="py-20 md:py-28 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="relative border border-[#E8E0D0] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden">
          {/* Decorative */}
          <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full border border-[#E8E0D0]" />
          <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full border border-[#E8E0D0]" />
          <div className="absolute -left-6 -bottom-6 w-24 h-24 rounded-full border border-[#E8E0D0]" />

          <div className="relative z-10 text-center md:text-left">
            <p className="text-xs font-light tracking-[0.3em] text-[#8B6F47] uppercase mb-3">Готовы к визиту?</p>
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-[#2C2C2C]">
              Запишитесь сегодня —
              <br />
              <em className="italic text-[#8B6F47]">свободные окна тают</em>
            </h3>
          </div>

          <div className="relative z-10 flex flex-col items-center md:items-end gap-3">
            <button
              onClick={onBooking}
              className="group inline-flex items-center gap-3 px-10 py-4 bg-[#4A3728] text-white text-sm font-light tracking-[0.2em] uppercase hover:bg-[#8B6F47] transition-all duration-400 whitespace-nowrap"
            >
              Записаться онлайн
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <a
              href="tel:+74951234567"
              className="text-xs font-light tracking-wider text-[#4A3728]/50 hover:text-[#4A3728]/80 transition-colors"
            >
              или позвоните: +7 (495) 123-45-67
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
