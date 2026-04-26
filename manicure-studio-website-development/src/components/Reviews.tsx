import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: 'Катя М.',
    date: '14 июня 2025',
    master: 'Анастасия',
    rating: 5,
    text: 'Просто влюбилась в студию! Пришла первый раз к Насте и теперь не могу представить себя у другого мастера. Результат держится три недели без сколов, а дизайн — просто произведение искусства.',
    tag: 'Nail Art',
  },
  {
    id: 2,
    name: 'Алина Г.',
    date: '8 июня 2025',
    master: 'Мария',
    rating: 5,
    text: 'Делала SPA-маникюр у Маши. Настоящая терапия! Руки стали мягкими как после отпуска. Атмосфера в студии потрясающая, музыка, аромат — всё продумано до мелочей.',
    tag: 'SPA-маникюр',
  },
  {
    id: 3,
    name: 'Виктория П.',
    date: '2 июня 2025',
    master: 'Диана',
    rating: 5,
    text: 'Попросила Диану сделать "что-нибудь минималистичное" — и она угадала идеальный для меня стиль. Теперь буду приходить только к ней. Запись через сайт — очень удобно, моментально пришло подтверждение.',
    tag: 'Классический',
  },
  {
    id: 4,
    name: 'Наташа Р.',
    date: '28 мая 2025',
    master: 'Анастасия',
    rating: 5,
    text: 'Хожу в Soft & Sharp уже полгода. Что мне нравится больше всего — это предсказуемое качество. Каждый раз знаешь, что выйдешь довольная. Бонусная система тоже радует!',
    tag: 'Постоянный клиент',
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  const review = reviews[current];

  return (
    <section className="py-24 md:py-32 bg-[#F5F0E8]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-px bg-[#8B6F47]" />
          <span className="text-xs font-light tracking-[0.3em] text-[#8B6F47] uppercase">Отзывы</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Big number */}
          <div>
            <div className="flex items-end gap-4 mb-6">
              <span className="font-serif text-[8rem] leading-none font-light text-[#2C2C2C]">4.9</span>
              <div className="pb-4">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-[#C8B89A] fill-[#C8B89A]" />
                  ))}
                </div>
                <p className="text-sm font-light text-[#4A3728]/50">на основе 312 отзывов</p>
              </div>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-light text-[#2C2C2C]">
              Что говорят
              <br />
              <em className="italic text-[#8B6F47]">наши клиенты</em>
            </h2>
          </div>

          {/* Review Card */}
          <div className="relative">
            <div className="border border-[#E8E0D0] bg-white p-8 min-h-[280px] flex flex-col">
              {/* Quote mark */}
              <div className="font-serif text-6xl text-[#C8B89A]/40 leading-none mb-4 -mt-2">"</div>

              <p className="font-light text-[#4A3728]/80 leading-relaxed flex-1 text-sm md:text-base">
                {review.text}
              </p>

              <div className="mt-6 pt-4 border-t border-[#E8E0D0] flex items-center justify-between">
                <div>
                  <p className="font-light text-[#2C2C2C] text-sm">{review.name}</p>
                  <p className="text-xs font-light text-[#4A3728]/40 mt-0.5">
                    Мастер: {review.master} · {review.date}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-light text-[#8B6F47] border border-[#8B6F47]/30 px-2 py-0.5 bg-[#8B6F47]/5">
                    {review.tag}
                  </span>
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={11} className="text-[#C8B89A] fill-[#C8B89A]" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={prev}
                className="w-10 h-10 border border-[#E8E0D0] flex items-center justify-center text-[#4A3728]/60 hover:border-[#4A3728] hover:text-[#4A3728] transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 border border-[#E8E0D0] flex items-center justify-center text-[#4A3728]/60 hover:border-[#4A3728] hover:text-[#4A3728] transition-all"
              >
                <ChevronRight size={18} />
              </button>
              <div className="flex gap-1.5 ml-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`transition-all duration-300 ${
                      i === current
                        ? 'w-6 h-1.5 bg-[#8B6F47]'
                        : 'w-1.5 h-1.5 rounded-full bg-[#C8B89A]/40 hover:bg-[#C8B89A]'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
