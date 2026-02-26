import React from 'react';
import { Product } from '../types';
import { Link } from 'react-router-dom';
import { useShop } from '../contexts/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useShop();

  return (
    <div className="group relative flex flex-col gap-3">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100">
        <Link to={`/product/${product._id}`}>
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
        </Link>
        
        {/* Quick Add Button - Appears on Hover */}
        <button 
            onClick={(e) => {
                e.preventDefault();
                addToCart(product);
            }}
            className="absolute bottom-4 right-4 bg-white/90 backdrop-blur text-lumina-base p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-soft hover:bg-lumina-accent hover:text-white"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
        </button>
        
        {product.stock < 5 && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
                Poucas unidades
            </span>
        )}
      </div>
      
      {/* Info */}
      <div className="flex justify-between items-start">
        <div>
            <Link to={`/product/${product._id}`}>
                <h3 className="text-lg font-medium text-lumina-base group-hover:text-lumina-accent transition-colors">{product.name}</h3>
            </Link>
            <p className="text-sm text-lumina-muted">{product.category}</p>
        </div>
        <span className="font-semibold text-lumina-base">
          R$ {product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};