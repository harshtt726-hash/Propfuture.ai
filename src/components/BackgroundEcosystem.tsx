import { motion } from 'motion/react';

export default function BackgroundEcosystem() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Mesh Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-neon/5 blur-[120px] rounded-full animate-pulse-slow" />
      <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-brand-cyan/5 blur-[100px] rounded-full animate-float" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] bg-brand-neon/5 blur-[120px] rounded-full" />
      
      {/* Grid Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(198, 255, 0, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(198, 255, 0, 0.2) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} 
      />

      {/* Moving Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-brand-neon/20 rounded-full"
          initial={{ 
            x: Math.random() * 100 + '%', 
            y: Math.random() * 100 + '%',
            opacity: Math.random() * 0.5
          }}
          animate={{ 
            y: ['0%', '100%'],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      ))}
      
      {/* Aesthetic lines inspired by the logo */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <motion.path
          d="M -100 100 Q 200 300 500 100 T 1200 400"
          stroke="url(#neonGradient)"
          strokeWidth="1"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, alternate: true }}
        />
        <defs>
          <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C6FF00" />
            <stop offset="100%" stopColor="#00E5FF" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
