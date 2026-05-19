import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MessageSquare, 
  Search, 
  Filter, 
  User, 
  Clock, 
  Send, 
  Paperclip, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle,
  MoreVertical
} from 'lucide-react';
import { cn } from '../../lib/utils';

const MOCK_TICKETS = [
  { id: 'TKT-101', user: 'Alex Thompson', subject: 'Payout Delayed', priority: 'High', status: 'Open', date: '2h ago' },
  { id: 'TKT-102', user: 'Sarah Jenkins', subject: 'Referral Not Tracking', priority: 'Medium', status: 'In Progress', date: '5h ago' },
  { id: 'TKT-103', user: 'Michael Chen', subject: 'Account Verification', priority: 'Low', status: 'Resolved', date: '1d ago' },
  { id: 'TKT-104', user: 'Elena Rodriguez', subject: 'Custom Voucher Query', priority: 'Medium', status: 'Open', date: '2d ago' },
];

export default function SupportTickets() {
  const [selectedTicket, setSelectedTicket] = useState(MOCK_TICKETS[0]);

  return (
    <div className="space-y-8 pb-12 h-[calc(100vh-140px)] flex flex-col">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-display font-bold">Support Nexus</h1>
          <p className="text-sm text-white/40 mt-1">Resolution authority for trader inquiries</p>
        </div>
        <div className="flex gap-2">
           <div className="px-4 py-2 glass rounded-xl text-xs font-bold text-emerald-500 bg-emerald-500/5">24 Active Tickets</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 flex-grow overflow-hidden">
        {/* Ticket List */}
        <div className="lg:col-span-4 glass rounded-[40px] bg-black/40 border-white/5 flex flex-col overflow-hidden">
           <div className="p-6 border-b border-white/5">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                <input 
                  type="text" 
                  placeholder="Filter by ID or user..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs focus:outline-none"
                />
              </div>
           </div>
           <div className="flex-grow overflow-y-auto no-scrollbar p-2 space-y-1">
             {MOCK_TICKETS.map((t) => (
               <button 
                 key={t.id}
                 onClick={() => setSelectedTicket(t)}
                 className={cn(
                   "w-full text-left p-4 rounded-[24px] transition-all flex gap-4 group",
                   selectedTicket.id === t.id ? "bg-white/5 border border-white/10 shadow-inner" : "hover:bg-white/[0.02]"
                 )}
               >
                 <div className={cn(
                   "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 font-bold text-xs uppercase transition-colors",
                   selectedTicket.id === t.id ? "bg-brand-blue/20 text-brand-blue" : "bg-white/5 text-white/30 group-hover:text-white/60"
                 )}>
                   {t.id.split('-')[1]}
                 </div>
                 <div className="flex-grow min-w-0">
                    <div className="flex justify-between items-center mb-1">
                       <span className="font-bold text-sm truncate">{t.user}</span>
                       <span className="text-[9px] text-white/20 font-bold">{t.date}</span>
                    </div>
                    <div className="text-[11px] text-white/50 truncate mb-2">{t.subject}</div>
                    <div className="flex items-center gap-2">
                       <span className={cn(
                         "text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded",
                         t.priority === 'High' ? "text-red-400 bg-red-400/10" : "text-brand-blue bg-brand-blue/10"
                       )}>
                         {t.priority}
                       </span>
                       <span className="text-[8px] font-bold text-white/20 uppercase tracking-widest">• {t.status}</span>
                    </div>
                 </div>
               </button>
             ))}
           </div>
        </div>

        {/* Chat Interface */}
        <div className="lg:col-span-8 glass rounded-[40px] bg-black/40 border-white/5 flex flex-col overflow-hidden relative">
           <div className="p-8 border-b border-white/5 flex justify-between items-center bg-white/[0.01]">
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-2xl glass bg-brand-blue/10 flex items-center justify-center font-bold text-brand-blue">
                    {selectedTicket.user[0]}
                 </div>
                 <div>
                    <h3 className="font-bold">{selectedTicket.user}</h3>
                    <div className="text-xs text-white/30 flex items-center gap-2">
                       <span className="font-mono text-brand-blue">{selectedTicket.id}</span>
                       <span>•</span>
                       <span>{selectedTicket.subject}</span>
                    </div>
                 </div>
              </div>
              <div className="flex gap-2">
                 <button className="px-4 py-2 glass rounded-xl text-xs font-bold text-emerald-500 hover:bg-emerald-500/10 transition-all">Resolve Node</button>
                 <button className="p-2 glass rounded-xl hover:bg-white/10 transition-all"><MoreVertical size={18}/></button>
              </div>
           </div>

           <div className="flex-grow p-8 overflow-y-auto space-y-8 no-scrollbar bg-[radial-gradient(circle_at_50%_0%,_rgba(59,130,246,0.02)_0%,_transparent_70%)]">
              <div className="flex gap-4">
                 <div className="w-8 h-8 rounded-lg bg-brand-blue/20 flex-shrink-0 flex items-center justify-center font-bold text-xs text-brand-blue">T</div>
                 <div className="max-w-md p-5 glass rounded-[24px] rounded-tl-none">
                    <p className="text-sm leading-relaxed text-white/80">
                      Hello Support, I purchased a $100k account yesterday but the cashback hasn't reflected in my dashboard yet. Order ID is ORD-9921.
                    </p>
                    <span className="text-[9px] text-white/20 font-bold mt-3 block">SENT 2H AGO</span>
                 </div>
              </div>

              <div className="flex gap-4 justify-end">
                 <div className="max-w-md p-5 bg-brand-blue rounded-[24px] rounded-tr-none blue-glow text-white">
                    <p className="text-sm leading-relaxed">
                      Hi {selectedTicket.user.split(' ')[0]}, we've received your order. Our propagation system typically takes up to 24 hours to verify the affiliate link from the partner side. Please check back in a few hours!
                    </p>
                    <span className="text-[9px] text-white/60 font-bold mt-3 block">SENT 15M AGO • READ</span>
                 </div>
                 <div className="w-8 h-8 rounded-lg bg-white/10 flex-shrink-0 flex items-center justify-center font-bold text-xs text-white/50">HQ</div>
              </div>
           </div>

           <div className="p-6 border-t border-white/5 bg-white/[0.01]">
              <div className="relative flex items-center gap-4">
                 <button className="p-3 glass rounded-2xl hover:bg-white/10 text-white/30 transition-all"><Paperclip size={20}/></button>
                 <input 
                   type="text" 
                   placeholder="Type your response to the trader..."
                   className="flex-grow bg-white/5 border border-white/10 rounded-[24px] py-4 px-6 focus:outline-none focus:border-brand-blue transition-colors text-sm"
                 />
                 <button className="w-12 h-12 bg-brand-blue rounded-2xl flex items-center justify-center blue-glow hover:scale-105 transition-transform">
                    <Send size={20} />
                 </button>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
