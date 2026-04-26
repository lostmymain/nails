export default function About() {
  const values = [
    {
      icon: '◈',
      title: 'Премиальные материалы',
      text: 'Работаем только с профессиональными брендами: OPI, Essie, Kodi, CND Shellac.',
    },
    {
      icon: '◇',
      title: 'Стерильность',
      text: 'Автоклав, одноразовые инструменты и соблюдение всех санитарных норм.',
    },
    {
      icon: '◉',
      title: 'Индивидуальный подход',
      text: 'Консультация по форме и цвету перед каждым визитом. Вы всегда довольны результатом.',
    },
    {
      icon: '◎',
      title: 'Гарантия качества',
      text: 'Если покрытие отошло в течение 5 дней — исправляем бесплатно.',
    },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#2C2C2C]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#8B6F47]" />
              <span className="text-xs font-light tracking-[0.3em] text-[#8B6F47] uppercase">О студии</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-light text-white leading-tight mb-6">
              Место, где красота
              <br />
              <em className="italic text-[#C8B89A]">встречает ритуал</em>
            </h2>
            <p className="text-white/50 font-light leading-relaxed mb-6">
              Soft & Sharp — это не просто студия маникюра. Это пространство, где каждая деталь продумана для вашего комфорта: 
              от аромата в воздухе до температуры кресла.
            </p>
            <p className="text-white/50 font-light leading-relaxed mb-8">
              Мы работаем с 2019 года и за это время выработали собственный язык красоты — минималистичный, 
              точный и всегда актуальный. Наши мастера регулярно проходят обучение и участвуют в международных конкурсах.
            </p>
            <div className="flex gap-8">
              {[
                { label: 'Адрес', value: 'ул. Большая Дмитровка, 15' },
                { label: 'Часы', value: 'Пн-Вс: 10:00–21:00' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-light tracking-widest text-white/30 uppercase mb-1">{item.label}</p>
                  <p className="text-sm font-light text-white/70">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div
                key={i}
                className="border border-white/10 p-5 hover:border-[#8B6F47]/40 transition-colors duration-300 group"
              >
                <div className="text-2xl text-[#8B6F47] mb-3 font-light group-hover:scale-110 transition-transform duration-200 inline-block">
                  {v.icon}
                </div>
                <h4 className="text-white font-light mb-2 font-serif">{v.title}</h4>
                <p className="text-white/40 text-sm font-light leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
