import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { api } from '../services/api';
import { Product } from '../types';
import { useShop } from '../contexts/ShopContext';

export const ProductDetailPage: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useShop();
  const { id } = useParams();

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) return;
      setLoading(true);
      const data = await api.products.getById(id);
      if (data) setProduct(data);
      setLoading(false);
    };
    loadProduct();
  }, [id]);

  if (loading) return <div className="h-screen flex items-center justify-center text-lumina-accent">Carregando...</div>;
  if (!product) return <div className="p-10 text-center">Produto não encontrado.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 animate-in fade-in duration-500">
      
      {/* Left: Sticky Image */}
      <div className="relative md:sticky md:top-24 h-fit">
         <div className="aspect-square bg-white rounded-3xl overflow-hidden shadow-soft flex items-center justify-center p-8">
             <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500" 
             />
         </div>
         <div className="flex gap-4 mt-6 overflow-x-auto pb-2">
             {/* Fake thumbnails */}
             {[1,2,3].map(i => (
                 <div key={i} className="w-24 h-24 bg-white rounded-xl border border-transparent hover:border-lumina-accent cursor-pointer flex-shrink-0 flex items-center justify-center">
                    <img src={product.imageUrl} className="w-16 opacity-50" />
                 </div>
             ))}
         </div>
      </div>

      {/* Right: Info Scroll */}
      <div className="flex flex-col py-4">
        <nav className="text-sm text-lumina-muted mb-6">
            <Link to="/" className="hover:text-lumina-base">Home</Link> / <span>{product.category}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-display font-bold text-lumina-base mb-4 leading-tight">
            {product.name}
        </h1>
        
        <div className="text-2xl font-light text-lumina-base mb-8">
            R$ {product.price.toFixed(2)}
        </div>

        <p className="text-lumina-muted leading-relaxed text-lg mb-10 border-l-2 border-lumina-accent pl-6">
            {product.description}
        </p>

        {/* Variations Placeholder */}
        <div className="mb-8">
            <span className="block text-sm font-bold uppercase tracking-wider mb-3">Tamanho</span>
            <div className="flex gap-3">
                {['S', 'M', 'L', 'XL'].map(size => (
                    <button key={size} className="w-12 h-12 rounded-lg border border-gray-200 hover:border-lumina-base hover:bg-lumina-base hover:text-white transition-all flex items-center justify-center text-sm font-medium">
                        {size}
                    </button>
                ))}
            </div>
        </div>

        <div className="flex flex-col gap-4 mt-auto">
            <button 
                onClick={() => addToCart(product)}
                className="w-full bg-lumina-accent text-white py-5 rounded-xl font-bold text-lg hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-200 active:scale-[0.99]"
            >
                Adicionar à Sacola
            </button>
            <p className="text-center text-xs text-lumina-muted mt-2">
                Frete grátis para todo o Brasil. Devolução em até 30 dias.
            </p>
        </div>

        {/* Details Accordion (Visual) */}
        <div className="mt-12 border-t border-gray-100 pt-8 space-y-6">
            <div className="flex justify-between items-center cursor-pointer group">
                <span className="font-semibold group-hover:text-lumina-accent">Detalhes Técnicos</span>
                <span>+</span>
            </div>
            <div className="flex justify-between items-center cursor-pointer group">
                <span className="font-semibold group-hover:text-lumina-accent">Envio & Entrega</span>
                <span>+</span>
            </div>
        </div>
      </div>
    </div>
  );
};