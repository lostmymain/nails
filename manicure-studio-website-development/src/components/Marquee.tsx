export default function Marquee() {
  const items = [
    'Маникюр', '✦', 'Педикюр', '✦', 'Nail Art', '✦', 'Гель-лак', '✦',
    'Укрепление', '✦', 'Снятие', '✦', 'Дизайн', '✦', 'Уход',
  ];
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-[#E8E0D0] py-4 bg-[#F5F0E8]/50">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`mx-6 font-light tracking-[0.2em] uppercase text-sm ${
              item === '✦' ? 'text-[#C8B89A]' : 'text-[#4A3728]/60'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
