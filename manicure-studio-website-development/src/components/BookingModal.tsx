import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Check } from 'lucide-react';

const masters = [
  { id: 1, name: 'Анастасия Кова', title: 'Senior Nail Artist', photo: '/images/master-1.jpg' },
  { id: 2, name: 'Мария Стефан', title: 'Nail Technician', photo: '/images/master-2.jpg' },
  { id: 3, name: 'Диана Яшина', title: 'Junior Artist', photo: '/images/master-3.jpg' },
];

const services = [
  'Маникюр + гель-лак',
  'Классический маникюр',
  'SPA-маникюр',
  'Nail Art дизайн',
  'Педикюр + гель-лак',
  'SPA-педикюр',
];

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00',
  '13:00', '14:00', '15:00', '16:00',
  '17:00', '18:00', '19:00',
];

const getDays = () => {
  const days = [];
  const now = new Date();
  for (let i = 0; i < 14; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    days.push(d);
  }
  return days;
};

const dayNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
const monthNames = ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedMasterId?: number;
}

export default function BookingModal({ isOpen, onClose, preselectedMasterId }: BookingModalProps) {
  const days = getDays();
  const [step, setStep] = useState(1);
  const [selectedMaster, setSelectedMaster] = useState<number>(preselectedMasterId || 0);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dayOffset, setDayOffset] = useState(0);

  const visibleDays = days.slice(dayOffset, dayOffset + 7);
  const busySlots = ['10:00', '13:00', '16:00'];

  const canNext = () => {
    if (step === 1) return selectedMaster !== 0;
    if (step === 2) return selectedService !== '';
    if (step === 3) return selectedTime !== '';
    if (step === 4) return name.length >= 2 && phone.length >= 10;
    return false;
  };

  const handleClose = () => {
    setStep(1);
    setSelectedMaster(preselectedMasterId || 0);
    setSelectedService('');
    setSelectedDay(0);
    setSelectedTime('');
    setName('');
    setPhone('');
    setDayOffset(0);
    onClose();
  };

  if (!isOpen) return null;

  const steps = ['Мастер', 'Услуга', 'Дата & время', 'Контакты'];

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="relative w-full md:max-w-xl bg-[#FAF8F5] md:rounded-none shadow-2xl max-h-[95vh] md:max-h-[90vh] flex flex-col overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E0D0] flex-shrink-0">
          <div>
            <h3 className="font-serif text-xl font-light text-[#2C2C2C]">
              {step < 5 ? 'Запись на визит' : 'Готово!'}
            </h3>
            <p className="text-xs font-light text-[#4A3728]/40 tracking-wide mt-0.5">
              {step < 5 ? `Шаг ${step} из 4` : 'Ваша запись подтверждена'}
            </p>
          </div>
          <button onClick={handleClose} className="w-8 h-8 flex items-center justify-center text-[#4A3728]/40 hover:text-[#4A3728]">
            <X size={20} />
          </button>
        </div>

        {/* Progress */}
        {step < 5 && (
          <div className="px-6 pt-4 pb-2 flex-shrink-0">
            <div className="flex gap-1">
              {steps.map((s, i) => (
                <div key={s} className="flex-1">
                  <div className={`h-0.5 transition-all duration-300 ${i + 1 <= step ? 'bg-[#8B6F47]' : 'bg-[#E8E0D0]'}`} />
                  <span className={`text-[9px] font-light tracking-wider uppercase mt-1.5 block ${i + 1 <= step ? 'text-[#8B6F47]' : 'text-[#4A3728]/30'}`}>
                    {s}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4">

          {/* Step 1: Master */}
          {step === 1 && (
            <div className="space-y-3">
              <p className="text-xs font-light tracking-widest text-[#4A3728]/50 uppercase mb-4">Выберите мастера</p>
              {masters.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setSelectedMaster(m.id)}
                  className={`w-full flex items-center gap-4 p-4 border transition-all duration-200 text-left ${
                    selectedMaster === m.id
                      ? 'border-[#8B6F47] bg-[#8B6F47]/5'
                      : 'border-[#E8E0D0] hover:border-[#C8B89A]'
                  }`}
                >
                  <img src={m.photo} alt={m.name} className="w-14 h-14 object-cover object-top rounded-full" />
                  <div className="flex-1">
                    <p className="font-serif text-lg font-light text-[#2C2C2C]">{m.name}</p>
                    <p className="text-xs font-light text-[#4A3728]/50 tracking-wide">{m.title}</p>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                    selectedMaster === m.id ? 'bg-[#8B6F47] border-[#8B6F47]' : 'border-[#C8B89A]'
                  }`}>
                    {selectedMaster === m.id && <Check size={11} className="text-white" />}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Service */}
          {step === 2 && (
            <div>
              <p className="text-xs font-light tracking-widest text-[#4A3728]/50 uppercase mb-4">Выберите услугу</p>
              <div className="space-y-2">
                {services.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedService(s)}
                    className={`w-full flex items-center justify-between p-4 border transition-all duration-200 text-left ${
                      selectedService === s
                        ? 'border-[#8B6F47] bg-[#8B6F47]/5'
                        : 'border-[#E8E0D0] hover:border-[#C8B89A]'
                    }`}
                  >
                    <span className="font-light text-sm text-[#2C2C2C]">{s}</span>
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all ${
                      selectedService === s ? 'bg-[#8B6F47] border-[#8B6F47]' : 'border-[#C8B89A]'
                    }`}>
                      {selectedService === s && <Check size={11} className="text-white" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Date & Time */}
          {step === 3 && (
            <div>
              {/* Day Selector */}
              <p className="text-xs font-light tracking-widest text-[#4A3728]/50 uppercase mb-3">Выберите дату</p>
              <div className="flex items-center gap-2 mb-4">
                <button
                  onClick={() => setDayOffset(Math.max(0, dayOffset - 7))}
                  disabled={dayOffset === 0}
                  className="w-8 h-8 flex items-center justify-center border border-[#E8E0D0] text-[#4A3728]/60 disabled:opacity-30"
                >
                  <ChevronLeft size={16} />
                </button>
                <div className="flex-1 grid grid-cols-7 gap-1">
                  {visibleDays.map((day, i) => {
                    const idx = dayOffset + i;
                    const isToday = idx === 0;
                    return (
                      <button
                        key={i}
                        onClick={() => { setSelectedDay(idx); setSelectedTime(''); }}
                        className={`flex flex-col items-center py-2 px-1 border transition-all duration-200 ${
                          selectedDay === idx
                            ? 'border-[#8B6F47] bg-[#8B6F47] text-white'
                            : 'border-[#E8E0D0] text-[#4A3728] hover:border-[#C8B89A]'
                        }`}
                      >
                        <span className={`text-[9px] font-light mb-0.5 ${selectedDay === idx ? 'text-white/70' : 'text-[#4A3728]/40'}`}>
                          {dayNames[day.getDay()]}
                        </span>
                        <span className="text-sm font-light">{day.getDate()}</span>
                        {isToday && (
                          <span className={`text-[8px] mt-0.5 ${selectedDay === idx ? 'text-white/60' : 'text-[#8B6F47]'}`}>
                            сег
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => setDayOffset(Math.min(7, dayOffset + 7))}
                  disabled={dayOffset >= 7}
                  className="w-8 h-8 flex items-center justify-center border border-[#E8E0D0] text-[#4A3728]/60 disabled:opacity-30"
                >
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Selected date display */}
              <div className="text-xs text-[#4A3728]/50 font-light mb-4 text-center">
                {days[selectedDay].getDate()} {monthNames[days[selectedDay].getMonth()]} {days[selectedDay].getFullYear()}
              </div>

              {/* Time Slots */}
              <p className="text-xs font-light tracking-widest text-[#4A3728]/50 uppercase mb-3">Выберите время</p>
              <div className="grid grid-cols-4 gap-2">
                {timeSlots.map((t) => {
                  const isBusy = busySlots.includes(t);
                  return (
                    <button
                      key={t}
                      disabled={isBusy}
                      onClick={() => setSelectedTime(t)}
                      className={`py-3 text-sm font-light border transition-all duration-200 ${
                        isBusy
                          ? 'border-[#E8E0D0] text-[#4A3728]/25 bg-[#F5F0E8]/50 cursor-not-allowed line-through'
                          : selectedTime === t
                          ? 'border-[#8B6F47] bg-[#8B6F47] text-white'
                          : 'border-[#E8E0D0] text-[#4A3728] hover:border-[#8B6F47]'
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 border border-[#8B6F47] bg-[#8B6F47]" />
                  <span className="text-[10px] font-light text-[#4A3728]/50">Выбрано</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 border border-[#E8E0D0] bg-[#F5F0E8]/50" />
                  <span className="text-[10px] font-light text-[#4A3728]/50">Занято</span>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Contact */}
          {step === 4 && (
            <div>
              <p className="text-xs font-light tracking-widest text-[#4A3728]/50 uppercase mb-4">Ваши контакты</p>

              {/* Summary */}
              <div className="bg-[#F5F0E8] border border-[#E8E0D0] p-4 mb-5 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-[#4A3728]/50 font-light">Мастер</span>
                  <span className="text-[#4A3728] font-light">{masters.find(m => m.id === selectedMaster)?.name}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#4A3728]/50 font-light">Услуга</span>
                  <span className="text-[#4A3728] font-light">{selectedService}</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-[#4A3728]/50 font-light">Дата и время</span>
                  <span className="text-[#4A3728] font-light">
                    {days[selectedDay].getDate()} {monthNames[days[selectedDay].getMonth()]}, {selectedTime}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-light tracking-widest text-[#4A3728]/50 uppercase block mb-1.5">Имя</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ваше имя"
                    className="w-full border border-[#E8E0D0] bg-white px-4 py-3 text-sm font-light text-[#2C2C2C] placeholder-[#4A3728]/30 focus:border-[#8B6F47] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-light tracking-widest text-[#4A3728]/50 uppercase block mb-1.5">Телефон</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    className="w-full border border-[#E8E0D0] bg-white px-4 py-3 text-sm font-light text-[#2C2C2C] placeholder-[#4A3728]/30 focus:border-[#8B6F47] transition-colors"
                  />
                </div>
                <p className="text-[10px] font-light text-[#4A3728]/40 leading-relaxed">
                  Нажимая «Подтвердить», вы соглашаетесь с политикой обработки персональных данных
                </p>
              </div>
            </div>
          )}

          {/* Step 5: Success */}
          {step === 5 && (
            <div className="py-8 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-[#8B6F47]/10 flex items-center justify-center mb-6">
                <Check size={28} className="text-[#8B6F47]" />
              </div>
              <h4 className="font-serif text-2xl font-light text-[#2C2C2C] mb-3">Запись подтверждена!</h4>
              <p className="text-sm font-light text-[#4A3728]/60 leading-relaxed max-w-xs mb-6">
                Ваша запись к <strong className="font-medium text-[#4A3728]">{masters.find(m => m.id === selectedMaster)?.name}</strong> на{' '}
                {days[selectedDay].getDate()} {monthNames[days[selectedDay].getMonth()]} в {selectedTime} принята.
                Мы отправим напоминание за 24 часа.
              </p>
              <div className="bg-[#F5F0E8] border border-[#E8E0D0] px-6 py-4 w-full max-w-xs">
                <p className="text-xs font-light text-[#4A3728]/50 mb-2">Услуга</p>
                <p className="font-light text-[#4A3728]">{selectedService}</p>
              </div>
              <button
                onClick={handleClose}
                className="mt-6 px-8 py-3 bg-[#4A3728] text-white text-xs font-light tracking-[0.2em] uppercase hover:bg-[#8B6F47] transition-colors"
              >
                Отлично!
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {step < 5 && (
          <div className="px-6 py-4 border-t border-[#E8E0D0] flex gap-3 flex-shrink-0">
            {step > 1 && (
              <button
                onClick={() => setStep(step - 1)}
                className="flex-1 py-3.5 border border-[#E8E0D0] text-[#4A3728] text-xs font-light tracking-[0.2em] uppercase hover:border-[#C8B89A] transition-colors"
              >
                Назад
              </button>
            )}
            <button
              onClick={() => {
                if (step === 4) setStep(5);
                else if (canNext()) setStep(step + 1);
              }}
              disabled={!canNext()}
              className={`flex-[2] py-3.5 text-xs font-light tracking-[0.2em] uppercase transition-all duration-300 ${
                canNext()
                  ? 'bg-[#4A3728] text-white hover:bg-[#8B6F47]'
                  : 'bg-[#E8E0D0] text-[#4A3728]/30 cursor-not-allowed'
              }`}
            >
              {step === 4 ? 'Подтвердить' : 'Продолжить'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
