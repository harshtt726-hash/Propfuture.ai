import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Search, Filter, ShieldCheck, Star, ArrowRight, Zap, Info, Clock, CheckCircle2, TrendingUp, Sparkles, BrainCircuit, X } from 'lucide-react';
import { cn } from '../lib/utils';

const FIRMS = [
  { id: 1, name: 'Apex Trader', category: 'Futures', discount: '20%', speed: 'Instant', trust: 9.8, rating: 4.9, active: true, xp: '2.5x' },
  { id: 2, name: 'Funding Pips', category: 'Forex', discount: '15%', speed: '24h', trust: 9.5, rating: 4.8, active: true, xp: '1.8x' },
  { id: 3, name: 'FTMO', category: 'Forex', discount: '10%', speed: 'Same Day', trust: 9.9, rating: 5.0, active: true, xp: '1.2x' },
  { id: 4, name: 'Topstep', category: 'Futures', discount: '5%', speed: 'Instant', trust: 9.7, rating: 4.7, active: true, xp: '1.5x' },
  { id: 5, name: 'The5ers', category: 'Forex', discount: '12%', speed: '48h', trust: 9.2, rating: 4.5, active: false, xp: '1.0x' },
  { id: 6, name: 'Bulenox', category: 'Futures', discount: '80%', speed: '24h', trust: 8.5, rating: 4.2, active: true, xp: '3.0x' },
];

