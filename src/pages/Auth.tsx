import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { Mail, Lock, LogIn, Github, MessageSquare, ArrowRight, ShieldCheck, TrendingUp, Cpu, Fingerprint, BrainCircuit, Activity, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const [show2FA, setShow2FA] = useState(false);

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      setShow2FA(true);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden pt-24"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#020202]">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-neon/5 blur-[150px] rounded-full animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-cyan/5 blur-[150px] rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        
        {/* Left Side: Marketing */}
        <div className="hidden lg:block relative">
           <div className="absolute -top-20 -left-20 w-40 h-40 bg-brand-neon/10 blur-[80px] rounded-full" />
           <div className="mb-16">
              <Link to="/" className="flex items-center gap-3 mb-12 group">
                <div className="w-12 h-12 bg-black border border-brand-neon/30 rounded-xl flex items-center justify-center neon-glow group-hover:scale-110 transition-transform">
                  <TrendingUp className="text-brand-neon" size={28} />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-display font-bold tracking-tighter leading-none italic">PROP<span className="text-brand-neon">FUTURES</span></span>
                  <span className="text-[10px] font-bold text-white/30 tracking-[0.3em] uppercase leading-none mt-1">.AI PROTOCOL</span>
                </div>
              </Link>
              <h1 className="text-7xl font-display font-bold mb-10 leading-[0.9] italic tracking-tighter uppercase">
                Initialize <br /> 
                <span className="text-brand-neon text-glow-neon">Neural Access.</span>
              </h1>
              <p className="text-xl text-white/40 leading-relaxed max-w-md font-medium italic">
                Synchronize your credentials with the global prop matrix. Connect, evolve, and extracted delta.
              </p>
           </div>
           
           <div className="space-y-10">
              {[
                { title: 'Neural Security', desc: 'On-chain verification and 2FA protocol shields.', icon: Fingerprint, color: 'text-brand-neon' },
                { title: 'Alpha Node Data', desc: 'Direct stream from elite community clusters.', icon: BrainCircuit, color: 'text-brand-cyan' },
                { title: 'Ecosystem XP', desc: 'Accumulate progression points across all nodes.', icon: Zap, color: 'text-white' },
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start group">
                   <div className="w-14 h-14 bg-white/[0.03] border border-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-brand-neon/10 group-hover:border-brand-neon/30 transition-all">
                      <item.icon className={cn("transition-colors", item.color)} size={28} />
                   </div>
                   <div>
                      <h4 className="font-bold mb-1 mr-2 text-xl uppercase italic tracking-tighter group-hover:text-white transition-colors">{item.title}</h4>
                      <p className="text-[11px] text-white/30 leading-relaxed font-bold uppercase tracking-widest">{item.desc}</p>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative">
           <div className="absolute -inset-4 bg-brand-neon/5 rounded-[56px] blur-3xl -z-10 animate-pulse" />
           <div className="glass-dark p-10 md:p-14 rounded-[56px] relative z-10 border-white/5 bg-black/60 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] overflow-hidden">
              <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none">
                 <Cpu size={160} />
              </div>

              <div className="flex gap-10 mb-12 border-b border-white/5">
                <button 
                  onClick={() => { setIsLogin(true); setShow2FA(false); }}
                  className={cn(
                    "pb-6 font-bold text-xs uppercase tracking-[0.3em] transition-all relative",
                    isLogin ? "text-brand-neon" : "text-white/20 hover:text-white/40"
                  )}
                >
                  Neural Login
                  {isLogin && <motion.div layoutId="auth-tab" className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-neon neon-glow shadow-sm" />}
                </button>
                <button 
                  onClick={() => { setIsLogin(false); setShow2FA(false); }}
                  className={cn(
                    "pb-6 font-bold text-xs uppercase tracking-[0.3em] transition-all relative",
                    !isLogin ? "text-brand-neon" : "text-white/20 hover:text-white/40"
                  )}
                >
                  New Instance
                  {!isLogin && <motion.div layoutId="auth-tab" className="absolute bottom-0 left-0 right-0 h-[3px] bg-brand-neon neon-glow shadow-sm" />}
                </button>
              </div>

              <AnimatePresence mode="wait">
                {show2FA ? (
                  <motion.div 
                    key="2fa"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="space-y-8 py-4"
                  >
                    <div className="text-center mb-8">
                       <div className="w-20 h-20 bg-brand-neon/10 rounded-[28px] flex items-center justify-center mx-auto mb-6 border border-brand-neon/20 shadow-[0_0_40px_rgba(198,255,0,0.1)]">
                          <ShieldCheck size={40} className="text-brand-neon" />
                       </div>
                       <h3 className="text-3xl font-display font-bold uppercase italic tracking-tighter mb-2">Initialize 2FA</h3>
                       <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest leading-relaxed">Identity verification required. Enter the 6-digit code from your authentication hardware.</p>
                    </div>

                    <div className="flex justify-between gap-3">
                       {[1, 2, 3, 4, 5, 6].map((i) => (
                         <input 
                           key={i}
                           type="text" 
                           maxLength={1}
                           className="w-full h-16 bg-white/[0.03] border border-white/5 rounded-2xl text-center font-mono text-2xl font-bold text-brand-neon focus:outline-none focus:border-brand-neon focus:bg-brand-neon/5 transition-all"
                         />
                       ))}
                    </div>

                    <button className="w-full bg-brand-neon text-black font-bold py-6 rounded-3xl neon-glow hover:scale-[1.02] transition-all uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-4 mt-8">
                       Finalize Synchronization <ArrowRight size={20} />
                    </button>
                    <button 
                      onClick={() => setShow2FA(false)}
                      className="w-full py-4 text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 hover:text-white transition-colors"
                    >
                      Resend Code Instance
                    </button>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onSubmit={handleAuth} 
                    className="space-y-8"
                  >
                    <div>
                       <label className="block text-[9px] font-bold text-white/30 uppercase tracking-[0.4em] mb-4 px-2">Ecosystem Handle</label>
                       <div className="relative group/input">
                          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within/input:text-brand-neon transition-colors" size={20} />
                          <input 
                            type="email" 
                            placeholder="TRADER_ID@PROPFUTURES.AI"
                            className="w-full bg-white/[0.03] border border-white/5 rounded-3xl py-6 pl-14 pr-6 focus:outline-none focus:border-brand-neon focus:bg-brand-neon/5 transition-all text-xs font-bold font-mono tracking-widest text-brand-neon placeholder:text-white/10 italic"
                          />
                       </div>
                    </div>
                    <div>
                       <label className="block text-[9px] font-bold text-white/30 uppercase tracking-[0.4em] mb-4 px-2">Access Key Override</label>
                       <div className="relative group/input">
                          <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-white/20 group-focus-within/input:text-brand-neon transition-colors" size={20} />
                          <input 
                            type="password" 
                            placeholder="••••••••••••"
                            className="w-full bg-white/[0.03] border border-white/5 rounded-3xl py-6 pl-14 pr-6 focus:outline-none focus:border-brand-neon focus:bg-brand-neon/5 transition-all text-xs font-bold font-mono tracking-widest text-brand-neon placeholder:text-white/10"
                          />
                       </div>
                    </div>

                    {isLogin && (
                       <div className="text-right">
                          <button type="button" className="text-[10px] font-bold text-brand-neon/60 hover:text-brand-neon transition-colors uppercase tracking-[0.2em] italic">Recover Authorization?</button>
                       </div>
                    )}

                    {!isLogin && (
                       <div className="flex items-start gap-4 px-2 py-2">
                           <input type="checkbox" className="mt-1 w-4 h-4 rounded border-white/10 bg-white/5 accent-brand-neon cursor-crosshair" />
                           <p className="text-[10px] text-white/30 leading-relaxed font-bold uppercase tracking-widest">
                             I acknowledge the <span className="text-brand-neon cursor-pointer">Protocol Terms</span> and the <span className="text-brand-neon cursor-pointer">Matrix Privacy Seal</span>.
                           </p>
                       </div>
                    )}

                    <button type="submit" className="w-full bg-brand-neon text-black font-bold py-6 rounded-3xl neon-glow hover:scale-[1.02] transition-all uppercase tracking-[0.2em] text-[11px] flex items-center justify-center gap-4 mt-6">
                       {isLogin ? 'Synchronize Identity' : 'Initialize Instance'} 
                       <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>

                    <div className="relative py-6">
                       <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
                       <div className="relative flex justify-center text-[8px] uppercase font-bold tracking-[0.4em] text-white/10"><span className="bg-[#0b0b0b] px-6 italic">External Gateway Sync</span></div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <button type="button" className="flex items-center justify-center gap-3 py-5 glass-dark rounded-2xl hover:bg-white/5 hover:border-brand-neon/30 transition-all text-[9px] font-bold text-white/40 uppercase tracking-widest border-white/5">
                          <MessageSquare size={18} className="text-[#5865F2]" /> Discord
                       </button>
                       <button type="button" className="flex items-center justify-center gap-3 py-5 glass-dark rounded-2xl hover:bg-white/5 hover:border-brand-neon/30 transition-all text-[9px] font-bold text-white/40 uppercase tracking-widest border-white/5">
                          <Github size={18} /> GitHub Node
                       </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
           </div>
        </div>
      </div>
    </motion.div>
  );
}
