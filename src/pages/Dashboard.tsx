import { motion } from 'motion/react';
import { 
  LayoutDashboard, 
  User, 
  Wallet, 
  Gift, 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Bell, 
  ArrowUpRight, 
  Plus, 
  ChevronRight,
  ShieldCheck,
  CreditCard,
  Settings,
  LogOut,
  Zap,
  Target,
  Sparkles,
  Bot,
  BrainCircuit,
  Activity
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '../lib/utils';

const data = [
  { name: 'Mon', profit: 2400 },
  { name: 'Tue', profit: 4398 },
  { name: 'Wed', profit: 9800 },
  { name: 'Thu', profit: 6908 },
  { name: 'Fri', profit: 8800 },
  { name: 'Sat', profit: 12800 },
  { name: 'Sun', profit: 14500 },
];

const SidebarItem = ({ icon: Icon, label, active = false }: { icon: any, label: string, active?: boolean }) => (
  <button className={cn(
    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all",
    active ? "bg-brand-neon text-black neon-glow" : "text-white/40 hover:bg-white/5 hover:text-white"
  )}>
    <Icon size={16} />
    {label}
  </button>
);

const StatCard = ({ label, value, sub, trend, color }: { label: string, value: string, sub: string, trend?: string, color?: string }) => (
  <div className="glass p-6 rounded-[32px] bg-black/40 border-white/5 relative group overflow-hidden">
    <div className={cn("absolute inset-x-0 bottom-0 h-[2px] opacity-20", color || "bg-brand-neon")} />
    <div className="flex justify-between items-start mb-4">
       <div className="text-[9px] uppercase text-white/30 tracking-[0.3em] font-bold">{label}</div>
       {trend && (
         <div className="text-brand-neon flex items-center gap-1 text-[10px] font-bold">
           <ArrowUpRight size={14} /> {trend}
         </div>
       )}
    </div>
    <div className="text-2xl font-mono font-bold mb-1 tracking-tighter">{value}</div>
    <div className="text-[9px] text-white/20 font-bold uppercase tracking-widest">{sub}</div>
  </div>
);

export default function Dashboard() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 max-w-7xl mx-auto min-h-screen pt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar */}
        <div className="lg:col-span-3 space-y-8">
          <div className="glass p-6 rounded-[40px] bg-black/60 border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-brand-neon/5 blur-3xl rounded-full" />
            
            <div className="flex flex-col items-center text-center mb-10 pt-4">
              <div className="relative mb-4 group">
                <div className="absolute inset-0 bg-brand-neon rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="w-20 h-20 rounded-full border-2 border-brand-neon/30 p-1 relative z-10">
                  <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden">
                    <User size={40} className="text-brand-neon/50" />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-brand-neon rounded-lg flex items-center justify-center text-black font-bold text-[10px] border-2 border-black">
                   42
                </div>
              </div>
              <div className="font-display font-bold text-lg mb-1">ALEX_ELITE_FX</div>
              <div className="flex items-center gap-2 px-3 py-1 bg-brand-neon/10 rounded-full border border-brand-neon/20">
                 <ShieldCheck size={12} className="text-brand-neon" />
                 <span className="text-[10px] font-bold text-brand-neon uppercase tracking-widest">Master Neural Link</span>
              </div>
            </div>

            <div className="px-2 mb-10">
               <div className="flex justify-between items-center text-[8px] font-bold text-white/30 uppercase tracking-[0.2em] mb-2">
                  Neural Progression
                  <span className="text-brand-neon">72%</span>
               </div>
               <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: '72%' }}
                    transition={{ duration: 1.5 }}
                    className="h-full bg-brand-neon neon-glow" 
                  />
               </div>
            </div>
            
            <nav className="space-y-1">
              <SidebarItem icon={LayoutDashboard} label="Neural Hub" active />
              <SidebarItem icon={Activity} label="Performance Matrix" />
              <SidebarItem icon={Target} label="Active Nodes" />
              <SidebarItem icon={Gift} label="Quantum Rewards" />
              <SidebarItem icon={Users} label="Affiliate Network" />
              <SidebarItem icon={MessageSquare} label="Discord Sync" />
            </nav>
            
            <div className="mt-12 pt-8 border-t border-white/5 space-y-1">
              <SidebarItem icon={Settings} label="System Config" />
              <SidebarItem icon={LogOut} label="Disconnect" />
            </div>
          </div>

          <div className="glass-dark p-8 rounded-[40px] border-brand-cyan/20 relative overflow-hidden group">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-cyan/10 blur-3xl rounded-full" />
            <Sparkles className="text-brand-cyan mb-4" size={24} />
            <h4 className="font-bold mb-2">Neural Tier Up</h4>
            <p className="text-[11px] text-white/40 mb-6 font-medium leading-relaxed uppercase tracking-tight">
              Unlock 2.5% increased delta on all challenge propagations.
            </p>
            <button className="w-full py-4 bg-brand-cyan text-black text-[10px] font-bold uppercase tracking-[0.2em] rounded-2xl hover:cyan-glow hover:scale-[1.02] transition-all">
              Initiate Upgrade
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9 space-y-8">
          
          {/* Stats Bar */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard label="Total Delta" value="$142,504.00" sub="Available Liquidity" trend="+12.4%" />
            <StatCard label="Ecosystem XP" value="42,800" sub="Rank: Elite 1" trend="+820 today" />
            <StatCard label="Active Nodes" value="03" sub="Across 2 Firms" color="bg-brand-cyan" />
            <StatCard label="Network Alpha" value="1,242" sub="Active Referrals" trend="+24 today" />
          </div>

          {/* Analytics Graph */}
          <div className="glass p-8 rounded-[40px] bg-black/60 border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-neon/[0.02] blur-[120px] rounded-full pointer-events-none" />
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
              <div>
                <h3 className="text-xl font-bold font-display uppercase italic tracking-tighter">Neural Profit <span className="text-brand-neon">Spectrum</span></h3>
                <p className="text-[10px] text-white/30 mt-1 font-bold uppercase tracking-[0.2em]">Net performance analytics over local solar cycle</p>
              </div>
              <div className="flex gap-2 p-1 glass rounded-2xl bg-white/[0.02]">
                 <button className="px-5 py-2 rounded-xl text-[10px] font-bold uppercase transition-all text-white/30 hover:text-white">1W</button>
                 <button className="px-5 py-2 rounded-xl text-[10px] font-bold uppercase transition-all bg-brand-neon text-black shadow-[0_0_20px_rgba(198,255,0,0.3)]">1M</button>
                 <button className="px-5 py-2 rounded-xl text-[10px] font-bold uppercase transition-all text-white/30 hover:text-white">ALL</button>
              </div>
            </div>
            
            <div className="h-[350px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#C6FF00" stopOpacity={0.2}/>
                      <stop offset="95%" stopColor="#C6FF00" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 'bold' }}
                    dy={10}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 'bold' }}
                    dx={-10}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(5,5,5,0.9)', 
                      borderColor: 'rgba(198,255,0,0.2)',
                      borderRadius: '24px',
                      backdropFilter: 'blur(20px)',
                      color: '#C6FF00',
                      fontSize: '11px',
                      fontWeight: 'bold',
                      padding: '16px'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="profit" 
                    stroke="#C6FF00" 
                    strokeWidth={3} 
                    fillOpacity={1} 
                    fill="url(#colorProfit)" 
                    animationDuration={2000}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {/* Neural Insights */}
            <div className="glass-dark p-8 rounded-[40px] border-brand-neon/20 bg-[#0A0A0A]/80 relative overflow-hidden">
               <div className="absolute bottom-0 right-0 p-8 opacity-5">
                  <BrainCircuit size={120} className="text-brand-neon" />
               </div>
               <div className="flex justify-between items-center mb-8 relative z-10">
                 <h3 className="font-bold flex items-center gap-3 text-xs uppercase tracking-widest italic">
                    <Bot size={18} className="text-brand-neon" /> Neural Insights
                 </h3>
                 <div className="px-3 py-1 bg-brand-neon/10 border border-brand-neon/20 rounded-full text-[9px] font-bold text-brand-neon uppercase tracking-widest animate-pulse">
                    Analyzing Live
                 </div>
               </div>
               <div className="space-y-6 relative z-10">
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-brand-neon/50 transition-all">
                     <div className="flex items-center gap-4 mb-3">
                        <TrendingUp size={16} className="text-brand-neon" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Alpha Strategy Detected</span>
                     </div>
                     <p className="text-xs text-white/50 leading-relaxed font-medium">
                        Your win rate on <span className="text-brand-neon font-bold">Gold (XAUUSD)</span> has increased by 15% this week. Consider scaling your position size by 0.5x on the next confirmed breakout.
                     </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 group hover:border-white/20 transition-all">
                     <div className="flex items-center gap-4 mb-3">
                        <Activity size={16} className="text-brand-cyan" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cyan">Firm Delta Alert</span>
                     </div>
                     <p className="text-xs text-white/50 leading-relaxed font-medium">
                        Apex Trader has reduced their slippage thresholds. This is an optimal window for your high-frequency scalping nodes.
                     </p>
                  </div>
               </div>
            </div>

            {/* Performance Node Status */}
            <div className="glass p-8 rounded-[40px] bg-black/60 border-white/5">
               <h3 className="font-bold mb-8 text-xs uppercase tracking-widest italic">Active Prop Nodes</h3>
               <div className="space-y-4">
                  {[
                    { firm: 'Apex Trader', funding: '$200k Elite', profit: '+$6,402', status: 'Propagating', color: 'bg-brand-neon' },
                    { firm: 'Funding Pips', funding: '$100k Master', profit: '+$2,100', status: 'Operational', color: 'bg-brand-cyan' },
                    { firm: 'E8 Funding', funding: '$50k Eval', profit: '-$240', status: 'Evaluating', color: 'bg-white/20' },
                  ].map((node, i) => (
                    <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 group hover:border-brand-neon/30 transition-all">
                       <div className={cn("w-1.5 h-10 rounded-full", node.color)} />
                       <div className="flex-grow">
                          <div className="text-xs font-bold">{node.firm} • {node.funding}</div>
                          <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1">{node.status}</div>
                       </div>
                       <div className="text-right">
                          <div className={cn("text-sm font-mono font-bold", node.profit.startsWith('+') ? 'text-brand-neon' : 'text-white/40')}>{node.profit}</div>
                          <div className="text-[9px] text-white/30 uppercase tracking-[0.2em] mt-0.5">NET DELTA</div>
                       </div>
                    </div>
                  ))}
               </div>
               
               <button className="w-full mt-8 py-4 glass rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all flex items-center justify-center gap-3">
                  Initiate New Node <Plus size={16} className="text-brand-neon" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
