/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  ShieldCheck, 
  Trophy, 
  Gift, 
  Users, 
  LayoutDashboard, 
  Menu, 
  X, 
  ChevronRight,
  Github,
  Twitter,
  ArrowUpRight,
  Search,
  Bell,
  MessageSquare,
  LogOut,
  Settings,
  CreditCard,
  Target,
  Signal,
  ShoppingBag
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from './lib/utils';

// Pages
import Home from './pages/Home';
import Signals from './pages/Signals';
import PropFirms from './pages/PropFirms';
import Dashboard from './pages/Dashboard';
import Rewards from './pages/Rewards';
import Community from './pages/Community';
import Auth from './pages/Auth';

import Marketplace from './pages/Marketplace';
import CompareFirms from './pages/CompareFirms';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import UserManagement from './pages/admin/UserManagement';
import PropFirmManagement from './pages/admin/PropFirmManagement';
import PurchaseManagement from './pages/admin/PurchaseManagement';
import PayoutManagement from './pages/admin/PayoutManagement';
import RewardsAdmin from './pages/admin/RewardsAdmin';
import AnalyticsAdmin from './pages/admin/AnalyticsAdmin';
import AdminSettings from './pages/admin/AdminSettings';
import SupportTickets from './pages/admin/SupportTickets';
import DiscordAdmin from './pages/admin/DiscordAdmin';
import LeaderboardAdmin from './pages/admin/LeaderboardAdmin';
import AdminLayout from './components/admin/AdminLayout';

