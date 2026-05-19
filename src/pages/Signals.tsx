import { motion } from 'motion/react';
import { 
  Signal, 
  TrendingUp, 
  Zap, 
  Target, 
  Activity, 
  BarChart3, 
  Clock, 
  ShieldCheck,
  ChevronRight,
  Filter,
  ArrowUpRight,
  TrendingDown,
  Timer,
  AlertTriangle,
  Search
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useState } from 'react';

const SIGNAL_DATA = [
  {
    id: 1,
    pair: 'XAU/USD',
    type: 'LONG',
    entry: '2342.10',
    sl: '2331.00',
    tp: '2368.50',
    rr: '1:2.5',
    status: 'ACTIVE',
    winRate: '72%',
    time: '2m ago',
    confidence: 85,
    category: 'Commodities'
  },
  {
    id: 2,
    pair: 'EUR/USD',
    type: 'SHORT',
    entry: '1.08420',
    sl: '1.08650',
    tp: '1.07950',
    rr: '1:2.1',
    status: 'ACTIVE',
    winRate: '68%',
    time: '14m ago',
    confidence: 78,
    category: 'Forex'
  },
  {
    id: 3,
    pair: 'BTC/USD',
    type: 'LONG',
    entry: '66,240',
    sl: '65,400',
    tp: '68,200',
    rr: '1:1.8',
    status: 'PENDING',
    winRate: '64%',
    time: '45m ago',
    confidence: 62,
    category: 'Crypto'
  },
  {
    id: 4,
    pair: 'GBP/JPY',
    type: 'SHORT',
    entry: '192.450',
    sl: '193.100',
    tp: '190.500',
    rr: '1:3.0',
    status: 'CLOSED',
    result: 'HIT TP',
    winRate: '75%',
    time: '2h ago',
    profit: '+195 PIPS',
    category: 'Forex'
  },
  {
    id: 5,
    pair: 'NAS100',
    type: 'LONG',
    entry: '18,540',
    sl: '18,420',
    tp: '18,850',
    rr: '1:2.6',
    status: 'ACTIVE',
    winRate: '70%',
    time: '1h ago',
    confidence: 82,
    category: 'Indices'
  }
];

const PerformanceCard = ({ label, value, trend, icon: Icon, color }: any) => (
  <div className="glass-dark p-8 rounded-[40px] border-white/5 relative overflow-hidden group">
    <div className="absolute inset-0 bg-gradient-to-br from-brand-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    <div className="flex justify-between items-start mb-6">
       <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center border border-white/5 bg-white/5", color)}>
          <Icon size={28} />
       </div>
       <div className="flex items-center gap-1 text-[10px] font-bold text-brand-neon bg-brand-neon/10 px-3 py-1.5 rounded-full border border-brand-neon/20">
          <ArrowUpRight size={14} /> {trend}
       </div>
    </div>
    <div className="text-[9px] uppercase text-white/30 tracking-[0.3em] font-bold mb-2">{label}</div>
    <div className="text-4xl font-display font-bold uppercase italic tracking-tighter">{value}</div>
  </div>
);

