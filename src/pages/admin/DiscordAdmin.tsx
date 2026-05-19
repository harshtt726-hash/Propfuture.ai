import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Users, 
  Zap, 
  Activity, 
  CheckCircle2, 
  ChevronRight, 
  Settings, 
  Bell, 
  Globe,
  PieChart,
  ShieldCheck,
  Cpu
} from 'lucide-react';
import { cn } from '../../lib/utils';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const data = [
  { name: '00:00', online: 1200 },
  { name: '04:00', online: 800 },
  { name: '08:00', online: 2400 },
  { name: '12:00', online: 3200 },
  { name: '16:00', online: 4500 },
  { name: '20:00', online: 3800 },
  { name: '23:59', online: 2100 },
];

export default function DiscordAdmin() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-bold">Discord Integration Hub</h1>
          <p className="text-sm text-white/40 mt-1">Management matrix for community role sync and engagement</p>
        </div>
        <div className="flex gap-2">
           <div className="flex items-center gap-2 px-4 py-2 bg-[#5865F2]/10 border border-[#5865F2]/20 rounded-2xl text-[#5865F2] text-xs font-bold uppercase tracking-widest">
              <div className="h-1.5 w-1.5 rounded-full bg-[#5865F2] animate-ping" />
              Bot Online
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
           { label: 'Total Server Members', value: '45,204', sub: '+1.2k this week', color: 'text-[#5865F2]' },
           { label: 'Linked Identities', value: '12,890', sub: '28% Conversion', color: 'text-brand-blue' },
           { label: 'Premium Role Holders', value: '3,450', sub: 'Active Traders', color: 'text-emerald-500' },
         ].map((stat, i) => (
           <div key={i} className="glass p-8 rounded-[32px] bg-black/40 border-white/5 group hover:border-[#5865F2]/30 transition-all">
              <div className="text-[10px] uppercase font-bold text-white/30 tracking-widest mb-2">{stat.label}</div>
              <div className={cn("text-3xl font-display font-bold mb-1", stat.color)}>{stat.value}</div>
              <div className="text-[10px] text-white/20 font-bold uppercase tracking-wider">{stat.sub}</div>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         <div className="lg:col-span-8 space-y-8">
            <div className="glass p-8 rounded-[40px] bg-black/40 border-white/5">
                <div className="flex justify-between items-center mb-10">
                   <div>
                      <h3 className="text-xl font-bold font-display">Presence Analytics</h3>
                      <p className="text-xs text-white/40 mt-1">Online member fluctuations over 24 hours</p>
                   </div>
                   <div className="w-10 h-10 rounded-xl bg-[#5865F2]/10 flex items-center justify-center">
                      <Activity className="text-[#5865F2]" size={20} />
                   </div>
                </div>
                <div className="h-[300px] w-full">
                   <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data}>
                        <defs>
                          <linearGradient id="colorOnline" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#5865f2" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#5865f2" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                        <XAxis 
                          dataKey="name" 
                          axisLine={false} 
                          tickLine={false} 
                          tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 11 }}
                          dy={10}
                        />
                        <YAxis hide />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'rgba(0,0,0,0.8)', 
                            borderColor: 'rgba(255,255,255,0.1)',
                            borderRadius: '20px',
                            backdropFilter: 'blur(10px)'
                          }} 
                        />
                        <Area type="monotone" dataKey="online" stroke="#5865f2" strokeWidth={3} fillOpacity={1} fill="url(#colorOnline)" />
                      </AreaChart>
                   </ResponsiveContainer>
                </div>
            </div>

            <div className="glass p-8 rounded-[40px] bg-black/40 border-white/5 overflow-hidden">
               <h3 className="font-bold mb-6">Automated Role Matrix</h3>
               <div className="space-y-4">
                  {[
                    { role: 'Prop Expert', trigger: '3 Challenges Purchases', members: '1,240', color: 'bg-emerald-500' },
                    { role: 'Funded Trader', trigger: 'Verified Payout via Partner', members: '850', color: 'bg-brand-blue' },
                    { role: 'Alpha Caller', trigger: 'Manual HQ Designation', members: '45', color: 'bg-purple-500' },
                    { role: 'Community Pioneer', trigger: 'Joined < 2024.01', members: '4,500', color: 'bg-yellow-500' },
                  ].map((role, i) => (
                    <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 group hover:bg-white/10 transition-colors gap-4">
                       <div className="flex items-center gap-4">
                          <div className={cn("w-1.5 h-8 rounded-full", role.color)} />
                          <div>
                             <div className="text-sm font-bold">{role.role}</div>
                             <div className="text-[10px] text-white/30 uppercase font-bold tracking-widest mt-1">IF {role.trigger}</div>
                          </div>
                       </div>
                       <div className="flex items-center gap-4">
                          <div className="text-right">
                             <div className="text-xs font-bold text-white/70">{role.members} Users</div>
                             <div className="text-[10px] text-white/30 uppercase tracking-[0.2em]">ASSIGNED</div>
                          </div>
                          <button className="p-2 glass rounded-xl hover:bg-white/20"><Settings size={14} /></button>
                       </div>
                    </div>
                  ))}
               </div>
            </div>
         </div>

         <div className="lg:col-span-4 space-y-8">
            <div className="glass p-8 rounded-[40px] bg-black/40 border-white/5 relative overflow-hidden group">
               <div className="absolute inset-0 bg-[#5865F2]/5 group-hover:bg-[#5865F2]/10 transition-colors pointer-events-none" />
               <h3 className="font-bold mb-8 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-[#5865F2]" /> Security Filter
               </h3>
               <div className="space-y-6">
                  {[
                    { label: 'Invite Link Control', active: true },
                    { label: 'Auto-Moderation Level 3', active: true },
                    { label: 'External Link Filter', active: true },
                    { label: 'Account Age Bypass', active: false },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between">
                       <span className="text-xs font-bold text-white/50">{item.label}</span>
                       <div className={cn("w-10 h-5 rounded-full p-1 cursor-pointer transition-colors relative", item.active ? "bg-[#5865F2]" : "bg-white/10")}>
                          <div className={cn("h-3 w-3 bg-white rounded-full transition-transform", item.active ? "translate-x-5" : "translate-x-0")} />
                       </div>
                    </div>
                  ))}
               </div>
               <button className="w-full mt-10 py-3 bg-[#5865F2] text-white rounded-2xl text-xs font-bold shadow-[0_0_20px_-5px_rgba(88,101,242,0.5)] hover:scale-[1.02] transition-transform">
                  Update Server Rules
               </button>
            </div>

            <div className="glass p-8 rounded-[40px] bg-black/40 border-white/5">
                <h3 className="font-bold mb-8">Webhook Infrastructure</h3>
                <div className="space-y-4">
                  {[
                    { name: 'Purchase Logs', destination: '#purchase-feed', last: '2m ago' },
                    { name: 'Elite Payouts', destination: '#payout-hall', last: '15m ago' },
                    { name: 'System Alerts', destination: '#hq-status', last: 'Never' },
                  ].map((hook, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-brand-blue/30 transition-all cursor-pointer">
                        <div className="flex justify-between items-center mb-1">
                           <span className="text-[10px] uppercase font-bold text-white/30 tracking-widest">{hook.name}</span>
                           <span className="text-[8px] text-brand-blue font-bold tracking-widest">{hook.last}</span>
                        </div>
                        <div className="text-xs font-mono text-white/70">{hook.destination}</div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 py-3 glass rounded-2xl text-xs font-bold hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                   Add Endpoint <ChevronRight size={14} />
                </button>
            </div>

            <div className="glass p-8 rounded-[40px] bg-white/5 border-white/5 flex flex-col items-center text-center">
               <Cpu className="text-brand-blue mb-6 border-2 border-brand-blue/30 p-2 rounded-xl" size={40} />
               <h4 className="font-bold mb-2">Sync Engine 2.1</h4>
               <p className="text-xs text-white/40 mb-6 font-medium leading-relaxed">
                 The automated sync engine ensures users receive their roles within 4ms of account linking.
               </p>
               <div className="px-4 py-2 bg-emerald-500/10 text-emerald-500 text-[10px] font-bold uppercase rounded-full border border-emerald-500/20">Operational</div>
            </div>
         </div>
      </div>
    </div>
  );
}