import BackgroundEcosystem from './components/BackgroundEcosystem';
import AIAssistant from './components/AIAssistant';
import AnnouncementTicker from './components/AnnouncementTicker';
import MarketTicker from './components/MarketTicker';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Firms', path: '/firms', icon: ShieldCheck },
    { name: 'Signals', path: '/signals', icon: Signal },
    { name: 'Marketplace', path: '/marketplace', icon: ShoppingBag },
    { name: 'Rewards', path: '/rewards', icon: Gift },
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Compare', path: '/compare', icon: ArrowUpRight },
    { name: 'Community', path: '/community', icon: MessageSquare },
  ];

  return (
    <nav className={cn(
      "fixed top-14 left-0 right-0 z-50 transition-all duration-500 px-6",
      isScrolled ? "top-10" : ""
    )}>
      <div className={cn(
        "max-w-[1400px] mx-auto flex items-center justify-between px-8 py-3 rounded-[24px] transition-all duration-500 relative group",
        isScrolled 
          ? "bg-black/60 backdrop-blur-2xl border border-white/10 shadow-[0_25px_80px_rgba(0,0,0,0.8)]" 
          : "bg-black/20 backdrop-blur-md border border-white/5"
      )}>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-neon/5 via-transparent to-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[24px] pointer-events-none" />
        
        <Link to="/" className="flex items-center gap-4 group/logo relative z-10 transition-transform active:scale-95">
          <div className="relative w-11 h-11">
            <div className="absolute inset-0 bg-brand-neon rounded-xl blur-xl opacity-20 group-hover/logo:opacity-50 transition-opacity" />
            <div className="relative w-11 h-11 bg-black border border-white/10 rounded-2xl flex items-center justify-center overflow-hidden group-hover/logo:border-brand-neon/50 transition-all duration-500 group-hover/logo:rotate-[5deg]">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-neon/20 to-brand-cyan/20" />
              <TrendingUp className="text-brand-neon relative z-10" size={22} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-display font-bold tracking-tighter leading-none italic uppercase">
              PROP<span className="text-brand-neon">FUTURES</span>
            </span>
            <span className="text-[9px] font-black text-brand-neon/50 tracking-[0.4em] uppercase leading-none mt-1.5 italic">NEURAL_ECOSYSTEM_V4</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] transition-all relative group flex flex-col items-center gap-1 hover:text-white",
                location.pathname === link.path ? "text-brand-neon" : "text-white/40"
              )}
            >
              <span className="relative z-10">{link.name}</span>
              <motion.div 
                layoutId="nav-glow"
                className={cn(
                  "absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity",
                  location.pathname === link.path && "opacity-100 bg-brand-neon/10"
                )} 
              />
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-neon rounded-full neon-glow"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6 relative z-10">
          <div className="h-4 w-px bg-white/10" />
          <Link to="/auth" className="group relative px-10 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-[0.25em] transition-all overflow-hidden italic">
            <div className="absolute inset-0 bg-brand-neon neon-glow group-hover:scale-105 transition-transform" />
            <span className="relative z-10 text-black">Neural Login</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white/50 hover:text-brand-neon transition-colors p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="absolute top-[calc(100%+16px)] left-6 right-6 glass-dark border border-white/10 p-8 rounded-[40px] lg:hidden shadow-[0_40px_100px_rgba(0,0,0,0.8)] z-[100]"
          >
            <div className="grid grid-cols-2 gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex flex-col items-center gap-3 p-6 rounded-3xl transition-all border",
                    location.pathname === link.path 
                      ? "bg-brand-neon/10 border-brand-neon/20 text-brand-neon" 
                      : "bg-white/5 border-white/5 text-white/40"
                  )}
                >
                  <link.icon size={24} />
                  <span className="text-[10px] font-bold uppercase tracking-widest">{link.name}</span>
                </Link>
              ))}
            </div>
            <Link to="/auth" className="flex items-center justify-center gap-3 bg-brand-neon text-black py-6 rounded-3xl font-black text-xs uppercase tracking-[0.3em] mt-6 italic neon-glow" onClick={() => setIsMobileMenuOpen(false)}>
              Portal Access <ChevronRight size={18} />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => (
  <footer className="py-20 px-6 border-t border-white/5 mt-20 relative overflow-hidden bg-black/20">
    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-neon/50 to-transparent" />
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
      <div className="col-span-1 md:col-span-1">
        <Link to="/" className="flex items-center gap-3 mb-8">
          <div className="relative w-10 h-10 bg-black border border-brand-neon/20 rounded-xl flex items-center justify-center neon-glow">
            <TrendingUp size={20} className="text-brand-neon" />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter italic">
            PROP<span className="text-brand-neon">FUTURES</span>
          </span>
        </Link>
        <p className="text-white/40 text-xs font-medium leading-relaxed mb-8 uppercase tracking-widest">
          The world's most advanced AI-powered prop firm ecosystem for elite traders.
        </p>
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:text-brand-neon hover:border-brand-neon/50 transition-all"><Twitter size={18} /></a>
          <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:text-brand-neon hover:border-brand-neon/50 transition-all"><MessageSquare size={18} /></a>
          <a href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center hover:text-brand-neon hover:border-brand-neon/50 transition-all"><Github size={18} /></a>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold mb-6">Ecosystem</h4>
        <ul className="space-y-4 text-sm text-white/50">
          <li><Link to="/firms" className="hover:text-white transition-colors">Prop Firms</Link></li>
          <li><Link to="/rewards" className="hover:text-white transition-colors">Rewards Center</Link></li>
          <li><Link to="/community" className="hover:text-white transition-colors">Discord Community</Link></li>
          <li><Link to="/leaderboard" className="hover:text-white transition-colors">Leaderboard</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6">Support</h4>
        <ul className="space-y-4 text-sm text-white/50">
          <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
          <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Partnerships</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6">Legal</h4>
        <ul className="space-y-4 text-sm text-white/50">
          <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-white transition-colors">Risk Disclosure</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center bg-transparent">
      <p className="text-white/30 text-xs">© 2024 Propfutures.ai. All rights reserved.</p>
      <div className="flex gap-6 mt-4 md:mt-0 text-xs text-white/30">
        <span>Built for traders, by traders.</span>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-brand-neon/30 selection:text-brand-neon font-sans bg-[#020202] relative overflow-x-hidden">
        {/* Cinematic Global Background */}
        <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-neon/5 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-cyan/5 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(198,255,0,0.01)_0%,_transparent_50%)]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
        </div>
        
        <BackgroundEcosystem />
        <AIAssistant />
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="users" element={<UserManagement />} />
            <Route path="firms" element={<PropFirmManagement />} />
            <Route path="purchases" element={<PurchaseManagement />} />
            <Route path="payouts" element={<PayoutManagement />} />
            <Route path="rewards" element={<RewardsAdmin />} />
            <Route path="leaderboards" element={<LeaderboardAdmin />} />
            <Route path="discord" element={<DiscordAdmin />} />
            <Route path="analytics" element={<AnalyticsAdmin />} />
            <Route path="support" element={<SupportTickets />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* Main Website Routes */}
          <Route path="*" element={
            <>
              <div className="fixed top-0 left-0 right-0 z-[60]">
                <AnnouncementTicker />
              </div>
              <Navbar />
              <main className="flex-grow">
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={
                      <div className="space-y-0">
                        <MarketTicker />
                        <Home />
                      </div>
                    } />
                    <Route path="/firms" element={<PropFirms />} />
                    <Route path="/signals" element={<Signals />} />
                    <Route path="/marketplace" element={<Marketplace />} />
                    <Route path="/rewards" element={<Rewards />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/compare" element={<CompareFirms />} />
                    <Route path="/auth" element={<Auth />} />
                  </Routes>
                </AnimatePresence>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}
