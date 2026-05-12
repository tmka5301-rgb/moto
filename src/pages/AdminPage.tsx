import { useState } from 'react';
import { Package, Users, CalendarDays, BarChart, Settings, LogOut, Plus, Trash2, Edit } from 'lucide-react';

function AdminDashboardTab() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-[#0F1115] border border-white/5 rounded-2xl p-6 shadow-sm">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Нийт орлого</p>
          <p className="text-3xl font-bold text-white mt-2">$248,392</p>
          <p className="text-xs text-green-500 mt-2">+12% өнгөрсөн сараас</p>
        </div>
        <div className="bg-[#0F1115] border border-white/5 rounded-2xl p-6 shadow-sm">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Шинэ үйлчлүүлэгч</p>
          <p className="text-3xl font-bold text-white mt-2">1,204</p>
          <p className="text-xs text-green-500 mt-2">+4% өнгөрсөн сараас</p>
        </div>
        <div className="bg-[#0F1115] border border-white/5 rounded-2xl p-6 shadow-sm">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Нийт сэлбэг</p>
          <p className="text-3xl font-bold text-white mt-2">$1.2M</p>
          <p className="text-xs text-slate-400 mt-2">Агуулахад байгаа</p>
        </div>
        <div className="bg-[#0F1115] border border-white/5 rounded-2xl p-6 shadow-sm">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Үйлчилгээний ачаалал</p>
          <p className="text-3xl font-bold text-white mt-2">18 <span className="text-slate-500 text-lg">/ 24</span></p>
          <p className="text-xs text-brand-red mt-2">75% дүүрсэн</p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-[#0F1115] border border-white/5 rounded-2xl p-6 shadow-sm flex flex-col items-center justify-center min-h-[400px]">
           <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">Орлогын график (Жишээ мэдээлэл)</p>
           <div className="w-full h-48 mt-4 flex items-end gap-2 justify-between">
             {[40, 70, 45, 90, 65, 80, 100, 50, 75, 60, 85, 30].map((h, i) => (
                <div key={i} className="w-full bg-white/5 hover:bg-brand-red transition-all cursor-pointer relative group rounded-t-sm" style={{ height: `${h}%` }}>
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-xs py-1 px-2 rounded font-mono border border-white/10 z-10">${h}k</div>
                </div>
             ))}
           </div>
        </div>
        <div className="bg-[#0F1115] border border-white/5 rounded-2xl p-6 shadow-sm overflow-hidden relative group flex flex-col">
           <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0F1115] to-transparent z-10 pointer-events-none" />
           <p className="text-[10px] text-brand-red font-bold uppercase tracking-widest mb-6">АЖЛЫН УРСГАЛ</p>
           <div className="space-y-4 relative z-0 flex-1 overflow-y-auto pr-2 pb-12">
             {[1,2,3,4,5].map(i => (
               <div key={i} className="flex justify-between items-center border-b border-white/5 pb-3">
                 <div>
                   <p className="text-white text-xs font-bold uppercase">Маркус Венс</p>
                   <p className="text-[10px] text-slate-400 mt-1">Porsche 911 GT3</p>
                 </div>
                 <span className="text-[9px] font-bold uppercase bg-white/5 border border-white/10 px-2 py-0.5 rounded text-slate-300">Засварт</span>
               </div>
             ))}
           </div>
        </div>
      </div>
    </>
  );
}

