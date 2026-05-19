import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Plus, 
  Search, 
  Star, 
  Clock, 
  Settings, 
  Trash2, 
  ExternalLink, 
  Zap, 
  TrendingUp, 
  ChevronRight,
  MoreVertical,
  CheckCircle2,
  X
} from 'lucide-react';
import { cn } from '../../lib/utils';

const INITIAL_FIRMS = [
  { id: 1, name: 'Apex Trader', category: 'Futures', discount: '20%', speed: 'Instant', trust: 9.8, status: 'Active', color: 'bg-blue-500' },
  { id: 2, name: 'Funding Pips', category: 'Forex', discount: '15%', speed: '24h', trust: 9.5, status: 'Active', color: 'bg-emerald-500' },
  { id: 3, name: 'FTMO', category: 'Forex', discount: '10%', speed: 'Same Day', trust: 9.9, status: 'Active', color: 'bg-indigo-500' },
  { id: 4, name: 'Topstep', category: 'Futures', discount: '5%', speed: 'Instant', trust: 9.7, status: 'Active', color: 'bg-orange-500' },
];

export default function PropFirmManagement() {
  const [firms, setFirms] = useState(INITIAL_FIRMS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingFirm, setEditingFirm] = useState<any>(null);

  const handleToggleStatus = (id: number) => {
    setFirms(firms.map(f => f.id === id ? { ...f, status: f.status === 'Active' ? 'Paused' : 'Active' } : f));
  };

  const handleSaveFirm = () => {
    // Real logic would be here
    alert('Nexus data updated successfully!');
    setIsModalOpen(false);
  };

  const handleDeleteFirm = (id: number) => {
    if (window.confirm('Are you sure you want to delete this partner node?')) {
      setFirms(firms.filter(f => f.id !== id));
    }
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold uppercase tracking-tighter italic">Partner Nexus</h1>
          <p className="text-sm text-white/40 mt-1">Configure prop firm parameters and affiliate logic</p>
        </div>
        <button 
          onClick={() => { setEditingFirm(null); setIsModalOpen(true); }}
          className="px-6 py-3 bg-brand-neon text-black rounded-2xl flex items-center gap-2 text-sm font-bold neon-glow hover:scale-[1.02] transition-transform uppercase tracking-widest italic"
        >
          <Plus size={18} /> Add New Partner
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {firms.map((firm) => (
          <motion.div 
            layout
            key={firm.id}
            className="glass p-8 rounded-[40px] bg-black/40 border-white/5 relative group hover:border-brand-neon/30 transition-all duration-500"
          >
             <div className="flex justify-between items-start mb-8">
                <div className="flex items-center gap-6">
                   <div className="w-16 h-16 bg-white/5 rounded-3xl flex items-center justify-center text-3xl font-bold group-hover:scale-110 transition-transform text-brand-neon">
                      {firm.name[0]}
                   </div>
                   <div>
                      <h4 className="text-2xl font-display font-bold uppercase italic tracking-tighter">{firm.name}</h4>
                      <div className="flex items-center gap-3 mt-2">
                         <span className={cn(
                           "text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border",
                           firm.status === 'Active' ? "text-brand-neon border-brand-neon/20 bg-brand-neon/5" : "text-red-500 border-red-500/20 bg-red-500/5"
                         )}>
                           {firm.status}
                         </span>
                         <span className="text-white/30 text-[10px] font-bold uppercase tracking-widest">{firm.category} Platform</span>
                      </div>
                   </div>
                </div>
                <div className="flex gap-2">
                   <button className="p-3 glass rounded-xl hover:bg-white/10 transition-colors" onClick={() => { setEditingFirm(firm); setIsModalOpen(true); }}><Settings size={18} /></button>
                   <button className="p-3 glass rounded-xl hover:bg-red-500/10 hover:text-red-500 transition-colors" onClick={() => handleDeleteFirm(firm.id)}><Trash2 size={18} /></button>
                </div>
             </div>

             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                   { label: 'Trust Score', value: `${firm.trust}/10`, icon: Star, color: 'text-yellow-500' },
                   { label: 'CASHBACK', value: firm.discount, icon: Zap, color: 'text-brand-neon' },
                   { label: 'Payout', value: firm.speed, icon: Clock, color: 'text-white/70' },
                   { label: 'ROI Rate', value: '4.8%', icon: TrendingUp, color: 'text-emerald-500' },
                ].map((item, i) => (
                  <div key={i} className="glass p-4 rounded-2xl text-center bg-white/[0.02]">
                     <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">{item.label}</div>
                     <div className={cn("text-lg font-bold", item.color)}>{item.value}</div>
                  </div>
                ))}
             </div>

             <div className="flex items-center justify-between pt-8 border-t border-white/5">
                <div className="flex items-center gap-6">
                   <div>
                      <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Featured</div>
                      <div className="flex h-6 w-12 bg-white/5 rounded-full p-1 cursor-pointer">
                         <div className="h-4 w-4 rounded-full bg-brand-neon" />
                      </div>
                   </div>
                   <div>
                      <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Coupon Active</div>
                      <div className="flex h-6 w-12 bg-white/10 rounded-full p-1 cursor-pointer justify-end">
                         <div className="h-4 w-4 rounded-full bg-brand-neon" />
                      </div>
                   </div>
                </div>
                <button 
                  onClick={() => handleToggleStatus(firm.id)}
                  className={cn(
                    "px-6 py-3 rounded-xl text-xs font-bold transition-all uppercase tracking-widest",
                    firm.status === 'Active' ? "bg-red-500/10 text-red-500 border border-red-500/20" : "bg-brand-neon/10 text-brand-neon border border-brand-neon/20"
                  )}
                >
                  {firm.status === 'Active' ? 'Deactivate Node' : 'Activate Node'}
                </button>
             </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
         {isModalOpen && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative glass-dark max-w-2xl w-full rounded-[40px] border border-white/10 overflow-hidden"
              >
                 <div className="p-10">
                    <div className="flex justify-between items-center mb-10">
                       <h2 className="text-3xl font-display font-bold uppercase italic tracking-tighter">{editingFirm ? 'Update Partner' : 'Initialize Partner'}</h2>
                       <button onClick={() => setIsModalOpen(false)} className="p-3 glass rounded-xl"><X size={20}/></button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                       <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest px-1">Legal Entity Display Name</label>
                          <input 
                            type="text" 
                            defaultValue={editingFirm?.name}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 focus:outline-none focus:border-brand-neon font-medium text-sm"
                            placeholder="e.g. Apex Trading"
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest px-1">Asset Logic Class</label>
                          <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 focus:outline-none focus:border-brand-neon font-medium text-sm appearance-none">
                             <option>Futures System</option>
                             <option>Forex Grid</option>
                             <option>Crypto Liquidity</option>
                          </select>
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest px-1">Cashback Intensity (%)</label>
                          <input 
                            type="text" 
                            defaultValue={editingFirm?.discount}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 focus:outline-none focus:border-brand-neon font-medium text-sm"
                            placeholder="e.g. 15%"
                          />
                       </div>
                       <div className="space-y-2">
                          <label className="text-[10px] uppercase font-bold text-white/30 tracking-widest px-1">Propagation Delay</label>
                          <input 
                            type="text" 
                            defaultValue={editingFirm?.speed}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-5 focus:outline-none focus:border-brand-neon font-medium text-sm"
                            placeholder="e.g. 24 Hours"
                          />
                       </div>
                    </div>

                    <div className="space-y-4 mb-10">
                       <h4 className="font-bold text-white/80 uppercase tracking-widest text-xs italic">Affiliate Metadata</h4>
                       <div className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col gap-4">
                          <div className="flex justify-between items-center text-sm">
                             <span className="text-white/40">Affiliate ID Tracking</span>
                             <span className="font-mono text-brand-neon">PROP_HQ_9921_X</span>
                          </div>
                          <div className="flex justify-between items-center text-sm">
                             <span className="text-white/40">Global Referral Link</span>
                             <span className="font-mono text-white/60">apex.com/ref/hq</span>
                          </div>
                       </div>
                    </div>

                    <div className="flex gap-4">
                       <button onClick={handleSaveFirm} className="flex-grow py-5 bg-brand-neon text-black rounded-3xl font-bold neon-glow hover:scale-[1.02] transition-transform uppercase tracking-widest italic">
                          {editingFirm ? 'Update Nexus Data' : 'Execute System Launch'}
                       </button>
                       <button className="px-10 py-5 glass rounded-3xl font-bold hover:bg-white/10 uppercase tracking-widest" onClick={() => setIsModalOpen(false)}>Abort</button>
                    </div>
                 </div>
              </motion.div>
           </div>
         )}
      </AnimatePresence>
    </div>
  );
}
