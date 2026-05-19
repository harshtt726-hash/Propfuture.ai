import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, X, Send, Sparkles, MessageSquare, TrendingUp, Zap } from 'lucide-react';
import { cn } from '../lib/utils';

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Welcome to PropFutures.AI. I am your elite trading co-pilot. How can I assist your path to funding today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
    // Mock response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'ai', 
        text: 'Analyzing market delta and firm performance... For your current strategy, I recommend evaluating the E8 Funding 100k model due to its low slippage profiles this morning.' 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="absolute bottom-20 right-0 w-[400px] h-[550px] glass-dark rounded-[32px] overflow-hidden flex flex-col shadow-[0_0_50px_rgba(198,255,0,0.1)] border-brand-neon/20"
          >
            {/* Header */}
            <div className="p-6 bg-brand-neon/10 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-neon flex items-center justify-center neon-glow">
                  <Bot className="text-black" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-tight">AI TRADER ASSISTANT</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-neon animate-pulse" />
                    <span className="text-[10px] font-bold text-brand-neon uppercase tracking-widest">Neural Link Active</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-grow overflow-y-auto p-6 space-y-4 no-scrollbar">
              {messages.map((m, i) => (
                <div key={i} className={cn(
                  "flex gap-3",
                  m.role === 'user' ? "flex-row-reverse" : ""
                )}>
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center text-xs font-bold",
                    m.role === 'ai' ? "bg-brand-neon/20 text-brand-neon" : "bg-brand-cyan/20 text-brand-cyan"
                  )}>
                    {m.role === 'ai' ? 'AI' : 'U'}
                  </div>
                  <div className={cn(
                    "p-4 rounded-2xl text-xs leading-relaxed max-w-[80%]",
                    m.role === 'ai' ? "glass border-white/5" : "bg-brand-cyan/10 border border-brand-cyan/20 text-brand-cyan"
                  )}>
                    {m.text}
                  </div>
                </div>
              ))}
              
              {/* Smart Recommendation Card */}
              <div className="p-4 rounded-2xl bg-brand-neon/5 border border-brand-neon/20 space-y-3">
                <div className="flex items-center gap-2 text-brand-neon">
                  <Sparkles size={14} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Smart Recommendation</span>
                </div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs font-bold text-white">E8 Funding 100K</div>
                    <div className="text-[10px] text-white/40">Highly requested today</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-brand-neon">+15% Payout</div>
                    <div className="text-[10px] text-white/40">Coupon: AI_ELITE</div>
                  </div>
                </div>
                <button className="w-full py-2 bg-brand-neon/10 hover:bg-brand-neon text-brand-neon hover:text-black rounded-xl text-[10px] font-bold uppercase transition-all">
                  Claim Discount
                </button>
              </div>
            </div>

            {/* Input */}
            <div className="p-6 border-t border-white/5 bg-white/[0.02]">
              <div className="relative flex items-center gap-3">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask the AI about prop firms..."
                  className="flex-grow bg-white/5 border border-white/10 rounded-xl py-3 px-4 focus:outline-none focus:border-brand-neon transition-colors text-xs"
                />
                <button 
                  onClick={handleSend}
                  className="w-10 h-10 bg-brand-neon rounded-xl flex items-center justify-center neon-glow hover:scale-105 transition-transform"
                >
                  <Send className="text-black" size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 shadow-[0_0_30px_rgba(198,255,0,0.2)]",
          isOpen ? "bg-white/10 rotate-90" : "bg-brand-neon neon-glow hover:scale-110"
        )}
      >
        {isOpen ? <X className="text-white" size={24} /> : <Bot className="text-black" size={28} />}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-brand-cyan rounded-full border-2 border-[#050505]" />
        )}
      </button>
    </div>
  );
}
