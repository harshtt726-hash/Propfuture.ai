import { useState, useEffect } from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  LayoutDashboard, 
  Users, 
  ShieldCheck, 
  CreditCard, 
  Gift, 
  TrendingUp, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  Search, 
  Bell, 
  ChevronRight,
  PieChart,
  DollarSign,
  MessageSquare,
  Trophy
} from 'lucide-react';
import { cn } from '../../lib/utils';

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Ecosystem Matrix', path: '/admin/dashboard' },
  { icon: Users, label: 'Neural Nodes', path: '/admin/users' },
  { icon: ShieldCheck, label: 'Protocol Partners', path: '/admin/firms' },
  { icon: CreditCard, label: 'Delta Extractions', path: '/admin/purchases' },
  { icon: DollarSign, label: 'Liquidity Sync', path: '/admin/payouts' },
  { icon: Gift, label: 'Quantum Bounties', path: '/admin/rewards' },
  { icon: Trophy, label: 'Leaderboard Kernels', path: '/admin/leaderboards' },
  { icon: MessageSquare, label: 'Neural Clusters', path: '/admin/discord' },
  { icon: PieChart, label: 'Neuro Analytics', path: '/admin/analytics' },
  { icon: MessageSquare, label: 'Nexus Support', path: '/admin/support' },
  { icon: Settings, label: 'Kernel Config', path: '/admin/settings' },
];

