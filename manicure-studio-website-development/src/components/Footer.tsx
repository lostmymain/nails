export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-[#8B6F47] flex items-center justify-center">
                <span className="text-white text-xs font-light">S</span>
              </div>
              <span className="font-serif text-xl font-light tracking-wider text-white">Soft & Sharp</span>
            </div>
            <p className="text-white/30 font-light text-sm leading-relaxed max-w-xs">
              Премиальная студия маникюра в Москве. Искусство безупречных ногтей с 2019 года.
            </p>
            <div className="flex items-center gap-4 mt-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-[#8B6F47] hover:text-[#8B6F47] transition-all duration-200"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="https://t.me/softandsharp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-[#8B6F47] hover:text-[#8B6F47] transition-all duration-200"
                aria-label="Telegram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.829.941z"/>
                </svg>
              </a>
              <a
                href="https://vk.com/softandsharp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-[#8B6F47] hover:text-[#8B6F47] transition-all duration-200"
                aria-label="VK"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.073 1H8.927C3.017 1 1 3.017 1 8.927v6.146C1 20.983 3.017 23 8.927 23h6.146C20.983 23 23 20.983 23 15.073V8.927C23 3.017 20.983 1 15.073 1zm3.505 15.334h-1.629c-.616 0-.806-.491-1.91-1.595-.959-.916-1.38-.9-1.62 0-.246.916-.985 1.595-2.246 1.595-2.746 0-4.354-1.85-4.354-4.895 0-2.986 1.605-4.836 4.354-4.836 1.261 0 1.997.676 2.243 1.592.24.899.663.916 1.62 0 1.1-1.1 1.294-1.592 1.91-1.592h1.629c.806 0 1.088.491.88 1.302-.615 2.315-3.263 5.053-3.263 5.053s.88.928 1.882 2.066c.932 1.059 1.494 1.918.504 1.31z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-light tracking-[0.2em] text-white/30 uppercase mb-4">Навигация</p>
            <ul className="space-y-2.5">
              {['Услуги', 'Мастера', 'Работы', 'О студии', 'Контакты'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link === 'Контакты' ? 'about' : link === 'Работы' ? 'gallery' : link === 'Мастера' ? 'masters' : link === 'Услуги' ? 'services' : 'about'}`}
                    className="text-sm font-light text-white/40 hover:text-white/70 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-light tracking-[0.2em] text-white/30 uppercase mb-4">Контакты</p>
            <ul className="space-y-3">
              <li>
                <p className="text-[10px] font-light text-white/25 tracking-widest uppercase mb-0.5">Адрес</p>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-white/50 hover:text-white/70 transition-colors"
                >
                  ул. Большая Дмитровка, 15
                  <br />
                  Москва, Россия
                </a>
              </li>
              <li>
                <p className="text-[10px] font-light text-white/25 tracking-widest uppercase mb-0.5">Телефон</p>
                <a href="tel:+74951234567" className="text-sm font-light text-white/50 hover:text-white/70 transition-colors">
                  +7 (495) 123-45-67
                </a>
              </li>
              <li>
                <p className="text-[10px] font-light text-white/25 tracking-widest uppercase mb-0.5">Часы работы</p>
                <p className="text-sm font-light text-white/50">Пн-Вс: 10:00 – 21:00</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs font-light text-white/20">
            © {year} Soft & Sharp. Все права защищены.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-xs font-light text-white/20 hover:text-white/40 transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="text-xs font-light text-white/20 hover:text-white/40 transition-colors">
              Договор оферты
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
