import { motion } from 'motion/react';
import { Zap, TrendingUp, Award, Users } from 'lucide-react';

export default function AnnouncementTicker() {
  const announcements = [
    { icon: Zap, text: "PROPFUTURES V2 IS LIVE - ENJOY 15% EXTRA REWARDS ACROSS ALL FIRMS" },
    { icon: Award, text: "NEW FUNDED TRADER: ALEX_FX JUST SECURED $200K ACCOUNT WITH FTMO" },
    { icon: Users, text: "COMMUNITY MILESTONE: 50,000 ELITE TRADERS JOINED THE ECOSYSTEM" },
    { icon: TrendingUp, text: "WEEKLY LEADERBOARD RESET IN 14H 22M - TOP PRIZE: $5,000 CASH" }
  ];

  return (
    <div className="bg-brand-neon/10 border-b border-brand-neon/20 h-10 flex items-center overflow-hidden whitespace-nowrap relative z-40">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />
      
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex gap-20 items-center px-10"
      >
        {[...announcements, ...announcements].map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <item.icon size={14} className="text-brand-neon" />
            <span className="text-[10px] font-bold text-white tracking-[0.2em] uppercase">
              {item.text}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
