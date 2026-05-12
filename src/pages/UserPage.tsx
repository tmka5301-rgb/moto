import { Settings, LogOut, Plus, Calendar, Clock, X, Check } from 'lucide-react';
import { useState } from 'react';

function GarageTab() {
  return (
      <div className="flex-1 flex flex-col gap-8 min-w-0">
        <div className="bg-[#0F1115] border border-white/5 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-widest">Идэвхтэй машинууд</h2>
            <button className="flex items-center gap-2 text-[10px] text-brand-red border border-brand-red/30 px-3 py-1.5 hover:bg-brand-red hover:text-white transition-colors uppercase font-bold tracking-widest rounded">
              <Plus className="w-4 h-4" /> машин нэмэх
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/5 rounded-xl p-6 shadow-sm group hover:border-brand-red/30 transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <p className="text-white text-xs font-bold uppercase tracking-wider">Porsche 911 GT3</p>
                <span className="text-[9px] bg-brand-red/20 border border-brand-red/20 text-brand-red px-2 py-0.5 rounded font-bold uppercase tracking-widest">ОНШИЛГОО</span >
              </div>
              <div className="bg-dark-panel h-24 mb-6 rounded-lg flex items-center justify-center text-slate-600 border border-white/5 transition-colors text-xs font-mono">
                 [МАШИНЫ ЗУРАГ]
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-mono border-t border-white/5 pt-4">
                <span>1,240 MI</span>
                <span>3.2 PSI</span>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/5 rounded-xl p-6 shadow-sm group hover:border-brand-red/30 transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <p className="text-white text-xs font-bold uppercase tracking-wider">Audi RS6 Avant</p>
              </div>
              <div className="bg-dark-panel h-24 mb-6 rounded-lg flex items-center justify-center text-slate-600 border border-white/5 transition-colors text-xs font-mono">
                 [МАШИНЫ ЗУРАГ]
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-mono border-t border-white/5 pt-4">
                <span>46 MI</span>
                <span>12°C</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-[#0F1115] border border-white/5 rounded-2xl p-6">
            <h2 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Удахгүй болох захиалга</h2>
            <div className="bg-white/5 border border-white/5 rounded-xl p-4 hover:border-white/20 transition-colors">
              <div className="flex items-start gap-4">
                <div className="bg-brand-red rounded w-12 h-12 flex flex-col items-center justify-center">
                   <span className="text-[9px] font-bold text-white uppercase tracking-wider">Окт</span>
                   <span className="font-bold text-white text-lg leading-none">14</span>
                </div>
                <div>
                  <p className="text-white text-xs font-bold uppercase tracking-wider mb-1">Жилийн гүйцэтгэлийн шалгалт</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest">Porsche 911 GT3</p>
                  <p className="text-[10px] text-brand-red mt-2 font-mono">09:00 AM • Занадер</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#0F1115] border border-white/5 rounded-2xl p-6">
             <h2 className="text-sm font-bold text-white mb-6 uppercase tracking-widest">Гүйлгээний түүх</h2>
             <div className="space-y-2">
                <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl p-4 hover:border-white/20 transition-colors cursor-pointer">
                  <div>
                    <p className="text-xs text-white font-bold uppercase tracking-wider">Stage 2 ECU Tuning</p>
                    <p className="text-[10px] text-slate-500 font-mono mt-1">Aug 24, 2026</p>
                  </div>
                  <span className="text-xs font-mono text-brand-red">$1,250.00</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 border border-white/5 rounded-xl p-4 hover:border-white/20 transition-colors cursor-pointer">
                  <div>
                    <p className="text-xs text-white font-bold uppercase tracking-wider">Carbon Ceramic Brakes</p>
                    <p className="text-[10px] text-slate-500 font-mono mt-1">Jul 12, 2026</p>
                  </div>
                  <span className="text-xs font-mono text-brand-red">$4,500.00</span>
                </div>
             </div>
          </div>
        </div>
      </div>
  );
}

function BookingsTab() {
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [bookings, setBookings] = useState([
    { id: 1, date: '2026-10-14', time: '09:00 AM', type: 'Жилийн гүйцэтгэлийн шалгалт', status: 'БАТАЛГААЖСАН', car: 'Porsche 911 GT3' }
  ]);
  
  const handleCancel = (id: number) => {
    if(confirm('Та энэ захиалгыг цуцлахдаа итгэлтэй байна уу?')) {
      setBookings(bookings.map(b => b.id === id ? { ...b, status: 'ЦУЦЛАГДСАН' } : b));
    }
  };

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(false);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setBookings([
      { id: Date.now(), date: '2026-11-20', time: '14:00 PM', type: 'Тос солих', status: 'ХҮЛЭЭГДЭЖ БУЙ', car: 'Porsche 911 GT3' },
      ...bookings
    ]);
  };

  return (
    <div className="flex-1 flex flex-col gap-6 min-w-0">
      {success && (
        <div className="bg-green-500/20 border border-green-500 text-green-400 px-4 py-3 rounded-lg flex items-center justify-between">
          <span className="text-sm font-bold tracking-widest uppercase">Захиалга амжилттай илгээгдлээ</span>
          <Check className="w-5 h-5" />
        </div>
      )}
      
      <div className="bg-[#0F1115] border border-white/5 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
          <h2 className="text-sm font-bold text-white uppercase tracking-widest">Миний захиалгууд</h2>
          <button 
            onClick={() => setShowModal(true)}
            className="flex items-center gap-2 text-[10px] bg-brand-red text-white py-2 px-4 hover:bg-red-700 transition-colors uppercase font-bold tracking-widest rounded"
          >
            <Calendar className="w-4 h-4" /> Шинэ цаг захиалах
          </button>
        </div>
        
        <div className="space-y-4">
          {bookings.map(b => (
            <div key={b.id} className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-colors">
              <div>
                <p className="text-white text-xs font-bold uppercase tracking-wider mb-1">{b.type}</p>
                <div className="flex items-center gap-4 text-[10px] text-slate-400 uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {b.date}</span>
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {b.time}</span>
                  <span>{b.car}</span>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className={`text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded border ${b.status === 'БАТАЛГААЖСАН' ? 'bg-green-500/20 text-green-400 border-green-500/20' : b.status === 'ЦУЦЛАГДСАН' ? 'bg-slate-800 text-slate-500 border-slate-700' : 'bg-orange-500/20 text-orange-400 border-orange-500/20'}`}>{b.status}</span>
                {b.status !== 'ЦУЦЛАГДСАН' && (
                  <button onClick={() => handleCancel(b.id)} className="text-[10px] text-brand-red hover:underline uppercase tracking-widest font-bold">Цуцлах</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#0F1115] border border-white/10 rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold uppercase tracking-widest">Цаг захиалах</h3>
              <button onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            
            <form onSubmit={handleBook} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Машин сонгох</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-brand-red">
                  <option>Porsche 911 GT3</option>
                  <option>Audi RS6 Avant</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Үйлчилгээ</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-brand-red">
                  <option>Ерөнхий оношилгоо</option>
                  <option>Тос солих</option>
                  <option>Хөдөлгүүрийн засвар</option>
                  <option>Бусад</option>
                </select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Өдөр</label>
                  <input type="date" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-brand-red" required />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Цаг</label>
                  <input type="time" className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-brand-red" required />
                </div>
              </div>
              
              <button type="submit" className="w-full bg-brand-red hover:bg-brand-red/80 text-white font-bold uppercase tracking-widest text-sm py-3 rounded-lg mt-6 transition-colors">
                 Баталгаажуулах
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export function UserPage() {
  const [activeTab, setActiveTab] = useState('garage');
  
  return (
    <div className="flex flex-col md:flex-row gap-8 px-4 sm:px-0 mb-24">
      {/* Sidebar */}
      <div className="w-full md:w-64 flex flex-col gap-2 shrink-0">
        <button 
          onClick={() => setActiveTab('garage')}
          className={`flex items-center justify-between text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest rounded transition-colors border ${activeTab === 'garage' ? 'bg-brand-red text-white border-transparent' : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border-white/5'}`}>
          Миний гараж
        </button>
        <button 
          onClick={() => setActiveTab('bookings')}
          className={`flex items-center justify-between text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest rounded transition-colors border ${activeTab === 'bookings' ? 'bg-brand-red text-white border-transparent' : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border-white/5'}`}>
          Захиалгууд
        </button>
        <button className="flex items-center justify-between text-left px-4 py-3 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest rounded border border-white/5">
          <span className="flex items-center gap-2"><Settings className="w-4 h-4" /> Тохиргоо</span>
        </button>
        <button className="flex items-center justify-between text-left px-4 py-3 bg-white/5 hover:bg-red-500/10 text-slate-400 hover:text-red-500 transition-colors text-[10px] font-bold uppercase tracking-widest rounded border border-white/5 mt-auto">
           <span className="flex items-center gap-2"><LogOut className="w-4 h-4" /> Гарах</span>
        </button>
      </div>

      {activeTab === 'garage' && <GarageTab />}
      {activeTab === 'bookings' && <BookingsTab />}
    </div>
  );
}
