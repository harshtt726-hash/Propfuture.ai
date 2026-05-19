import { motion } from 'motion/react';
import { 
  Building, 
  Star, 
  Search, 
  Filter, 
  Settings, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ArrowUpRight, 
  Zap, 
  DollarSign,
  Briefcase
} from 'lucide-react';
import { cn } from '../../lib/utils';

const PENDING_PAYOUTS = [
  { id: 'PAY-8821', user: 'Alex Thompson', amount: '$420.00', type: 'Cashback', method: 'USDC (Polygon)', date: '2024-05-18 10:00', status: 'Review' },
  { id: 'PAY-8822', user: 'Sarah Jenkins', amount: '$1,200.00', type: 'Affiliate', method: 'Direct Bank', date: '2024-05-18 11:20', status: 'Pending' },
  { id: 'PAY-8823', user: 'Elena Rodriguez', amount: '$85.00', type: 'Cashback', method: 'Amazon Gift Card', date: '2024-05-18 14:05', status: 'Pending' },
  { id: 'PAY-8824', user: 'Michael Chen', amount: '$3,450.00', type: 'Affiliate', method: 'USDT (ERC20)', date: '2024-05-18 15:40', status: 'Pending' },
];

export default function PayoutManagement() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Payout Fulfillment</h1>
          <p className="text-sm text-white/40 mt-1">Audit and authorize financial distributions</p>
        </div>
        <div className="flex gap-3">
           <button className="px-6 py-3 glass rounded-2xl text-sm font-bold border-emerald-500/20 text-emerald-500 bg-emerald-500/5 hover:bg-emerald-500/10 transition-all">
              Mass Disburse Selected
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {[
           { label: 'Pending Distribution', value: '$12,450.00', sub: '24 queued requests', color: 'text-yellow-500' },
           { label: 'Monthly Volume', value: '$142,800', sub: 'Payout total May', color: 'text-brand-blue' },
           { label: 'System Payout Integrity', value: '100%', sub: 'SLA Achievement', color: 'text-emerald-500' },
         ].map((stat, i) => (
           <div key={i} className="glass p-8 rounded-[32px] bg-black/40 border-white/5 relative overflow-hidden group">
              <div className="relative z-10">
                 <div className="text-[10px] uppercase font-bold text-white/30 tracking-widest mb-2">{stat.label}</div>
                 <div className={cn("text-3xl font-display font-bold mb-1", stat.color)}>{stat.value}</div>
                 <div className="text-[10px] text-white/20 font-bold uppercase tracking-wider">{stat.sub}</div>
              </div>
           </div>
         ))}
      </div>

      <div className="glass rounded-[40px] bg-black/40 border-white/5 overflow-hidden">
        <div className="p-8 border-b border-white/5">
           <h3 className="font-bold">Pending Withdrawal Queue</h3>
        </div>

        <div className="overflow-x-auto">
           <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] uppercase tracking-[0.2em] text-white/30 border-b border-white/5 bg-white/[0.01]">
                  <th className="px-8 py-5 font-bold">Request ID</th>
                  <th className="px-8 py-5 font-bold">Trader Entity</th>
                  <th className="px-8 py-5 font-bold">Amount</th>
                  <th className="px-8 py-5 font-bold">Type</th>
                  <th className="px-8 py-5 font-bold">Fulfillment Method</th>
                  <th className="px-8 py-5 font-bold">Audit Status</th>
                  <th className="px-8 py-5 text-right font-bold">Authorize</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {PENDING_PAYOUTS.map((pay) => (
                  <tr key={pay.id} className="group hover:bg-white/[0.02] transition-colors border-b border-white/[0.02] last:border-0">
                    <td className="px-8 py-5 font-mono text-white/40">{pay.id}</td>
                    <td className="px-8 py-5">
                       <div className="font-bold">{pay.user}</div>
                       <div className="text-[10px] text-white/30 uppercase tracking-widest">{pay.date}</div>
                    </td>
                    <td className="px-8 py-5 font-display font-bold text-white text-lg">{pay.amount}</td>
                    <td className="px-8 py-5">
                       <span className={cn(
                         "px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest border",
                         pay.type === 'Affiliate' ? "border-purple-500/20 text-purple-400 bg-purple-500/5" : "border-emerald-500/20 text-emerald-400 bg-emerald-500/5"
                       )}>
                          {pay.type}
                       </span>
                    </td>
                    <td className="px-8 py-5">
                       <div className="flex items-center gap-2 font-medium text-white/70">
                          <DollarSign size={14} className="text-brand-blue" />
                          {pay.method}
                       </div>
                    </td>
                    <td className="px-8 py-5">
                       <div className={cn(
                         "flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest",
                         pay.status === 'Review' ? "text-red-400" : "text-yellow-500"
                       )}>
                          <Clock size={12} /> {pay.status}
                       </div>
                    </td>
                    <td className="px-8 py-5 text-right">
                       <div className="flex justify-end gap-2">
                          <button className="p-3 glass rounded-xl text-emerald-500 hover:bg-emerald-500/10 hover:border-emerald-500/30 transition-all"><CheckCircle2 size={18} /></button>
                          <button className="p-3 glass rounded-xl text-red-500 hover:bg-red-500/10 hover:border-red-500/30 transition-all"><XCircle size={18} /></button>
                       </div>
                    </td>
                  </tr>
                ))}
              </tbody>
           </table>
        </div>
      </div>
    </div>
  );
}
