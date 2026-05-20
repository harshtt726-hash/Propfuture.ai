import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  Search, 
  ArrowRight, 
  Zap, 
  Star, 
  Clock, 
  Globe, 
  Target, 
  ChevronRight,
  TrendingUp,
  BrainCircuit,
  Info,
  X,
  Plus
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { stateService } from '../lib/stateService';

export default function CompareFirms() {
  const [selectedFirms, setSelectedFirms] = useState<any[]>([]);
  const [search, setSearch] = useState('');

  const firmsList = stateService.getFirms().map(f => ({
    id: f.id,
    name: f.name,
    funding: f.phaseNodes === 'INSTANT_FUNDED' ? '$10k - $100k' : '$50k - $300k',
    profit: f.profitSplit || '80%',
    drawdown: `${f.dailyDrawdown || '5%'} / ${f.totalDrawdown || '10%'}`,
    rules: f.restrictionsMatrix || 'No Copy Trading',
    fee: f.id === 1 ? '$147' : f.id === 2 ? '$32' : f.id === 3 ? '€155' : '$138',
    trust: f.trust,
    logo: f.name[0]
  }));

  const toggleFirm = (firm: any) => {
    if (selectedFirms.find(f => f.id === firm.id)) {
      setSelectedFirms(selectedFirms.filter(f => f.id !== firm.id));
    } else {
      if (selectedFirms.length >= 3) return;
      setSelectedFirms([...selectedFirms, firm]);
    }
  };

  const filteredFirms = firmsList.filter(f => 
    f.name.toLowerCase().includes(search.toLowerCase()) && 
    !selectedFirms.find(sf => sf.id === f.id)
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 max-w-7xl mx-auto min-h-screen pt-32 pb-32"
    >
      <div className="text-center mb-16 relative">
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-40 bg-brand-neon/5 blur-[120px] rounded-full pointer-events-none" />
         <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-xl mb-8 border-brand-neon/30">
            <ShieldCheck size={14} className="text-brand-neon" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-neon/80">Protocol_Comparison_Engine</span>
         </div>
         <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 uppercase italic tracking-tighter leading-[0.85]">
            NEURAL <span className="text-brand-neon text-glow-neon">MATRIX.</span>
         </h1>
         <p className="text-white/40 max-w-xl mx-auto text-sm font-medium uppercase tracking-[0.2em] leading-relaxed relative z-10">
            Select up to 3 neural entities to synchronize their protocol parameters across the comparison grid.
         </p>
      </div>

      {/* Selection Area */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
         {[0, 1, 2].map((i) => (
           <div key={i} className="group relative">
              <div className="h-64 rounded-[40px] glass-dark border-2 border-dashed border-white/5 flex flex-col items-center justify-center p-8 transition-all group-hover:border-brand-neon/30 relative overflow-hidden group-hover:bg-brand-neon/5">
                 <AnimatePresence mode="wait">
                    {selectedFirms[i] ? (
                      <motion.div 
                         key="selected"
                         initial={{ opacity: 0, scale: 0.9 }}
                         animate={{ opacity: 1, scale: 1 }}
                         exit={{ opacity: 0, scale: 0.9 }}
                         className="flex flex-col items-center text-center w-full"
                      >
                         <button 
                           onClick={() => toggleFirm(selectedFirms[i])}
                           className="absolute top-6 right-6 p-2 text-white/20 hover:text-red-500 transition-colors"
                         >
                            <X size={20} />
                         </button>
                         <div className="w-20 h-20 bg-brand-neon text-black rounded-[24px] flex items-center justify-center font-display font-bold text-4xl mb-6 shadow-[0_0_30px_rgba(198,255,0,0.3)]">
                            {selectedFirms[i].logo}
                         </div>
                         <h3 className="text-2xl font-display font-bold uppercase italic tracking-tighter text-white">{selectedFirms[i].name}</h3>
                         <div className="text-[10px] font-bold text-brand-neon uppercase tracking-widest mt-2">Active Node {i + 1}</div>
                      </motion.div>
                    ) : (
                      <motion.div 
                         key="empty"
                         className="flex flex-col items-center text-center"
                      >
                         <Plus size={40} className="text-white/10 group-hover:text-brand-neon transition-colors mb-4" />
                         <div className="text-[10px] font-bold text-white/20 uppercase tracking-widest group-hover:text-white transition-colors">Select Node {i + 1}</div>
                      </motion.div>
                    )}
                 </AnimatePresence>
              </div>
           </div>
         ))}
      </div>

      {/* Comparison Grid */}
      <div className="glass-dark rounded-[56px] border border-white/5 bg-black/60 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.5)] mb-20">
         <div className="grid grid-cols-4 border-b border-white/5">
            <div className="p-10 border-r border-white/5 bg-white/[0.02]">
               <div className="text-[11px] font-black text-brand-neon uppercase tracking-[0.3em] italic">Protocol Delta</div>
            </div>
            {[0, 1, 2].map((i) => (
              <div key={i} className="p-10 text-center border-r border-white/5 last:border-0 bg-white/[0.01]">
                 <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">
                   {selectedFirms[i] ? selectedFirms[i].name : `Node ${i + 1} Empty`}
                 </span>
              </div>
            ))}
         </div>

         {[
           { label: 'Neural Trust', key: 'trust', suffix: '/10', color: 'text-brand-neon' },
           { label: 'Funding Capacity', key: 'funding' },
           { label: 'Alpha Split', key: 'profit' },
           { label: 'Drawdown Logic', key: 'drawdown' },
           { label: 'Protocol Hooks', key: 'rules' },
           { label: 'Extraction Fee', key: 'fee' },
         ].map((row, i) => (
           <div key={i} className="grid grid-cols-4 border-b border-white/5 last:border-0 hover:bg-white/[0.01] transition-colors group">
              <div className="p-10 border-r border-white/5 bg-white/[0.02] flex items-center justify-between">
                 <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{row.label}</div>
                 <Info size={14} className="text-white/10 group-hover:text-brand-neon transition-colors" />
              </div>
              {[0, 1, 2].map((j) => (
                <div key={j} className="p-10 text-center border-r border-white/5 last:border-0 flex items-center justify-center">
                   {selectedFirms[j] ? (
                     <div className={cn("font-mono font-bold text-lg", row.color || "text-white")}>
                       {selectedFirms[j][row.key]}{row.suffix}
                     </div>
                   ) : (
                     <div className="text-white/[0.02]">—</div>
                   )}
                </div>
              ))}
           </div>
         ))}
      </div>

      {/* Firm Search Modal / Section */}
      <div className="max-w-4xl mx-auto">
         <div className="flex items-center gap-6 mb-10">
            <h2 className="text-3xl font-display font-bold uppercase italic tracking-tighter whitespace-nowrap">Initialize <span className="text-brand-neon underline">Nodes</span></h2>
            <div className="h-px bg-white/5 flex-grow" />
         </div>
         <div className="relative mb-8 group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-hover:text-brand-neon transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="SEARCH_DELTA_ENTITY..."
              className="w-full bg-black/40 border border-white/5 rounded-[24px] py-6 pl-16 pr-8 focus:outline-none focus:border-brand-neon transition-all font-mono text-[11px] font-bold tracking-widest text-brand-neon placeholder:text-white/10 italic uppercase"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredFirms.map((firm) => (
               <button 
                 key={firm.id}
                 onClick={() => toggleFirm(firm)}
                 disabled={selectedFirms.length >= 3}
                 className="flex items-center justify-between p-6 rounded-3xl glass-dark border border-white/5 hover:border-brand-neon/30 hover:bg-brand-neon/5 transition-all text-left disabled:opacity-50 disabled:cursor-not-allowed group"
               >
                  <div className="flex items-center gap-6">
                     <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center font-display font-bold text-xl group-hover:text-brand-neon transition-colors border border-white/5">
                        {firm.logo}
                     </div>
                     <div>
                        <div className="font-bold uppercase italic tracking-tighter">{firm.name}</div>
                        <div className="text-[9px] text-white/30 font-bold uppercase tracking-widest mt-1">Trust Score: {firm.trust}/10</div>
                     </div>
                  </div>
                  <Plus size={20} className="text-white/20 group-hover:text-brand-neon transition-colors" />
               </button>
            ))}
         </div>
      </div>
    </motion.div>
  );
}
