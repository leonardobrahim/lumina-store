import React from 'react';
import { Link } from 'react-router-dom';

export const OrderConfirmationPage: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
      <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8 animate-bounce">
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
          </svg>
      </div>
      <h1 className="text-4xl font-display font-bold mb-4">Obrigado!</h1>
      <p className="text-lg text-lumina-muted mb-8 max-w-md">
        Seu pedido foi confirmado. Enviamos os detalhes de rastreamento para o seu email.
      </p>
      <Link 
        to="/" 
        className="text-lumina-base font-bold border-b-2 border-lumina-base hover:text-lumina-accent hover:border-lumina-accent transition-all pb-1"
      >
        Voltar para a Loja
      </Link>
    </div>
  );
};