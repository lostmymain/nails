import { useState } from 'react';
import { Heart, MessageCircle, ExternalLink } from 'lucide-react';

const posts = [
  {
    id: 1,
    img: '/images/insta-1.jpg',
    likes: 342,
    comments: 18,
    caption: 'Nude perfection 🤍 Бежевый с золотым акцентом — вечная классика #softsharp #nailart #nudenails',
    tag: '#nudenails',
  },
  {
    id: 2,
    img: '/images/insta-2.jpg',
    likes: 519,
    comments: 31,
    caption: 'Deep coffee tones для тех, кто любит глубину и характер ☕ #coffeeaesthetic #naildesign',
    tag: '#coffeeaesthetic',
  },
  {
    id: 3,
    img: '/images/insta-3.jpg',
    likes: 427,
    comments: 24,
    caption: 'French с золотой линией — наш фирменный twist 💫 #frenchmanicure #goldline',
    tag: '#frenchmanicure',
  },
  {
    id: 4,
    img: '/images/insta-4.jpg',
    likes: 388,
    comments: 22,
    caption: 'Graphite power — для тех, кто не боится смелых решений 🖤 #graphitenails #darkbeauty',
    tag: '#graphitenails',
  },
  {
    id: 5,
    img: '/images/insta-5.jpg',
    likes: 461,
    comments: 28,
    caption: 'Молочный — цвет покоя и чистоты 🤍 Идеально для любого образа #milkywhite #cleangirl',
    tag: '#milkywhite',
  },
  {
    id: 6,
    img: '/images/insta-6.jpg',
    likes: 583,
    comments: 42,
    caption: 'Burgundy season 🍷 Этот оттенок носим весь год без извинений #burgundy #fallnails',
    tag: '#burgundy',
  },
];

export default function InstagramFeed() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#8B6F47]" />
              <span className="text-xs font-light tracking-[0.3em] text-[#8B6F47] uppercase">Instagram</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-[#2C2C2C]">
              Наши <em className="italic text-[#8B6F47]">работы</em>
            </h2>
          </div>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-light tracking-widest text-[#4A3728]/60 uppercase hover:text-[#8B6F47] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
            </svg>
            @softandsharp
            <ExternalLink size={12} />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="relative aspect-square overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHovered(post.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={post.img}
                alt={post.tag}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-[#2C2C2C]/60 flex flex-col items-center justify-center transition-opacity duration-300 ${
                  hovered === post.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-1.5 text-white">
                    <Heart size={18} className="fill-white" />
                    <span className="text-sm font-light">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white">
                    <MessageCircle size={18} className="fill-white" />
                    <span className="text-sm font-light">{post.comments}</span>
                  </div>
                </div>
                <p className="text-white/80 text-xs font-light tracking-wide text-center px-4 leading-relaxed line-clamp-2">
                  {post.caption}
                </p>
              </div>

              {/* Tag Badge */}
              <div
                className={`absolute bottom-3 left-3 transition-all duration-300 ${
                  hovered === post.id ? 'opacity-0 translate-y-2' : 'opacity-100'
                }`}
              >
                <span className="bg-white/20 backdrop-blur-sm text-white text-[10px] font-light px-2 py-0.5 tracking-wide">
                  {post.tag}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#C8B89A] text-[#4A3728] text-xs font-light tracking-[0.2em] uppercase hover:border-[#4A3728] transition-colors duration-300"
          >
            Смотреть все работы в Instagram
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </section>
  );
}
