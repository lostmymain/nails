import { useState } from 'react';
import { X, Calendar, Clock, RefreshCw, LogOut, User } from 'lucide-react';
import LoyaltyCard from './LoyaltyCard';

const pastVisits = [
  {
    id: 1,
    date: '12 июня 2025',
    master: 'Анастасия Кова',
    service: 'Маникюр + Nail Art',
    price: '4 000 ₽',
    points: 4000,
    status: 'completed',
  },
  {
    id: 2,
    date: '25 мая 2025',
    master: 'Мария Стефан',
    service: 'SPA-маникюр + педикюр',
    price: '6 500 ₽',
    points: 6500,
    status: 'completed',
  },
  {
    id: 3,
    date: '10 мая 2025',
    master: 'Анастасия Кова',
    service: 'Маникюр + гель-лак',
    price: '3 500 ₽',
    points: 3500,
    status: 'completed',
  },
];

const upcomingVisits = [
  {
    id: 4,
    date: '28 июня 2025',
    time: '14:00',
    master: 'Диана Яшина',
    masterPhoto: '/images/master-3.jpg',
    service: 'Маникюр + гель-лак',
    price: '3 500 ₽',
    status: 'upcoming',
  },
];

interface PersonalCabinetProps {
  isOpen: boolean;
  onClose: () => void;
  onLogout: () => void;
  onRebook: () => void;
}

export default function PersonalCabinet({ isOpen, onClose, onLogout, onRebook }: PersonalCabinetProps) {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'history' | 'loyalty'>('upcoming');
  const totalPoints = pastVisits.reduce((s, v) => s + v.points, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-sm" onClick={onClose} />

      {/* Panel */}
      <div className="relative w-full md:max-w-lg bg-[#FAF8F5] md:rounded-none shadow-2xl max-h-[95vh] md:max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-[#4A3728] px-6 py-5 flex-shrink-0">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C8B89A]/20 border border-[#C8B89A]/30 flex items-center justify-center">
                <User size={18} className="text-white" />
              </div>
              <div>
                <p className="text-white font-light font-serif text-lg">Елена Самойлова</p>
                <p className="text-white/50 text-xs font-light tracking-wide">elena@mail.ru</p>
              </div>
            </div>
            <button onClick={onClose} className="text-white/50 hover:text-white transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Визитов', value: pastVisits.length },
              { label: 'Баллов', value: totalPoints.toLocaleString() },
              { label: 'Уровень', value: 'Gold' },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 rounded px-3 py-2 text-center">
                <p className="text-white font-light text-lg">{s.value}</p>
                <p className="text-white/50 text-[10px] font-light tracking-widest uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#E8E0D0] flex-shrink-0">
          {[
            { id: 'upcoming', label: 'Запись' },
            { id: 'history', label: 'История' },
            { id: 'loyalty', label: 'Баллы' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex-1 py-3.5 text-xs font-light tracking-widest uppercase transition-all ${
                activeTab === tab.id
                  ? 'border-b-2 border-[#8B6F47] text-[#4A3728]'
                  : 'text-[#4A3728]/40 hover:text-[#4A3728]/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">

          {/* Upcoming */}
          {activeTab === 'upcoming' && (
            <div className="p-6">
              {upcomingVisits.length > 0 ? (
                upcomingVisits.map((visit) => (
                  <div key={visit.id} className="border border-[#E8E0D0] bg-white p-5 mb-4">
                    <div className="flex items-center gap-3 mb-4">
                      <img
                        src={visit.masterPhoto}
                        alt={visit.master}
                        className="w-12 h-12 rounded-full object-cover object-top"
                      />
                      <div>
                        <p className="font-light text-[#2C2C2C]">{visit.master}</p>
                        <p className="text-xs font-light text-[#4A3728]/50">{visit.service}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-sm font-light text-[#4A3728]/70">
                        <Calendar size={14} className="text-[#8B6F47]" />
                        {visit.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm font-light text-[#4A3728]/70">
                        <Clock size={14} className="text-[#8B6F47]" />
                        {visit.time}
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm font-light text-[#8B6F47]">{visit.price}</span>
                      <button
                        onClick={onRebook}
                        className="inline-flex items-center gap-2 px-5 py-2 border border-[#4A3728] text-[#4A3728] text-xs font-light tracking-wider uppercase hover:bg-[#4A3728] hover:text-white transition-all duration-200"
                      >
                        <RefreshCw size={11} />
                        Перенести
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="font-serif text-2xl font-light text-[#4A3728]/30 mb-2">Нет записей</p>
                  <p className="text-sm font-light text-[#4A3728]/30 mb-6">Самое время записаться!</p>
                  <button
                    onClick={onRebook}
                    className="px-6 py-3 bg-[#4A3728] text-white text-xs font-light tracking-[0.2em] uppercase"
                  >
                    Записаться
                  </button>
                </div>
              )}
            </div>
          )}

          {/* History */}
          {activeTab === 'history' && (
            <div className="p-6 space-y-3">
              {pastVisits.map((visit) => (
                <div key={visit.id} className="border border-[#E8E0D0] p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-light text-[#2C2C2C]">{visit.service}</p>
                      <p className="text-xs font-light text-[#4A3728]/50 mt-0.5">{visit.master}</p>
                    </div>
                    <span className="text-sm font-light text-[#8B6F47]">{visit.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-light text-[#4A3728]/40">{visit.date}</p>
                    <span className="text-[10px] font-light text-[#8B6F47] bg-[#8B6F47]/10 px-2 py-0.5">
                      +{visit.points.toLocaleString()} б.
                    </span>
                  </div>
                </div>
              ))}
              <button
                onClick={onRebook}
                className="w-full mt-2 py-3 border border-[#4A3728] text-[#4A3728] text-xs font-light tracking-[0.2em] uppercase hover:bg-[#4A3728] hover:text-white transition-all"
              >
                Повторить визит
              </button>
            </div>
          )}

          {/* Loyalty */}
          {activeTab === 'loyalty' && (
            <div className="p-6">
              <LoyaltyCard points={totalPoints} totalVisits={pastVisits.length} nextReward={500} />
              <div className="mt-5 space-y-3">
                <p className="text-xs font-light tracking-widest text-[#4A3728]/50 uppercase">Как работает программа</p>
                {[
                  { icon: '1₽', text: '1 балл за каждый потраченный рубль' },
                  { icon: '500', text: '5% скидка при накоплении 500 баллов' },
                  { icon: '1K', text: '10% скидка при накоплении 1000 баллов' },
                  { icon: '✦', text: 'Статус Gold открывает приоритетную запись' },
                ].map((item) => (
                  <div key={item.icon} className="flex items-center gap-4 p-3 border border-[#E8E0D0]">
                    <div className="w-10 h-10 bg-[#F5F0E8] flex items-center justify-center text-xs font-light text-[#8B6F47] flex-shrink-0">
                      {item.icon}
                    </div>
                    <p className="text-sm font-light text-[#4A3728]/70">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#E8E0D0] flex-shrink-0">
          <button
            onClick={onLogout}
            className="flex items-center gap-2 text-xs font-light text-[#4A3728]/40 hover:text-[#4A3728]/70 transition-colors"
          >
            <LogOut size={13} />
            Выйти из аккаунта
          </button>
        </div>
      </div>
    </div>
  );
}
