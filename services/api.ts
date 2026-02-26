import { Product, User } from '../types';

// MOCK DATA FOR FRONTEND PREVIEW
const MOCK_PRODUCTS: Product[] = [
  {
    _id: '1',
    name: 'Essential Tee / Charcoal',
    description: 'A camiseta definitiva. Algodão Pima peruano com corte oversized moderno. Respirável, durável e incrivelmente suave ao toque.',
    price: 129.00,
    stock: 20,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
    category: 'Apparel'
  },
  {
    _id: '2',
    name: 'Lumina Runner V2',
    description: 'Design futurista encontra performance. Entressola de espuma reativa para conforto o dia todo.',
    price: 499.00,
    stock: 10,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800',
    category: 'Footwear'
  },
  {
    _id: '3',
    name: 'Nordic Minimalist Watch',
    description: 'Menos é mais. Design escandinavo com pulseira de couro italiano genuíno.',
    price: 350.00,
    stock: 50,
    imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&q=80&w=800',
    category: 'Accessories'
  },
  {
    _id: '4',
    name: 'Daypack Waterproof',
    description: 'Sua companheira urbana. Compartimento acolchoado para laptop de 15" e tecido totalmente à prova d\'água.',
    price: 289.00,
    stock: 15,
    imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800',
    category: 'Gear'
  },
  {
    _id: '5',
    name: 'Wireless Noise Cancelling',
    description: 'Silêncio absoluto para focar no que importa. Design over-ear com acabamento premium.',
    price: 1299.00,
    stock: 8,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800',
    category: 'Accessories'
  },
  {
    _id: '6',
    name: 'Oversized Hoodie',
    description: 'Conforto máximo para dias frios. Tecido heavyweight com caimento estruturado.',
    price: 289.00,
    stock: 25,
    imageUrl: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=800',
    category: 'Apparel'
  }
];

// Placeholder for API Service
export const api = {
  products: {
    list: async (category?: string): Promise<Product[]> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          if (category) {
            resolve(MOCK_PRODUCTS.filter(p => p.category.toLowerCase() === category.toLowerCase()));
          } else {
            resolve(MOCK_PRODUCTS);
          }
        }, 600);
      });
    },
    getById: async (id: string): Promise<Product | undefined> => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(MOCK_PRODUCTS.find(p => p._id === id)), 500);
      });
    }
  },
  auth: {
    login: async (email: string, password: string): Promise<User> => {
      return new Promise((resolve) => {
        setTimeout(() => resolve({
          _id: 'user_123',
          name: 'Lumina Member',
          email: email,
          isAdmin: false,
          token: 'fake-jwt-token'
        }), 1000);
      });
    }
  },
  orders: {
    create: async (orderData: any): Promise<{success: boolean, orderId: string}> => {
       return new Promise((resolve) => {
        setTimeout(() => resolve({ success: true, orderId: `lumina-${Math.floor(Math.random() * 10000)}` }), 1500);
      });
    },
    listByUser: async (): Promise<any[]> => {
       // Mock orders history
       return new Promise((resolve) => {
         setTimeout(() => resolve([
           { _id: 'ord_987', date: '2023-10-15', total: 450.00, status: 'Entregue' },
           { _id: 'ord_654', date: '2023-12-01', total: 129.00, status: 'Em trânsito' }
         ]), 800);
       });
    }
  }
};