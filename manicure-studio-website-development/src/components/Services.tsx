import { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const services = [
  {
    id: 1,
    category: 'Маникюр',
    emoji: '💅',
    basePrice: 'от 2 500 ₽',
    description: 'Классический уход за ногтями с идеальной формой и покрытием на ваш выбор.',
    items: [
      { name: 'Классический маникюр', price: '2 500 ₽', duration: '60 мин' },
      { name: 'Европейский маникюр', price: '2 800 ₽', duration: '75 мин' },
      { name: 'Аппаратный маникюр', price: '3 000 ₽', duration: '70 мин' },
      { name: 'Маникюр + гель-лак', price: '3 500 ₽', duration: '90 мин' },
    ],
  },
  {
    id: 2,
    category: 'Nail Art',
    emoji: '✨',
    basePrice: 'от 500 ₽/ноготь',
    description: 'Авторские дизайны от наших мастеров: от минимализма до сложных техник.',
    items: [
      { name: 'Минималистичный дизайн', price: '500 ₽/ноготь', duration: '+20 мин' },
      { name: 'Французский маникюр', price: '1 000 ₽', duration: '+30 мин' },
      { name: 'Фольга / Хром', price: '800 ₽', duration: '+25 мин' },
      { name: 'Сложный арт', price: 'от 800 ₽/ноготь', duration: '+40 мин' },
    ],
  },
  {
    id: 3,
    category: 'Педикюр',
    emoji: '🌿',
    basePrice: 'от 3 000 ₽',
    description: 'Полный уход за стопами с расслабляющей ванночкой и SPA-процедурами.',
    items: [
      { name: 'Классический педикюр', price: '3 000 ₽', duration: '80 мин' },
      { name: 'Аппаратный педикюр', price: '3 500 ₽', duration: '90 мин' },
      { name: 'SPA-педикюр', price: '4 500 ₽', duration: '110 мин' },
      { name: 'Педикюр + гель-лак', price: '4 000 ₽', duration: '100 мин' },
    ],
  },
  {
    id: 4,
    category: 'Уход & SPA',
    emoji: '🫧',
    basePrice: 'от 1 500 ₽',
    description: 'Питательные процедуры, парафинотерапия и укрепляющие покрытия.',
    items: [
      { name: 'Парафинотерапия рук', price: '1 500 ₽', duration: '30 мин' },
      { name: 'SPA-уход за руками', price: '2 000 ₽', duration: '45 мин' },
      { name: 'Укрепление ногтей', price: '1 800 ₽', duration: '40 мин' },
      { name: 'Снятие гель-лака', price: '800 ₽', duration: '25 мин' },
    ],
  },
];

interface ServicesProps {
  onBooking: () => void;
}

export default function Services({ onBooking }: ServicesProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#8B6F47]" />
              <span className="text-xs font-light tracking-[0.3em] text-[#8B6F47] uppercase">Прайс-лист</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#2C2C2C]">
              Наши <em className="italic text-[#8B6F47]">услуги</em>
            </h2>
          </div>
          <p className="text-[#4A3728]/50 font-light text-sm leading-relaxed max-w-xs md:text-right">
            Каждая услуга выполняется с премиальными материалами и индивидуальным подходом
          </p>
        </div>

        {/* Service Cards */}
        <div className="space-y-3">
          {services.map((service, index) => {
            const isOpen = expanded === service.id;
            return (
              <div
                key={service.id}
                className="border border-[#E8E0D0] bg-white/50 overflow-hidden transition-all duration-500"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Header */}
                <button
                  onClick={() => setExpanded(isOpen ? null : service.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-2xl">{service.emoji}</span>
                    <div>
                      <h3 className="font-serif text-xl md:text-2xl font-light text-[#2C2C2C] group-hover:text-[#8B6F47] transition-colors">
                        {service.category}
                      </h3>
                      <p className="text-xs font-light tracking-widest text-[#4A3728]/50 uppercase mt-0.5">
                        {service.basePrice}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="hidden md:block text-sm font-light text-[#4A3728]/50 max-w-xs">
                      {service.description}
                    </p>
                    <div
                      className={`w-8 h-8 rounded-full border border-[#E8E0D0] flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'bg-[#4A3728] border-[#4A3728] rotate-180' : 'group-hover:border-[#8B6F47]'
                      }`}
                    >
                      <ChevronDown
                        size={16}
                        className={isOpen ? 'text-white' : 'text-[#4A3728]/60'}
                      />
                    </div>
                  </div>
                </button>

                {/* Expanded Content */}
                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 border-t border-[#E8E0D0]/60">
                    <p className="md:hidden text-sm font-light text-[#4A3728]/50 mt-4 mb-4">
                      {service.description}
                    </p>
                    <div className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-between py-3 px-4 bg-[#FAF8F5] border border-[#E8E0D0]/50 group/item hover:border-[#C8B89A] transition-colors cursor-default"
                        >
                          <div>
                            <span className="text-sm font-light text-[#2C2C2C]">{item.name}</span>
                            <div className="text-xs text-[#4A3728]/40 mt-0.5">{item.duration}</div>
                          </div>
                          <span className="text-sm font-light text-[#8B6F47] ml-4 whitespace-nowrap">{item.price}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-5 flex justify-end">
                      <button
                        onClick={onBooking}
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#4A3728] text-white text-xs font-light tracking-[0.2em] uppercase hover:bg-[#8B6F47] transition-colors duration-300"
                      >
                        <Sparkles size={12} />
                        Записаться
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
