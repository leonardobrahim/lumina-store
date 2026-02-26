import React from 'react';
import { CartItem as CartItemType } from '../types';
import { useShop } from '../contexts/ShopContext';

interface CartItemProps {
  item: CartItemType;
}

// NOTE: This component is simplified to be controls only, as the parent handles layout in the new design
export const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useShop();

  return (
    <div className="flex flex-col items-end gap-3">
       <div className="flex items-center bg-gray-50 rounded-lg p-1">
         <button 
            onClick={() => updateQuantity(item._id, item.quantity - 1)}
            className="w-8 h-8 flex items-center justify-center text-lumina-base hover:bg-white rounded-md transition-all"
         >
           -
         </button>
         <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
         <button 
            onClick={() => updateQuantity(item._id, item.quantity + 1)}
            className="w-8 h-8 flex items-center justify-center text-lumina-base hover:bg-white rounded-md transition-all"
         >
           +
         </button>
       </div>
       
       <button 
         onClick={() => removeFromCart(item._id)}
         className="text-xs text-gray-400 hover:text-red-500 transition-colors"
       >
         Remover
       </button>
    </div>
  );
};