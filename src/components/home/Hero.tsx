import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative pt-12 pb-24 border-b border-dark-border group rounded-2xl overflow-hidden mb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/40 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486006396193-471d6158ff97?auto=format&fit=crop&q=80&w=1024')] bg-cover bg-center"></div>
      
      <div className="relative z-20 max-w-2xl px-10">
        <p className="text-brand-red uppercase tracking-[0.2em] text-sm mb-4 font-bold">ИНЖЕНЕРИЙН ТӨГС БАЙДАЛ</p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif italic font-light text-white leading-tight mb-6">
          PRECISION <br/><span className="text-brand-red font-bold not-italic font-sans">PERFORMANCE</span> <br/>ENGINEERING
        </h1>
        <p className="text-slate-400 text-sm uppercase tracking-wider leading-relaxed mb-8 max-w-xl font-medium">
          Өндөр хүчин чадалтай автомашины засвар, үйлчилгээний дээд зэрэглэлийн төв. 
          Шилдэг инженерүүд орчин үеийн оношилгооны төхөөрөмжөөр таны машины бүрэн хүчин чадлыг нээх болно.
        </p>
        
        <div className="flex flex-wrap items-center gap-4">
          <Link to="#book" className="px-8 py-3 bg-brand-red hover:bg-brand-red-hover text-white text-xs uppercase tracking-widest font-bold transition-all rounded-full flex items-center gap-2">
            ЦАГ ЗАХИАЛАХ <ChevronRight className="w-4 h-4" />
          </Link>
          <Link to="/shop" className="px-8 py-3 border border-dark-border hover:border-gray-500 text-white text-xs uppercase tracking-widest font-bold transition-all rounded-full bg-dark-panel/50 backdrop-blur-sm">
            СЭЛБЭГ ХАРАХ
          </Link>
        </div>
      </div>
      
      {/* Abstract visual representing a car/engine block */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full hidden lg:block opacity-70 z-20 pointer-events-none">
        <div className="flex items-center justify-center h-full">
          <div className="relative w-[500px] h-[300px] border border-white/5 bg-dark-panel/80 backdrop-blur p-4 flex gap-4 rounded-2xl shadow-2xl">
            <div className="w-1/2 bg-white/5 border border-white/5 flex flex-col justify-end p-4 rounded-xl">
               <span className="text-brand-red font-bold uppercase tracking-widest text-[10px]">AERODYNAMICS</span>
               <div className="w-full h-1 bg-brand-red mt-2 rounded-full" />
            </div>
            <div className="w-1/2 flex flex-col gap-4">
               <div className="h-1/2 bg-white/5 border border-white/5 p-4 flex flex-col justify-between rounded-xl">
                 <span className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">STAGE 3</span>
                 <p className="text-white font-bold text-xl uppercase tracking-wider">ECU TUNING</p>
               </div>
               <div className="h-1/2 bg-white/5 border border-white/5 flex items-center justify-center rounded-xl">
                 <div className="w-16 h-16 rounded-full border-2 border-brand-red/30 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border-2 border-brand-red border-t-0 animate-spin" />
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/10 px-10 relative z-20 bg-black/20 backdrop-blur-sm">
        <div>
          <p className="text-brand-red font-bold uppercase tracking-widest text-[10px] mb-1">ХҮЧИН ЧАДАЛ</p>
          <p className="text-slate-200 font-medium text-sm">Дунджаар +15-20%</p>
        </div>
        <div>
          <p className="text-brand-red font-bold uppercase tracking-widest text-[10px] mb-1">ҮЙЛЧИЛГЭЭНИЙ НАРИЙВЧЛАЛ</p>
          <p className="text-slate-200 font-medium text-sm">99.8% БАТАЛГААТАЙ</p>
        </div>
        <div>
          <p className="text-brand-red font-bold uppercase tracking-widest text-[10px] mb-1">МЭРГЭШСЭН ИНЖЕНЕРҮҮД</p>
          <p className="text-slate-200 font-medium text-sm">42 МЭРГЭЖИЛТЭН</p>
        </div>
        <div>
          <p className="text-brand-red font-bold uppercase tracking-widest text-[10px] mb-1">БАТАЛГААТ ХУГАЦАА</p>
          <p className="text-slate-200 font-medium text-sm">БҮХ НАСНЫ БАТАЛГАА</p>
        </div>
      </div>
    </div>
  );
}
