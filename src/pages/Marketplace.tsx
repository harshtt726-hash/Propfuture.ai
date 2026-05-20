import { motion } from 'motion/react';
import { 
  ShoppingBag, 
  Search, 
  Filter, 
  ArrowRight, 
  Zap, 
  Star, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  Timer,
  ShoppingBag as BagIcon,
  Tag,
  Flame,
  Gem,
  LayoutGrid,
  ChevronRight
} from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';
import { stateService } from '../lib/stateService';

export default function Marketplace() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');
  const productsList = stateService.getProducts();

  const filteredProducts = productsList.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || 
                          product.firm.toLowerCase().includes(search.toLowerCase());
    
    if (filter === 'All') return matchesSearch;
    if (filter === 'Challenges') return matchesSearch && product.type === 'CHALLENGE_CODE';
    if (filter === 'Software') return matchesSearch && product.type === 'SOFTWARE';
    if (filter === 'Elite') return matchesSearch && (product.rarity === 'Legendary' || product.rarity === 'Mythic' || product.rarity === 'Elite');
    
    return matchesSearch;
  });

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="p-6 max-w-7xl mx-auto min-h-screen pt-32 pb-32"
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-20">
         <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 glass rounded-xl mb-6 border-brand-neon/30">
               <Gem size={14} className="text-brand-neon" />
               <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-brand-neon/80">NEURAL_MARKETPLACE_AUTHORIZED</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-bold uppercase italic tracking-tighter leading-[0.85] mb-8">
               LUXURY <br /> <span className="text-brand-neon text-glow-neon">INVENTORY.</span>
            </h1>
            <p className="text-lg text-white/40 font-medium uppercase tracking-tight">
               Access high-rarity challenge codes, quantum trading licenses, and alpha-tier ecosystem assets. 100% verified.
            </p>
         </div>
         <div className="flex flex-col gap-4 items-end">
            <div className="flex gap-4">
               <div className="glass p-5 rounded-3xl border-white/5 bg-black/40 text-center min-w-[120px]">
                  <div className="text-[9px] text-white/30 font-bold uppercase tracking-widest mb-1">TOTAL_NODES</div>
                  <div className="text-2xl font-mono font-bold text-white">1,402</div>
               </div>
               <div className="glass p-5 rounded-3xl border-white/5 bg-black/40 text-center min-w-[120px]">
                  <div className="text-[9px] text-white/30 font-bold uppercase tracking-widest mb-1">LIVE_DEALS</div>
                  <div className="text-2xl font-mono font-bold text-brand-neon">{filteredProducts.length}</div>
               </div>
            </div>
         </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row gap-6 mb-16 items-center">
         <div className="relative flex-grow group">
            <div className="absolute inset-0 bg-brand-neon/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-hover:text-brand-neon transition-colors" size={20} />
            <input 
              type="text" 
              placeholder="SEARCH_MARKETPLACE_NODES..."
              className="w-full bg-black/40 border border-white/5 rounded-[24px] py-6 pl-16 pr-8 focus:outline-none focus:border-brand-neon transition-all font-mono text-[11px] font-bold tracking-widest text-brand-neon placeholder:text-white/10 italic uppercase"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
         </div>
         <div className="flex gap-4 p-2 glass rounded-3xl bg-black/40">
            {['All', 'Challenges', 'Software', 'Elite'].map((cat) => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  "px-8 py-4 rounded-2xl text-[10px] font-bold uppercase tracking-[0.2em] transition-all",
                  filter === cat ? "bg-brand-neon text-black neon-glow font-black italic" : "text-white/30 hover:text-white"
                )}
              >
                {cat}
              </button>
            ))}
         </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
         {filteredProducts.map((product, i) => (
           <motion.div 
             key={product.id}
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: i * 0.1 }}
             className="group relative"
           >
              <div className="glass-dark rounded-[56px] border border-white/5 overflow-hidden transition-all duration-700 hover:border-brand-neon/30 bg-black/60 flex flex-col md:flex-row h-full">
                 <div className="w-full md:w-[40%] relative overflow-hidden h-64 md:h-auto">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                    
                    {product.endsIn && (
                      <div className="absolute top-8 left-8 flex items-center gap-3 glass px-4 py-2 rounded-xl border-brand-neon/30 animate-pulse">
                         <Timer size={14} className="text-brand-neon" />
                         <span className="text-[9px] font-bold text-brand-neon font-mono">{product.endsIn}</span>
                      </div>
                    )}

                    <div className="absolute bottom-8 left-8">
                       <div className={cn(
                         "px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-tighter mb-2",
                         product.rarity === 'Legendary' ? "bg-amber-500 text-black" :
                         product.rarity === 'Mythic' ? "bg-purple-500 text-white" :
                         product.rarity === 'Elite' ? "bg-brand-cyan text-black" :
                         "bg-white/20 text-white"
                       )}>
                         {product.rarity}
                       </div>
                    </div>
                 </div>

                 <div className="p-10 flex-grow flex flex-col justify-between">
                    <div>
                       <div className="flex justify-between items-start mb-6">
                          <div>
                             <div className="text-[10px] font-bold text-brand-neon uppercase tracking-widest mb-1 italic">{product.type}</div>
                             <h3 className="text-3xl font-display font-bold uppercase italic tracking-tighter mb-2">{product.name}</h3>
                             <div className="flex items-center gap-2">
                                <Star size={12} className="text-brand-neon" fill="currentColor" />
                                <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">{product.rating} ({product.reviews} NEURAL_REVIEWS)</span>
                             </div>
                          </div>
                          <div className="text-right">
                             <div className="text-[9px] font-bold text-white/20 uppercase tracking-widest mb-1">STOCK_REMAINING</div>
                             <div className={cn("text-lg font-mono font-bold", product.stock < 5 ? "text-red-500" : "text-white")}>{product.stock}</div>
                          </div>
                       </div>
                       
                       <div className="space-y-3 mb-8">
                          <div className="flex items-center gap-3 text-[10px] font-bold text-white/50 uppercase tracking-widest">
                             <CheckCircle2 size={14} className="text-brand-neon" /> 100% PROTOCOL_VERIFIED
                          </div>
                          <div className="flex items-center gap-3 text-[10px] font-bold text-white/50 uppercase tracking-widest">
                             <CheckCircle2 size={14} className="text-brand-neon" /> INSTANT_NODE_DELIVERY
                          </div>
                       </div>
                    </div>

                    <div className="flex items-center justify-between pt-8 border-t border-white/5">
                       <div>
                          <div className="flex items-center gap-3 mb-1">
                             <span className="text-3xl font-display font-bold text-white">{product.price}</span>
                             <span className="text-xs text-white/20 line-through font-bold">{product.oldPrice}</span>
                          </div>
                          <div className="text-[9px] font-bold text-brand-neon uppercase tracking-widest italic">{product.discount} PROTOCOL_EXTRACTED</div>
                       </div>
                       <button className="relative group/btn overflow-hidden px-10 py-5 rounded-2xl text-[10px] font-bold uppercase tracking-widest italic transition-all active:scale-95">
                          <div className="absolute inset-0 bg-brand-neon neon-glow group-hover/btn:scale-110 transition-transform" />
                          <span className="relative z-10 text-black flex items-center gap-2">REDEMPT_NODE <ArrowRight size={16} /></span>
                       </button>
                    </div>
                 </div>
              </div>
           </motion.div>
         ))}
      </div>

      {/* CTA Section */}
      <div className="mt-32 glass-dark p-20 rounded-[64px] border border-white/5 relative overflow-hidden text-center bg-black/40">
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(198,255,0,0.05)_0%,_transparent_70%)]" />
         <h2 className="text-5xl md:text-7xl font-display font-bold uppercase italic tracking-tighter mb-8 leading-[0.9] relative z-10">
            PARTNER <br /> <span className="text-brand-neon underline">WHITELIST.</span>
         </h2>
         <p className="text-lg text-white/40 font-medium uppercase tracking-tight mb-12 relative z-10 max-w-2xl mx-auto">
            Are you a prop firm founder or signal provider? Apply to synchronize your inventory with the PropFutures neural matrix.
         </p>
         <button className="relative px-16 py-6 rounded-3xl text-[11px] font-bold uppercase tracking-[0.3em] transition-all overflow-hidden italic group/apply relative z-10">
            <div className="absolute inset-0 bg-white/5 border border-white/10 group-hover/apply:bg-brand-neon/10 group-hover/apply:border-brand-neon/30 transition-all" />
            <span className="relative z-10 text-white group-hover/apply:text-brand-neon">Initialize Application</span>
         </button>
      </div>
    </motion.div>
  );
}
