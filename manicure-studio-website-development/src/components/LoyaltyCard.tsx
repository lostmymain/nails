interface LoyaltyCardProps {
  points: number;
  totalVisits: number;
  nextReward: number;
}

export default function LoyaltyCard({ points, totalVisits, nextReward }: LoyaltyCardProps) {
  const progress = (points % nextReward) / nextReward;

  return (
    <div className="relative bg-gradient-to-br from-[#4A3728] via-[#6B4F38] to-[#8B6F47] p-6 md:p-8 overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full border border-white/10" />
      <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border border-white/10" />
      <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full border border-white/10 -translate-x-6 translate-y-6" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-white/50 text-xs font-light tracking-[0.3em] uppercase mb-1">Программа лояльности</p>
            <p className="text-white font-serif text-2xl font-light">Soft & Sharp</p>
          </div>
          <div className="text-right">
            <p className="text-white/50 text-xs font-light tracking-wide">Визиты</p>
            <p className="text-white font-serif text-xl font-light">{totalVisits}</p>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-end mb-2">
            <p className="text-white/50 text-xs font-light tracking-widest uppercase">Баллы</p>
            <p className="text-white/50 text-xs font-light">до скидки: {nextReward - (points % nextReward)} б.</p>
          </div>
          <p className="text-white font-serif text-4xl font-light mb-3">{points.toLocaleString()} <span className="text-xl text-white/60">б.</span></p>

          {/* Progress bar */}
          <div className="h-1 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#C8B89A] rounded-full transition-all duration-1000"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <p className="text-white/40 text-[10px] font-light tracking-widest uppercase">
            1 руб = 1 балл · скидка {nextReward === 500 ? '5' : '10'}% за {nextReward} б.
          </p>
          <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center">
            <span className="text-white/60 text-xs">✦</span>
          </div>
        </div>
      </div>
    </div>
  );
}
