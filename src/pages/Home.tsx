import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Trophy, 
  Gift, 
  Users, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Zap, 
  ChevronRight, 
  CheckCircle2, 
  MessageSquare,
  Bot,
  Sparkles,
  BarChart3,
  Target,
  Signal,
  CreditCard,
  Crown,
  BrainCircuit
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
  })
};

const StatsSection = () => {
  const stats = [
    { label: 'Neural Traders', value: '52,402+', icon: Users, color: 'text-brand-neon' },
    { label: 'Ecosystem Partners', value: '24+', icon: ShieldCheck, color: 'text-brand-cyan' },
    { label: 'Paid Rewards', value: '$4.8M+', icon: Gift, color: 'text-brand-neon' },
    { label: 'Verified Funded', value: '8.4k+', icon: Trophy, color: 'text-brand-cyan' },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="glass-dark p-8 rounded-[32px] text-center group hover:border-brand-neon/30 transition-all relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className={cn("w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform border border-white/5", stat.color)}>
              <stat.icon size={24} />
            </div>
            <div className="text-3xl font-display font-bold mb-1 tracking-tighter">{stat.value}</div>
            <div className="text-[10px] text-white/30 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const SignalCard = ({ pair, entry, sl, tp, winRate, time }: any) => (
  <div className="glass p-6 rounded-[32px] border-brand-neon/10 hover:border-brand-neon/30 transition-all group">
    <div className="flex justify-between items-start mb-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-brand-neon/10 border border-brand-neon/20 flex items-center justify-center">
          <Signal className="text-brand-neon" size={18} />
        </div>
        <div>
          <div className="text-sm font-bold">{pair}</div>
          <div className="text-[10px] text-white/30 uppercase tracking-widest">{time}</div>
        </div>
      </div>
      <div className="px-3 py-1 rounded-full bg-brand-neon/20 text-brand-neon text-[10px] font-bold border border-brand-neon/30">
        WIN RATE: {winRate}
      </div>
    </div>
    
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="text-center">
        <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">Entry</div>
        <div className="text-xs font-mono font-bold text-white">{entry}</div>
      </div>
      <div className="text-center">
        <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">SL</div>
        <div className="text-xs font-mono font-bold text-red-500/80">{sl}</div>
      </div>
      <div className="text-center">
        <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest mb-1">TP</div>
        <div className="text-xs font-mono font-bold text-brand-neon">{tp}</div>
      </div>
    </div>

    <button className="w-full py-3 bg-brand-neon text-black rounded-xl text-[10px] font-bold uppercase tracking-widest group-hover:neon-glow transition-all">
       View Detailed Signal
    </button>
  </div>
);

const FundedShowcase = () => {
  const traders = [
    { name: 'Satoshi_FX', profit: '+$24,500', firm: 'FTMO', payoutDate: '2H AGO', avatar: 'S' },
    { name: 'EliteTrader_99', profit: '+$12,800', firm: 'Apex', payoutDate: '5H AGO', avatar: 'E' },
    { name: 'PropAlpha', profit: '+$45,200', firm: 'Funding Pips', payoutDate: '1D AGO', avatar: 'P' },
    { name: 'CryptoQuant', profit: '+$8,400', firm: 'Blue Guardian', payoutDate: '1D AGO', avatar: 'C' },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <div className="text-brand-neon text-[10px] font-bold uppercase tracking-[0.4em] mb-4">Neural Verified</div>
            <h2 className="text-4xl font-display font-bold">Funded Trader Showcase</h2>
          </div>
          <div className="px-4 py-2 glass rounded-xl text-[10px] font-bold text-white/40 uppercase tracking-widest flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-brand-neon animate-pulse" />
            Live Propagation
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {traders.map((t, i) => (
            <motion.div 
              key={i} 
              custom={i} 
              initial="hidden" 
              whileInView="visible" 
              variants={fadeIn}
              viewport={{ once: true }}
              className="glass p-6 rounded-[32px] border-white/5 hover:border-brand-cyan/30 transition-all group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-brand-cyan/20 flex items-center justify-center font-bold text-brand-cyan text-lg border border-brand-cyan/20 group-hover:scale-110 transition-transform">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold flex items-center gap-2">
                    {t.name} <Crown size={12} className="text-brand-neon" />
                  </div>
                  <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest">{t.firm}</div>
                </div>
              </div>
              <div className="text-2xl font-mono font-bold text-brand-neon mb-1">{t.profit}</div>
              <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest">REAL PAYOUT • {t.payoutDate}</div>
              <div className="mt-6 pt-6 border-t border-white/5 flex gap-2">
                 <div className="px-2 py-1 bg-white/5 rounded text-[8px] font-bold uppercase tracking-tighter text-white/40">Verified OnChain</div>
                 <div className="px-2 py-1 bg-brand-neon/10 rounded text-[8px] font-bold uppercase tracking-tighter text-brand-neon">Elite Badge</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ComparisonTable = () => {
  const rows = [
    { firm: 'Apex Trader', funding: '$50k - $300k', drawdown: '3% Max', payout: '90%', trust: 9.8 },
    { firm: 'FTMO', funding: '$10k - $200k', drawdown: '10% Max', payout: '80%', trust: 9.9 },
    { firm: 'Funding Pips', funding: '$5k - $100k', drawdown: '12% Max', payout: '80%', trust: 9.5 },
    { firm: 'E8 Funding', funding: '$25k - $400k', drawdown: '8% Max', payout: '80%', trust: 9.6 },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
           <h2 className="text-4xl font-display font-bold mb-4 italic uppercase tracking-tighter">Prop Firm <span className="text-brand-neon">Neural Matrix</span></h2>
           <p className="text-white/40 text-sm max-w-2xl mx-auto uppercase tracking-widest font-medium">Real-time side-by-side comparison of elite funding models</p>
        </div>
        
        <div className="glass-dark rounded-[40px] overflow-hidden border-white/5">
           <div className="overflow-x-auto">
              <table className="w-full text-left">
                 <thead>
                    <tr className="border-b border-white/10 bg-white/[0.02]">
                       <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Firm Authority</th>
                       <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Funding Range</th>
                       <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Risk Tolerance</th>
                       <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Profit Split</th>
                       <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40">Neural Trust</th>
                       <th className="px-8 py-6 text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 text-right">Access</th>
                    </tr>
                 </thead>
                 <tbody className="text-sm">
                    {rows.map((row, i) => (
                      <tr key={i} className="border-b border-white/5 hover:bg-white/[0.03] transition-colors group">
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center font-bold text-xs">{row.firm[0]}</div>
                              <span className="font-bold">{row.firm}</span>
                           </div>
                        </td>
                        <td className="px-8 py-6 font-mono text-white/60">{row.funding}</td>
                        <td className="px-8 py-6 font-mono text-brand-cyan">{row.drawdown}</td>
                        <td className="px-8 py-6 font-mono text-brand-neon">{row.payout}</td>
                        <td className="px-8 py-6">
                           <div className="flex items-center gap-2">
                              <div className="h-1 flex-grow max-w-[60px] bg-white/10 rounded-full overflow-hidden">
                                 <div className="h-full bg-brand-neon" style={{ width: `${row.trust * 10}%` }} />
                              </div>
                              <span className="text-[10px] font-bold text-white/40">{row.trust}/10</span>
                           </div>
                        </td>
                        <td className="px-8 py-6 text-right">
                           <button className="px-6 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-brand-neon hover:text-black hover:border-brand-neon transition-all">
                              Neural Link
                           </button>
                        </td>
                      </tr>
                    ))}
                 </tbody>
              </table>
           </div>
        </div>
      </div>
    </section>
  );
};

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative"
    >
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-6 overflow-hidden pt-32 pb-20">
        {/* Cinematic Ambient Glows */}
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-brand-neon/10 blur-[150px] rounded-full animate-pulse-slow pointer-events-none" />
        <div className="absolute top-[40%] right-[10%] w-[600px] h-[600px] bg-brand-cyan/10 blur-[180px] rounded-full animate-float pointer-events-none" />
        
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-xl mb-8 border-brand-neon/30">
                <ShieldCheck size={14} className="text-brand-neon" />
                <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-neon/80">#1 PROP FIRM ECOSYSTEM</span>
              </div>
              
              <h1 className="text-5xl md:text-[5.5rem] font-display font-bold leading-[0.85] mb-10 tracking-tighter uppercase italic">
                THE ULTIMATE <br />
                <span className="text-brand-neon text-glow-neon">PROP FIRM &</span> <br />
                <span className="text-white">TRADER ECOSYSTEM</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/40 mb-12 leading-relaxed max-w-xl font-medium tracking-tight">
                Buy prop firm challenges through our affiliate links and unlock exclusive <span className="text-white font-bold italic">trader rewards</span>, cashback, Discord perks, and premium benefits.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/firms" className="group relative px-12 py-5 bg-brand-neon text-black font-bold rounded-2xl flex items-center justify-center gap-3 neon-glow hover:scale-[1.05] transition-all uppercase tracking-widest text-[10px] italic">
                  Explore Firms <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#" className="group px-12 py-5 glass-dark text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-all uppercase tracking-widest text-[10px] border-white/5 italic">
                  <div className="w-5 h-5 bg-[#5865F2] rounded-md flex items-center justify-center"><MessageSquare size={12} fill="white" /></div> Join Discord
                </a>
              </div>
              
              <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-12">
                 {[
                   { label: 'Active Traders', value: '25K+' },
                   { label: 'Partnered Firms', value: '50+' },
                   { label: 'Rewards Paid', value: '$2M+' },
                   { label: 'Community Members', value: '15K+' },
                 ].map((stat, i) => (
                   <div key={i}>
                      <div className="text-2xl md:text-3xl font-display font-bold tracking-tighter mb-1">{stat.value}</div>
                      <div className="text-[9px] text-white/30 font-bold uppercase tracking-widest whitespace-nowrap">{stat.label}</div>
                   </div>
                 ))}
              </div>
            </motion.div>
          </div>

          {/* Large 3D Logo Simulation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="hidden lg:block relative perspective-1000"
          >
            <div className="relative w-full aspect-square max-w-[700px] mx-auto flex items-center justify-center">
               <div className="absolute inset-0 bg-brand-neon/10 blur-[120px] rounded-full animate-pulse-slow mix-blend-screen" />
               
               {/* Simulating the "P" logo from the reference */}
               <div className="relative z-10 w-[80%] h-[80%] flex items-center justify-center">
                  <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-[0_0_50px_rgba(198,255,0,0.4)]">
                    <defs>
                      <linearGradient id="pGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#C6FF00" />
                        <stop offset="50%" stopColor="#00E5FF" />
                        <stop offset="100%" stopColor="#C6FF00" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="15" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    <motion.path 
                      d="M100 50 L300 50 L300 150 L200 150 L200 250 L100 250 Z" 
                      fill="none" 
                      stroke="url(#pGrad)" 
                      strokeWidth="30"
                      strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    {/* Artistic elements to match the "P" style */}
                    <motion.path 
                      d="M120 70 L280 70 L280 130 L180 130 L180 350 L120 350 Z"
                      fill="url(#pGrad)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1 }}
                    />
                    <motion.path 
                      d="M200 180 L350 180 L200 350 Z"
                      fill="#00E5FF"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
                    />
                  </svg>
               </div>

               {/* Ambient floating lines */}
               <div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-30">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-[1px] border-brand-neon/20 rounded-full" 
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-20 border-[1px] border-brand-cyan/20 rounded-full" 
                  />
               </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-10 px-6 border-y border-white/5 bg-white/[0.01]">
         <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 hover:opacity-100 transition-opacity">
            {[
              { icon: ShieldCheck, label: 'Secure Payments', sub: '100% Secure Checkout' },
              { icon: Zap, label: 'Instant Delivery', sub: 'Quick Challenge Access' },
              { icon: Star, label: 'Best Discounts', sub: 'Up to 40% Off' },
              { icon: MessageSquare, label: '24/7 Support', sub: 'Always Here To Help' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                 <item.icon className="text-brand-neon" size={24} />
                 <div>
                    <div className="text-xs font-bold uppercase tracking-widest">{item.label}</div>
                    <div className="text-[10px] text-white/40 font-medium uppercase tracking-tighter">{item.sub}</div>
                 </div>
              </div>
            ))}
         </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase italic tracking-tighter mb-8 italic">WHY CHOOSE <br /> <span className="text-brand-neon">PROPFUTURES.AI?</span></h2>
              <div className="grid grid-cols-1 gap-6">
                {[
                  { title: 'Cashback Rewards', desc: 'Earn up to 30% cashback on every challenge purchase.', icon: Gift },
                  { title: 'Exclusive Coupons', desc: 'Access special discounts only for our community.', icon: Zap },
                  { title: 'Free Retry Benefits', desc: 'Get free retries on eligible challenges & firms.', icon: ShieldCheck },
                  { title: 'Trader Leaderboards', desc: 'Compete, climb ranks & win exclusive rewards.', icon: Trophy },
                  { title: 'Discord Premium', desc: 'Premium channels, signals & community perks.', icon: MessageSquare },
                  { title: 'Affiliate Earnings', desc: 'Earn commissions by referring new traders.', icon: Users },
                ].map((feature, i) => (
                  <div key={i} className="glass p-6 rounded-[24px] border-white/5 hover:border-brand-neon/30 transition-all group">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-black border border-white/10 rounded-xl flex items-center justify-center group-hover:bg-brand-neon group-hover:text-black transition-all">
                          <feature.icon size={20} />
                       </div>
                       <div>
                          <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                          <p className="text-[11px] text-white/40 font-medium leading-relaxed uppercase tracking-tighter">
                            {feature.desc}
                          </p>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:w-2/3">
               <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-xl mb-8 border-brand-neon/30">
                 <Sparkles size={14} className="text-brand-neon" />
                 <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-neon/80">10+ PREMIUM FEATURES</span>
               </div>
               
               <div className="space-y-4">
                  {[
                    'Advanced Analytics Dashboard',
                    'Smart Challenge Finder',
                    'Automated Cashback System',
                    'Exclusive Discount Engine',
                    'Trader KPI Tracking',
                    'Discord Role Sync',
                    'Profit Split Calculator',
                    'Economic Calendar',
                    'Payout Tracker',
                    'Community Trading Hub',
                    'Referral & Affiliate Dashboard',
                    'Mobile App (Coming Soon)',
                  ].map((feature, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-center gap-6 group"
                    >
                       <div className="w-12 h-12 bg-white/[0.02] border border-white/5 rounded-xl flex items-center justify-center text-[10px] font-bold text-white/20 group-hover:text-brand-neon group-hover:border-brand-neon/30 transition-all">
                          {String(i + 1).padStart(2, '0')}
                       </div>
                       <div className="flex-grow py-4 border-b border-white/5 flex items-center justify-between group-hover:border-brand-neon/20 transition-all">
                          <span className="text-sm font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{feature}</span>
                          <ChevronRight size={16} className="text-white/20 group-hover:text-brand-neon transition-all group-hover:translate-x-1" />
                       </div>
                    </motion.div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Firm Grid / Carousel */}
      <section className="py-32 px-6 relative overflow-hidden bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16">
             <div>
               <h2 className="text-4xl font-display font-bold uppercase italic tracking-tighter mb-4 italic">Neural <span className="text-brand-neon">Firm Matrix.</span></h2>
               <p className="text-white/40 text-sm uppercase tracking-widest font-medium">Verified partners with audited payout protocols</p>
             </div>
             <div className="flex gap-4">
                <button className="p-4 glass rounded-[20px] text-white/30 border-white/5"><ChevronRight className="rotate-180" /></button>
                <button className="p-4 glass rounded-[20px] text-white/30 border-brand-neon/30"><ChevronRight /></button>
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
             {FIRMS_DISPLAY.map((firm, i) => (
               <div key={i} className={cn(
                 "glass-dark p-8 rounded-[40px] border-white/5 relative group hover:border-brand-neon/40 transition-all duration-700 h-full flex flex-col",
                 firm.featured && "border-brand-neon/30 shadow-[0_0_40px_rgba(198,255,0,0.1)]"
               )}>
                  {firm.discount && (
                    <div className="absolute top-6 left-6 px-3 py-1 bg-brand-neon text-black rounded-lg text-[9px] font-black uppercase tracking-tighter">
                      {firm.discount} OFF
                    </div>
                  )}
                  {firm.featured && (
                    <div className="absolute top-6 right-6 text-brand-neon">
                       <Sparkles size={16} />
                    </div>
                  )}
                  
                  <div className="w-16 h-16 bg-white/[0.03] border border-white/5 rounded-3xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                     <TrendingUp className="text-brand-neon" size={24} />
                  </div>
                  
                  <div className="text-center mb-6">
                     <h4 className="text-2xl font-display font-bold uppercase italic tracking-tighter mb-1">{firm.name}</h4>
                     <div className="flex items-center justify-center gap-1">
                        <Star size={12} className="text-brand-neon" fill="currentColor" />
                        <span className="text-[10px] font-bold text-white/60">{firm.rating}/5</span>
                     </div>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                     <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                        <span className="text-white/30">Payout:</span>
                        <span className="text-brand-cyan">{firm.payout}</span>
                     </div>
                     <div className="flex justify-between items-center text-[10px] font-bold uppercase tracking-widest">
                        <span className="text-white/30">Up To:</span>
                        <span className="text-brand-neon">{firm.split} Profit Split</span>
                     </div>
                  </div>
                  
                  <div className="text-center mt-auto">
                     <div className="flex items-center justify-center gap-2 mb-4">
                        <span className="text-xl font-display font-bold text-white">{firm.price}</span>
                        <span className="text-xs text-white/30 line-through font-bold">{firm.oldPrice}</span>
                     </div>
                     <button className="w-full py-4 bg-brand-neon text-black font-bold uppercase tracking-widest text-[9px] rounded-2xl hover:neon-glow transition-all">Buy Challenge</button>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Leaderboard & Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <div className="flex justify-between items-end mb-12">
               <h3 className="text-3xl font-display font-bold uppercase italic tracking-tighter">Top <span className="text-brand-neon">Traders</span></h3>
               <Link to="/community" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 hover:text-brand-neon transition-colors underline">View Full Leaderboard</Link>
            </div>
            <div className="space-y-4">
              {[
                { name: 'ZenithTrade', pnl: '$147,892', flag: '🇺🇸' },
                { name: 'PipsMaster', pnl: '$118,765', flag: '🇬🇧' },
                { name: 'TradeKnight', pnl: '$97,301', flag: '🇩🇪' },
                { name: 'AlphaTrader', pnl: '$87,654', flag: '🇨🇦' },
                { name: 'MarketNinja', pnl: '$76,421', flag: '🇦🇺' },
              ].map((trader, i) => (
                <div key={i} className="glass p-5 rounded-[24px] border-white/5 hover:bg-white/[0.03] transition-all flex items-center gap-6 group">
                   <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs font-bold text-brand-neon">
                      {i + 1}
                   </div>
                   <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-black border border-white/10 p-0.5">
                         <img src={`https://i.pravatar.cc/100?img=${i + 20}`} className="w-full h-full rounded-full grayscale group-hover:grayscale-0 transition-all" />
                      </div>
                      <span className="font-bold text-sm">{trader.name}</span>
                   </div>
                   <div className="ml-auto text-right">
                      <div className="text-brand-neon font-mono font-bold">{trader.pnl}</div>
                   </div>
                   <div className="text-xl">{trader.flag}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
             <h3 className="text-3xl font-display font-bold uppercase italic tracking-tighter mb-12">Trader <span className="text-brand-neon">Testimonials</span></h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               {[
                 { name: 'NinjaTrader', role: 'Funded Trader', text: 'PropFutures.ai helped me save hundreds of dollars on challenges and the community is just amazing!' },
                 { name: 'ChartWizard', role: 'Funded Trader', text: 'Best platform to buy challenges! Cashback, discounts and support are next level.' },
               ].map((t, i) => (
                 <div key={i} className="glass p-8 rounded-[32px] border-white/5 relative flex flex-col">
                    <div className="flex items-center gap-4 mb-6">
                       <div className="w-12 h-12 rounded-full border border-white/10 p-1">
                          <img src={`https://i.pravatar.cc/100?img=${i + 30}`} className="w-full h-full rounded-full" />
                       </div>
                       <div>
                          <div className="text-xs font-bold">{t.name}</div>
                          <div className="text-[9px] text-brand-neon uppercase font-bold tracking-widest">{t.role}</div>
                       </div>
                    </div>
                    <p className="text-sm text-white/50 italic leading-relaxed">"{t.text}"</p>
                    <div className="mt-8 flex gap-1">
                       {[1, 2, 3, 4, 5].map(s => <Star key={s} size={12} className="text-brand-neon" fill="currentColor" />)}
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
           <div className="glass-dark p-12 md:p-20 rounded-[56px] border-white/5 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(198,255,0,0.05)_0%,_transparent_70%)]" />
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold uppercase italic tracking-tighter mb-8 leading-[0.9]">
                       DASHBOARD <br /> <span className="text-brand-neon">PREVIEW.</span>
                    </h2>
                    <p className="text-lg text-white/40 font-medium uppercase tracking-tight mb-12">
                       Synchronize your verified firms into one centralized neural hub. Track PNL, claim XP, and monitor your global rank in real-time.
                    </p>
                    <div className="space-y-6">
                       {[
                         { label: 'Total Earnings', val: '$24,567.89', trend: '+12.5%' },
                         { label: 'Rewards Balance', val: '2,450 PTS', trend: '+8.2%' },
                         { label: 'Network Rank', val: 'Elite I', trend: 'Global #42' },
                       ].map((stat, i) => (
                         <div key={i} className="flex justify-between items-center py-4 border-b border-white/5 group">
                            <span className="text-xs font-bold text-white/40 uppercase tracking-widest group-hover:text-white transition-colors">{stat.label}</span>
                            <div className="text-right">
                               <div className="text-lg font-mono font-bold text-white">{stat.val}</div>
                               <div className="text-[9px] text-brand-neon font-bold uppercase tracking-widest">{stat.trend}</div>
                            </div>
                         </div>
                       ))}
                    </div>
                    <button className="mt-12 w-full sm:w-auto px-12 py-5 bg-brand-neon text-black rounded-2xl font-bold italic uppercase tracking-widest text-[10px] neon-glow">Initialize Custom Hub</button>
                 </div>
                 <div className="relative">
                    <div className="absolute -inset-4 bg-brand-neon/20 blur-[100px] rounded-[56px] mix-blend-screen opacity-20" />
                    <div className="relative glass-dark p-2 rounded-[40px] border-white/10 shadow-2xl">
                       <div className="bg-black/90 rounded-[38px] p-8 aspect-video overflow-hidden group">
                          <div className="flex justify-between mb-8">
                             <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/20" />
                             </div>
                             <div className="w-40 h-2 bg-white/5 rounded-full" />
                          </div>
                          <div className="space-y-4">
                             <div className="h-20 w-full bg-white/[0.03] rounded-2xl border border-white/5 animate-pulse" />
                             <div className="grid grid-cols-2 gap-4">
                                <div className="h-32 w-full bg-white/[0.03] rounded-2xl border border-white/5 animate-pulse" />
                                <div className="h-32 w-full bg-white/[0.03] rounded-2xl border border-white/5 animate-pulse" style={{ animationDelay: '0.2s' }} />
                             </div>
                             <div className="h-40 w-full bg-brand-neon/5 rounded-2xl border border-brand-neon/10 flex items-center justify-center">
                                <BrainCircuit size={40} className="text-brand-neon/20" />
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-32 px-6">
         <div className="max-w-5xl mx-auto glass p-12 md:p-20 rounded-[56px] border-brand-neon/20 relative overflow-hidden text-center">
            <div className="relative z-10">
               <h2 className="text-4xl font-display font-bold uppercase italic tracking-tighter mb-4 italic">JOIN THE <span className="text-brand-neon underline">TRADER REVOLUTION.</span></h2>
               <p className="text-white/40 text-sm max-w-xl mx-auto uppercase tracking-widest font-medium mb-10">Get exclusive deals, trading tips & community updates straight to your inbox.</p>
               <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <input type="email" placeholder="ENTER_NEURAL_EMAIL..." className="flex-grow bg-white/5 border border-white/10 rounded-2xl py-5 px-8 focus:outline-none focus:border-brand-neon transition-all font-mono text-[10px] font-bold tracking-widest text-brand-neon italic" />
                  <button className="px-10 py-5 bg-brand-neon text-black rounded-2xl font-bold uppercase tracking-widest text-[10px] neon-glow">Subscribe</button>
               </div>
               <div className="mt-8 flex justify-center gap-8 text-[9px] font-bold text-white/20 uppercase tracking-[0.2em]">
                  <span className="flex items-center gap-2"> <CheckCircle2 size={12} className="text-brand-neon" /> NO_SPAM_EVER</span>
                  <span className="flex items-center gap-2"> <CheckCircle2 size={12} className="text-brand-neon" /> UNSUBSCRIBE AT ANY TIME</span>
               </div>
            </div>
         </div>
      </section>
    </motion.div>
  );
}

const FIRMS_DISPLAY = [
  { name: 'FTMO', payout: '1-2 Days', price: '$105', oldPrice: '$160', rating: 4.8, featured: false, split: '90%', discount: '30%' },
  { name: 'FundedNext', payout: '24 Hours', price: '$89', oldPrice: '$110', rating: 4.7, featured: false, split: '95%' },
  { name: 'The 5%ers', payout: '1 Day', price: '$95', oldPrice: '$129', rating: 4.9, featured: true, split: '100%', discount: '50%' },
  { name: 'PipsPips', payout: '24-48 Hours', price: '$99', oldPrice: '$120', rating: 4.6, featured: false, split: '90%', discount: '$95' },
  { name: 'TOPSTEP', payout: '2-3 Days', price: '$165', oldPrice: '$190', rating: 4.5, featured: false, split: '90%', discount: '15%' },
];
