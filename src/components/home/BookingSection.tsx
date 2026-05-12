import { Link } from 'react-router-dom';

export function BookingSection() {
  return (
    <section id="book" className="scroll-mt-24 px-4 sm:px-0 mb-24">
      <div className="bg-brand-red rounded-2xl p-8 relative overflow-hidden text-white shadow-xl">
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full blur-3xl opacity-50" />
        <div className="absolute right-12 top-12 opacity-10">
          <div className="w-24 h-24 border-8 border-white rounded-full flex items-center justify-center">
            <div className="w-12 h-12 border-4 border-white rounded-full" />
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-white mb-4">
              ЗАСВАРТ БЭЛЭН ҮҮ?
            </h2>
            <p className="text-white/80 text-xs uppercase leading-relaxed mb-8 max-w-sm">
              Оношилгоо болон гүйцэтгэлийн шалгалтанд цаг захиалаарай. 
              Манай төвийн ачаалал одоогоор 85% байна. Өнөөдөр цагаа баталгаажуулна уу.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/user" className="bg-black text-white text-[10px] font-bold py-3 px-6 rounded uppercase tracking-widest hover:bg-black/80 transition-colors">
                ЦАГ ЗАХИАЛАХ
              </Link>
              <Link to="#" className="text-white text-[10px] font-bold py-3 px-6 rounded uppercase tracking-widest border border-white/20 hover:bg-white/10 transition-colors">
                ИНЖЕНЕРТЭЙ ХОЛБОГДОХ
              </Link>
            </div>
          </div>
          
          <div className="bg-black/20 rounded-xl p-6 backdrop-blur-sm border border-white/10 font-bold text-xs">
            <p className="mb-4 uppercase tracking-widest">СУЛ БАЙГАА ЦАГУУД</p>
            <div className="space-y-3">
              <div className="flex justify-between border-b border-white/10 pb-2 hover:border-white/30 transition-colors">
                 <span className="text-white">Даваа, 10 сарын 14</span>
                 <span className="text-white/60">08:00 AM - ЗАХИАЛГАТАЙ</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-2 hover:border-white/30 transition-colors">
                 <span className="text-white">Даваа, 10 сарын 14</span>
                 <span className="text-green-400">11:30 AM - БОЛОМЖТОЙ</span>
              </div>
              <div className="flex justify-between border-b border-transparent pb-2 hover:border-white/30 transition-colors">
                 <span className="text-white">Мягмар, 10 сарын 15</span>
                 <span className="text-green-400">09:00 AM - БОЛОМЖТОЙ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
