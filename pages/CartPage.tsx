import React from 'react';
import { useShop } from '../contexts/ShopContext';
import { CartItem } from '../components/CartItem';
import { Link, useNavigate } from 'react-router-dom';

export const CartPage: React.FC = () => {
  const { cart, cartTotal, clearCart } = useShop();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6 text-gray-400">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 5.408c.422 1.809.634 2.714.072 3.414-.562.7-1.49.7-3.346.7H8.204c-1.855 0-2.783 0-3.345-.7-.562-.7-.35-1.605.072-3.414l1.263-5.408c.25-1.071.376-1.606.772-1.923.395-.317.94-.317 2.03-.317h5.998c1.09 0 1.635 0 2.03.317.396.317.521.852.772 1.923Z" />
           </svg>
        </div>
        <h2 className="text-2xl font-display font-bold mb-3">Sua sacola está vazia</h2>
        <p className="text-lumina-muted mb-8 max-w-sm">
          Parece que você ainda não encontrou o que procura. Explore nossa curadoria.
        </p>
        <Link to="/" className="bg-lumina-base text-white px-8 py-3 rounded-full font-medium hover:bg-lumina-accent transition-colors">
          Continuar comprando
        </Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
      {/* Cart Items List */}
      <div className="lg:col-span-2">
        <h1 className="text-3xl font-display font-bold mb-8">Sacola ({cart.length})</h1>
        <div className="space-y-6">
          {cart.map(item => (
            <div key={item._id} className="bg-white rounded-2xl p-6 shadow-soft flex gap-6 items-center">
                 <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded-xl" />
                 <div className="flex-1">
                     <h3 className="font-semibold text-lg">{item.name}</h3>
                     <p className="text-sm text-lumina-muted mb-2">{item.category}</p>
                     <p className="font-bold text-lumina-base">R$ {item.price.toFixed(2)}</p>
                 </div>
                 <div className="flex flex-col items-end gap-2">
                    <CartItem item={item} /> 
                    {/* Note: Reusing CartItem logic but styled differently in context if needed, relying on CartItem internal structure for simplicity or replacing logic here */}
                 </div>
            </div>
          ))}
        </div>
        <button 
          onClick={clearCart} 
          className="mt-6 text-sm text-red-500 hover:text-red-700 font-medium underline underline-offset-4"
        >
          Limpar sacola
        </button>
      </div>

      {/* Summary */}
      <div className="lg:col-span-1">
        <div className="bg-white p-8 rounded-3xl shadow-soft sticky top-24">
          <h2 className="text-xl font-bold mb-6 font-display">Resumo</h2>
          
          <div className="space-y-4 mb-6 text-sm text-lumina-muted">
             <div className="flex justify-between">
               <span>Subtotal</span>
               <span className="text-lumina-base">R$ {cartTotal.toFixed(2)}</span>
             </div>
             <div className="flex justify-between">
               <span>Frete</span>
               <span className="text-lumina-base">Calculado no checkout</span>
             </div>
          </div>
          
          <div className="border-t border-gray-100 pt-6 mb-8 flex justify-between items-center text-xl font-bold text-lumina-base">
            <span>Total</span>
            <span>R$ {cartTotal.toFixed(2)}</span>
          </div>

          <button 
            onClick={() => navigate('/checkout')}
            className="w-full bg-lumina-base text-white py-4 rounded-xl font-bold hover:bg-lumina-accent transition-colors shadow-lg shadow-gray-200"
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </div>
  );
};