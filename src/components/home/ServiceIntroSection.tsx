import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServiceIntroSection() {
  return (
    <section className="px-4 sm:px-0 mb-24">
      <div className="text-center mb-12">
        <p className="text-brand-red font-bold uppercase tracking-widest text-sm mb-2">ҮНДСЭН ҮЙЛЧИЛГЭЭНҮҮД</p>
        <h2 className="text-3xl font-serif italic text-white tracking-tight">Core Capabilities</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#0F1115] rounded-2xl border border-white/5 p-8 min-h-[300px] flex flex-col justify-end relative overflow-hidden group">
          <div className="absolute inset-0 bg-dark-panel transition-transform duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0D] via-transparent to-transparent z-10" />
          <div className="relative z-20">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">ХӨДӨЛГҮҮРИЙН ГҮЙЦЭТГЭЛ</h3>
            <p className="text-slate-400 text-xs mb-4 max-w-sm leading-relaxed">Хөдөлгүүрийн программыг шинэчилж, хамгийн их хүчийг гаргаж авах засвар үйлчилгээ.</p>
            <Link to="#" className="text-brand-red font-bold uppercase tracking-widest text-[10px] flex items-center gap-2 hover:text-white transition-colors w-max">
              ДЭЛГЭРЭНГҮЙ <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-[#0F1115] rounded-xl border border-white/5 p-6 relative overflow-hidden group">
            <div className="absolute inset-0 bg-dark-panel transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0D] via-transparent to-transparent z-10" />
             <div className="relative z-20">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">НАРИЙВЧИЛСАН ТОРМОЗНЫ СИСТЕМ</h3>
              <p className="text-slate-400 text-xs max-w-[250px] leading-relaxed">Керамик болон өндөр даралтын гидравлик системүүдийн шинэчлэлт.</p>
            </div>
          </div>
          <div className="bg-[#0F1115] rounded-xl border border-white/5 p-6 relative overflow-hidden group">
             <div className="absolute inset-0 bg-dark-panel transition-transform duration-700 group-hover:scale-105" />
             <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0D] via-transparent to-transparent z-10" />
             <div className="relative z-20">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-2">ОНШИЛГОО ТЕСТҮҮД</h3>
              <p className="text-slate-400 text-xs max-w-[250px] leading-relaxed">Орчин үеийн компьютер оншилгоогоор машины бүтцийн өөрчлөлтийг хянах.</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-4 bg-[#0F1115] rounded-xl border border-white/5 p-6 flex flex-col md:flex-row items-center justify-between gap-6">
         <div className="flex items-center gap-6">
           <div className="w-12 h-12 bg-white/5 rounded-full border border-brand-red/30 flex items-center justify-center shrink-0">
             <div className="w-2 h-2 bg-brand-red rounded-full animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
           </div>
           <div>
             <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-1">Аналитик Хяналт</h3>
             <p className="text-slate-400 text-xs">Таны автомашины ECU-г бодит цаг хугацаанд хянах систем.</p>
           </div>
         </div>
         <div className="hidden md:flex items-center gap-4 w-full md:w-auto">
            <div className="w-32 bg-white/5 h-1.5 rounded-full relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-brand-red w-[85%] rounded-full" />
            </div>
            <span className="text-brand-red font-bold uppercase tracking-widest text-[9px]">МЭДЭЭЛЭЛ</span>
            <span className="text-green-400 font-bold uppercase tracking-widest text-[9px]">ХЭВИЙН</span>
         </div>
      </div>
    </section>
  );
}
