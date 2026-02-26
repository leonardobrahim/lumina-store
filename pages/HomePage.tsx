import React, { useEffect, useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { api } from '../services/api';
import { Product } from '../types';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await api.products.list();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  return (
    <div className="space-y-20">
      {/* Editorial Hero */}
      <section className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden flex items-end p-8 md:p-16">
        <div className="absolute inset-0">
            <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
                alt="Hero Fashion" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-white max-w-2xl animate-fade-in-up">
            <span className="text-lumina-accent font-bold tracking-widest uppercase text-sm mb-4 block">Nova Coleção</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold italic mb-6 leading-none">
                Essencial & <br/> Atemporal.
            </h1>
            <p className="text-lg text-white/90 mb-8 max-w-md font-light">
                Descubra peças desenhadas para durar. Minimalismo com propósito para o seu dia a dia.
            </p>
            <Link to="/collections" className="bg-white text-lumina-base px-8 py-4 rounded-full font-semibold hover:bg-lumina-accent hover:text-white transition-all inline-block">
                Explorar Coleção
            </Link>
        </div>
      </section>

      {/* Product Grid */}
      <section>
        <div className="flex justify-between items-end mb-10">
            <div>
                <h2 className="text-3xl font-display font-bold text-lumina-base">Trending Now</h2>
                <p className="text-lumina-muted mt-2">As peças mais desejadas da semana.</p>
            </div>
            <Link to="/category/all" className="text-sm font-semibold border-b border-lumina-base pb-1 hover:text-lumina-accent hover:border-lumina-accent transition-all">
                Ver todos os produtos
            </Link>
        </div>
        
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 animate-pulse">
             {[1,2,3,4].map(i => <div key={i} className="bg-gray-200 h-96 rounded-2xl"></div>)}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {products.slice(0, 4).map(product => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </section>

      {/* Banner Secundário */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Link to="/category/Tech" className="bg-gray-100 rounded-3xl p-12 flex flex-col justify-center items-start h-96 relative overflow-hidden group block">
             <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-4 text-lumina-base">Acessórios Tech</h3>
                 <p className="text-lumina-muted mb-6">Eleve seu setup com design.</p>
                 <span className="text-sm font-bold underline underline-offset-4 text-lumina-base">Comprar Agora</span>
             </div>
             <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000" className="absolute right-0 bottom-0 w-64 opacity-80 group-hover:scale-110 transition-transform duration-500 mix-blend-multiply" alt="Accessories" />
          </Link>
          <Link to="/category/Apparel" className="bg-lumina-base text-white rounded-3xl p-12 flex flex-col justify-center items-start h-96 relative overflow-hidden group block">
             <div className="relative z-10">
                 <h3 className="text-2xl font-bold mb-4">Urban Wear</h3>
                 <p className="text-gray-400 mb-6">Conforto para a cidade.</p>
                 <span className="text-sm font-bold underline underline-offset-4">Comprar Agora</span>
             </div>
             <img src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1000" className="absolute right-0 top-0 w-64 opacity-40 group-hover:scale-110 transition-transform duration-500" alt="Urban" />
          </Link>
      </section>
    </div>
  );
};