export default function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen bg-[#020202] text-white selection:bg-brand-neon/30 selection:text-brand-neon">
      {/* Sidebar - Desktop */}
      <motion.aside 
        initial={false}
        animate={{ width: isSidebarOpen ? 300 : 90 }}
        className="hidden md:flex flex-col border-r border-white/[0.03] glass-dark sticky top-0 h-screen z-40 transition-all duration-300 bg-[#050505]/60 backdrop-blur-2xl shadow-[10px_0_40px_rgba(0,0,0,0.5)]"
      >
        <div className="p-8 flex items-center justify-between">
          <Link to="/admin" className={cn("flex items-center gap-3 overflow-hidden whitespace-nowrap", !isSidebarOpen && "justify-center")}>
            <div className="w-12 h-12 bg-black border border-brand-neon/20 rounded-xl flex items-center justify-center flex-shrink-0 neon-glow">
              <TrendingUp className="text-brand-neon" size={24} />
            </div>
            {isSidebarOpen && (
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl tracking-tighter leading-none italic uppercase">
                  PROP<span className="text-brand-neon">FUTURES</span>
                </span>
                <span className="text-[10px] font-bold text-white/20 tracking-[0.3em] uppercase leading-none mt-1">.ADMIN_NODE</span>
              </div>
            )}
          </Link>
        </div>

        <nav className="flex-grow px-4 space-y-1.5 mt-6 scrollbar-hide overflow-y-auto">
          {sidebarItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-4 p-4 rounded-2xl transition-all group relative border border-transparent whitespace-nowrap",
                location.pathname === item.path 
                  ? "bg-brand-neon/10 text-brand-neon border-brand-neon/20 neon-glow" 
                  : "text-white/30 hover:bg-white/[0.03] hover:text-white/80"
              )}
            >
              <item.icon size={22} className={cn("flex-shrink-0 transition-colors", location.pathname === item.path ? "text-brand-neon" : "group-hover:text-brand-neon")} />
              {isSidebarOpen && <span className="font-bold text-[11px] uppercase tracking-[0.2em]">{item.label}</span>}
              {!isSidebarOpen && (
                <div className="absolute left-full ml-6 px-4 py-3 bg-[#0a0a0a] border border-white/5 rounded-xl text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50 shadow-2xl">
                  {item.label}
                </div>
              )}
              {location.pathname === item.path && isSidebarOpen && (
                <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-brand-neon neon-glow animate-pulse" />
              )}
            </Link>
          ))}
        </nav>

        <div className="p-6 border-t border-white/[0.03]">
          <button 
            onClick={() => navigate('/admin/login')}
            className={cn(
              "w-full flex items-center gap-4 p-4 rounded-2xl text-red-400/60 hover:text-red-400 hover:bg-red-500/10 transition-all font-bold text-[11px] uppercase tracking-widest leading-none",
              !isSidebarOpen && "justify-center"
            )}
          >
            <LogOut size={22} />
            {isSidebarOpen && <span>Terminate Session</span>}
          </button>
        </div>

        <button 
          onClick={toggleSidebar}
          className="absolute -right-3.5 top-24 w-7 h-7 bg-brand-neon text-black rounded-lg flex items-center justify-center hover:scale-110 transition-all md:flex hidden neon-glow z-50 border border-black"
        >
          <ChevronRight size={16} className={cn("transition-transform duration-500", isSidebarOpen && "rotate-180")} />
        </button>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col min-w-0 bg-[#020202]">
        {/* Top Header */}
        <header className="h-24 border-b border-white/[0.03] flex items-center justify-between px-10 sticky top-0 bg-[#020202]/60 backdrop-blur-2xl z-30">
          <div className="flex items-center gap-6">
            <button className="md:hidden p-3 glass rounded-xl" onClick={() => setIsMobileOpen(true)}>
              <Menu size={24} />
            </button>
            <div className="relative hidden sm:block">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
              <input 
                type="text" 
                placeholder="SEARCH_MATRIX_FILES..."
                className="bg-white/[0.03] border border-white/5 rounded-2xl py-3.5 pl-12 pr-6 w-80 focus:outline-none focus:border-brand-neon focus:bg-brand-neon/5 transition-all text-xs font-bold font-mono tracking-widest text-brand-neon placeholder:text-white/10 italic uppercase"
              />
            </div>
          </div>

          <div className="flex items-center gap-6">
            <button className="w-12 h-12 glass-dark border border-white/5 rounded-2xl flex items-center justify-center relative hover:bg-white/5 transition-all hover:border-brand-neon/30">
              <Bell size={20} className="text-white/40" />
              <span className="absolute top-3.5 right-3.5 w-2 h-2 bg-brand-neon rounded-full border-2 border-[#020202] neon-glow shadow-sm" />
            </button>
            <div className="flex items-center gap-4 pl-6 border-l border-white/[0.03]">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-bold uppercase tracking-widest italic tracking-tighter">Root_Admin</div>
                <div className="text-[9px] text-brand-neon font-black uppercase tracking-[0.3em] mt-1 italic">ACCESS_L5_AUTHORIZED</div>
              </div>
              <div className="w-12 h-12 rounded-2xl glass-dark border border-white/5 p-1 flex items-center justify-center overflow-hidden group cursor-pointer relative">
                <div className="absolute inset-0 bg-brand-neon/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <img className="w-full h-full rounded-xl object-cover grayscale opacity-80 group-hover:grayscale-0 transition-all" src="https://ui-avatars.com/api/?name=Admin&background=C6FF00&color=000" alt="admin" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-grow p-8 lg:p-12 overflow-auto bg-[radial-gradient(circle_at_50%_0%,_rgba(198,255,0,0.01)_0%,_transparent_50%)]">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[50] md:hidden"
            />
            <motion.aside 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed left-0 top-0 bottom-0 w-80 glass-dark border-r border-brand-neon/20 z-[60] md:hidden flex flex-col bg-[#050505]"
            >
              <div className="p-8 flex items-center justify-between border-b border-white/[0.03]">
                <div className="flex flex-col">
                  <span className="font-display font-bold text-2xl tracking-tighter leading-none italic uppercase">
                    PROP<span className="text-brand-neon">FUTURES</span>
                  </span>
                  <span className="text-[9px] font-bold text-white/20 tracking-[0.3em] uppercase leading-none mt-1">.ADMIN_MOBILE</span>
                </div>
                <button onClick={() => setIsMobileOpen(false)} className="p-3 glass rounded-xl border border-white/5">
                  <X size={24} className="text-white/40" />
                </button>
              </div>
              <nav className="flex-grow p-6 space-y-2 overflow-y-auto">
                {sidebarItems.map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-4 p-5 rounded-3xl transition-all border border-transparent",
                      location.pathname === item.path 
                        ? "bg-brand-neon/10 text-brand-neon border-brand-neon/20 neon-glow" 
                        : "text-white/30 hover:bg-white/[0.03]"
                    )}
                  >
                    <item.icon size={22} />
                    <span className="font-bold text-xs uppercase tracking-widest">{item.label}</span>
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
