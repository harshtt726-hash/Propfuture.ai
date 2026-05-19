import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CreditCard, 
  Search, 
  Filter, 
  ArrowUpRight, 
  ExternalLink, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Download,
  ShieldAlert,
  Layers,
  ChevronRight
} from 'lucide-react';
import { cn } from '../../lib/utils';

const MOCK_PURCHASES = [
  { id: 'ORD-9821', user: 'Alex Thompson', firm: 'Apex Trader', amount: '$150.00', cashback: '$30.00', date: '2024-05-18 14:22', status: 'Verified', platform: 'Futures' },
  { id: 'ORD-9822', user: 'Sarah Jenkins', firm: 'Funding Pips', amount: '$240.00', cashback: '$36.00', date: '2024-05-18 15:45', status: 'Pending', platform: 'Forex' },
  { id: 'ORD-9823', user: 'David Smith', firm: 'FTMO', amount: '$450.00', cashback: '$45.00', date: '2024-05-18 16:10', status: 'Verified', platform: 'Forex' },
  { id: 'ORD-9824', user: 'Elena Rodriguez', firm: 'Topstep', amount: '$99.00', cashback: '$5.00', date: '2024-05-17 10:12', status: 'Failed', platform: 'Futures' },
  { id: 'ORD-9825', user: 'Michael Chen', firm: 'Apex Trader', amount: '$150.00', cashback: '$30.00', date: '2024-05-17 11:30', status: 'Verified', platform: 'Futures' },
  { id: 'ORD-9826', user: 'Sophie Martin', email: 'sophie@example.com', firm: 'Funding Pips', amount: '$600.00', cashback: '$90.00', date: '2024-05-17 14:50', status: 'Review', platform: 'Forex' },
];

export default function PurchaseManagement() {
  const [filter, setFilter] = useState('All');

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Transaction Ledger</h1>
          <p className="text-sm text-white/40 mt-1">Audit challenge purchases and cashback eligibility</p>
        </div>
        <div className="flex gap-3">
           <button className="px-6 py-3 glass rounded-2xl flex items-center gap-2 text-sm font-bold">
              <Download size={18} /> Export CSV
           </button>
           <button className="px-6 py-3 bg-brand-blue rounded-2xl text-sm font-bold blue-glow">
              Reconcile All
           </button>
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         {[
           { label: 'Total Volume', value: '$452,400', icon: CreditCard, color: 'text-brand-blue' },
           { label: 'Total Cashback', value: '$67,860', icon: CheckCircle2, color: 'text-emerald-500' },
           { label: 'Verified Flow', value: '92.4%', icon: Layers, color: 'text-brand-blue' },
           { label: 'Anomalies Detected', value: '4', icon: ShieldAlert, color: 'text-red-500' },
         ].map((stat, i) => (
           <div key={i} className="glass p-6 rounded-3xl bg-black/40 border-white/5">
              <div className="flex justify-between items-center mb-4">
                 <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{stat.label}</div>
                 <stat.icon className={stat.color} size={18} />
              </div>
              <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
              <div className="text-[10px] text-white/20 mt-1 font-bold">UPDATED REAL-TIME</div>
           </div>
         ))}
      </div>

      <div className="glass rounded-[40px] bg-black/40 border-white/5 overflow-hidden">
        <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between gap-6">
           <div className="relative flex-grow max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input 
                type="text" 
                placeholder="Search order ID, trader or firm..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-blue transition-colors text-sm"
              />
           </div>
           <div className="flex gap-2 p-1 glass rounded-2xl overflow-x-auto no-scrollbar">
             {['All', 'Verified', 'Pending', 'Failed'].map((f) => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    "px-6 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap",
                    filter === f ? "bg-brand-blue text-white" : "text-white/50 hover:text-white"
                  )}
                >
                  {f}
                </button>
             ))}
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] uppercase tracking-[0.2em] text-white/30 border-b border-white/5 bg-white/[0.01]">
                <th className="px-8 py-5 font-bold">Transaction ID</th>
                <th className="px-8 py-5 font-bold">Trader Entity</th>
                <th className="px-8 py-5 font-bold">Prop Firm</th>
                <th className="px-8 py-5 font-bold">Volume Cost</th>
                <th className="px-8 py-5 font-bold">Cashback</th>
                <th className="px-8 py-5 font-bold">Status</th>
                <th className="px-8 py-5 text-right font-bold">Audit</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {MOCK_PURCHASES.map((order) => (
                <tr key={order.id} className="group hover:bg-white/[0.02] transition-colors border-b border-white/[0.02] last:border-0 grow">
                  <td className="px-8 py-5 font-mono text-white/50">{order.id}</td>
                  <td className="px-8 py-5">
                    <div className="font-bold">{order.user}</div>
                    <div className="text-[10px] text-white/30 uppercase tracking-widest">{order.date}</div>
                  </td>
                  <td className="px-8 py-5 font-bold text-white/80">{order.firm}</td>
                  <td className="px-8 py-5 font-mono">{order.amount}</td>
                  <td className="px-8 py-5 font-mono text-emerald-500 font-bold">{order.cashback}</td>
                  <td className="px-8 py-5">
                    <div className={cn(
                      "inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                      order.status === 'Verified' ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" :
                      order.status === 'Failed' ? "bg-red-500/10 text-red-500 border border-red-500/20" :
                      "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20"
                    )}>
                      {order.status === 'Verified' ? <CheckCircle2 size={12}/> : order.status === 'Failed' ? <XCircle size={12}/> : <Clock size={12}/>}
                      {order.status}
                    </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                    <button className="p-2 glass rounded-xl hover:bg-brand-blue/10 hover:text-brand-blue transition-all">
                       <ExternalLink size={16} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-8 border-t border-white/5 text-center">
           <button className="text-xs font-bold text-white/30 hover:text-white flex items-center justify-center gap-2 mx-auto">
              Load Archive History <ChevronRight size={14} />
           </button>
        </div>
      </div>
    </div>
  );
}
