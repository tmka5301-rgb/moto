import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="h-16 border-t border-white/5 bg-dark-bg mt-auto shrink-0 flex items-center">
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex gap-8 text-[10px] text-slate-500 uppercase tracking-widest">
          <span>© 2026 PRECISION MOTO</span>
          <Link to="#" className="hover:text-white transition-colors">Privacy & Terms</Link>
          <Link to="#" className="hover:text-white transition-colors">Support: 7711-XXXX</Link>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-1 h-1 bg-brand-red rounded-full"></div>
            <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
            <div className="w-1 h-1 bg-slate-700 rounded-full"></div>
          </div>
          <span className="text-[10px] font-mono text-slate-400 italic">System Operational: 99.9%</span>
        </div>
      </div>
    </footer>
  );
}
