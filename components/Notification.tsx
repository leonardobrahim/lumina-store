import React from 'react';
import { useShop } from '../contexts/ShopContext';

export const Notification: React.FC = () => {
  const { notification, closeNotification } = useShop();

  if (!notification) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="bg-lumina-base text-white px-6 py-4 rounded-xl shadow-hover flex items-center gap-4 min-w-[300px] border border-white/10">
        <div className="bg-green-500 rounded-full p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
        </div>
        <p className="text-sm font-medium flex-grow">{notification}</p>
        <button 
            onClick={closeNotification}
            className="text-white/50 hover:text-white transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
        </button>
      </div>
    </div>
  );
};