const FirmModal = ({ firm, onClose }: { firm: any, onClose: () => void }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-[60] flex items-center justify-center px-4"
  >
    <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={onClose} />
    <motion.div 
      initial={{ scale: 0.9, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.9, opacity: 0, y: 30 }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      className="relative glass-dark max-w-2xl w-full rounded-[48px] overflow-hidden border-brand-neon/20 shadow-[0_0_100px_rgba(198,255,0,0.1)]"
    >
      <div className="p-10 md:p-14">
        <div className="flex justify-between items-start mb-10">
           <div className="flex items-center gap-6">
              <div className="w-20 h-20 bg-brand-neon/10 border border-brand-neon/20 rounded-[30px] flex items-center justify-center text-3xl font-bold text-brand-neon neon-glow">
                 {firm.name[0]}
              </div>
              <div>
                <h2 className="text-4xl font-display font-bold uppercase italic tracking-tighter">{firm.name}</h2>
                <div className="flex items-center gap-2 text-white/40 text-[10px] font-bold uppercase tracking-widest mt-2">
                  <Star size={14} className="text-brand-neon" fill="currentColor"/> {firm.rating} AUDITED PERFORMANCE
                </div>
              </div>
           </div>
           <button onClick={onClose} className="p-3 bg-white/5 hover:bg-brand-neon hover:text-black rounded-2xl transition-all border border-white/5">
            <Clock size={20} className="rotate-45" />
           </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {[
            { label: 'Ecosystem', val: firm.category },
            { label: 'Neural Alpha', val: firm.discount },
            { label: 'Global Rank', val: '#' + firm.id },
            { label: 'XP Mult', val: firm.xp }
          ].map((item, i) => (
            <div key={i} className="glass p-5 rounded-3xl text-center border-white/5">
              <div className="text-[9px] uppercase text-white/30 tracking-[0.2em] mb-2 font-bold">{item.label}</div>
              <div className="font-mono font-bold text-brand-neon text-sm">{item.val}</div>
            </div>
          ))}
        </div>

        <div className="space-y-8 mb-14">
          <h3 className="font-bold text-xs uppercase tracking-[0.4em] text-white/40 italic">System Capabilities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
             {[
               '90% Maximum Profit Allocation',
               'Instant Phase-Zero Payouts',
               'Algorithmic Trading Permitted',
               'Neural Risk Management Shield'
             ].map((feature, i) => (
               <div key={i} className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-widest text-white/60">
                 <div className="w-5 h-5 rounded-full bg-brand-neon/20 flex items-center justify-center border border-brand-neon/30">
                    <CheckCircle2 size={12} className="text-brand-neon" />
                 </div>
                 {feature}
               </div>
             ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-5">
          <button className="flex-grow py-5 bg-brand-neon text-black rounded-2xl font-bold neon-glow hover:scale-[1.02] transition-all uppercase tracking-widest text-[10px]">
            Initialize Neural Challenge
          </button>
          <button className="px-10 py-5 glass rounded-2xl font-bold hover:bg-white/5 border-white/10 uppercase tracking-widest text-[10px]">
            Direct Link
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default function PropFirms() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [selectedFirm, setSelectedFirm] = useState<any>(null);
  const [compareList, setCompareList] = useState<any[]>([]);

  const categories = ['All', 'Forex', 'Futures', 'Swing', 'Aggressive'];

  const filteredFirms = FIRMS.filter(f => 
    (filter === 'All' || f.category === filter) &&
    f.name.toLowerCase().includes(search.toLowerCase())
  );

  const toggleCompare = (firm: any) => {
    if (compareList.find(f => f.id === firm.id)) {
      setCompareList(compareList.filter(f => f.id !== firm.id));
    } else {
      if (compareList.length >= 3) {
        alert('Max 3 firms for comparison');
        return;
      }
      setCompareList([...compareList, firm]);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 max-w-7xl mx-auto min-h-screen pt-24 pb-32"
    >
      <div className="mb-20 text-center relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-40 bg-brand-neon/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-neon/10 rounded-xl mb-8 border border-brand-neon/20">
           <BrainCircuit size={14} className="text-brand-neon" />
           <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-neon/80">Neural Analysis v4.2</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 uppercase italic tracking-tighter">
          Firm <span className="text-brand-neon text-glow-neon">Matrix</span>
        </h1>
        <p className="text-white/40 max-w-xl mx-auto text-sm font-medium uppercase tracking-[0.2em] leading-relaxed">
          Navigate and compare the multiverse of funding structures through our neural processing layer.
        </p>
      </div>

      {/* Control Bar */}
      <div className="flex flex-col lg:flex-row gap-6 mb-16">
        <div className="relative flex-grow group">
          <div className="absolute -inset-1 bg-gradient-to-r from-brand-neon/20 to-brand-cyan/20 rounded-3xl blur opacity-0 group-focus-within:opacity-100 transition-opacity" />
          <div className="relative">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20" size={20} />
            <input 
              type="text" 
              placeholder="SEARCH NEURAL FREQUENCY..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black/40 border border-white/5 rounded-3xl py-6 pl-14 pr-6 focus:outline-none focus:border-brand-neon transition-all font-mono text-xs font-bold tracking-widest text-brand-neon"
            />
          </div>
        </div>
        <div className="flex gap-2 p-1.5 glass rounded-[28px] overflow-x-auto no-scrollbar border-white/5">
          {categories.map((cat) => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-8 py-4 rounded-[20px] text-[10px] font-bold uppercase tracking-[0.2em] transition-all whitespace-nowrap",
                filter === cat ? "bg-brand-neon text-black neon-glow shadow-[0_0_20px_rgba(198,255,0,0.3)]" : "text-white/30 hover:text-white hover:bg-white/5"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredFirms.map((firm, i) => (
            <motion.div 
              layout
              key={firm.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ delay: i * 0.05 }}
              className="group relative"
            >
              <div className={cn(
                "glass-dark p-10 rounded-[48px] border-white/5 hover:border-brand-neon/30 transition-all duration-700 flex flex-col h-full bg-black/60 relative overflow-hidden",
                compareList.find(f => f.id === firm.id) && "ring-2 ring-brand-neon ring-inset bg-brand-neon/5"
              )}>
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                   <BrainCircuit size={120} />
                </div>
                
                <div className="flex justify-between items-start mb-10">
                  <div className="w-16 h-16 bg-white/5 rounded-[24px] flex items-center justify-center font-display font-bold text-2xl group-hover:scale-110 transition-transform border border-white/5 text-brand-neon">
                    {firm.name[0]}
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {firm.active ? (
                      <div className="px-4 py-1.5 bg-brand-neon/10 text-brand-neon rounded-xl text-[9px] font-bold uppercase tracking-[0.2em] border border-brand-neon/20">
                        NEURAL OK
                      </div>
                    ) : (
                      <div className="px-4 py-1.5 bg-red-500/10 text-red-500 rounded-xl text-[9px] font-bold uppercase tracking-[0.2em] border border-red-500/20">
                        OFFLINE
                      </div>
                    )}
                    <div className="px-3 py-1 bg-brand-cyan/10 text-brand-cyan rounded-lg text-[8px] font-bold uppercase tracking-widest border border-brand-cyan/20">
                       {firm.xp} XP Multiplier
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-2xl font-display font-bold uppercase italic tracking-tighter mb-2 group-hover:text-brand-neon transition-colors">{firm.name}</h3>
                  <div className="flex items-center gap-2">
                    <Star size={14} className="text-brand-neon" fill="currentColor" />
                    <span className="font-mono font-bold text-[10px] text-white/60">{firm.rating}/5.00 NEURAL TRUST</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-10">
                   <div className="p-5 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-neon/30 transition-colors">
                      <div className="text-[8px] uppercase text-white/20 tracking-[0.3em] mb-2 font-bold">CASHBACK</div>
                      <div className="font-mono font-bold text-brand-neon text-lg">{firm.discount}</div>
                   </div>
                   <div className="p-5 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-brand-cyan/30 transition-colors">
                      <div className="text-[8px] uppercase text-white/20 tracking-[0.3em] mb-2 font-bold">LATENCY</div>
                      <div className="font-mono font-bold text-brand-cyan text-lg">{firm.speed}</div>
                   </div>
                </div>

                <div className="mt-auto space-y-4">
                  <button className="w-full bg-brand-neon text-black font-bold py-5 rounded-2xl hover:neon-glow hover:scale-[1.02] transition-all uppercase tracking-widest text-[10px] italic">
                    Initialize Link
                  </button>
                  <div className="grid grid-cols-2 gap-4">
                    <button 
                      onClick={() => setSelectedFirm(firm)}
                      className="border border-white/5 glass-dark text-white/40 font-bold py-5 rounded-2xl hover:bg-white/5 transition-all text-[9px] uppercase tracking-widest flex items-center justify-center gap-2"
                    >
                      Profile <Info size={14} />
                    </button>
                    <button 
                      onClick={() => toggleCompare(firm)}
                      className={cn(
                        "border font-bold py-5 rounded-2xl transition-all text-[9px] uppercase tracking-widest flex items-center justify-center gap-2",
                        compareList.find(f => f.id === firm.id) 
                          ? "bg-brand-neon text-black border-brand-neon" 
                          : "border-white/5 glass-dark text-white/40 hover:bg-white/5"
                      )}
                    >
                      Compare <ShieldCheck size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Comparison Tray */}
      <AnimatePresence>
        {compareList.length > 0 && (
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 w-full max-w-4xl px-6"
          >
            <div className="glass-dark bg-black/90 p-6 rounded-[32px] border border-brand-neon/30 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex gap-4">
                {compareList.map(f => (
                  <div key={f.id} className="relative group">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center font-bold text-brand-neon border border-brand-neon/20">
                      {f.name[0]}
                    </div>
                    <button 
                      onClick={() => toggleCompare(f)}
                      className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Info size={12} className="rotate-45" />
                    </button>
                  </div>
                ))}
                {[...Array(3 - compareList.length)].map((_, i) => (
                  <div key={i} className="w-14 h-14 bg-white/[0.02] rounded-2xl border border-white/5 border-dashed flex items-center justify-center text-white/10">
                    +
                  </div>
                ))}
              </div>
              
              <div className="flex items-center gap-6">
                <div className="text-right hidden sm:block">
                  <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Selected Entities</div>
                  <div className="text-sm font-bold text-brand-neon">{compareList.length} of 3 MATRIX CELLS</div>
                </div>
                <button 
                  onClick={() => alert('Comparison Matrix Initialized!')}
                  className="px-10 py-5 bg-brand-neon text-black rounded-2xl font-bold neon-glow uppercase tracking-widest text-[10px] italic shadow-[0_0_30px_rgba(198,255,0,0.4)]"
                >
                  Analyze Matrix
                </button>
                <button onClick={() => setCompareList([])} className="text-white/30 hover:text-white transition-colors"><X size={20}/></button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedFirm && (
          <FirmModal firm={selectedFirm} onClose={() => setSelectedFirm(null)} />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