function AdminBookingsTab() {
  const [bookings, setBookings] = useState([
    { id: 1, user: 'Оргил', phone: '9911-XXXX', date: '2026-10-14', time: '09:00 AM', car: 'Porsche 911 GT3', type: 'Оношилгоо', status: 'ХҮЛЭЭГДЭЖ БУЙ' },
    { id: 2, user: 'Болд', phone: '8811-XXXX', date: '2026-10-15', time: '11:00 AM', car: 'Mercedes AMG GT', type: 'Тос солих', status: 'БАТАЛГААЖСАН' },
  ]);

  const confirmBooking = (id: number) => {
    setBookings(bookings.map(b => b.id === id ? { ...b, status: 'БАТАЛГААЖСАН' } : b));
  };

  const cancelBooking = (id: number) => {
    if(confirm('Цуцлахдаа итгэлтэй байна уу?')) {
       setBookings(bookings.map(b => b.id === id ? { ...b, status: 'ЦУЦЛАГДСАН' } : b));
    }
  };

  return (
    <div className="bg-[#0F1115] border border-white/5 rounded-2xl p-6 overflow-x-auto">
       <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-6">Цаг захиалгууд</h2>
       <table className="w-full text-left text-xs uppercase tracking-widest text-slate-400">
         <thead>
           <tr className="border-b border-white/10">
             <th className="pb-3 px-4 font-bold">Хэрэглэгч</th>
             <th className="pb-3 px-4 font-bold">Утас</th>
             <th className="pb-3 px-4 font-bold">Цаг</th>
             <th className="pb-3 px-4 font-bold">Машин / Үйлчилгээ</th>
             <th className="pb-3 px-4 font-bold">Төлөв</th>
             <th className="pb-3 px-4 font-boldtext-right">Үйлдэл</th>
           </tr>
         </thead>
         <tbody className="font-mono">
           {bookings.map(b => (
             <tr key={b.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
               <td className="py-4 px-4 text-white font-sans font-bold">{b.user}</td>
               <td className="py-4 px-4">{b.phone}</td>
               <td className="py-4 px-4">{b.date} {b.time}</td>
               <td className="py-4 px-4 text-[10px] font-sans">
                 <div className="font-bold text-white">{b.car}</div>
                 <div className="text-slate-500 mt-1">{b.type}</div>
               </td>
               <td className="py-4 px-4 text-[9px] font-sans">
                 <span className={`px-2 py-0.5 rounded border ${b.status === 'БАТАЛГААЖСАН' ? 'bg-green-500/20 text-green-400 border-green-500/20' : b.status === 'ЦУЦЛАГДСАН' ? 'bg-slate-800 text-slate-500 border-slate-700' : 'bg-orange-500/20 text-orange-400 border-orange-500/20'}`}>
                   {b.status}
                 </span>
               </td>
               <td className="py-4 px-4 text-right flex items-center justify-end gap-2 font-sans">
                 {b.status === 'ХҮЛЭЭГДЭЖ БУЙ' && <button onClick={() => confirmBooking(b.id)} className="text-[10px] text-green-400 hover:underline">Батлах</button>}
                 {b.status !== 'ЦУЦЛАГДСАН' && <button onClick={() => cancelBooking(b.id)} className="text-[10px] text-brand-red hover:underline">Цуцлах</button>}
               </td>
             </tr>
           ))}
         </tbody>
       </table>
    </div>
  );
}

function AdminProductsTab() {
  const [products, setProducts] = useState([
    { id: 1, name: 'TTE810 Turbocharger', price: 4200, category: 'Хөдөлгүүр', stock: 5 },
    { id: 2, name: 'Akrapovic Exhaust System', price: 8500, category: 'Яндангийн систем', stock: 2 },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [editProduct, setEditProduct] = useState<any>(null);

  const deleteProduct = (id: number) => {
    if(confirm('Устгах уу?')) {
       setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setShowModal(false);
    // basic mock save
    if(!editProduct.id) {
       setProducts([...products, { ...editProduct, id: Date.now() }]);
    } else {
       setProducts(products.map(p => p.id === editProduct.id ? editProduct : p));
    }
  };

  const openAdd = () => {
    setEditProduct({ name: '', price: '', category: 'Хөдөлгүүр', stock: 0 });
    setShowModal(true);
  };

  const openEdit = (p: any) => {
    setEditProduct({ ...p });
    setShowModal(true);
  };

  return (
    <>
      <div className="bg-[#0F1115] border border-white/5 rounded-2xl p-6 overflow-x-auto">
         <div className="flex items-center justify-between mb-6">
           <h2 className="text-sm font-bold text-white uppercase tracking-widest">Бараа / Сэлбэг</h2>
           <button onClick={openAdd} className="flex items-center gap-2 text-[10px] bg-brand-red hover:bg-red-700 text-white px-3 py-1.5 rounded uppercase font-bold tracking-widest transition-colors">
              <Plus className="w-3 h-3" /> Нэмэх
           </button>
         </div>
         <table className="w-full text-left text-xs uppercase tracking-widest text-slate-400">
           <thead>
             <tr className="border-b border-white/10">
               <th className="pb-3 px-4 font-bold">Нэр</th>
               <th className="pb-3 px-4 font-bold">Үнэ</th>
               <th className="pb-3 px-4 font-bold">Үлдэгдэл</th>
               <th className="pb-3 px-4 font-bold">Ангилал</th>
               <th className="pb-3 px-4 font-bold text-right">Үйлдэл</th>
             </tr>
           </thead>
           <tbody className="font-mono">
             {products.map(p => (
               <tr key={p.id} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                 <td className="py-4 px-4 text-white font-sans font-bold">{p.name}</td>
                 <td className="py-4 px-4">${Number(p.price).toLocaleString()}</td>
                 <td className="py-4 px-4">
                   <span className={`px-2 py-0.5 rounded text-[10px] font-sans ${p.stock > 3 ? 'text-green-400 bg-green-400/10' : 'text-orange-400 bg-orange-400/10'}`}>{p.stock} ш</span>
                 </td>
                 <td className="py-4 px-4 text-[10px] font-sans">{p.category}</td>
                 <td className="py-4 px-4 text-right flex justify-end gap-3 font-sans">
                   <button onClick={() => openEdit(p)} className="text-slate-400 hover:text-white transition-colors"><Edit className="w-4 h-4" /></button>
                   <button onClick={() => deleteProduct(p.id)} className="text-slate-400 hover:text-brand-red transition-colors"><Trash2 className="w-4 h-4" /></button>
                 </td>
               </tr>
             ))}
           </tbody>
         </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-[#0F1115] border border-white/10 rounded-2xl p-6 w-full max-w-md">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold uppercase tracking-widest">{editProduct?.id ? 'Бараа засах' : 'Шинэ бараа'}</h3>
              <button type="button" onClick={() => setShowModal(false)} className="text-slate-400 hover:text-white"><Plus className="w-5 h-5 rotate-45" /></button>
            </div>
            
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Нэр</label>
                <input type="text" value={editProduct?.name || ''} onChange={e => setEditProduct({...editProduct, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-brand-red" required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Үнэ</label>
                  <input type="number" value={editProduct?.price || ''} onChange={e => setEditProduct({...editProduct, price: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-brand-red" required />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Үлдэгдэл</label>
                  <input type="number" value={editProduct?.stock || ''} onChange={e => setEditProduct({...editProduct, stock: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-brand-red" required />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Ангилал</label>
                <select value={editProduct?.category || ''} onChange={e => setEditProduct({...editProduct, category: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-brand-red">
                  <option>Хөдөлгүүр</option>
                  <option>Яндангийн систем</option>
                  <option>Тормоз</option>
                  <option>Амортизатор</option>
                </select>
              </div>
              
              <button type="submit" className="w-full bg-brand-red hover:bg-brand-red/80 text-white font-bold uppercase tracking-widest text-sm py-3 rounded-lg mt-6 transition-colors">
                 Хадгалах
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export function AdminPage() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="flex flex-col md:flex-row gap-8 mb-24 px-4 sm:px-0">
      <div className="w-full md:w-64 flex flex-col gap-2 shrink-0">
         <div className="mb-4">
           <h1 className="text-xl font-bold text-white tracking-widest uppercase">Precision</h1>
           <span className="text-[10px] font-bold text-brand-red uppercase tracking-widest">Admin Panel</span>
         </div>
        
        <button 
          onClick={() => setActiveTab('dashboard')}
          className={`flex items-center gap-3 text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest rounded transition-colors border ${activeTab === 'dashboard' ? 'bg-brand-red text-white border-transparent' : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border-white/5'}`}>
          <BarChart className="w-4 h-4" /> Статистик
        </button>
        <button 
          onClick={() => setActiveTab('bookings')}
          className={`flex items-center gap-3 text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest rounded transition-colors border ${activeTab === 'bookings' ? 'bg-brand-red text-white border-transparent' : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border-white/5'}`}>
          <CalendarDays className="w-4 h-4" /> Захиалгууд
        </button>
        <button 
          onClick={() => setActiveTab('products')}
          className={`flex items-center gap-3 text-left px-4 py-3 text-[10px] font-bold uppercase tracking-widest rounded transition-colors border ${activeTab === 'products' ? 'bg-brand-red text-white border-transparent' : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border-white/5'}`}>
          <Package className="w-4 h-4" /> Бараа / Сэлбэг
        </button>
        <button className="flex items-center gap-3 text-left px-4 py-3 bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest rounded border border-white/5">
          <Users className="w-4 h-4" /> Хэрэглэгчид
        </button>
        <button className="flex items-center gap-3 text-left px-4 py-3 bg-white/5 hover:bg-red-500/10 text-slate-400 hover:text-red-500 transition-colors text-[10px] font-bold uppercase tracking-widest rounded border border-white/5 mt-auto">
           <LogOut className="w-4 h-4" /> Гарах
        </button>
      </div>

      <div className="flex-1 flex flex-col gap-6 min-w-0">
        {activeTab === 'dashboard' && <AdminDashboardTab />}
        {activeTab === 'bookings' && <AdminBookingsTab />}
        {activeTab === 'products' && <AdminProductsTab />}
      </div>
    </div>
  );
}
