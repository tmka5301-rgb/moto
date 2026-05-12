import { Link } from 'react-router-dom';

const MECHANICS = [
  {
    id: 1,
    name: 'Marcus Vance',
    role: 'CHIEF OF PERFORMANCE',
    specialty: 'PORSCHE / GT3 DEVELOPMENT',
  },
  {
    id: 2,
    name: 'Elena Rodriguez',
    role: 'SYSTEMS INTEGRATION',
    specialty: 'HYBRID & ELECTRIC POWERTRAINS',
  },
  {
    id: 3,
    name: 'Victor Emsden',
    role: 'CHASSIS FABRICATION',
    specialty: 'STRUCTURAL RIGIDITY & CUSTOM ALLOY',
  }
];

export function MechanicsSection() {
  return (
    <section id="mechanics" className="scroll-mt-24 px-4 sm:px-0 mb-24">
      <div className="bg-[#16181D] rounded-2xl p-6 border border-white/5">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-brand-red mb-1">Мэргэжилтнүүд</h3>
          </div>
          <Link to="/mechanics" className="text-[10px] uppercase underline tracking-tighter hover:text-brand-red transition-colors mt-4 md:mt-0 text-slate-400">
            БҮХ ИНЖЕНЕРҮҮДИЙГ ХАРАХ
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {MECHANICS.map(m => (
            <div key={m.id} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-brand-red/30 transition-colors group">
              <div className="w-12 h-12 bg-slate-800 rounded-full shrink-0 group-hover:bg-brand-red/20 flex items-center justify-center transition-colors">
                <div className="w-10 h-10 border-2 border-slate-700 group-hover:border-brand-red/50 rounded-full" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-bold uppercase text-slate-200 truncate">{m.name}</div>
                <div className="text-[10px] text-slate-500 italic truncate">{m.role}</div>
                <div className="text-[9px] text-slate-400 mt-1 truncate">ЧИГЛЭЛ: {m.specialty}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
