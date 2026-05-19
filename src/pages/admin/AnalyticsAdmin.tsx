import { motion } from 'motion/react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  MousePointer2, 
  ShoppingCart, 
  ArrowUpRight, 
  ArrowDownRight, 
  Calendar, 
  Layers,
  ChevronRight,
  Filter,
  Download,
  Zap,
  Globe,
  PieChart
} from 'lucide-react';
import { 
  AreaChart, Area, 
  BarChart, Bar, 
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Cell, PieChart as RePieChart, Pie
} from 'recharts';
import { cn } from '../../lib/utils';

const conversionData = [
  { name: 'Week 1', unique: 2400, sales: 120 },
  { name: 'Week 2', unique: 3000, sales: 198 },
  { name: 'Week 3', unique: 2000, sales: 98 },
  { name: 'Week 4', unique: 2780, sales: 290 },
  { name: 'Week 5', unique: 4890, sales: 480 },
  { name: 'Week 6', unique: 3390, sales: 380 },
];

const pieData = [
  { name: 'USDC Rewards', value: 450, color: '#3b82f6' },
  { name: 'Amazon Cards', value: 300, color: '#10b981' },
  { name: 'Flipkart Cards', value: 200, color: '#f59e0b' },
  { name: 'TradingView', value: 150, color: '#8b5cf6' },
];

const StatCard = ({ label, value, trend, isUp, icon: Icon }: any) => (
  <div className="glass p-8 rounded-[40px] bg-black/40 border-white/5 relative group hover:border-brand-blue/30 transition-all duration-500">
    <div className="flex justify-between items-start mb-6">
       <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
          <Icon className="text-brand-blue" size={24} />
       </div>
       <div className={cn(
         "flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-full",
         isUp ? "bg-emerald-500/10 text-emerald-500" : "bg-red-500/10 text-red-500"
       )}>
         {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />} {trend}%
       </div>
    </div>
    <div className="text-[10px] uppercase text-white/30 tracking-[0.2em] font-bold mb-1">{label}</div>
    <div className="text-3xl font-display font-bold tracking-tight">{value}</div>
  </div>
);

