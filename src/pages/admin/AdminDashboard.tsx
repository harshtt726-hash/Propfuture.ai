import { motion } from 'motion/react';
import { 
  Users, 
  TrendingUp, 
  DollarSign, 
  ShieldCheck, 
  ArrowUpRight, 
  ArrowDownRight, 
  Search, 
  MoreVertical,
  Activity,
  Calendar,
  Layers,
  Zap,
  Fingerprint,
  Cpu,
  BrainCircuit
} from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { cn } from '../../lib/utils';

const revenueData = [
  { name: '01', revenue: 4000 },
  { name: '02', revenue: 3000 },
  { name: '03', revenue: 5000 },
  { name: '04', revenue: 2780 },
  { name: '05', revenue: 6890 },
  { name: '06', revenue: 5390 },
  { name: '07', revenue: 7490 },
];

const StatCard = ({ title, value, sub, trend, isUp, icon: Icon }: any) => (
  <div className="glass-dark p-8 rounded-[40px] bg-black/60 border-white/5 relative overflow-hidden group hover:border-brand-neon/30 transition-all duration-700">
    <div className="flex justify-between items-start mb-6">
       <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center border border-white/5", isUp ? "bg-brand-neon/10" : "bg-red-500/10")}>
          <Icon className={isUp ? "text-brand-neon neon-glow" : "text-red-500"} size={28} />
       </div>
       <div className={cn(
         "flex items-center gap-1 text-[10px] font-bold px-3 py-1.5 rounded-full border",
         isUp ? "bg-brand-neon/5 text-brand-neon border-brand-neon/20" : "bg-red-500/5 text-red-500 border-red-500/20"
       )}>
         {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} {trend}%
       </div>
    </div>
    <div className="text-[9px] uppercase text-white/40 tracking-[0.3em] font-bold mb-2">{title}</div>
    <div className="text-4xl font-display font-bold mb-2 uppercase italic tracking-tighter">{value}</div>
    <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest leading-none">{sub}</div>
  </div>
);

