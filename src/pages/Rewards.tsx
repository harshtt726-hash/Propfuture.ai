import { motion } from 'motion/react';
import { Gift, Zap, TrendingUp, ArrowRight, Star, ShoppingCart, Percent, Heart, ShoppingBag, Tv, Monitor, Cpu, Fingerprint, Sparkles, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

const RewardCard = ({ title, desc, value, type, icon: Icon, color, cost }: { title: string, desc: string, value: string, type: string, icon: any, color: string, cost: string }) => (
  <div className="glass-dark p-10 rounded-[48px] relative overflow-hidden group hover:border-brand-neon/30 transition-all duration-700 bg-black/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] border-white/5">
    <div className={cn("absolute top-0 right-0 w-32 h-32 blur-[60px] rounded-full -mr-16 -mt-16 opacity-10 group-hover:opacity-30 transition-opacity duration-1000", color)} />
    
    <div className="relative z-10 h-full flex flex-col">
      <div className={cn("w-16 h-16 rounded-[24px] flex items-center justify-center mb-10 group-hover:scale-110 transition-transform duration-500 border border-white/5", cost === "FREE" ? "bg-brand-cyan/10" : "bg-white/5")}>
        <Icon className={cn("transition-colors duration-500", cost === "FREE" ? "text-brand-cyan" : "group-hover:text-brand-neon")} size={32} />
      </div>
      
      <div className="mb-10">
        <div className="text-[9px] uppercase font-bold tracking-[0.4em] text-white/20 mb-3">{type}</div>
        <h3 className="text-3xl font-display font-bold mb-4 italic uppercase tracking-tighter group-hover:text-brand-neon transition-colors">{title}</h3>
        <p className="text-[11px] text-white/40 leading-relaxed font-bold uppercase tracking-widest">{desc}</p>
      </div>

      <div className="mt-auto pt-8 border-t border-white/5 flex items-end justify-between">
        <div>
          <div className="text-[8px] uppercase text-white/20 font-bold mb-2 tracking-[0.3em]">QUANTUM COST</div>
          <div className="text-2xl font-mono font-bold text-brand-neon">{cost}</div>
          <div className="text-[9px] text-white/20 uppercase font-bold mt-1 ">{value} VALUE</div>
        </div>
        <button className="px-8 py-4 bg-brand-neon text-black rounded-xl font-bold text-[10px] uppercase tracking-widest hover:neon-glow hover:scale-[1.05] transition-all">
          Initiate Payout
        </button>
      </div>
    </div>
  </div>
);

import { stateService } from '../lib/stateService';

export default function Rewards() {
  const dynamicRewards = stateService.getRewards().map((r, idx) => {
    let desc = 'Initiate redemption of the premium cluster node.';
    let value = 'Limited Cluster Stock';
    let icon = Cpu;
    let color = 'bg-brand-neon';

    if (r.title.toLowerCase().includes('ledger')) {
      desc = 'Secure your ecosystem earnings on-chain.';
      value = '$250';
      icon = Cpu;
      color = 'bg-brand-neon';
    } else if (r.title.toLowerCase().includes('tradingview')) {
      desc = 'Advanced quantum charting algorithms.';
      value = '$60';
      icon = Tv;
      color = 'bg-brand-cyan';
    } else if (r.title.toLowerCase().includes('apex') || r.title.toLowerCase().includes('pass')) {
      desc = '80% discount on any elite challenge.';
      value = '$400';
      icon = Zap;
      color = 'bg-brand-neon';
    } else if (r.title.toLowerCase().includes('cyber') || r.title.toLowerCase().includes('station')) {
      desc = 'Extreme performance hardware setup.';
      value = '$4,200';
      icon = Monitor;
      color = 'bg-white';
    } else {
      desc = `Premium redemption node under ${r.category || 'Loyalty'} core.`;
      value = r.qty ? `${r.qty} left in stock` : 'LIMITED STOCK';
      icon = idx % 2 === 0 ? Cpu : Zap;
      color = 'bg-brand-cyan';
    }

    const priceLabel = String(r.cost).toUpperCase().includes('FREE') || r.cost === 0
      ? 'FREE'
      : `${Number(r.cost).toLocaleString()} XP`;

    return {
      title: r.title,
      desc,
      value,
      type: (r.category || 'LOYALTY_PASS').toUpperCase(),
      icon,
      color,
      cost: priceLabel
    };
  });

  const items = dynamicRewards;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 max-w-7xl mx-auto min-h-screen pt-24"
    >
      <div className="text-center mb-24 relative pt-12">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-40 bg-brand-neon/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="inline-flex items-center gap-3 px-4 py-2 bg-brand-neon/10 rounded-xl mb-10 border border-brand-neon/20">
           <Fingerprint size={14} className="text-brand-neon" />
           <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-neon/80">Quantum Inventory Authorization</span>
        </div>
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-8 uppercase italic tracking-tighter leading-none">
          Neural <span className="text-brand-neon text-glow-neon">Bounty</span>
        </h1>
        <p className="text-white/40 max-w-xl mx-auto text-sm font-medium uppercase tracking-[0.2em] leading-relaxed relative z-10">
          Redeem your accumulated XP for elite hardware, alpha-tier licenses, and high-delta challenge coupons.
        </p>
      </div>

      {/* Reward Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
         {[
           { label: 'Available Alpha', value: '42,800', sub: 'NEURAL XP', icon: Star, color: 'text-brand-neon' },
           { label: 'Total Extraction', value: '$8,402', sub: 'TOTAL VALUE REDEEMED', icon: Gift, color: 'text-brand-cyan' },
           { label: 'Current Tier', value: 'Elite II', sub: '2.5% XP ACCELERATOR', icon: Activity, color: 'text-white' },
         ].map((stat, i) => (
           <div key={i} className="glass-dark p-10 rounded-[40px] text-center border-white/5 bg-black/40 group hover:border-brand-neon/20 transition-all">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/5 group-hover:scale-110 transition-transform">
                <stat.icon size={28} className={stat.color} />
              </div>
              <div className="text-[10px] uppercase text-white/30 tracking-[0.3em] mb-2 font-bold">{stat.label}</div>
              <div className="text-4xl font-display font-bold mb-2 uppercase italic tracking-tighter italic">{stat.value}</div>
              <div className={cn("text-[9px] font-bold tracking-widest", stat.color)}>{stat.sub}</div>
           </div>
         ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
        <h2 className="text-4xl font-display font-bold uppercase italic tracking-tighter">Available <span className="text-brand-neon">Artifacts</span></h2>
        <div className="flex gap-4 p-1.5 glass rounded-2xl bg-white/[0.02]">
          <button className="px-6 py-3 bg-brand-neon text-black rounded-xl text-[9px] font-bold uppercase tracking-[0.2em] shadow-[0_0_20px_rgba(198,255,0,0.2)]">All Systems</button>
          <button className="px-6 py-3 text-[9px] font-bold uppercase tracking-[0.2em] text-white/30 hover:text-white transition-colors">Neural Syncs</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-32">
        {items.map((v, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <RewardCard {...v} />
          </motion.div>
        ))}
      </div>

      {/* Special Offer */}
      <div className="glass-dark p-16 md:p-24 rounded-[64px] relative overflow-hidden bg-[#050505]/80 border-brand-neon/20 shadow-[0_40px_80px_rgba(0,0,0,0.9)]">
         <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-neon/5 to-transparent pointer-events-none" />
         <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-brand-neon/10 blur-[150px] rounded-full pointer-events-none" />
         
         <div className="relative z-10 max-w-3xl">
            <div className="mb-10 flex flex-wrap items-center gap-6">
               <div className="px-6 py-2 bg-brand-neon text-black text-[10px] font-bold uppercase rounded-xl tracking-[0.3em] neon-glow">CRITICAL WINDOW</div>
               <div className="text-white font-mono text-[10px] font-bold uppercase tracking-widest flex items-center gap-3">
                  <Activity className="text-brand-neon animate-pulse" size={16} /> 
                  Neural Rebalancing Ends In: <span className="text-brand-neon">04:23:12</span>
               </div>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 uppercase italic tracking-tighter leading-[0.9]">Ecosystem <br /> <span className="text-brand-neon">Delta Extraction</span></h2>
            <p className="text-white/40 text-lg mb-14 leading-relaxed font-medium uppercase tracking-tight max-w-2xl">
              For a limited neural cycle, synchronize your XP into USDC with zero protocol friction. Verified nodes only.
            </p>
            <button className="px-14 py-6 bg-brand-neon text-black rounded-[24px] font-bold neon-glow hover:scale-[1.03] transition-all uppercase tracking-widest text-[11px] flex items-center gap-4">
               Initiate Immediate Extraction <ArrowRight className="transition-transform group-hover:translate-x-2" size={20} />
            </button>
         </div>
      </div>
    </motion.div>
  );
}
