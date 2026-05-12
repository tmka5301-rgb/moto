import { ShoppingCart, Search, Filter } from 'lucide-react';
import { useState } from 'react';

const PRODUCTS = [
  { id: 1, name: 'TTE810 Turbocharger', price: '$4,200', category: 'Хөдөлгүүр', stock: 'БЭЛЭН БАЙГАА' },
  { id: 2, name: 'Akrapovic Exhaust System', price: '$8,500', category: 'Яндангийн систем', stock: 'ЦӨӨН БАЙГАА' },
  { id: 3, name: 'Brembo GT Brakes', price: '$6,200', category: 'Тормоз', stock: 'ЗАХИАЛГААР' },
  { id: 4, name: 'Ohlins TTX Suspension', price: '$7,800', category: 'Амортизатор', stock: 'БЭЛЭН БАЙГАА' },
];

export function ShopPage() {
  const [filter, setFilter] = useState('ALL');

  return (
    <div className="px-4 sm:px-0 mb-24">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
           <h1 className="text-2xl font-bold uppercase tracking-widest text-white mb-2">Дэлгүүр</h1>
           <p className="text-slate-400 text-xs">Сэлбэг, тоног төхөөрөмж</p>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
             {['ALL', 'Хөдөлгүүр', 'Тормоз', 'Яндангийн систем'].map(cat => (
               <button 
                 key={cat}
                 onClick={() => setFilter(cat)}
                 className={`px-4 py-1.5 text-[10px] uppercase font-bold tracking-widest rounded ${filter === cat ? 'bg-brand-red text-white' : 'text-slate-400 hover:text-white transition-colors'}`}
               >
                 {cat}
               </button>
             ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {PRODUCTS.filter(p => filter === 'ALL' || p.category === filter).map(p => (
          <div key={p.id} className="bg-white/5 p-4 rounded-xl text-center border border-white/5 group cursor-pointer hover:border-brand-red/30 transition-colors">
            <div className="h-48 bg-[#0F1115] rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute top-2 left-2">
                <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded ${p.stock === 'БЭЛЭН БАЙГАА' ? 'bg-dark-bg text-slate-300' : p.stock === 'ЦӨӨН БАЙГАА' ? 'bg-orange-500/20 text-orange-500 border border-orange-500/20' : 'bg-brand-red/20 text-brand-red border border-brand-red/20'}`}>
                  {p.stock}
                </span>
              </div>
              <ShoppingCart className="w-8 h-8 text-slate-600 group-hover:text-brand-red transition-colors" />
            </div>
            <div className="text-[10px] font-bold uppercase mb-2 text-slate-300 group-hover:text-white transition-colors">{p.name}</div>
            <div className="text-slate-500 font-mono text-[9px] mb-1">{p.category}</div>
            <div className="text-brand-red font-mono text-xs">{p.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