export default function Signals() {
  const [filter, setFilter] = useState('ALL');

  const filteredSignals = filter === 'ALL' 
    ? SIGNAL_DATA 
    : SIGNAL_DATA.filter(s => s.category.toUpperCase() === filter || s.status === filter);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-neon/10 rounded-lg mb-6 border border-brand-neon/20">
              <Activity size={12} className="text-brand-neon animate-pulse" />
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-brand-neon">Neural Node Active</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-display font-bold uppercase italic tracking-tighter leading-[0.8]">
              Extraction <span className="text-brand-neon text-glow-neon">Delta.</span>
            </h1>
            <p className="text-xl text-white/40 mt-6 font-medium italic max-w-xl">
              Real-time algorithmic stream from the PropFutures neural matrix. Synchronize your entries with elite alpha.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-3 p-1.5 glass rounded-2xl bg-white/[0.02] border-white/5"
          >
             <button className="px-6 py-3 bg-brand-neon text-black rounded-xl text-[10px] font-bold uppercase tracking-widest neon-glow">Live Matrix</button>
             <button className="px-6 py-3 text-white/30 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">History Log</button>
             <button className="px-6 py-3 text-white/30 hover:text-white transition-colors text-[10px] font-bold uppercase tracking-widest">Provider Nodes</button>
          </motion.div>
        </div>

        {/* Performance Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
           <PerformanceCard label="Network Win-Rate" value="74.2%" trend="+4.2%" icon={Target} color="text-brand-neon" />
           <PerformanceCard label="PIP Extraction" value="12,402" trend="+850" icon={TrendingUp} color="text-brand-cyan" />
           <PerformanceCard label="Risk-Node Ratio" value="1:2.4" trend="+0.2" icon={ShieldCheck} color="text-white" />
           <PerformanceCard label="Active Syncs" value="482" trend="+12" icon={Zap} color="text-brand-neon" />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
           <div className="p-1 glass rounded-2xl flex items-center gap-1">
              {['ALL', 'FOREX', 'COMMODITIES', 'CRYPTO', 'INDICES'].map((f) => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "px-6 py-3 rounded-xl text-[9px] font-bold uppercase tracking-[0.2em] transition-all",
                    filter === f ? "bg-brand-neon text-black neon-glow" : "text-white/30 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {f}
                </button>
              ))}
           </div>
           <div className="ml-auto flex items-center gap-4">
              <button className="p-4 glass rounded-2xl text-white/30 hover:text-brand-neon transition-colors border-white/5"><Filter size={20}/></button>
              <div className="relative">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                 <input 
                  type="text" 
                  placeholder="SEARCH_DELTA..." 
                  className="bg-white/5 border border-white/5 rounded-2xl py-4 pl-12 pr-6 w-64 focus:outline-none focus:border-brand-neon transition-all text-[10px] font-bold font-mono tracking-widest text-brand-neon placeholder:text-white/10 uppercase italic"
                 />
              </div>
           </div>
        </div>

        {/* Signals Feed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {filteredSignals.map((signal, i) => (
             <motion.div
               key={signal.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="glass-dark p-10 rounded-[56px] border-white/5 relative group hover:border-brand-neon/30 transition-all duration-700 overflow-hidden"
             >
                <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity">
                   <Signal size={160}/>
                </div>

                <div className="flex justify-between items-start mb-10">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-white/[0.03] border border-white/5 rounded-3xl flex items-center justify-center neon-glow group-hover:scale-110 transition-transform">
                         <div className={cn(
                           "text-2xl font-bold font-display italic",
                           signal.type === 'LONG' ? "text-brand-neon" : "text-red-500"
                         )}>
                            {signal.pair.split('/')[0]}
                         </div>
                      </div>
                      <div>
                         <div className="flex items-center gap-3">
                            <h3 className="text-3xl font-display font-bold italic tracking-tighter uppercase">{signal.pair}</h3>
                            <span className={cn(
                              "px-3 py-1 rounded-lg text-[9px] font-black tracking-[0.2em] uppercase border",
                              signal.type === 'LONG' ? "text-brand-neon border-brand-neon/20 bg-brand-neon/5" : "text-red-500 border-red-500/20 bg-red-500/5"
                            )}>
                               {signal.type} NODE
                            </span>
                         </div>
                         <div className="flex items-center gap-4 mt-2">
                           <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest flex items-center gap-2">
                              <Clock size={12} /> {signal.time}
                           </span>
                           <span className="text-[10px] text-brand-cyan font-bold uppercase tracking-widest">{signal.category} CLUSTER</span>
                         </div>
                      </div>
                   </div>
                   <div className="text-right">
                      <div className="text-[9px] text-white/30 font-bold uppercase tracking-widest mb-1">Confidence Score</div>
                      <div className="text-2xl font-display font-bold text-brand-neon italic">{signal.confidence || signal.result}%</div>
                   </div>
                </div>

                <div className="grid grid-cols-3 gap-6 mb-10">
                   {[
                     { label: 'Entry Gateway', value: signal.entry, color: 'text-white' },
                     { label: 'Stop Termination', value: signal.sl, color: 'text-red-500' },
                     { label: 'Profit Extraction', value: signal.tp, color: 'text-brand-neon' },
                   ].map((item, j) => (
                     <div key={j} className="glass p-6 rounded-[28px] border-white/5 bg-white/[0.02]">
                        <div className="text-[8px] text-white/20 uppercase font-black tracking-[0.2em] mb-2">{item.label}</div>
                        <div className={cn("text-lg font-mono font-bold tracking-tighter", item.color)}>{item.value}</div>
                     </div>
                   ))}
                </div>

                <div className="flex items-center justify-between pb-8 border-b border-white/5 mb-8">
                   <div className="flex items-center gap-8">
                      <div>
                         <div className="text-[9px] text-white/20 font-bold uppercase tracking-widest mb-1">RR Ratio</div>
                         <div className="text-sm font-mono font-bold text-white/60">{signal.rr}</div>
                      </div>
                      <div>
                         <div className="text-[9px] text-white/20 font-bold uppercase tracking-widest mb-1">Win Rate</div>
                         <div className="text-sm font-mono font-bold text-brand-cyan">{signal.winRate}</div>
                      </div>
                   </div>
                   <div className="flex -space-x-3">
                      {[1, 2, 3].map((u) => (
                        <div key={u} className="w-8 h-8 rounded-full border-2 border-black bg-white/5 overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?img=${u + 10}`} alt="user" className="w-full h-full object-cover grayscale opacity-50" />
                        </div>
                      ))}
                      <div className="w-8 h-8 rounded-full border-2 border-black bg-brand-neon text-black flex items-center justify-center text-[8px] font-black">+42</div>
                   </div>
                </div>

                <div className="flex gap-4">
                   <button className="flex-grow py-5 bg-black border border-brand-neon/30 text-brand-neon rounded-2xl font-bold uppercase tracking-widest text-[10px] hover:bg-brand-neon hover:text-black transition-all neon-glow flex items-center justify-center gap-3 group">
                      Synchronize with MetaNode <Zap size={16} className="group-hover:animate-pulse" />
                   </button>
                   <button className="w-16 h-16 glass rounded-2xl flex items-center justify-center hover:bg-white/5 transition-all text-white/30 hover:text-white border-white/5">
                      <BarChart3 size={24} />
                   </button>
                </div>

                {signal.status === 'CLOSED' && (
                  <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center z-20">
                     <div className="bg-black/80 border border-brand-neon/30 px-10 py-6 rounded-3xl neon-glow">
                        <div className="text-[10px] text-white/40 font-bold uppercase tracking-[0.4em] mb-2 text-center">Extraction Finalized</div>
                        <div className="text-4xl font-display font-bold text-brand-neon italic tracking-tighter uppercase">{signal.profit} EXTRACTION</div>
                     </div>
                  </div>
                )}
             </motion.div>
           ))}
        </div>

        {/* Training CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-12 md:p-20 rounded-[56px] glass-dark border-brand-neon/20 relative overflow-hidden group shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)]"
        >
           <div className="absolute top-0 right-0 p-12 opacity-[0.05] pointer-events-none group-hover:scale-110 transition-transform duration-1000">
              <Timer size={300} className="text-brand-neon" />
           </div>
           
           <div className="max-w-2xl relative z-10">
              <div className="text-brand-neon text-[10px] font-bold uppercase tracking-[0.4em] mb-6">Neural Training Base</div>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase italic tracking-tighter mb-8 leading-[0.9]">
                 Learn to Extract <br /> <span className="text-brand-neon text-glow-neon">Delta Manually.</span>
              </h2>
              <p className="text-lg text-white/40 font-medium uppercase tracking-tight mb-12">
                 Join the elite node operators. Master the PROP_FUTURES.AI protocol for manual delta extraction across global liqudity clusters.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                 <button className="px-10 py-5 bg-brand-neon text-black rounded-2xl font-bold uppercase tracking-widest text-[10px] neon-glow hover:scale-[1.03] transition-all">Enroll Initial Rank</button>
                 <button className="px-10 py-5 glass rounded-2xl font-bold uppercase tracking-widest text-[10px] border-white/5">Analyze Strategy Matrix</button>
              </div>
           </div>
        </motion.div>
      </div>
    </div>
  );
}
