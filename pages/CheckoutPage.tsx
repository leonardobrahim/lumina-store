import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useShop } from '../contexts/ShopContext';
import { api } from '../services/api';

export const CheckoutPage: React.FC = () => {
  const { cartTotal, clearCart } = useShop();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await api.orders.create({ total: cartTotal, items: [] });
    clearCart();
    setLoading(false);
    navigate('/confirmation');
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-3xl font-display font-bold mb-8 text-center">Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Form */}
          <div className="md:col-span-7">
            <form id="checkout-form" onSubmit={handleSubmit} className="space-y-10">
                
                <section>
                    <h2 className="text-lg font-bold mb-6 pb-2 border-b border-gray-100">Endereço de Entrega</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <input required type="text" placeholder="Nome" className="col-span-2 bg-white border border-gray-200 rounded-lg p-3 outline-none focus:border-lumina-accent transition-colors" />
                        <input required type="text" placeholder="Endereço" className="col-span-2 bg-white border border-gray-200 rounded-lg p-3 outline-none focus:border-lumina-accent transition-colors" />
                        <input required type="text" placeholder="Cidade" className="bg-white border border-gray-200 rounded-lg p-3 outline-none focus:border-lumina-accent transition-colors" />
                        <input required type="text" placeholder="CEP" className="bg-white border border-gray-200 rounded-lg p-3 outline-none focus:border-lumina-accent transition-colors" />
                    </div>
                </section>

                <section>
                    <h2 className="text-lg font-bold mb-6 pb-2 border-b border-gray-100">Pagamento</h2>
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-4 h-4 rounded-full bg-lumina-accent ring-4 ring-indigo-100"></div>
                            <span className="font-medium">Cartão de Crédito</span>
                        </div>
                        <div className="space-y-3">
                            <input type="text" placeholder="0000 0000 0000 0000" disabled className="w-full bg-white border border-gray-200 rounded-lg p-3 cursor-not-allowed" />
                            <div className="grid grid-cols-2 gap-3">
                                <input type="text" placeholder="MM/YY" disabled className="bg-white border border-gray-200 rounded-lg p-3 cursor-not-allowed" />
                                <input type="text" placeholder="CVC" disabled className="bg-white border border-gray-200 rounded-lg p-3 cursor-not-allowed" />
                            </div>
                        </div>
                    </div>
                </section>
            </form>
          </div>

          {/* Sidebar Summary */}
          <div className="md:col-span-5">
              <div className="bg-white p-8 rounded-3xl shadow-soft sticky top-24">
                  <h3 className="font-bold text-lg mb-6">Resumo do Pedido</h3>
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-gray-100">
                      <span className="text-lumina-muted">Total</span>
                      <span className="text-2xl font-bold">R$ {cartTotal.toFixed(2)}</span>
                  </div>
                  
                  <button 
                    type="submit" 
                    form="checkout-form"
                    disabled={loading}
                    className="w-full bg-lumina-base text-white py-4 rounded-xl font-bold hover:bg-lumina-accent transition-colors"
                  >
                    {loading ? 'Processando...' : 'Pagar Agora'}
                  </button>
                  <p className="text-xs text-center text-lumina-muted mt-4">Transação segura e criptografada.</p>
              </div>
          </div>
      </div>
    </div>
  );
};