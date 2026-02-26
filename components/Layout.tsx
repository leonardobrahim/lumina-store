import React, { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Notification } from './Notification';

export const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-lumina-light text-lumina-base selection:bg-lumina-accent selection:text-white">
      <Navbar />
      <Notification />
      <main className="flex-grow w-full max-w-screen-2xl mx-auto px-6 py-8">
        {children}
      </main>
      
      <footer className="bg-white border-t border-gray-100 pt-16 pb-8 mt-20">
        <div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold italic text-lumina-base">Lumina.</h3>
            <p className="text-lumina-muted text-sm leading-relaxed">
              Curadoria de estilo para a vida moderna. 
              Design, funcionalidade e estética em cada detalhe.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 tracking-wide text-sm uppercase text-lumina-base">Shop</h4>
            <ul className="space-y-2 text-sm text-lumina-muted">
              <li className="hover:text-lumina-accent cursor-pointer transition-colors">Novidades</li>
              <li className="hover:text-lumina-accent cursor-pointer transition-colors">Coleções</li>
              <li className="hover:text-lumina-accent cursor-pointer transition-colors">Editorial</li>
            </ul>
          </div>

          <div>
             <h4 className="font-semibold mb-4 tracking-wide text-sm uppercase text-lumina-base">Suporte</h4>
             <ul className="space-y-2 text-sm text-lumina-muted">
               <li className="hover:text-lumina-accent cursor-pointer transition-colors">FAQ</li>
               <li className="hover:text-lumina-accent cursor-pointer transition-colors">Envios & Devoluções</li>
               <li className="hover:text-lumina-accent cursor-pointer transition-colors">Contato</li>
             </ul>
          </div>

          <div>
             <h4 className="font-semibold mb-4 tracking-wide text-sm uppercase text-lumina-base">Newsletter</h4>
             <div className="flex flex-col gap-2">
               <input 
                  type="email" 
                  placeholder="Seu melhor email" 
                  className="bg-gray-50 border border-gray-200 p-3 text-sm outline-none focus:border-lumina-accent transition-colors rounded-lg"
               />
               <button className="bg-lumina-base text-white py-3 px-6 rounded-lg text-sm font-semibold hover:bg-lumina-accent transition-all">
                 Inscrever-se
               </button>
             </div>
          </div>
        </div>
        <div className="text-center mt-16 pt-8 border-t border-gray-50 text-xs text-lumina-muted">
          <p>© 2026 Lumina Store. Leonardo Brahim.</p>
        </div>
      </footer>
    </div>
  );
};