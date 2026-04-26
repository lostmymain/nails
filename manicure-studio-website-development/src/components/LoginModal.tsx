import { useState } from 'react';
import { X, Eye, EyeOff } from 'lucide-react';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (name: string) => void;
}

export default function LoginModal({ isOpen, onClose, onLogin }: LoginModalProps) {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPass, setShowPass] = useState(false);

  const handleSubmit = () => {
    const displayName = mode === 'register' ? name || 'Гость' : 'Елена Самойлова';
    onLogin(displayName);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end md:items-center justify-center">
      <div className="absolute inset-0 bg-[#1A1A1A]/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full md:max-w-sm bg-[#FAF8F5] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#E8E0D0]">
          <h3 className="font-serif text-xl font-light text-[#2C2C2C]">
            {mode === 'login' ? 'Войти' : 'Регистрация'}
          </h3>
          <button onClick={onClose} className="text-[#4A3728]/40 hover:text-[#4A3728]">
            <X size={20} />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex">
          {['login', 'register'].map((m) => (
            <button
              key={m}
              onClick={() => setMode(m as typeof mode)}
              className={`flex-1 py-3 text-xs font-light tracking-widest uppercase border-b-2 transition-all ${
                mode === m
                  ? 'border-[#8B6F47] text-[#4A3728]'
                  : 'border-transparent text-[#4A3728]/40 hover:text-[#4A3728]/60'
              }`}
            >
              {m === 'login' ? 'Вход' : 'Регистрация'}
            </button>
          ))}
        </div>

        {/* Form */}
        <div className="p-6 space-y-3">
          {mode === 'register' && (
            <div>
              <label className="text-[10px] font-light tracking-widest text-[#4A3728]/50 uppercase block mb-1.5">Имя</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ваше имя"
                className="w-full border border-[#E8E0D0] bg-white px-4 py-3 text-sm font-light text-[#2C2C2C] placeholder-[#4A3728]/30 focus:border-[#8B6F47] transition-colors"
              />
            </div>
          )}

          <div>
            <label className="text-[10px] font-light tracking-widest text-[#4A3728]/50 uppercase block mb-1.5">Телефон</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+7 (___) ___-__-__"
              className="w-full border border-[#E8E0D0] bg-white px-4 py-3 text-sm font-light text-[#2C2C2C] placeholder-[#4A3728]/30 focus:border-[#8B6F47] transition-colors"
            />
          </div>

          <div>
            <label className="text-[10px] font-light tracking-widest text-[#4A3728]/50 uppercase block mb-1.5">Пароль</label>
            <div className="relative">
              <input
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-[#E8E0D0] bg-white px-4 py-3 pr-10 text-sm font-light text-[#2C2C2C] placeholder-[#4A3728]/30 focus:border-[#8B6F47] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4A3728]/30 hover:text-[#4A3728]/60"
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {mode === 'login' && (
            <button className="text-xs font-light text-[#8B6F47] hover:text-[#4A3728] transition-colors">
              Забыли пароль?
            </button>
          )}

          <button
            onClick={handleSubmit}
            className="w-full py-3.5 bg-[#4A3728] text-white text-xs font-light tracking-[0.2em] uppercase hover:bg-[#8B6F47] transition-colors duration-300 mt-2"
          >
            {mode === 'login' ? 'Войти' : 'Создать аккаунт'}
          </button>

          {/* Demo hint */}
          <p className="text-center text-[10px] font-light text-[#4A3728]/30 mt-2">
            Демо: любые данные для входа
          </p>
        </div>
      </div>
    </div>
  );
}
