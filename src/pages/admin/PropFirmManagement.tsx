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
  X,
  User,
  DollarSign,
  Layers
} from 'lucide-react';
import { cn } from '../../lib/utils';
import ImageUpload from '../../components/ui/ImageUpload';

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
  const [activeTab, setActiveTab] = useState('identity');
  const [search, setSearch] = useState('');

  const filteredFirms = firms.filter(f => 
    f.name.toLowerCase().includes(search.toLowerCase()) || 
    f.category.toLowerCase().includes(search.toLowerCase())
  );

  const tabs = [
    { id: 'identity', label: 'Identity', icon: User },
    { id: 'commercial', label: 'Commercial', icon: DollarSign },
    { id: 'rules', label: 'Rules & Logic', icon: ShieldCheck },
    { id: 'media', label: 'Media & Social', icon: Layers },
    { id: 'metadata', label: 'Status & Tags', icon: Zap },
  ];

  const handleToggleStatus = (id: number) => {
    setFirms(firms.map(f => f.id === id ? { ...f, status: f.status === 'Active' ? 'Paused' : 'Active' } : f));
  };

  const handleSaveFirm = () => {
    // Real logic would be here
    alert('Matrix synchronized successfully!');
    setIsModalOpen(false);
  };

  const handleDeleteFirm = (id: number) => {
    if (window.confirm('Terminate this protocol node? This action is irreversible across the matrix.')) {
      setFirms(firms.filter(f => f.id !== id));
    }
  };

  return (
    <div className="space-y-10 pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div>
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-neon/10 rounded-lg mb-4 border border-brand-neon/20">
              <ShieldCheck size={12} className="text-brand-neon" />
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-brand-neon">Protocol_Registry</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-display font-bold uppercase italic tracking-tighter">Partner <span className="text-brand-neon">Nexus</span></h1>
           <p className="text-[11px] text-white/30 font-bold uppercase tracking-[0.3em] mt-2">Manage prop firm synchronization and extraction rules</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative group flex-grow sm:flex-grow-0">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-brand-neon transition-colors" size={16} />
            <input 
              type="text" 
              placeholder="FILTER_NODES..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full sm:w-64 bg-white/5 border border-white/10 rounded-2xl py-3.5 pl-12 pr-6 focus:outline-none focus:border-brand-neon font-mono text-[10px] uppercase tracking-widest text-brand-neon placeholder:text-white/20"
            />
          </div>
          <button 
            onClick={() => { setEditingFirm(null); setIsModalOpen(true); }}
            className="px-8 py-4 bg-brand-neon text-black rounded-[24px] flex items-center justify-center gap-3 text-xs font-black neon-glow hover:scale-[1.02] transition-all uppercase tracking-widest italic"
          >
            <Plus size={18} /> Initialize New Node
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredFirms.map((firm) => (
            <motion.div 
              layout
              key={firm.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-dark p-10 rounded-[56px] bg-black/60 border-white/5 relative group hover:border-brand-neon/30 transition-all duration-700 overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-10 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                 <ShieldCheck size={120} />
              </div>

               <div className="flex justify-between items-start mb-10 relative z-10">
                  <div className="flex items-center gap-6">
                     <div className="w-16 h-16 bg-white/[0.03] border border-white/5 rounded-[24px] flex items-center justify-center text-3xl font-bold group-hover:scale-110 transition-transform text-brand-neon italic shadow-[0_0_20px_rgba(198,255,0,0.1)]">
                        {firm.name[0]}
                     </div>
                     <div>
                        <h4 className="text-3xl font-display font-bold uppercase italic tracking-tighter">{firm.name}</h4>
                        <div className="flex items-center gap-3 mt-2">
                           <span className={cn(
                             "text-[9px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full border",
                             firm.status === 'Active' ? "text-brand-neon border-brand-neon/20 bg-brand-neon/5" : "text-red-500 border-red-500/20 bg-red-500/5 shadow-[0_0_15px_rgba(239,68,68,0.1)]"
                           )}>
                             {firm.status} NODE
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className="flex gap-2">
                     <button className="p-4 glass rounded-2xl hover:bg-white/10 transition-colors border-white/5" onClick={() => { setEditingFirm(firm); setIsModalOpen(true); }}><Settings size={18} /></button>
                     <button className="p-4 glass rounded-2xl hover:bg-red-500/10 hover:text-red-500 transition-colors border-white/5" onClick={() => handleDeleteFirm(firm.id)}><Trash2 size={18} /></button>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-4 mb-10 relative z-10">
                  {[
                     { label: 'Neural Trust', value: `${firm.trust}/10`, icon: Star, color: 'text-yellow-500' },
                     { label: 'Delta Extract', value: firm.discount, icon: Zap, color: 'text-brand-neon' },
                     { label: 'Sync Speed', value: firm.speed, icon: Clock, color: 'text-white/70' },
                     { label: 'Node Yield', value: '4.8%', icon: TrendingUp, color: 'text-brand-cyan' },
                  ].map((item, i) => (
                    <div key={i} className="glass p-5 rounded-3xl text-center bg-white/[0.02] border-white/5 group-hover:bg-brand-neon/[0.02] transition-colors">
                       <div className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-2">{item.label}</div>
                       <div className={cn("text-xl font-mono font-bold tracking-tighter", item.color)}>{item.value}</div>
                    </div>
                  ))}
               </div>

               <div className="flex items-center justify-between p-6 rounded-3xl bg-white/[0.02] border border-white/5 mb-10 relative z-10 group-hover:bg-brand-neon/[0.02] transition-colors">
                  <div className="flex gap-8">
                     <div>
                        <div className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-1">Featured</div>
                        <div className="flex h-6 w-12 bg-white/5 rounded-full p-1 cursor-pointer transition-colors hover:bg-white/10" onClick={() => handleToggleStatus(firm.id)}>
                           <div className={cn("h-4 w-4 rounded-full transition-all duration-300", firm.status === 'Active' ? 'translate-x-6 bg-brand-neon neon-glow' : 'bg-white/20')} />
                        </div>
                     </div>
                     <div>
                        <div className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-1">Trending</div>
                        <div className="flex h-6 w-12 bg-white/5 rounded-full p-1 cursor-pointer transition-colors hover:bg-white/10">
                           <div className="h-4 w-4 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(0,255,255,0.3)]" />
                        </div>
                     </div>
                  </div>
                  <div className="text-right">
                     <div className="text-[9px] text-white/20 font-bold uppercase tracking-widest mb-1">Extraction Code</div>
                     <div className="font-mono text-xs text-brand-neon">PRO_99_X</div>
                  </div>
               </div>

               <button 
                  onClick={() => handleToggleStatus(firm.id)}
                  className={cn(
                    "w-full py-5 rounded-2xl text-[10px] font-black transition-all uppercase tracking-[0.3em] italic relative z-10",
                    firm.status === 'Active' ? "bg-red-500/10 text-red-500 border border-red-500/20 hover:bg-red-500 hover:text-white" : "bg-brand-neon/10 text-brand-neon border border-brand-neon/20 hover:bg-brand-neon hover:text-black"
                  )}
                >
                  {firm.status === 'Active' ? 'TERMINATE NODE' : 'INITIALIZE NODE'}
                </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Enhanced Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 40 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 40 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="w-full max-w-5xl glass-dark rounded-[56px] border border-white/10 overflow-hidden relative z-10 shadow-[0_50px_100px_rgba(0,0,0,0.8)]"
            >
               <div className="flex h-[80vh] flex-col md:flex-row">
                  {/* Left Sidebar Tabs */}
                  <div className="w-full md:w-80 border-r border-white/5 p-10 bg-black/40 flex flex-col h-full overflow-y-auto">
                     <div className="mb-12">
                        <h2 className="text-3xl font-display font-bold uppercase italic tracking-tighter leading-none mb-2">Protocol <br /> <span className="text-brand-neon">Editor</span></h2>
                        <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest italic whitespace-nowrap">Configure global delta parameters</p>
                     </div>
                     <div className="space-y-2 flex-grow">
                        {tabs.map((tab) => (
                           <button 
                             key={tab.id}
                             onClick={() => setActiveTab(tab.id)}
                             className={cn(
                               "w-full flex items-center gap-4 p-5 rounded-3xl text-sm font-bold transition-all relative group",
                               activeTab === tab.id 
                                ? "bg-brand-neon text-black neon-glow" 
                                : "text-white/40 hover:bg-white/5 hover:text-white"
                             )}
                           >
                              <tab.icon size={20} />
                              <span className="uppercase tracking-widest text-[11px] font-black italic">{tab.label}</span>
                              {activeTab === tab.id && (
                                <motion.div layoutId="tab-active" className="absolute left-[-20px] w-1.5 h-8 bg-brand-neon rounded-full hidden md:block" />
                              )}
                           </button>
                        ))}
                     </div>
                     <button onClick={() => setIsModalOpen(false)} className="mt-8 flex items-center gap-3 p-5 rounded-3xl text-red-500/60 hover:text-red-500 hover:bg-red-500/10 transition-all font-bold text-[10px] uppercase tracking-widest">
                        <X size={18} /> ABORT_SYSTEM
                     </button>
                  </div>

                  {/* Content Area */}
                  <div className="flex-grow flex flex-col min-h-0">
                     <div className="p-12 overflow-y-auto flex-grow scrollbar-hide">
                        <AnimatePresence mode="wait">
                           <motion.div
                             key={activeTab}
                             initial={{ opacity: 0, x: 20 }}
                             animate={{ opacity: 1, x: 0 }}
                             exit={{ opacity: 0, x: -20 }}
                             className="space-y-10"
                           >
                              {activeTab === 'identity' && (
                                 <div className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                       <div className="space-y-2">
                                          <label className="text-[10px] uppercase font-black text-brand-neon tracking-[0.3em] px-1 italic">Firm Global Name</label>
                                          <input 
                                            type="text" 
                                            defaultValue={editingFirm?.name}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:border-brand-neon font-mono text-sm tracking-widest italic uppercase"
                                            placeholder="e.g. APEX_PROTOCOL"
                                          />
                                       </div>
                                       <div className="space-y-2">
                                          <label className="text-[10px] uppercase font-black text-white/50 tracking-[0.3em] px-1 italic">Asset Logic Category</label>
                                          <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:border-brand-neon font-mono text-sm uppercase tracking-widest appearance-none cursor-pointer">
                                             <option>Futures_Cluster</option>
                                             <option>Forex_Bridge</option>
                                             <option>Crypto_Network</option>
                                          </select>
                                       </div>
                                    </div>
                                    <div className="space-y-2">
                                       <label className="text-[10px] uppercase font-black text-white/50 tracking-[0.3em] px-1 italic">Protocol Overview (Bio)</label>
                                       <textarea 
                                         className="w-full bg-white/5 border border-white/10 rounded-3xl py-5 px-6 focus:outline-none focus:border-brand-neon font-medium text-sm min-h-[150px] resize-none"
                                         placeholder="Enter enterprise description here..."
                                       />
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                       <div className="space-y-2">
                                          <label className="text-[10px] uppercase font-black text-white/50 tracking-[0.3em] px-1 italic">Trust Score</label>
                                          <input type="number" step="0.1" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-neon font-mono" placeholder="9.8" />
                                       </div>
                                       <div className="space-y-2">
                                          <label className="text-[10px] uppercase font-black text-white/50 tracking-[0.3em] px-1 italic">Verification Level</label>
                                          <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-neon font-mono uppercase text-xs">
                                             <option>TIER_1_VERIFIED</option>
                                             <option>PENDING_AUDIT</option>
                                          </select>
                                       </div>
                                       <div className="space-y-2">
                                          <label className="text-[10px] uppercase font-black text-white/30 tracking-[0.3em] px-1 italic">Company Origin</label>
                                          <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-neon font-mono" placeholder="USA" />
                                       </div>
                                    </div>
                                 </div>
                              )}

                              {activeTab === 'commercial' && (
                                 <div className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                       <div className="space-y-2">
                                          <label className="text-[10px] uppercase font-black text-brand-neon tracking-[0.3em] px-1 italic">Affiliate Referral Payout</label>
                                          <input 
                                            type="text" 
                                            defaultValue={editingFirm?.discount}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:border-brand-neon font-mono"
                                            placeholder="e.g. 15%"
                                          />
                                       </div>
                                       <div className="space-y-2">
                                          <label className="text-[10px] uppercase font-black text-white/30 tracking-[0.3em] px-1 italic">Extraction (Payout) Speed</label>
                                          <input 
                                            type="text" 
                                            defaultValue={editingFirm?.speed}
                                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:border-brand-neon font-mono"
                                            placeholder="e.g. 24_HOURS"
                                          />
                                       </div>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                       <div className="space-y-2">
                                          <label className="text-[10px] uppercase font-black text-white/30 tracking-[0.3em] px-1 italic">Coupon Code</label>
                                          <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-neon font-black italic tracking-widest text-brand-neon uppercase" placeholder="PROP_50" />
                                       </div>
                                       <div className="space-y-2">
                                          <label className="text-[10px] uppercase font-black text-white/30 tracking-[0.3em] px-1 italic">Discount Value</label>
                                          <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-neon font-mono" placeholder="50%" />
                                       </div>
                                       <div className="space-y-2">
                                          <label className="text-[10px] uppercase font-black text-white/30 tracking-[0.3em] px-1 italic">Countdown End</label>
                                          <input type="datetime-local" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-neon font-mono text-xs" />
                                       </div>
                                    </div>
                                    <div className="p-10 rounded-[40px] bg-brand-neon/5 border border-brand-neon/20">
                                       <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-neon mb-6 italic">Extraction Logic Configuration</h4>
                                       <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                          {[
                                            { label: 'One-Click Buy', value: true },
                                            { label: 'Instant Delivery', value: true },
                                            { label: 'Global Availability', value: true },
                                            { label: 'Verified Partner', value: false },
                                          ].map((toggle, j) => (
                                            <div key={j} className="flex justify-between items-center bg-black/40 p-4 rounded-2xl border border-white/5">
                                               <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">{toggle.label}</span>
                                               <div className={cn("w-10 h-5 rounded-full flex items-center p-1 transition-all", toggle.value ? 'bg-brand-neon' : 'bg-white/10')}>
                                                  <div className={cn("w-3 h-3 rounded-full bg-black transition-all", toggle.value && 'translate-x-5')} />
                                               </div>
                                            </div>
                                          ))}
                                       </div>
                                    </div>
                                 </div>
                              )}

                              {activeTab === 'media' && (
                                 <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                       <ImageUpload label="Primary Branding (Logo)" />
                                       <ImageUpload label="Hero Coverage (Cover)" />
                                    </div>
                                    <div className="p-8 rounded-[36px] bg-brand-neon/[0.03] border border-brand-neon/10 flex items-center justify-between">
                                       <div>
                                          <div className="text-[10px] font-black uppercase text-brand-neon mb-1 italic">Media_Node_Sync</div>
                                          <p className="text-[9px] text-white/30 uppercase font-bold">Synchronizing assets with global CDN layers.</p>
                                       </div>
                                       <Zap size={24} className="text-brand-neon opacity-20" />
                                    </div>
                                 </div>
                              )}

                              {activeTab === 'rules' && (
                                 <div className="space-y-8">
                                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                                       <div className="space-y-2">
                                          <label className="text-[10px] uppercase font-black text-white/30 tracking-[0.3em] px-1 italic">Profit Split</label>
                                          <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-neon font-mono" placeholder="90/10" />
                                       </div>
                                       <div className="space-y-2">
                                          <label className="text-[10px] uppercase font-black text-white/30 tracking-[0.3em] px-1 italic">Daily Drawdown</label>
                                          <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-neon font-mono" placeholder="5%" />
                                       </div>
                                       <div className="space-y-2">
                                          <label className="text-[10px] uppercase font-black text-white/30 tracking-[0.3em] px-1 italic">Total Drawdown</label>
                                          <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-neon font-mono" placeholder="10%" />
                                       </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                       <div className="space-y-2">
                                          <label className="text-[10px] uppercase font-black text-white/30 tracking-[0.3em] px-1 italic">Phase Nodes</label>
                                          <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:border-brand-neon font-mono uppercase tracking-widest text-xs">
                                             <option>1_PHASE_EVAL</option>
                                             <option>2_PHASE_DELTA</option>
                                             <option>INSTANT_FUNDED</option>
                                          </select>
                                       </div>
                                       <div className="space-y-2">
                                          <label className="text-[10px] uppercase font-black text-white/30 tracking-[0.3em] px-1 italic">Trading Platform</label>
                                          <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:border-brand-neon font-mono" placeholder="MT5, Rithmic" />
                                       </div>
                                    </div>
                                    <div className="space-y-2">
                                       <label className="text-[10px] uppercase font-black text-white/30 tracking-[0.3em] px-1 italic">Restrictions Matrix</label>
                                       <input type="text" className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-6 focus:outline-none focus:border-brand-neon font-mono" placeholder="No HFT, No News Trading" />
                                    </div>
                                 </div>
                              )}

                              {activeTab === 'metadata' && (
                                 <div className="space-y-8">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                       <div className="p-8 rounded-[40px] bg-white/[0.02] border border-white/5 space-y-6">
                                          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40 italic">Global Status Flags</h4>
                                          <div className="space-y-4">
                                             {['Featured_Matrix', 'Trending_Protocol', 'Show_Reviews', 'Show_Payouts'].map((flag, k) => (
                                                <div key={k} className="flex justify-between items-center">
                                                   <span className="text-[11px] font-bold text-white/60 tracking-wider font-mono">{flag}</span>
                                                   <div className="w-10 h-5 bg-white/5 rounded-full p-1 cursor-pointer">
                                                      <div className="w-3 h-3 bg-brand-neon rounded-full shadow-[0_0_10px_rgba(198,255,0,0.5)]" />
                                                   </div>
                                                </div>
                                             ))}
                                          </div>
                                       </div>
                                       <div className="space-y-6">
                                           <div className="space-y-2">
                                              <label className="text-[10px] uppercase font-black text-white/30 tracking-[0.3em] px-1 italic">Categorization Cluster</label>
                                              <div className="flex flex-wrap gap-2">
                                                 {['Forex', 'Futures', 'Swing', 'Aggressive'].map(tag => (
                                                   <button key={tag} className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-[9px] font-bold uppercase tracking-widest text-white/40 hover:text-brand-neon hover:border-brand-neon/30 transition-all">{tag}</button>
                                                 ))}
                                                 <button className="px-5 py-2 bg-brand-neon/10 border border-brand-neon/30 rounded-xl text-[9px] font-black uppercase text-brand-neon">+ ADD</button>
                                              </div>
                                           </div>
                                           <div className="space-y-2">
                                              <label className="text-[10px] uppercase font-black text-white/30 tracking-[0.3em] px-1 italic">System Admin Note</label>
                                              <textarea className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-neon font-medium text-xs h-32 resize-none" placeholder="Internal notes for this partner..." />
                                           </div>
                                       </div>
                                    </div>
                                 </div>
                              )}
                           </motion.div>
                        </AnimatePresence>
                     </div>

                     {/* Footer Actions */}
                     <div className="p-10 border-t border-white/5 bg-black/40 flex items-center justify-between">
                        <div className="flex items-center gap-6">
                           <div className="text-right">
                              <div className="text-[9px] text-white/20 font-bold uppercase tracking-widest leading-none">Internal Registry ID</div>
                              <div className="text-xs font-mono font-bold text-white/40 mt-1">NODE_PRTCL_44921_L5</div>
                           </div>
                        </div>
                        <div className="flex gap-4">
                           <button onClick={() => setIsModalOpen(false)} className="px-10 py-5 rounded-2xl font-bold text-[10px] uppercase tracking-widest text-white/40 hover:bg-white/5 transition-all">Discard Changes</button>
                           <button onClick={handleSaveFirm} className="px-14 py-5 bg-brand-neon text-black rounded-[24px] font-black italic text-[11px] uppercase tracking-[0.3em] shadow-[0_0_30px_rgba(198,255,0,0.3)] hover:scale-[1.03] active:scale-95 transition-all">
                              {editingFirm ? 'Synchronize Delta' : 'Execute Final Launch'}
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
