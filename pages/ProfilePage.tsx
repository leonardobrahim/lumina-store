import React, { useEffect, useState } from 'react';
import { useShop } from '../contexts/ShopContext';
import { api } from '../services/api';

export const ProfilePage: React.FC = () => {
  const { user, loginUser, logoutUser } = useShop();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);

  // Simulate fetching orders if user exists
  useEffect(() => {
    if (user) {
        api.orders.listByUser().then(setOrders);
    }
  }, [user]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
        const userData = await api.auth.login(email, password);
        loginUser(userData);
    } catch (e) {
        alert('Erro ao logar');
    } finally {
        setLoading(false);
    }
  };

  if (!user) {
    return (
        <div className="max-w-md mx-auto py-16 animate-in slide-in-from-bottom-8">
            <div className="bg-white p-8 rounded-3xl shadow-soft">
                <h1 className="text-3xl font-display font-bold mb-2">Bem-vindo de volta.</h1>
                <p className="text-lumina-muted mb-8">Acesse sua conta para gerenciar pedidos.</p>
                
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-bold text-lumina-base mb-1">Email</label>
                        <input 
                            type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 outline-none focus:border-lumina-accent transition-colors"
                            placeholder="exemplo@email.com"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-lumina-base mb-1">Senha</label>
                        <input 
                            type="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 outline-none focus:border-lumina-accent transition-colors"
                            placeholder="••••••••"
                        />
                    </div>
                    <button 
                        disabled={loading}
                        className="w-full bg-lumina-base text-white py-4 rounded-xl font-bold hover:bg-lumina-accent transition-colors mt-4"
                    >
                        {loading ? 'Entrando...' : 'Entrar'}
                    </button>
                </form>
                <div className="mt-6 text-center text-sm text-lumina-muted">
                    <p>Dica: Use qualquer email/senha para testar.</p>
                </div>
            </div>
        </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
            <div className="bg-white p-6 rounded-3xl shadow-soft sticky top-24">
                <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                        <img src={`https://ui-avatars.com/api/?name=${user.name}`} alt="Avatar" />
                    </div>
                    <div>
                        <p className="font-bold text-lumina-base">{user.name}</p>
                        <p className="text-xs text-lumina-muted">{user.email}</p>
                    </div>
                </div>
                <nav className="space-y-2">
                    <button className="w-full text-left px-4 py-2 rounded-lg bg-lumina-light font-medium text-lumina-base">Meus Pedidos</button>
                    <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-lumina-muted transition-colors">Endereços</button>
                    <button className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-50 text-lumina-muted transition-colors">Configurações</button>
                    <button onClick={logoutUser} className="w-full text-left px-4 py-2 rounded-lg text-red-500 hover:bg-red-50 transition-colors mt-4">Sair</button>
                </nav>
            </div>
        </div>

        {/* Content */}
        <div className="md:col-span-3">
            <h2 className="text-2xl font-display font-bold mb-6">Histórico de Pedidos</h2>
            
            <div className="space-y-4">
                {orders.length > 0 ? orders.map(order => (
                    <div key={order._id} className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4 hover:shadow-soft transition-shadow">
                        <div>
                            <span className="text-xs font-bold text-lumina-accent uppercase tracking-wider mb-1 block">Pedido #{order._id}</span>
                            <p className="text-sm text-lumina-muted">Realizado em {new Date(order.date).toLocaleDateString()}</p>
                        </div>
                        <div className="flex gap-8 items-center">
                             <div>
                                <span className="text-xs text-lumina-muted block">Total</span>
                                <span className="font-bold">R$ {order.total.toFixed(2)}</span>
                             </div>
                             <div>
                                <span className="text-xs text-lumina-muted block">Status</span>
                                <span className={`font-bold ${order.status === 'Entregue' ? 'text-green-600' : 'text-orange-500'}`}>{order.status}</span>
                             </div>
                             <button className="text-sm border border-gray-200 px-4 py-2 rounded-lg hover:bg-lumina-base hover:text-white transition-colors">
                                 Detalhes
                             </button>
                        </div>
                    </div>
                )) : (
                    <p className="text-lumina-muted">Nenhum pedido encontrado.</p>
                )}
            </div>
        </div>
    </div>
  );
};