export default function AnalyticsAdmin() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Advanced Logistics</h1>
          <p className="text-sm text-white/40 mt-1">Deep system intelligence and behavioral analytics</p>
        </div>
        <div className="flex gap-3">
           <div className="flex items-center gap-2 p-1 glass rounded-2xl">
              <button className="px-4 py-2 glass rounded-xl text-xs font-bold flex items-center gap-2 border-0"><Calendar size={14}/> Custom Range</button>
           </div>
           <button className="px-6 py-3 bg-brand-blue rounded-2xl flex items-center gap-2 text-sm font-bold blue-glow hover:scale-[1.02] transition-transform">
              <Download size={18} /> Global Export
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard label="Unique Visitors" value="124,502" trend="14.2" isUp={true} icon={Users} />
        <StatCard label="CTR Performance" value="8.42%" trend="2.1" isUp={false} icon={MousePointer2} />
        <StatCard label="Checkout Velocity" value="45.1s" trend="12.5" isUp={true} icon={Zap} />
        <StatCard label="Global Reach" value="142" trend="5.0" isUp={true} icon={Globe} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         <div className="lg:col-span-8 space-y-8">
            <div className="glass p-8 rounded-[40px] bg-black/40 border-white/5">
                <div className="flex justify-between items-center mb-10">
                   <div>
                      <h3 className="text-xl font-bold font-display tracking-tight">Conversion Funnel Analytics</h3>
                      <p className="text-xs text-white/40 mt-1">Unique visitors vs successful challenge purchases</p>
                   </div>
                   <div className="flex gap-4">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-brand-blue/30 border border-brand-blue" />
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Visitors</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-brand-blue" />
                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Sales</span>
                      </div>
                   </div>
                </div>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={conversionData}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }}
                          dy={10}
                        />
                        <YAxis 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }}
                        />
                        <Tooltip 
                          cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                          contentStyle={{ 
                            backgroundColor: 'rgba(0,0,0,0.8)', 
                            borderColor: 'rgba(255,255,255,0.1)',
                            borderRadius: '20px',
                            backdropFilter: 'blur(10px)',
                            padding: '16px'
                          }} 
                        />
                        <Bar dataKey="unique" fill="#3b82f6" opacity={0.2} radius={[6, 6, 0, 0]} />
                        <Bar dataKey="sales" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                     </BarChart>
                  </ResponsiveContainer>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="glass p-8 rounded-[40px] bg-black/40 border-white/5">
                  <h3 className="font-bold mb-8">Asset Class Popularity</h3>
                  <div className="space-y-6">
                    {[
                      { name: 'Forex Pairs', val: 450, total: 1000, color: 'bg-brand-blue' },
                      { name: 'Commodities / Gold', val: 320, total: 1000, color: 'bg-yellow-500' },
                      { name: 'Indices', val: 180, total: 1000, color: 'bg-emerald-500' },
                      { name: 'Crypto Futures', val: 50, total: 1000, color: 'bg-purple-500' },
                    ].map((item, i) => (
                      <div key={i}>
                         <div className="flex justify-between items-center text-xs mb-3 font-bold uppercase tracking-widest">
                            <span className="text-white/40">{item.name}</span>
                            <span className="text-white/70">{item.val} Sold</span>
                         </div>
                         <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                           <motion.div 
                             initial={{ width: 0 }}
                             whileInView={{ width: `${(item.val/item.total)*100}%` }}
                             transition={{ duration: 1, delay: i * 0.1 }}
                             className={cn("h-full rounded-full", item.color)} 
                           />
                         </div>
                      </div>
                    ))}
                  </div>
               </div>
               
               <div className="glass p-8 rounded-[40px] bg-black/40 border-white/5 flex flex-col">
                  <h3 className="font-bold mb-6">Device Distribution</h3>
                  <div className="flex-grow flex items-center justify-center relative">
                     <div className="h-[200px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                           <RePieChart>
                              <Pie
                                data={pieData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                paddingAngle={5}
                                dataKey="value"
                              >
                                {pieData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                                ))}
                              </Pie>
                              <Tooltip />
                           </RePieChart>
                        </ResponsiveContainer>
                     </div>
                     <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                        <span className="text-2xl font-display font-bold">1.2k</span>
                        <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Total Redemptions</span>
                     </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                     {pieData.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                           <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                           <span className="text-[10px] font-bold text-white/40 truncate">{item.name}</span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

         <div className="lg:col-span-4 space-y-8">
            <div className="glass p-8 rounded-[40px] bg-black/40 border-white/5">
                <h3 className="font-bold mb-8">Real-time Performance</h3>
                <div className="space-y-4">
                  {[
                    { label: 'API Latency', value: '12ms', status: 'Optimal', color: 'text-emerald-500' },
                    { label: 'Checkout Success', value: '99.4%', status: 'Optimal', color: 'text-emerald-500' },
                    { label: 'Payout Queue', value: '4 Requests', status: 'Warning', color: 'text-yellow-500' },
                    { label: 'Security Firewall', value: 'Active', status: 'Locked', color: 'text-brand-blue' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex justify-between items-center group hover:bg-white/10 transition-colors">
                       <div>
                          <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">{item.label}</div>
                          <div className="font-display font-bold text-white/80">{item.value}</div>
                       </div>
                       <div className={cn("text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md bg-white/5 border border-white/10", item.color)}>
                          {item.status}
                       </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-10 p-4 border border-white/5 rounded-2xl text-xs font-bold hover:bg-white/5 transition-all text-white/50">
                   Open System Diagnostics
                </button>
            </div>

            <div className="glass p-1 rounded-[40px] bg-brand-blue/10 border-brand-blue/20 overflow-hidden relative group cursor-pointer">
               <div className="absolute inset-0 bg-brand-blue/20 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-1000" />
               <div className="p-8 relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 blue-glow">
                     <PieChart className="text-white" size={32} />
                  </div>
                  <h4 className="text-xl font-display font-bold mb-3">Custom Data Synthesis</h4>
                  <p className="text-xs text-white/40 mb-10 leading-relaxed max-w-[200px]">
                    Generate highly specific reports focused on churn, conversion LTV or geography.
                  </p>
                  <button className="w-full py-4 bg-white text-black font-bold rounded-2xl flex items-center justify-center gap-2 hover:bg-brand-blue hover:text-white transition-all blue-glow group">
                     Build Intelligence Report <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
}
