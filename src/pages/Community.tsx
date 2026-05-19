import { motion } from 'motion/react';
import { MessageSquare, Users, Trophy, Star, ShieldCheck, Zap, Globe, Github, Twitter, MessageCircle, Bot, Sparkles, BrainCircuit, Activity } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Community() {
  const achievements = [
    { name: 'funded_king', label: 'Neural Elite', color: 'text-brand-neon', bg: 'bg-brand-neon/10', total: '1.2k' },
    { name: 'alpha_caller', label: 'Matrix Analyst', color: 'text-brand-cyan', bg: 'bg-brand-cyan/10', total: '420' },
    { name: 'whale_trader', label: 'Ecosystem Whale', color: 'text-white', bg: 'bg-white/10', total: '84' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 max-w-7xl mx-auto min-h-screen pt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32 pt-12">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-xl mb-10 border-brand-neon/30">
            <Activity size={14} className="text-brand-neon" />
            <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-neon/80">Neural Hub Active</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] mb-10 uppercase italic tracking-tighter">
            Connect <br /><span className="text-brand-neon text-glow-neon">The Matrix</span>
          </h1>
          <p className="text-lg text-white/50 mb-12 leading-relaxed max-w-xl font-medium tracking-tight">
            Synchronize with 50,000+ traders across the PropFutures neural layer. Exchange multi-dimensional alpha, verify payouts, and scale the leaderboard.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
             <button className="px-12 py-6 bg-[#5865F2] text-white rounded-2xl font-bold flex items-center justify-center gap-4 hover:scale-[1.03] transition-all shadow-[0_0_40px_-10px_rgba(88,101,242,0.5)] uppercase tracking-widest text-[10px]">
               <MessageSquare size={24} />
               Synchronize Discord
             </button>
             <div className="flex items-center gap-4 px-8 py-6 glass rounded-2xl border-white/5">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-[#050505] bg-white/10 overflow-hidden relative shadow-xl">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" className="grayscale hover:grayscale-0 transition-all cursor-crosshair" />
                    </div>
                  ))}
                </div>
                <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
                  <span className="text-brand-neon">1,242</span> NODES PULSING
                </div>
             </div>
          </div>
        </div>

        <div className="relative group">
          <div className="absolute inset-0 bg-brand-neon/5 blur-[120px] rounded-full pointer-events-none group-hover:bg-brand-neon/10 transition-colors duration-1000" />
          <div className="glass-dark p-10 rounded-[48px] border-brand-neon/20 relative overflow-hidden bg-black/60 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
             <div className="flex items-center gap-4 mb-10 pb-6 border-b border-white/5">
                <div className="w-12 h-12 bg-brand-neon/10 rounded-2xl flex items-center justify-center border border-brand-neon/20">
                   <Bot size={24} className="text-brand-neon" />
                </div>
                <div>
                   <div className="font-bold text-xs uppercase tracking-widest italic group-hover:text-brand-neon transition-colors"># neural-alpha-logs</div>
                   <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest mt-1">Real-time ecosystem propagation</div>
                </div>
             </div>
             
             <div className="space-y-8">
                {[
                  { user: 'Satoshi_FX', msg: 'Just cleared 100k node propagation via FTMO. XP multiplier active! 🚀', time: '2m ago', reactions: 'NEURAL +42' },
                  { user: 'Elite_99', msg: 'Funding Pips payout verified on-chain. PropFutures cashback level 4 reached. 💎', time: '15m ago', reactions: 'ALPHA +18' },
                  { user: 'Neural_Whale', msg: 'Matrix analysis indicates GBPUSD support at 1.2540. Executing node. 📈', time: '1h ago', reactions: 'PULSE +9' },
                ].map((post, i) => (
                  <div key={i} className="flex gap-6 group/msg">
                     <div className="w-12 h-12 rounded-2xl bg-white/5 flex-shrink-0 group-hover/msg:scale-110 group-hover/msg:border-brand-neon/50 border border-white/5 transition-all overflow-hidden relative">
                        <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="avatar" className="grayscale group-hover/msg:grayscale-0 transition-all opacity-50 group-hover/msg:opacity-100" />
                     </div>
                     <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                           <span className="font-bold text-xs uppercase tracking-tighter group-hover/msg:text-brand-neon transition-colors">{post.user}</span>
                           <span className="text-[9px] text-white/20 font-bold uppercase">{post.time}</span>
                        </div>
                        <p className="text-sm text-white/50 leading-relaxed mb-3 font-medium">{post.msg}</p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] rounded-lg font-mono text-[9px] font-bold text-brand-neon border border-white/5">{post.reactions}</div>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-32">
         {[
           { icon: ShieldCheck, val: 'Verified', label: 'Ecosystem Nodes', color: 'text-brand-neon' },
           { icon: Trophy, val: '8,402+', label: 'Elite Traders', color: 'text-brand-cyan' },
           { icon: Globe, val: '142+', label: 'Global Proxies', color: 'text-white' },
           { icon: Zap, val: '$12M+', label: 'Neural Profit', color: 'text-brand-neon' },
         ].map((item, i) => (
           <div key={i} className="glass-dark p-10 rounded-[32px] text-center hover:border-brand-neon/30 transition-all group border-white/5 bg-black/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                 <item.icon size={64} />
              </div>
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform border border-white/5">
                <item.icon size={28} className={item.color} />
              </div>
              <div className="text-3xl font-display font-bold mb-2 tracking-tighter uppercase italic">{item.val}</div>
              <div className="text-[9px] uppercase text-white/30 tracking-[0.3em] font-bold">{item.label}</div>
           </div>
         ))}
      </div>

      {/* Achievements Showcase */}
      <div className="mb-40">
        <div className="text-center mb-24">
           <h2 className="text-4xl md:text-5xl font-display font-bold uppercase italic tracking-tighter">Neural <span className="text-brand-neon">Artifacts</span></h2>
           <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.4em] mt-2">Verified on-chain trophies for ecosystem mastery</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {achievements.map((badge, i) => (
             <div key={i} className="glass-dark p-14 rounded-[48px] text-center bg-[#070707]/80 overflow-hidden relative group border-white/5 hover:border-brand-neon/20 transition-all duration-700">
                <div className={cn("absolute -bottom-20 -right-20 w-64 h-64 blur-[120px] rounded-full opacity-10 group-hover:opacity-20 transition-opacity", badge.bg.replace('/10', ''))} />
                <div className={cn("w-24 h-24 rounded-[36px] flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-all border border-white/5 relative z-10", badge.bg)}>
                   <Trophy size={48} className={badge.color} />
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 uppercase italic tracking-tighter relative z-10">{badge.label}</h3>
                <p className="text-[11px] text-white/40 leading-relaxed mb-10 font-bold uppercase tracking-wider relative z-10">
                  Master the {badge.label.split(' ')[0]} protocol by securing high-delta funding via the prop matrix.
                </p>
                <div className="text-[9px] text-brand-neon uppercase tracking-[0.3em] font-bold py-2 px-4 bg-brand-neon/5 border border-brand-neon/20 rounded-full inline-block relative z-10">
                   {badge.total} HOLDERS DETECTED
                </div>
             </div>
           ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="glass-dark p-20 rounded-[64px] text-center bg-black/60 relative overflow-hidden border-white/5">
         <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,_rgba(198,255,0,0.05)_0%,_transparent_50%)]" />
         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-cyan/5 blur-[100px] rounded-full" />
         
         <div className="relative z-10 max-w-2xl mx-auto mb-16">
            <h2 className="text-5xl font-display font-bold uppercase italic tracking-tighter mb-6">Synchronize <br /> <span className="text-brand-neon">External Nodes</span></h2>
            <p className="text-white/30 text-[10px] font-bold uppercase tracking-[0.3em]">Maintain presence across all valid communication frequencies.</p>
         </div>

         <div className="flex flex-wrap justify-center gap-6 relative z-10">
            {[
              { icon: Twitter, label: 'Neural Feed (X)', url: '#' },
              { icon: Github, label: 'Ecosystem Docs', url: '#' },
              { icon: BrainCircuit, label: 'Core Intelligence', url: '#' },
            ].map((social, i) => (
              <a key={i} href={social.url} className="flex items-center gap-4 px-10 py-5 glass rounded-2xl hover:bg-white/10 hover:border-brand-neon/30 transition-all group border-white/5">
                 <social.icon size={24} className="text-white/40 group-hover:text-brand-neon group-hover:scale-110 transition-all" />
                 <span className="font-bold text-[10px] uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">{social.label}</span>
              </a>
            ))}
         </div>
      </div>
    </motion.div>
  );
}
