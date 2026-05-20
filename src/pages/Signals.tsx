import { motion, AnimatePresence } from 'motion/react';
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
  Search,
  Calendar,
  ArrowRight,
  BrainCircuit,
  Cpu,
  Monitor
} from 'lucide-react';
import { cn } from '../lib/utils';
import { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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
    category: 'COMMODITIES',
    provider: 'Neural Apex'
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
    category: 'FOREX',
    provider: 'Alpha Quantum'
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
    category: 'CRYPTO',
    provider: 'Bit Node'
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
    category: 'FOREX',
    provider: 'London Core'
  }
];

const chartData = [
  { time: '00:00', value: 2100 },
  { time: '04:00', value: 2350 },
  { time: '08:00', value: 2200 },
  { time: '12:00', value: 2600 },
  { time: '16:00', value: 2400 },
  { time: '20:00', value: 2800 },
];

export default function Signals() {
  const [filter, setFilter] = useState('ALL');
  const [activeSignal, setActiveSignal] = useState(SIGNAL_DATA[0]);

  const filteredSignals = filter === 'ALL' 
    ? SIGNAL_DATA 
    : SIGNAL_DATA.filter(s => s.category === filter);

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-neon/10 rounded-xl mb-6 border border-brand-neon/20">
              <Activity size={14} className="text-brand-neon animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-neon">Neural Node Active</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold uppercase italic tracking-tighter leading-[0.8] mb-8">
              Extraction <br /> <span className="text-brand-neon text-glow-neon">Signals.</span>
            </h1>
            <p className="text-xl text-white/50 font-medium italic max-w-xl">
              Real-time deep-learning algorithmic stream from the PropFutures neural layer. Synchronize your endpoints with hyper-liquidity nodes.
            </p>
          </motion.div>

          <div className="flex flex-col items-end gap-6">
             <div className="flex gap-4">
                <div className="glass p-5 rounded-3xl border-white/5 bg-black/40 text-center min-w-[120px]">
                   <div className="text-[9px] text-white/30 font-bold uppercase tracking-widest mb-1">NODE_SUCCESS</div>
                   <div className="text-2xl font-mono font-bold text-brand-neon">74.2%</div>
                </div>
                <div className="glass p-5 rounded-3xl border-white/5 bg-black/40 text-center min-w-[120px]">
                   <div className="text-[9px] text-white/30 font-bold uppercase tracking-widest mb-1">TOTAL_PIPS</div>
                   <div className="text-2xl font-mono font-bold text-white">12,402</div>
                </div>
             </div>
          </div>
        </div>

        {/* Main Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-32">
           {/* Active Intelligence Panel */}
           <div className="lg:col-span-8 space-y-10">
              <div className="glass-dark p-12 rounded-[56px] border border-white/5 bg-black/60 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none group-hover:opacity-[0.08] transition-all duration-1000">
                    <BrainCircuit size={300} />
                 </div>
                 
                 <div className="flex justify-between items-center mb-12 relative z-10">
                    <div>
                        <div className="text-[10px] text-brand-neon font-black uppercase tracking-[0.4em] mb-2 italic">Active_Alpha_Analysis</div>
                        <h3 className="text-4xl font-display font-bold uppercase italic tracking-tighter">Extraction <span className="text-brand-neon">Matrix</span></h3>
                    </div>
                    <div className="flex gap-4">
                       <span className="px-5 py-2 glass rounded-xl text-[10px] font-bold text-white/40 uppercase tracking-widest border-white/5">H1 Timeline</span>
                    </div>
                 </div>

                 <div className="h-[300px] w-full mb-12 relative z-10">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={chartData}>
                        <defs>
                          <linearGradient id="neonGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#C6FF00" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#C6FF00" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <Tooltip 
                           contentStyle={{ backgroundColor: '#050505', border: '1px solid rgba(198,255,0,0.2)', borderRadius: '16px', color: '#C6FF00' }}
                           itemStyle={{ color: '#C6FF00' }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="value" 
                          stroke="#C6FF00" 
                          strokeWidth={4} 
                          fillOpacity={1} 
                          fill="url(#neonGradient)" 
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                 </div>

                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {[
                      { label: 'Pair', value: activeSignal.pair },
                      { label: 'Logic', value: activeSignal.type, color: activeSignal.type === 'LONG' ? 'text-brand-neon' : 'text-red-500' },
                      { label: 'Confidence', value: `${activeSignal.confidence}%`, color: 'text-brand-neon' },
                      { label: 'Node Source', value: activeSignal.provider },
                    ].map((m, k) => (
                      <div key={k} className="p-6 glass rounded-3xl border-transparent hover:border-white/5 bg-white/[0.02]">
                         <div className="text-[9px] text-white/20 font-bold uppercase tracking-widest mb-2">{m.label}</div>
                         <div className={cn("text-lg font-display font-bold uppercase italic tracking-tight", m.color || 'text-white')}>{m.value}</div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {[
                   { label: 'Total Extractions', val: '1,402', icon: Activity },
                   { label: 'Risk Metrics', val: 'Low Threshold', icon: ShieldCheck },
                   { label: 'System Payout Sync', val: 'Active', icon: Zap },
                 ].map((s, j) => (
                   <div key={j} className="glass p-8 rounded-[36px] flex items-center justify-between group hover:bg-brand-neon/[0.02] transition-colors border-white/5">
                      <div>
                         <div className="text-[9px] text-white/20 font-bold uppercase tracking-widest mb-1">{s.label}</div>
                         <div className="text-xl font-display font-bold uppercase italic tracking-tighter text-white group-hover:text-brand-neon transition-colors">{s.val}</div>
                      </div>
                      <s.icon size={24} className="text-white/10 group-hover:text-brand-neon transition-colors" />
                   </div>
                 ))}
              </div>
           </div>

           {/* Dashboard Summary / Quick Actions */}
           <div className="lg:col-span-4 space-y-10">
              <div className="glass-dark p-10 rounded-[56px] border border-white/5 bg-black/60 shadow-[0_40px_80px_rgba(0,0,0,0.6)] relative overflow-hidden">
                 <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                    <Monitor size={120} />
                 </div>
                 <h4 className="text-xs font-black uppercase tracking-[0.3em] text-brand-neon mb-10 italic">Protocol Parameters</h4>
                 
                 <div className="space-y-8 mb-12">
                    <div className="flex justify-between items-center bg-white/[0.03] p-6 rounded-3xl border border-white/5">
                       <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Entry Limit Node</span>
                       <span className="font-mono text-lg font-bold text-white">{activeSignal.entry}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/[0.03] p-6 rounded-3xl border border-white/5">
                       <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Risk Termination</span>
                       <span className="font-mono text-lg font-bold text-red-500">{activeSignal.sl}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white/[0.03] p-6 rounded-3xl border border-white/5">
                       <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Liquidity Goal</span>
                       <span className="font-mono text-lg font-bold text-brand-neon">{activeSignal.tp}</span>
                    </div>
                 </div>

                 <button className="w-full py-6 bg-brand-neon text-black rounded-[24px] font-black italic text-xs uppercase tracking-[0.4em] neon-glow hover:scale-[1.03] active:scale-95 transition-all shadow-[0_0_40px_rgba(198,255,0,0.2)]">
                    Synchronize Core
                 </button>
              </div>

              <div className="glass-dark p-10 rounded-[56px] border border-white/5 bg-black/60 shadow-[0_40px_80px_rgba(0,0,0,0.6)]">
                 <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/60 italic">Neural Timeline</h3>
                    <Calendar size={18} className="text-brand-neon" />
                 </div>
                 <div className="space-y-6">
                    {[
                      { event: 'USD_CPI_DATA', time: '14:30', impact: 'HIGH', color: 'text-red-500' },
                      { event: 'EUR_ECB_SPEECH', time: '16:00', impact: 'MED', color: 'text-brand-cyan' },
                      { event: 'XAU_SURGE', time: '18:15', impact: 'HIGH', color: 'text-red-500' },
                    ].map((ev, i) => (
                      <div key={i} className="flex items-center justify-between group">
                         <div>
                            <div className="text-[10px] font-bold text-white/60 uppercase tracking-widest group-hover:text-brand-neon transition-colors">{ev.event}</div>
                            <div className="text-[9px] text-white/20 font-bold tracking-widest mt-1">{ev.time} UTC</div>
                         </div>
                         <span className={cn("text-[8px] font-black uppercase tracking-[0.2em] px-2 py-1 rounded-lg bg-white/5", ev.color)}>{ev.impact}</span>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>

        {/* Global Signal Feed */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
           <div>
              <h2 className="text-4xl font-display font-bold uppercase italic tracking-tighter">Live <span className="text-brand-neon">Registry.</span></h2>
              <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.4em] mt-2 italic">Active synchronization across global clusters</p>
        </div>
           <div className="flex gap-2 p-1.5 glass rounded-2xl bg-white/[0.02] border-white/5">
              {['ALL', 'FOREX', 'CRYPTO', 'COMMODITIES'].map(f => (
                <button 
                   key={f} 
                   onClick={() => setFilter(f)}
                   className={cn(
                     "px-6 py-3 rounded-xl text-[9px] font-bold uppercase tracking-widest transition-all",
                     filter === f ? "bg-brand-neon text-black neon-glow" : "text-white/20 hover:text-white"
                   )}
                >
                   {f}
                </button>
              ))}
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
           {filteredSignals.map((signal, i) => (
             <motion.div
               key={signal.id}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               onClick={() => setActiveSignal(signal)}
               className={cn(
                 "glass-dark p-10 rounded-[56px] border group cursor-pointer transition-all duration-700 overflow-hidden relative",
                 activeSignal.id === signal.id ? "border-brand-neon/50 bg-brand-neon/[0.03] scale-[1.02]" : "border-white/5 bg-black/60 hover:border-brand-neon/30"
               )}
             >
                <div className="flex justify-between items-start mb-10">
                   <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-white/[0.03] border border-white/5 rounded-[24px] flex items-center justify-center neon-glow group-hover:scale-110 transition-transform">
                         <div className={cn(
                           "text-2xl font-bold font-display italic",
                           signal.type === 'LONG' ? "text-brand-neon" : "text-red-500"
                         )}>
                            {signal.pair.split('/')[0]}
                         </div>
                      </div>
                      <div>
                         <h3 className="text-2xl font-display font-bold italic tracking-tighter uppercase">{signal.pair}</h3>
                         <div className="flex items-center gap-3 mt-1">
                            <span className={cn(
                              "text-[8px] font-black tracking-[0.2em] uppercase px-2 py-1 rounded-lg border",
                              signal.type === 'LONG' ? "text-brand-neon border-brand-neon/20 bg-brand-neon/5" : "text-red-500 border-red-500/20 bg-red-500/5"
                            )}>
                               {signal.type} NODE
                            </span>
                            <span className="text-[9px] text-white/30 font-bold uppercase tracking-widest">{signal.time}</span>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="space-y-4 mb-10">
                   <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                      <span className="text-white/20">Win Integrity</span>
                      <span className="text-brand-cyan">{signal.winRate}</span>
                   </div>
                   <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-neon/40" style={{ width: signal.winRate }} />
                   </div>
                </div>

                <button className="w-full py-5 glass border-white/5 group-hover:border-brand-neon/30 text-white/40 group-hover:text-brand-neon rounded-2xl text-[9px] font-black uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3">
                   Analyze Logic <ArrowRight size={14} className="transition-transform group-hover:translate-x-2" />
                </button>
             </motion.div>
           ))}
        </div>

        {/* Training Base CTA */}
        <motion.div 
           className="relative glass-dark p-20 rounded-[80px] border border-white/5 bg-black/60 overflow-hidden text-center"
        >
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(198,255,0,0.05)_0%,_transparent_70%)]" />
           <div className="relative z-10 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-xl mb-10 border-brand-neon/30">
                 <ShieldCheck size={14} className="text-brand-neon" />
                 <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-neon">Neural Mastery Registry</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-display font-bold uppercase italic tracking-tighter mb-10 leading-[0.9]">
                 Evolve your <br /> <span className="text-brand-neon underline italic">Extraction Rank.</span>
              </h2>
              <p className="text-lg text-white/40 font-medium uppercase tracking-tight mb-16 px-10">
                Join our elite node training program and master the PropFutures manual extraction protocol.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-8">
                 <button className="px-16 py-6 bg-brand-neon text-black rounded-3xl font-black italic uppercase tracking-[0.3em] text-[11px] neon-glow">Initialize Rank 0</button>
                 <button className="px-16 py-6 glass border-white/5 text-white/60 hover:text-white rounded-3xl font-black uppercase tracking-[0.3em] text-[11px]">Audit Logic Docs</button>
              </div>
           </div>
        </motion.div>
      </div>
    </div>
  );
}
