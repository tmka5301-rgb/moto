import { ArrowRight, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const PRODUCTS = [
  {
    id: 1,
    name: 'Carbon Fiber Stage 2 Intake',
    category: 'ОРОЛТЫН СИСТЕМ',
    price: '$2,499.00',
    stock: 'БЭЛЭН БАЙГАА',
  },
  {
    id: 2,
    name: 'Titanium Valved Exhaust',
    category: 'ЯНДАНГИЙН СИСТЕМ',
    price: '$5,850.00',
    stock: 'ЦӨӨН БАЙГАА',
  },
  {
    id: 3,
    name: 'Track-Spec Adjustable Coilovers',
    category: 'АМОРТИЗАТОР',
    price: '$3,200.00',
    stock: 'ДУУССАН',
  },
  {
    id: 4,
    name: 'Forged Lightweight Piston Set',
    category: 'ХӨДӨЛГҮҮРИЙН ЭД АНГИ',
    price: '$1,950.00',
    stock: 'БЭЛЭН БАЙГАА',
  }
];

export function ShopSection() {
  return (
    <section id="shop" className="scroll-mt-24 px-4 sm:px-0">
      <div className="bg-dark-panel rounded-2xl p-6 border border-white/5 mb-24">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 border-b border-white/10 pb-4">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-1">Сэлбэг & Тос (Shop)</h3>
          </div>
          <Link to="/shop" className="text-[10px] uppercase underline tracking-tighter hover:text-brand-red transition-colors mt-4 md:mt-0 text-slate-400">
            Бүх барааг үзэх
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCTS.map(p => (
            <div key={p.id} className="bg-white/5 p-4 rounded-xl text-center border border-white/5 group cursor-pointer hover:border-brand-red/30 transition-colors">
              <div className="h-32 bg-white/5 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
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
    </section>
  );
}