export default function AdminDashboard() {
  return (
    <div className="space-y-10 pb-20">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6">
        <div>
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-neon/10 rounded-lg mb-4 border border-brand-neon/20">
              <Activity size={12} className="text-brand-neon animate-pulse" />
              <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-brand-neon">System Active</span>
           </div>
           <h1 className="text-4xl md:text-5xl font-display font-bold uppercase italic tracking-tighter">Ecosystem <span className="text-brand-neon">Matrix</span></h1>
           <p className="text-[11px] text-white/30 font-bold uppercase tracking-[0.3em] mt-2">Real-time kernel performance and node extraction</p>
        </div>
        <div className="flex items-center gap-3 p-1.5 glass rounded-2xl bg-white/[0.02] border-white/5">
           <button className="px-6 py-3 rounded-xl text-[9px] font-bold uppercase tracking-widest bg-brand-neon text-black neon-glow transition-all">Daily Sync</button>
           <button className="px-6 py-3 rounded-xl text-[9px] font-bold uppercase tracking-widest text-white/30 hover:text-white hover:bg-white/5 transition-all">Node Cycle</button>
           <button className="px-6 py-3 rounded-xl text-[9px] font-bold uppercase tracking-widest text-white/30 hover:text-white hover:bg-white/5 transition-all">Annual Log</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Neural Nodes" 
          value="45,200" 
          sub="+142 PULSING TODAY" 
          trend="12.5" 
          isUp={true}
          icon={Users}
        />
        <StatCard 
          title="Delta Extraction" 
          value="$1.24M" 
          sub="TOTAL VOLUMETRIC LIQUIDITY" 
          trend="8.1" 
          isUp={true}
          icon={DollarSign}
        />
        <StatCard 
          title="Node Yield" 
          value="4.21%" 
          sub="AVERAGE PROTOCOL EFFICIENCY" 
          trend="2.4" 
          isUp={false}
          icon={TrendingUp}
        />
        <StatCard 
          title="Matrix Sync" 
          value="$452k" 
          sub="PENDING NEURAL SETTLEMENT" 
          trend="5.7" 
          isUp={true}
          icon={Zap}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Analytics */}
        <div className="lg:col-span-8 space-y-8">
          <div className="glass-dark p-10 rounded-[48px] bg-black/60 border-white/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-10 opacity-[0.03] pointer-events-none">
                <BrainCircuit size={160} />
             </div>
             <div className="flex justify-between items-center mb-12 relative z-10">
                <div>
                  <h3 className="text-2xl font-bold font-display uppercase italic tracking-tighter">Extraction <span className="text-brand-neon">Velocity</span></h3>
                  <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1">Real-time delta liquidation flow</p>
                </div>
                <div className="flex gap-6 pr-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-neon neon-glow" />
                    <span className="text-[9px] uppercase font-bold text-white/40 tracking-[0.2em]">Alpha Volume</span>
                  </div>
                </div>
             </div>
             
             <div className="h-[400px] w-full relative z-10">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorNeon" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#C6FF00" stopOpacity={0.2}/>
                        <stop offset="95%" stopColor="#C6FF00" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="6 6" vertical={false} stroke="rgba(255,255,255,0.03)" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 700 }}
                      dy={15}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'rgba(255,255,255,0.2)', fontSize: 10, fontWeight: 700 }}
                    />
                    <Tooltip 
                      cursor={{ stroke: 'rgba(198,255,0,0.2)', strokeWidth: 2 }}
                      contentStyle={{ 
                        backgroundColor: 'rgba(5,5,5,0.9)', 
                        borderColor: 'rgba(198,255,0,0.2)',
                        borderRadius: '24px',
                        backdropFilter: 'blur(10px)',
                        padding: '20px',
                        border: '1px solid rgba(255,255,255,0.05)'
                      }} 
                      itemStyle={{ color: '#C6FF00', fontWeight: 800, fontSize: '11px', textTransform: 'uppercase' }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke="#C6FF00" 
                      strokeWidth={4} 
                      fillOpacity={1} 
                      fill="url(#colorNeon)" 
                      animationDuration={2000}
                    />
                  </AreaChart>
                </ResponsiveContainer>
             </div>
          </div>

          <div className="glass-dark p-10 rounded-[48px] bg-black/60 border-white/5">
             <div className="flex justify-between items-center mb-10">
                <h3 className="text-xl font-display font-bold uppercase italic tracking-tighter">Core <span className="text-brand-neon">Sub-Nodes</span></h3>
                <button className="text-[10px] text-brand-neon font-bold uppercase tracking-widest flex items-center gap-2 hover:neon-glow transition-all">Audit Matrix <ArrowUpRight size={16}/></button>
             </div>
             <div className="overflow-x-auto">
               <table className="w-full text-left">
                  <thead>
                    <tr className="text-[9px] uppercase tracking-[0.3em] text-white/40 border-b border-white/5">
                      <th className="pb-6 font-bold mr-4">Node Profile</th>
                      <th className="pb-6 font-bold">Extraction Qty</th>
                      <th className="pb-6 font-bold">Net Alpha</th>
                      <th className="pb-6 font-bold">Pulse Status</th>
                      <th className="pb-6 text-right font-bold">Registry</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm font-medium">
                    {[
                      { name: 'Apex Trader', sold: 4502, roi: '$142,500', status: 'OPTIMAL', color: 'text-brand-neon' },
                      { name: 'Funding Pips', sold: 3120, roi: '$98,200', status: 'SYNCHING', color: 'text-brand-cyan' },
                      { name: 'Topstep', sold: 2840, roi: '$85,400', status: 'AUDIT_REQ', color: 'text-white' },
                      { name: 'The5ers', sold: 1240, roi: '$42,100', status: 'OPTIMAL', color: 'text-brand-neon' },
                    ].map((firm, i) => (
                      <tr key={i} className="group hover:bg-white/[0.02] transition-colors border-b border-white/[0.02] last:border-0">
                        <td className="py-6 font-bold uppercase italic tracking-tighter text-lg">{firm.name}</td>
                        <td className="py-6 font-mono text-xs text-white/50">{firm.sold.toLocaleString()}</td>
                        <td className="py-6 font-mono text-xs text-brand-neon">{firm.roi}</td>
                        <td className="py-6">
                           <div className={cn("text-[9px] font-bold uppercase tracking-widest flex items-center gap-2", firm.color)}>
                              <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse bg-current")} />
                              {firm.status}
                           </div>
                        </td>
                        <td className="py-6 text-right">
                           <button className="p-3 hover:bg-white/5 rounded-xl border border-transparent hover:border-white/5 transition-all">
                              <MoreVertical size={18} className="text-white/20" />
                           </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
               </table>
             </div>
          </div>
        </div>

        {/* Side Panel */}
        <div className="lg:col-span-4 space-y-8">
           <div className="glass-dark p-10 rounded-[48px] bg-black/60 border-white/5">
              <h3 className="text-lg font-display font-bold uppercase italic tracking-tighter mb-8">Ecosystem <span className="text-brand-neon">Vitality</span></h3>
              <div className="space-y-8">
                 {[
                   { label: 'Neural Propagation', value: 84, color: 'bg-brand-neon' },
                   { label: 'Extraction Ratio', value: 62, color: 'bg-brand-cyan' },
                   { label: 'Settlement Speed', value: 94, color: 'bg-white' },
                   { label: 'Partner Integrity', value: 78, color: 'bg-brand-neon' },
                 ].map((stat, i) => (
                   <div key={i}>
                      <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest mb-4">
                         <span className="text-white/30">{stat.label}</span>
                         <span className="text-brand-neon font-mono italic">{stat.value}%</span>
                      </div>
                      <div className="h-2.5 w-full bg-white/[0.05] rounded-full overflow-hidden border border-white/5">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${stat.value}%` }}
                           transition={{ duration: 1.5, delay: i * 0.1, ease: "easeOut" }}
                           className={cn("h-full rounded-full transition-all duration-1000", stat.color, stat.color.includes('neon') && 'neon-glow')} 
                         />
                      </div>
                   </div>
                 ))}
              </div>
           </div>

           <div className="glass-dark p-10 rounded-[48px] bg-black/60 border-white/5 overflow-hidden relative">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                 <Cpu size={120} />
              </div>
              <div className="flex justify-between items-center mb-10 relative z-10">
                 <h3 className="text-lg font-display font-bold uppercase italic tracking-tighter leading-none">Neural <br /> Activity</h3>
                 <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center border border-white/5 scale-90">
                    <Activity className="text-brand-neon" size={20} />
                 </div>
              </div>
              <div className="space-y-8 relative before:absolute before:left-[13px] before:top-2 before:bottom-2 before:w-[1.5px] before:bg-white/[0.03] z-10">
                 {[
                   { user: 'S. KING', action: 'Requested $4.2k Extract', time: '2m ago' },
                   { user: 'A. TRADER', action: 'Node Sync: Apex $50k', time: '12m ago' },
                   { user: 'SYS_BOT', action: 'Roles assigned to 12 nodes', time: '45m ago' },
                   { user: 'MASTER', action: 'Rank #4 Matrix Secure', time: '1h ago' },
                 ].map((log, i) => (
                   <div key={i} className="flex gap-6 relative group/item">
                      <div className="w-[28px] h-[28px] rounded-full bg-[#050505] border border-white/10 z-10 flex-shrink-0 flex items-center justify-center group-hover/item:border-brand-neon/50 transition-colors">
                         <div className="w-1.5 h-1.5 rounded-full bg-brand-neon neon-glow" />
                      </div>
                      <div className="flex flex-col">
                         <div className="text-[10px] font-bold text-white group-hover/item:text-brand-neon transition-colors uppercase tracking-widest">{log.user}</div>
                         <p className="text-[9px] text-white/30 font-bold uppercase tracking-widest mt-1">{log.action}</p>
                         <div className="text-[8px] text-brand-neon font-black tracking-[0.2em] mt-2 uppercase italic">{log.time}</div>
                      </div>
                   </div>
                 ))}
              </div>
              <button className="w-full mt-10 py-5 border border-white/5 glass-dark rounded-2xl text-[9px] font-bold uppercase tracking-widest hover:bg-brand-neon hover:text-black transition-all">
                 Registry Database
              </button>
           </div>

           <div className="glass-dark p-10 rounded-[48px] bg-brand-neon/5 border-brand-neon/20 flex items-center justify-between group cursor-crosshair overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,_rgba(198,255,0,0.1)_0%,_transparent_70%)]" />
              <div className="relative z-10">
                 <div className="text-[9px] font-bold text-brand-neon uppercase tracking-[0.4em] mb-2 leading-none">Security Loop</div>
                 <div className="font-bold text-sm uppercase italic tracking-tighter">Sync: 4m ago</div>
              </div>
              <div className="w-12 h-12 rounded-[20px] bg-brand-neon/10 border border-brand-neon/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-neon group-hover:text-black transition-all relative z-10">
                 <Zap className="text-brand-neon group-hover:text-black" size={24} />
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
