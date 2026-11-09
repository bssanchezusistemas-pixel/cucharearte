import React from 'react';
import { Camera, Heart, MessageCircle, ArrowUpRight } from 'lucide-react';
import { STORE_INFO, REVIEWS } from '../data/menuData';

export const InstagramFeed: React.FC = () => {
  const posts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1559620192-032c4bc4674e?auto=format&fit=crop&w=600&q=80',
      caption: 'Waffle en Cono con fresas frescas y perlas blancas 🍓🧇 ¿Quién dijo yo para hoy?',
      likes: '342',
      comments: '28'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
      caption: 'Doble chocolate belga y chunks de brownie casero caliente 🔥 Cucharear es vivir.',
      likes: '512',
      comments: '44'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80',
      caption: 'Super Bowl con Lucky Charms de chocolate, kiwi y fruta del dragón 🌈✨',
      likes: '420',
      comments: '31'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&w=600&q=80',
      caption: 'Tarde de potes con amigos en nuestro local de la Cra 11 en Zarzal 💕',
      likes: '628',
      comments: '53'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-brand-cream/60 border-t border-brand-pink/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with IG Profile Info */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-softpink text-brand-pink text-xs font-bold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              <span>Síguenos en Redes</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-brand-chocolate tracking-tight">
              La comunidad de <span className="text-brand-pink">{STORE_INFO.instagram}</span>
            </h2>
            <p className="text-xs sm:text-sm text-brand-chocolate/70 max-w-lg">
              Más de 3,000 cuchareadores en Zarzal. Etiquétanos en tus fotos y reels para aparecer en nuestras historias.
            </p>
          </div>

          <a
            href={STORE_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start md:self-end px-6 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-brand-pink to-brand-coral text-white text-xs font-bold flex items-center gap-2 shadow-sm hover:opacity-95 transition-all"
          >
            <Camera className="w-4 h-4" />
            <span>Seguir en Instagram</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((post) => (
            <a
              key={post.id}
              href={STORE_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden shadow-sm bg-brand-softpink border border-brand-pink/15 block"
            >
              <img
                src={post.image}
                alt="Post de CuchareArte"
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-brand-chocolate/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <p className="text-[11px] font-medium line-clamp-2 leading-tight">
                  {post.caption}
                </p>
                <div className="flex items-center gap-3 mt-2 text-xs font-bold">
                  <span className="flex items-center gap-1">
                    <Heart className="w-3.5 h-3.5 fill-brand-pink text-brand-pink" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Customer Reviews Sub-section */}
        <div className="mt-16 pt-12 border-t border-brand-pink/15">
          <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-brand-pink uppercase tracking-wider">
              Opiniones de Clientes Reales
            </span>
            <h3 className="font-display text-2xl font-bold text-brand-chocolate">
              Lo que dicen en Zarzal
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white p-6 rounded-2xl border border-brand-pink/15 shadow-sm space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex text-amber-400 text-sm">
                    {'★'.repeat(rev.rating)}
                  </div>
                  <p className="text-xs text-brand-chocolate/80 italic leading-relaxed">
                    "{rev.comment}"
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <div>
                    <p className="font-bold text-brand-chocolate">{rev.name}</p>
                    <p className="text-slate-400">{rev.date}</p>
                  </div>
                  <span className="bg-brand-softpink text-brand-pink font-semibold px-2 py-0.5 rounded-full text-[10px]">
                    {rev.favorite}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
