import { motion } from 'motion/react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const PAIRS = [
  { name: 'EURUSD', price: '1.0842', change: '+0.12%', up: true },
  { name: 'GBPUSD', price: '1.2754', change: '-0.05%', up: false },
  { name: 'USDJPY', price: '156.24', change: '+0.45%', up: true },
  { name: 'XAUUSD', price: '2342.10', change: '+1.20%', up: true },
  { name: 'BTCUSD', price: '66240.50', change: '-1.40%', up: false },
  { name: 'ETHUSD', price: '3450.20', change: '+0.80%', up: true },
];

export default function MarketTicker() {
  return (
    <div className="bg-black/40 backdrop-blur-md border-y border-white/5 h-14 flex items-center overflow-hidden">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="flex gap-12 items-center px-6"
      >
        {[...PAIRS, ...PAIRS].map((pair, i) => (
          <div key={i} className="flex items-center gap-4 group cursor-help">
            <div className="flex flex-col">
              <span className="text-[10px] font-bold text-white/50 tracking-widest">{pair.name}</span>
              <span className="text-xs font-mono font-bold text-white">{pair.price}</span>
            </div>
            <div className={`flex items-center gap-1 text-[10px] font-bold ${pair.up ? 'text-brand-neon' : 'text-red-500'}`}>
              {pair.up ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
              {pair.change}
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
