import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, ShieldCheck, TrendingUp, ArrowRight, Github, MessageSquare } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [is2FA, setIs2FA] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (!is2FA) {
      setIs2FA(true);
    } else {
      navigate('/admin/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-[#030303] text-white flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#030303]">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-blue/10 blur-[180px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-glow/10 blur-[180px] rounded-full" />
      </div>

      <div className="max-w-md w-full relative">
        <div className="text-center mb-12">
           <div className="w-16 h-16 bg-brand-blue rounded-2xl flex items-center justify-center mx-auto mb-6 blue-glow">
              <TrendingUp size={32} />
           </div>
           <h1 className="text-4xl font-display font-bold tracking-tight mb-2">PropFutures<span className="text-brand-blue"> Admin</span></h1>
           <p className="text-white/40 font-medium">Enterprise Portal Access</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-dark p-8 md:p-10 rounded-[40px] border border-white/10 relative"
        >
          <div className="absolute -top-4 -right-4 px-4 py-2 bg-brand-blue rounded-full text-[10px] font-bold uppercase tracking-widest blue-glow z-20">
            Secure Entry
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            {!is2FA ? (
              <>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] px-1">Email Authority</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input 
                      type="email" 
                      required
                      placeholder="admin@propfutures.ai"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-blue transition-colors font-medium text-sm"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] px-1">Access Key</label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input 
                      type="password" 
                      required
                      placeholder="••••••••••••"
                      className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-brand-blue transition-colors font-medium text-sm"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-6">
                 <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/20">
                       <ShieldCheck className="text-emerald-500" size={24} />
                    </div>
                    <h3 className="font-bold text-lg">Two-Factor Authentication</h3>
                    <p className="text-xs text-white/40 mt-1">Enter the code from your security app</p>
                 </div>
                 <div className="grid grid-cols-6 gap-2">
                   {[...Array(6)].map((_, i) => (
                     <input 
                        key={i}
                        type="text" 
                        maxLength={1}
                        className="w-full aspect-square bg-white/5 border border-white/10 rounded-xl text-center font-bold text-xl focus:border-brand-blue focus:outline-none"
                     />
                   ))}
                 </div>
                 <p className="text-center text-[10px] text-white/30">Didn't receive a code? <span className="text-brand-blue cursor-pointer hover:underline">Resend via Backup</span></p>
              </div>
            )}

            <button className="w-full py-5 bg-brand-blue rounded-2xl font-bold blue-glow hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 group">
              {is2FA ? 'Authorize Access' : 'Authenticate Credentials'}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            {!is2FA && (
              <div className="flex items-center justify-between px-1">
                <label className="flex items-center gap-2 text-xs text-white/40 cursor-pointer">
                  <input type="checkbox" className="accent-brand-blue" /> Remember Device
                </label>
                <button type="button" className="text-xs text-white/40 hover:text-white">Emergency Access</button>
              </div>
            )}
          </form>
        </motion.div>

        <p className="mt-12 text-center text-xs text-white/20 font-medium">
          Propfutures Enterprise Security Framework v4.2.0 • Build 2024.08
        </p>
      </div>
    </div>
  );
}
