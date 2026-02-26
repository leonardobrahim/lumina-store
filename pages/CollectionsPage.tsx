import React from 'react';
import { Link } from 'react-router-dom';

export const CollectionsPage: React.FC = () => {
  const collections = [
    {
        id: 1,
        title: "Summer",
        subtitle: "Leveza e tons terrosos para a estação.",
        image: "https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=1000&auto=format&fit=crop",
        link: "/category/Apparel"
    },
    {
        id: 2,
        title: "Minimalist Workspace",
        subtitle: "Organização e design para o seu escritório.",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop",
        link: "/category/Tech"
    },
    {
        id: 3,
        title: "Urban Explorer",
        subtitle: "Funcionalidade para quem vive em movimento.",
        image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1000&auto=format&fit=crop",
        link: "/category/Gear"
    }
  ];

  return (
    <div className="space-y-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl font-display font-bold mb-6 italic">Coleções</h1>
          <p className="text-lg text-lumina-muted">
              Nossas cápsulas sazonais são desenhadas com um propósito: simplificar sua vida através do design.
          </p>
      </div>

      <div className="grid grid-cols-1 gap-12">
          {collections.map((col, index) => (
              <Link to={col.link} key={col.id} className="group relative h-[400px] md:h-[600px] rounded-3xl overflow-hidden block">
                  <div className="absolute inset-0">
                      <img src={col.image} alt={col.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors"></div>
                  </div>
                  <div className={`absolute bottom-0 left-0 p-10 md:p-16 text-white ${index % 2 === 1 ? 'md:right-0 md:left-auto md:text-right' : ''}`}>
                      <span className="uppercase tracking-widest text-xs font-bold mb-2 block text-lumina-accent">Editorial</span>
                      <h2 className="text-4xl md:text-6xl font-display font-bold mb-4">{col.title}</h2>
                      <p className="text-lg opacity-90">{col.subtitle}</p>
                      <span className="inline-block mt-6 border-b border-white pb-1 font-semibold group-hover:text-lumina-accent group-hover:border-lumina-accent transition-colors">
                          Explorar Coleção
                      </span>
                  </div>
              </Link>
          ))}
      </div>
    </div>
  );
};