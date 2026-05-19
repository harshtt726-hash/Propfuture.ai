import { motion } from 'motion/react';
import { 
  Trophy, 
  Search, 
  Filter, 
  ChevronRight, 
  MoreVertical, 
  TrendingUp, 
  Award, 
  Globe, 
  Star,
  Settings,
  Plus,
  RefreshCw
} from 'lucide-react';
import { cn } from '../../lib/utils';

const TOP_TRADERS = [
  { rank: 1, user: 'AlexTradez', profit: '$142,500', country: 'US', tier: 'Legendary', growth: '+12%' },
  { rank: 2, user: 'CryptoKnight', profit: '$98,200', country: 'UK', tier: 'Master', growth: '+8%' },
  { rank: 3, user: 'Yuki_FX', profit: '$85,400', country: 'JP', tier: 'Master', growth: '+15%' },
  { rank: 4, user: 'MambaTrader', profit: '$72,100', country: 'CA', tier: 'Elite', growth: '+2%' },
  { rank: 5, user: 'Elena_Pip', profit: '$68,500', country: 'ES', tier: 'Elite', growth: '+5%' },
];

export default function LeaderboardAdmin() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Leaderboard Governance</h1>
          <p className="text-sm text-white/40 mt-1">Manage competitive rankings and award distributions</p>
        </div>
        <div className="flex gap-3">
           <button className="px-6 py-3 glass rounded-2xl flex items-center gap-2 text-sm font-bold hover:bg-white/5 transition-colors">
              <RefreshCw size={18} /> Reset Cycle
           </button>
           <button className="px-6 py-3 bg-brand-blue rounded-2xl flex items-center gap-2 text-sm font-bold blue-glow hover:scale-[1.02] transition-transform">
              <Plus size={18} /> Add Season
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         <div className="lg:col-span-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                 { label: 'Active Contestants', value: '1,240', icon: Trophy, color: 'text-brand-blue' },
                 { label: 'Total Prize Pool', value: '$25,000', icon: Award, color: 'text-yellow-500' },
                 { label: 'Audit Compliance', value: '100%', icon: Star, color: 'text-emerald-500' },
               ].map((stat, i) => (
                 <div key={i} className="glass p-6 rounded-3xl bg-black/40 border-white/5">
                    <div className="flex justify-between items-center mb-4">
                       <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">{stat.label}</span>
                       <stat.icon className={stat.color} size={18} />
                    </div>
                    <div className="text-2xl font-bold">{stat.value}</div>
                 </div>
               ))}
            </div>

            <div className="glass rounded-[40px] bg-black/40 border-white/5 overflow-hidden">
               <div className="p-8 border-b border-white/5 flex justify-between items-center">
                  <h3 className="font-bold">Global Performance Lattice (May)</h3>
                  <div className="flex gap-4">
                     <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                        <input 
                          type="text" 
                          placeholder="Search rankings..."
                          className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs focus:outline-none"
                        />
                     </div>
                  </div>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left">
                     <thead>
                        <tr className="text-[10px] uppercase tracking-[0.2em] text-white/30 border-b border-white/5 bg-white/[0.01]">
                           <th className="px-8 py-5 font-bold">Global Rank</th>
                           <th className="px-8 py-5 font-bold">Trader Identity</th>
                           <th className="px-8 py-5 font-bold">Volume Profit</th>
                           <th className="px-8 py-5 font-bold">Growth Node</th>
                           <th className="px-8 py-5 font-bold">Tier Class</th>
                           <th className="px-8 py-5 text-right font-bold">Manage</th>
                        </tr>
                     </thead>
                     <tbody className="text-sm">
                        {TOP_TRADERS.map((trader) => (
                          <tr key={trader.rank} className={cn(
                            "group hover:bg-white/[0.02] border-b border-white/[0.02] transition-colors",
                            trader.rank === 1 ? "bg-yellow-500/5" : ""
                          )}>
                             <td className="px-8 py-5">
                                <div className={cn(
                                  "w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs",
                                  trader.rank === 1 ? "bg-yellow-500 text-black shadow-[0_0_15px_rgba(234,179,8,0.4)]" : "bg-white/5 text-white/50"
                                )}>
                                   #{trader.rank}
                                </div>
                             </td>
                             <td className="px-8 py-5">
                                <div className="font-bold">{trader.user}</div>
                                <div className="text-[10px] text-white/30 flex items-center gap-1 uppercase">
                                   <Globe size={10} /> {trader.country}
                                </div>
                             </td>
                             <td className="px-8 py-5 font-mono text-emerald-400 font-bold">{trader.profit}</td>
                             <td className="px-8 py-5 font-mono text-white/40">{trader.growth}</td>
                             <td className="px-8 py-5">
                                <span className={cn(
                                  "px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border",
                                  trader.tier === 'Legendary' ? "border-yellow-500/20 text-yellow-500 bg-yellow-500/5" : "border-brand-blue/20 text-brand-blue bg-brand-blue/5"
                                )}>
                                   {trader.tier}
                                </span>
                             </td>
                             <td className="px-8 py-5 text-right">
                                <button className="p-2 glass rounded-xl hover:bg-white/10 transition-all"><Settings size={16}/></button>
                             </td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
               <div className="p-8 border-t border-white/5 text-center">
                  <button className="text-xs font-bold text-white/30 hover:text-white flex items-center justify-center gap-2 mx-auto">
                     Full Season History <ChevronRight size={14} />
                  </button>
               </div>
            </div>
         </div>

         <div className="lg:col-span-4 space-y-8">
            <div className="glass p-8 rounded-[40px] bg-black/40 border-white/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/10 blur-[40px] rounded-full" />
                <h3 className="font-bold mb-8 flex items-center gap-3">
                   <Award size={20} className="text-yellow-500" /> Active Season
                </h3>
                <div className="space-y-6">
                   <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-white/50">Season Node</span>
                      <span className="text-xs font-mono text-brand-blue">#24_SPRING_HQ</span>
                   </div>
                   <div className="flex justify-between items-center">
                      <span className="text-xs font-bold text-white/50">Days Remaining</span>
                      <span className="text-xs font-mono text-white">14d 04h 22m</span>
                   </div>
                   <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: '65%' }}
                        transition={{ duration: 1 }}
                        className="h-full bg-yellow-500 rounded-full blue-glow" 
                      />
                   </div>
                </div>
                <button className="w-full mt-10 py-5 bg-white text-black rounded-2xl text-xs font-bold hover:bg-yellow-500 hover:text-white transition-all shadow-[0_10px_20px_rgba(0,0,0,0.4)]">
                   Close Season & Pay
                </button>
            </div>

            <div className="glass p-8 rounded-[40px] bg-black/40 border-white/5">
                <h3 className="font-bold mb-8">Prize Configuration</h3>
                <div className="space-y-4">
                   {[
                     { rank: 'Rank #1', prize: '$10,000 + Physical Trophy', color: 'text-yellow-500' },
                     { rank: 'Rank #2-3', prize: '$5,000 Cash Credit', color: 'text-white/70' },
                     { rank: 'Rank #4-10', prize: 'Free $100k Challenge', color: 'text-brand-blue' },
                     { rank: 'Rank #11-100', prize: 'Exclusive Discord Badge', color: 'text-white/30' },
                   ].map((item, i) => (
                     <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 flex flex-col gap-1">
                        <div className={cn("text-[10px] uppercase font-bold tracking-widest", item.color)}>{item.rank}</div>
                        <div className="text-xs font-medium text-white/80">{item.prize}</div>
                     </div>
                   ))}
                </div>
                <button className="w-full mt-8 py-3 glass rounded-2xl text-xs font-bold hover:bg-white/5 transition-all">
                   Modify Prize Pool
                </button>
            </div>
         </div>
      </div>
    </div>
  );
}
