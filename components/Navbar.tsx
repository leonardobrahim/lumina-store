import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../contexts/ShopContext';

export const Navbar: React.FC = () => {
  const { cart } = useShop();
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className="glass-nav sticky top-0 z-50 border-b border-white/50">
      <div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Left: Navigation Links (Desktop) */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-lumina-muted">
          <Link to="/" className="hover:text-lumina-accent transition-colors">Shop</Link>
          <Link to="/collections" className="hover:text-lumina-accent transition-colors">Coleções</Link>
          <Link to="/about" className="hover:text-lumina-accent transition-colors">Sobre</Link>
        </div>

        {/* Mobile Menu Icon (Placeholder) */}
        <div className="md:hidden">
            <Link to="/collections">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
              </svg>
            </Link>
        </div>

        {/* Center: Brand Logo */}
        <Link to="/" className="text-3xl font-display font-bold italic tracking-tighter hover:opacity-80 transition-opacity">
          Lumina.
        </Link>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
            
            {/* Search Toggle */}
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="hover:text-lumina-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </button>

            {/* Cart */}
            <Link to="/cart" className="relative hover:text-lumina-accent transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 5.408c.422 1.809.634 2.714.072 3.414-.562.7-1.49.7-3.346.7H8.204c-1.855 0-2.783 0-3.345-.7-.562-.7-.35-1.605.072-3.414l1.263-5.408c.25-1.071.376-1.606.772-1.923.395-.317.94-.317 2.03-.317h5.998c1.09 0 1.635 0 2.03.317.396.317.521.852.772 1.923Z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-lumina-accent text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* User Profile */}
            <Link to="/profile" className="hidden sm:block w-8 h-8 rounded-full bg-gray-100 border border-gray-200 overflow-hidden hover:ring-2 ring-lumina-accent transition-all">
               <img src="https://ui-avatars.com/api/?name=User&background=random" alt="User" />
            </Link>
        </div>
      </div>
      
      {/* Search Bar Overlay */}
      {isSearchOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 p-4 animate-in slide-in-from-top-2">
              <div className="max-w-2xl mx-auto flex items-center gap-2 border-b-2 border-lumina-base pb-2">
                  <input type="text" placeholder="O que você procura?" className="w-full text-lg outline-none placeholder:text-gray-300" autoFocus />
                  <button onClick={() => setIsSearchOpen(false)} className="text-xs uppercase font-bold tracking-wider">Fechar</button>
              </div>
          </div>
      )}
    </nav>
  );
};