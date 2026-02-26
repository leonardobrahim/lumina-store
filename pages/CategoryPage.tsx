import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { api } from '../services/api';
import { Product } from '../types';

export const CategoryPage: React.FC = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        let searchCategory = categoryName;
        
        // Handle 'all' to return everything (undefined category in api service)
        if (categoryName === 'all') {
            searchCategory = undefined;
        } else if (categoryName === 'Tech') {
            searchCategory = 'Accessories';
        }
        
        const data = await api.products.list(searchCategory);
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, [categoryName]);

  const getTitle = () => {
      if (categoryName === 'all') return 'Todos os Produtos';
      if (categoryName === 'Tech') return 'Acessórios Tech';
      return categoryName;
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <div className="text-center py-12 bg-white rounded-3xl">
          <p className="text-lumina-muted uppercase tracking-widest text-sm mb-2">
            {categoryName === 'all' ? 'Shop' : 'Categoria'}
          </p>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-lumina-base">
            {getTitle()}
          </h1>
      </div>

      {loading ? (
        <div className="text-center py-20 text-lumina-muted">Carregando curadoria...</div>
      ) : products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {products.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
            <h2 className="text-2xl font-bold text-lumina-base mb-4">Nenhum produto encontrado.</h2>
            <Link to="/" className="text-lumina-accent underline underline-offset-4">Voltar para a loja</Link>
        </div>
      )}
    </div>
  );
};