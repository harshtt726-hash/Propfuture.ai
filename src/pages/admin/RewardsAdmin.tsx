import { motion } from 'motion/react';
import { 
  Gift, 
  Plus, 
  Search, 
  TrendingUp, 
  Zap, 
  ArrowRight, 
  ShieldCheck, 
  ShoppingCart, 
  Trash2, 
  Edit3,
  CheckCircle2,
  Package,
  Layers
} from 'lucide-react';
import { cn } from '../../lib/utils';

const VOUCHERS = [
  { id: 1, name: 'Flipkart Premium', value: '₹5,000', cost: '15,000 Pts', stock: 142, redemptions: 1205, status: 'Active' },
  { id: 2, name: 'Amazon Global', value: '$100.00', cost: '30,000 Pts', stock: 85, redemptions: 890, status: 'Active' },
  { id: 3, name: 'TradingView 1M', value: 'PRO Plan', cost: '5,000 Pts', stock: 500, redemptions: 4200, status: 'Active' },
  { id: 4, name: 'Apex BOGO Coupon', value: '100%', cost: '2,500 Pts', stock: 200, redemptions: 1560, status: 'Active' },
];

export default function RewardsAdmin() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">Reward Inventory</h1>
          <p className="text-sm text-white/40 mt-1">Manage global redemption catalog and voucher stock</p>
        </div>
        <button className="px-6 py-3 bg-brand-blue rounded-2xl flex items-center gap-2 text-sm font-bold blue-glow hover:scale-[1.02] transition-transform">
           <Plus size={18} /> Initialize Reward
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { label: 'Total Redemptions', value: '12.4k', sub: 'Aggregated flow', icon: Layers },
           { label: 'Active Items', value: '15', sub: 'In catalog', icon: Package },
           { label: 'Points Circulation', value: '42.5M', sub: 'Unclaimed pts', icon: Zap },
           { label: 'Procurement Cost', value: '$12k', sub: 'Stock value', icon: TrendingUp },
         ].map((stat, i) => (
           <div key={i} className="glass p-6 rounded-3xl bg-black/40 border-white/5">
              <div className="flex items-center gap-4 mb-4">
                 <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center">
                    <stat.icon className="text-brand-blue" size={20} />
                 </div>
                 <div className="text-[10px] uppercase font-bold text-white/30 tracking-widest">{stat.label}</div>
              </div>
              <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
              <div className="text-[10px] text-white/20 mt-1 font-bold">{stat.sub}</div>
           </div>
         ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
         <div className="lg:col-span-8 space-y-6">
            <div className="glass rounded-[40px] bg-black/40 border-white/5 overflow-hidden">
               <div className="p-8 border-b border-white/5 flex justify-between items-center">
                  <h3 className="font-bold">Voucher Catalog</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/20" size={16} />
                    <input 
                      type="text" 
                      placeholder="Filter rewards..."
                      className="bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-xs focus:outline-none"
                    />
                  </div>
               </div>
               <div className="overflow-x-auto">
                  <table className="w-full text-left font-sans">
                     <thead>
                        <tr className="text-[10px] uppercase tracking-[0.2em] text-white/30 border-b border-white/5 bg-white/[0.01]">
                           <th className="px-8 py-5 font-bold">Reward Identity</th>
                           <th className="px-8 py-5 font-bold">Point Cost</th>
                           <th className="px-8 py-5 font-bold">In Stock</th>
                           <th className="px-8 py-5 font-bold">Redemptions</th>
                           <th className="px-8 py-5 text-right font-bold">Edit</th>
                        </tr>
                     </thead>
                     <tbody className="text-sm">
                        {VOUCHERS.map((v) => (
                          <tr key={v.id} className="group hover:bg-white/[0.02] border-b border-white/[0.02]">
                             <td className="px-8 py-5">
                                <div className="flex items-center gap-4">
                                   <div className="w-10 h-10 rounded-xl glass bg-white/5 flex items-center justify-center">
                                      <Gift className="text-brand-blue" size={18} />
                                   </div>
                                   <div>
                                      <div className="font-bold text-white/80">{v.name}</div>
                                      <div className="text-[10px] text-brand-blue font-bold tracking-widest">{v.value} Value</div>
                                   </div>
                                </div>
                             </td>
                             <td className="px-8 py-5 font-mono text-white/60">{v.cost}</td>
                             <td className="px-8 py-5 font-mono text-white/40">{v.stock}</td>
                             <td className="px-8 py-5 font-mono text-white/40">{v.redemptions}</td>
                             <td className="px-8 py-5 text-right">
                                <div className="flex justify-end gap-2">
                                   <button className="p-2 glass rounded-xl hover:bg-brand-blue/10 hover:text-brand-blue transition-all"><Edit3 size={16}/></button>
                                   <button className="p-2 glass rounded-xl hover:bg-red-500/10 hover:text-red-500 transition-all"><Trash2 size={16}/></button>
                                </div>
                             </td>
                          </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>

         <div className="lg:col-span-4 space-y-8">
            <div className="glass p-8 rounded-[40px] bg-black/40 border-white/5">
                <h3 className="font-bold mb-8">Redemption Heatmap</h3>
                <div className="space-y-6">
                   {[
                     { label: 'E-Commerce Vouchers', value: 45 },
                     { label: 'Trading Tools', value: 35 },
                     { label: 'Challenge Coupons', value: 15 },
                     { label: 'Cashback USDC', value: 5 },
                   ].map((item, i) => (
                     <div key={i} className="group cursor-default">
                        <div className="flex justify-between items-center text-xs mb-2">
                           <span className="text-white/40 group-hover:text-white transition-colors uppercase font-bold tracking-widest">{item.label}</span>
                           <span className="font-mono text-brand-blue">{item.value}%</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                           <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${item.value}%` }}
                              transition={{ duration: 1, delay: i * 0.1 }}
                              className="h-full bg-brand-blue rounded-full" 
                           />
                        </div>
                     </div>
                   ))}
                </div>
                <button className="w-full mt-12 py-3 bg-white/5 border border-white/5 rounded-2xl text-xs font-bold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                   View Full Reward Analytics <ArrowRight size={14} />
                </button>
            </div>

            <div className="glass p-8 rounded-[40px] bg-brand-blue/10 border-brand-blue/20 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-24 h-24 bg-brand-blue/30 blur-2xl rounded-full -mr-12 -mt-12" />
               <h4 className="font-bold mb-2">Inventory Alert</h4>
               <p className="text-xs text-white/50 mb-6 font-medium leading-relaxed">
                 Amazon Global $100.00 vouchers are running low. 12 left in vault.
               </p>
               <button className="w-full py-3 bg-brand-blue text-white text-xs font-bold rounded-xl blue-glow hover:scale-[1.02] transition-transform flex items-center justify-center gap-2">
                 <ShoppingCart size={14}/> Top Up Inventory
               </button>
            </div>
         </div>
      </div>
    </div>
  );
}
