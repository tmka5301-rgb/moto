import { Link } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 inset-x-0 h-16 bg-dark-panel border-b border-white/10 z-50 shrink-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link to="/" className="text-brand-red font-bold text-2xl tracking-tighter flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center text-black font-black">P</div>
            PRECISION<span className="text-white">MOTO</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-xs font-medium uppercase tracking-widest text-slate-400">
            <Link to="/shop" className="hover:text-brand-red transition-colors">Дэлгүүр</Link>
            <Link to="/mechanics" className="hover:text-brand-red transition-colors">Засварчид</Link>
            <Link to="/user" className="hover:text-brand-red transition-colors">Гараж</Link>
            <Link to="/admin" className="hover:text-brand-red transition-colors">Аналитик</Link>
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <div className="hidden lg:flex relative items-center bg-white/5 border border-white/10 rounded-full px-4 py-1.5 focus-within:border-brand-red/50 transition-colors">
            <Search className="w-4 h-4 text-slate-500" />
            <input 
              type="text" 
              placeholder="Сэлбэг хайх..." 
              className="bg-transparent text-xs ml-2 outline-none w-32 uppercase text-slate-200 placeholder-slate-500"
            />
          </div>
          <button className="text-slate-400 hover:text-white p-2">
            <ShoppingCart className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3">
             <Link to="/admin" className="text-[10px] text-brand-red bg-brand-red/10 px-2 py-0.5 rounded border border-brand-red/30 font-bold hidden sm:block">ADMIN</Link>
             <Link to="/user" className="hidden sm:flex text-sm font-semibold hover:text-white text-slate-200">
               Нэвтрэх
             </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

