import { useState } from 'react';
import { Star } from 'lucide-react';

const masters = [
  {
    id: 1,
    name: 'Анастасия Кова',
    title: 'Senior Nail Artist',
    experience: '6 лет',
    rating: 5.0,
    reviews: 248,
    photo: '/images/master-1.jpg',
    specialization: ['Nail Art', 'Гель-лак', 'Дизайн'],
    bio: 'Специализируется на минималистичных и архитектурных дизайнах. Финалист Moscow Nail Cup 2023.',
    instagram: '@anastasia.nails',
    slots: ['10:00', '12:00', '15:00', '17:30'],
  },
  {
    id: 2,
    name: 'Мария Стефан',
    title: 'Nail Technician & Artist',
    experience: '4 года',
    rating: 4.9,
    reviews: 186,
    photo: '/images/master-2.jpg',
    specialization: ['SPA-маникюр', 'Педикюр', 'Хром'],
    bio: 'Эксперт по уходовым процедурам. Работает с брендом OPI и Essie. Специалист по SPA-программам.',
    instagram: '@maria.softsharp',
    slots: ['09:00', '11:30', '14:00', '16:30'],
  },
  {
    id: 3,
    name: 'Диана Яшина',
    title: 'Junior Artist',
    experience: '2 года',
    rating: 4.8,
    reviews: 94,
    photo: '/images/master-3.jpg',
    specialization: ['Классический', 'Фольга', 'French'],
    bio: 'Мастер классической и французской техники. Любит работать с натуральными оттенками и текстурами.',
    instagram: '@diana.nailart',
    slots: ['10:30', '13:00', '15:30', '18:00'],
  },
];

interface MastersProps {
  onBooking: (masterId?: number) => void;
}

export default function Masters({ onBooking }: MastersProps) {
  const [selectedMaster, setSelectedMaster] = useState<number | null>(null);

  return (
    <section id="masters" className="py-24 md:py-32 bg-[#F5F0E8]/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#8B6F47]" />
            <span className="text-xs font-light tracking-[0.3em] text-[#8B6F47] uppercase">Команда</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#2C2C2C]">
            Наши <em className="italic text-[#8B6F47]">мастера</em>
          </h2>
        </div>

        {/* Masters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {masters.map((master) => {
            const isSelected = selectedMaster === master.id;
            return (
              <div
                key={master.id}
                onClick={() => setSelectedMaster(isSelected ? null : master.id)}
                className={`group relative cursor-pointer transition-all duration-400 ${
                  isSelected ? 'ring-1 ring-[#8B6F47]' : 'hover:shadow-lg'
                }`}
              >
                <div className="bg-white border border-[#E8E0D0] overflow-hidden">
                  {/* Photo */}
                  <div className="relative overflow-hidden aspect-[4/5]">
                    <img
                      src={master.photo}
                      alt={master.name}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/60 via-transparent to-transparent" />

                    {/* Overlay info */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="flex items-end justify-between">
                        <div>
                          <h3 className="font-serif text-xl text-white font-light">{master.name}</h3>
                          <p className="text-white/70 text-xs font-light tracking-widest uppercase">{master.title}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Star size={12} className="text-[#C8B89A] fill-[#C8B89A]" />
                          <span className="text-white text-sm font-light">{master.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Instagram badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-white/20 backdrop-blur-sm rounded-full px-2.5 py-1">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <circle cx="12" cy="12" r="4"/>
                        <circle cx="17.5" cy="6.5" r="0.5" fill="white" stroke="none"/>
                      </svg>
                      <span className="text-white text-[10px] font-light">{master.instagram}</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-[#4A3728]/50 font-light">{master.experience} опыта</span>
                      <span className="text-xs text-[#4A3728]/50 font-light">{master.reviews} отзывов</span>
                    </div>

                    <p className="text-sm font-light text-[#4A3728]/60 leading-relaxed mb-4">
                      {master.bio}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {master.specialization.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 border border-[#E8E0D0] text-[10px] font-light tracking-widest text-[#4A3728]/60 uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Time Slots */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ${
                        isSelected ? 'max-h-40 opacity-100 mb-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-xs font-light tracking-widest text-[#4A3728]/50 uppercase mb-2">
                        Свободно сегодня
                      </p>
                      <div className="grid grid-cols-4 gap-1.5">
                        {master.slots.map((slot) => (
                          <button
                            key={slot}
                            onClick={(e) => { e.stopPropagation(); onBooking(master.id); }}
                            className="py-2 text-xs font-light text-[#4A3728] border border-[#E8E0D0] hover:border-[#8B6F47] hover:bg-[#8B6F47] hover:text-white transition-all duration-200"
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={(e) => { e.stopPropagation(); onBooking(master.id); }}
                      className="w-full py-3 border border-[#4A3728] text-[#4A3728] text-xs font-light tracking-[0.2em] uppercase hover:bg-[#4A3728] hover:text-white transition-all duration-300"
                    >
                      Записаться к мастеру
                    </button>
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
