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
  Signal
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
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Rewards', path: '/rewards', icon: Gift },
    { name: 'Community', path: '/community', icon: MessageSquare },
  ];

  return (
    <nav className={cn(
      "fixed top-10 left-0 right-0 z-50 transition-all duration-300 px-6",
      isScrolled ? "mt-[-40px]" : ""
    )}>
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between px-8 py-3 rounded-2xl transition-all duration-300",
        isScrolled ? "bg-black/60 backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]" : "bg-transparent"
      )}>
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10">
            <div className="absolute inset-0 bg-brand-neon rounded-lg blur-lg opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative w-10 h-10 bg-black border border-white/10 rounded-xl flex items-center justify-center overflow-hidden group-hover:border-brand-neon/50 transition-colors">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-neon/20 to-brand-cyan/20" />
              <TrendingUp className="text-brand-neon relative z-10" size={20} />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-display font-bold tracking-tighter leading-none italic">
              PROP<span className="text-brand-neon">FUTURES</span>
            </span>
            <span className="text-[10px] font-bold text-white/30 tracking-[0.3em] uppercase leading-none mt-1">.AI ECOSYSTEM</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={cn(
                "text-[10px] font-bold uppercase tracking-[0.2em] transition-all hover:text-brand-neon relative group",
                location.pathname === link.path ? "text-brand-neon" : "text-white/50"
              )}
            >
              {link.name}
              <div className={cn(
                "absolute -bottom-1 left-0 h-[1px] bg-brand-neon transition-all duration-300",
                location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
          <div className="h-4 w-px bg-white/10 mx-2" />
          <Link to="/auth" className="relative group overflow-hidden px-8 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all">
            <div className="absolute inset-0 bg-brand-neon opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="absolute inset-x-0 bottom-0 h-[2px] bg-brand-neon shadow-[0_0_10px_rgba(198,255,0,0.5)]" />
            <span className="relative z-10">Neural Login</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-dark border-t border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-lg font-medium p-3 rounded-xl hover:bg-white/5"
              >
                <link.icon size={20} />
                {link.name}
              </Link>
            ))}
            <Link to="/auth" className="bg-brand-blue text-center py-4 rounded-xl font-bold mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              Get Started
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
      <div className="min-h-screen flex flex-col selection:bg-brand-neon/30 selection:text-brand-neon font-sans">
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
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/rewards" element={<Rewards />} />
                    <Route path="/community" element={<Community />} />
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
