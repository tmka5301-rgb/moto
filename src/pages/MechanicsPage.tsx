import { Mail, Phone } from 'lucide-react';

const MECHANICS = [
  { id: 1, name: 'Занадер', role: 'Ерөнхий Инженер', specialty: 'ECU Tuning & Diagnostics', exp: '12 жил' },
  { id: 2, name: 'Болд', role: 'Ахлах Засварчин', specialty: 'Хөдөлгүүрийн угсралт', exp: '8 жил' },
  { id: 3, name: 'Төгөлдөр', role: 'Оношилгооны Мэргэжилтэн', specialty: 'Цахилгаан систем', exp: '5 жил' },
];

export function MechanicsPage() {
  return (
    <div className="px-4 sm:px-0 mb-24">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <div>
           <h1 className="text-2xl font-bold uppercase tracking-widest text-white mb-2">Засварчид</h1>
           <p className="text-slate-400 text-xs">Манай туршлагатай баг</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {MECHANICS.map(m => (
          <div key={m.id} className="bg-[#0F1115] border border-white/5 rounded-2xl p-6 group hover:border-brand-red/30 transition-colors">
            <div className="flex flex-col items-center text-center">
               <div className="w-24 h-24 mb-4 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-brand-red/20 transition-colors">
                  <div className="w-20 h-20 border-2 border-slate-700 rounded-full group-hover:border-brand-red/50" />
               </div>
               <h3 className="text-sm font-bold uppercase tracking-widest text-white mb-1">{m.name}</h3>
               <p className="text-brand-red text-[10px] font-bold uppercase tracking-widest mb-4">{m.role}</p>
               
               <div className="w-full bg-white/5 rounded-lg p-4 mb-6 border border-white/5 text-left space-y-2">
                 <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest">Туршлага</span>
                    <span className="text-[10px] font-bold text-slate-300">{m.exp}</span>
                 </div>
                 <div className="flex justify-between items-center pt-1">
                    <span className="text-[9px] text-slate-500 uppercase tracking-widest">Чиглэл</span>
                    <span className="text-[10px] font-bold text-slate-300">{m.specialty}</span>
                 </div>
               </div>
               
               <div className="flex items-center justify-center gap-4 w-full">
                 <button className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest py-2 rounded transition-colors border border-white/5">
                   <Phone className="w-3 h-3" /> Утас
                 </button>
                 <button className="flex-1 flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white text-[10px] font-bold uppercase tracking-widest py-2 rounded transition-colors border border-white/5">
                   <Mail className="w-3 h-3" /> И-мэйл
                 </button>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
