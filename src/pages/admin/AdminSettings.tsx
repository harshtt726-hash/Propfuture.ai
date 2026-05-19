import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Settings, 
  ShieldCheck, 
  Globe, 
  MessageSquare, 
  Palette, 
  Zap, 
  Bell, 
  Lock, 
  Save,
  CheckCircle2,
  Trash2,
  ArrowRight,
  ChevronRight,
  Database,
  Search
} from 'lucide-react';
import { cn } from '../../lib/utils';

export default function AdminSettings() {
  const [activeTab, setActiveTab] = useState('General');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => setIsSaving(false), 2000);
  };

  const tabs = [
    { label: 'General', icon: Settings },
    { label: 'Security', icon: ShieldCheck },
    { label: 'Branding', icon: Palette },
    { label: 'Discord', icon: MessageSquare },
    { label: 'Integrations', icon: Zap },
    { label: 'System', icon: Database },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">HQ Configuration</h1>
          <p className="text-sm text-white/40 mt-1">Core system parameters and global branding architecture</p>
        </div>
        <button 
          onClick={handleSave}
          className="px-8 py-4 bg-brand-blue rounded-2xl flex items-center gap-3 text-sm font-bold blue-glow hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100"
          disabled={isSaving}
        >
          {isSaving ? (
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
            >
              <Zap size={18} />
            </motion.div>
          ) : (
            <Save size={18} />
          )}
          {isSaving ? 'Syncing...' : 'Save Configuration'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Nav Tabs */}
        <div className="lg:col-span-3 space-y-2">
           <div className="glass p-2 rounded-3xl bg-black/40 space-y-1">
             {tabs.map((tab) => (
               <button 
                 key={tab.label}
                 onClick={() => setActiveTab(tab.label)}
                 className={cn(
                   "w-full flex items-center justify-between px-4 py-4 rounded-2xl transition-all group",
                   activeTab === tab.label ? "bg-white/5 text-brand-blue border border-white/5 shadow-inner" : "text-white/40 hover:text-white/70 hover:bg-white/[0.02]"
                 )}
               >
                 <div className="flex items-center gap-4">
                    <tab.icon size={20} className={cn("transition-colors", activeTab === tab.label ? "text-brand-blue" : "text-white/20 group-hover:text-white/40")} />
                    <span className="font-bold text-sm">{tab.label}</span>
                 </div>
                 {activeTab === tab.label && <motion.div layoutId="setting-tab" className="w-1.5 h-1.5 rounded-full bg-brand-blue blue-glow" />}
               </button>
             ))}
           </div>

           <div className="glass p-8 rounded-3xl bg-brand-blue/5 border-brand-blue/10 flex flex-col items-center text-center mt-6">
              <div className="w-12 h-12 rounded-2xl bg-brand-blue/20 flex items-center justify-center mb-4">
                 <ShieldCheck className="text-brand-blue" size={24} />
              </div>
              <h4 className="text-sm font-bold mb-2">Audit History</h4>
              <p className="text-[10px] text-white/30 leading-relaxed font-medium mb-6">
                All changes to core config are logged and archived for 90 days.
              </p>
              <button className="text-xs font-bold text-brand-blue hover:underline">Download Entry Logs</button>
           </div>
        </div>

        {/* Content Panel */}
        <div className="lg:col-span-9 space-y-8">
           <div className="glass p-10 rounded-[40px] bg-black/40 border-white/5 min-h-[600px]">
              <div className="mb-12 border-b border-white/5 pb-8 flex justify-between items-end">
                 <div>
                   <h2 className="text-2xl font-display font-bold">{activeTab} Parameters</h2>
                   <p className="text-sm text-white/30 mt-1">Configure {activeTab.toLowerCase()} system behavior</p>
                 </div>
                 <div className="flex items-center gap-2 text-[10px] text-emerald-500 font-bold uppercase tracking-widest bg-emerald-500/5 px-3 py-1 rounded-full border border-emerald-500/20">
                    <CheckCircle2 size={12}/> All Systems Normal
                 </div>
              </div>

              {activeTab === 'General' && (
                <div className="space-y-10 animate-fade-in">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                         <label className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] px-1">Application Name</label>
                         <input 
                           type="text" 
                           defaultValue="Propfutures.ai"
                           className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-blue font-medium text-sm"
                         />
                      </div>
                      <div className="space-y-4">
                         <label className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] px-1">Contact Email Protocol</label>
                         <input 
                           type="text" 
                           defaultValue="hq@propfutures.ai"
                           className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-blue font-medium text-sm"
                         />
                      </div>
                      <div className="space-y-4">
                         <label className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] px-1">Regional Fulfillment</label>
                         <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-blue font-medium text-sm appearance-none">
                            <option>Multi-Region (Global)</option>
                            <option>North America High-Speed</option>
                            <option>Europe Standard</option>
                            <option>Asia-East Performance</option>
                         </select>
                      </div>
                      <div className="space-y-4">
                         <label className="text-xs font-bold text-white/30 uppercase tracking-[0.2em] px-1">Aggregated Traffic Threshold</label>
                         <input 
                           type="number" 
                           defaultValue="10000"
                           className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 focus:outline-none focus:border-brand-blue font-medium text-sm"
                         />
                      </div>
                   </div>

                   <div className="space-y-6 pt-6 ">
                      <h4 className="font-bold text-lg px-1">System Global Flags</h4>
                      <div className="space-y-4">
                        {[
                          { label: 'Public User Registration', desc: 'Allows new accounts to be initialized without prior invite code.', active: true },
                          { label: 'Auto-Disbursement Protocol', desc: 'Enables automatic payout processing for verified cashback flows.', active: false },
                          { label: 'Maintenance Node', desc: 'Redirects all visitors to system under construction bypass.', active: false },
                        ].map((flag, i) => (
                          <div key={i} className="flex items-center justify-between p-6 glass rounded-3xl border-white/5 bg-white/[0.01]">
                             <div className="max-w-md">
                                <span className="font-bold text-sm">{flag.label}</span>
                                <p className="text-xs text-white/30 mt-1 font-medium">{flag.desc}</p>
                             </div>
                             <div 
                               className={cn(
                                 "w-12 h-6 rounded-full p-1 cursor-pointer transition-colors relative",
                                 flag.active ? "bg-brand-blue" : "bg-white/10"
                               )}
                             >
                                <motion.div 
                                  animate={{ x: flag.active ? 24 : 0 }}
                                  className="h-4 w-4 bg-white rounded-full shadow-lg shadow-black/20" 
                                />
                             </div>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
              )}

              {activeTab !== 'General' && (
                <div className="flex flex-col items-center justify-center py-20 text-center space-y-6 opacity-30">
                   <div className="w-20 h-20 rounded-full border-2 border-dashed border-white/20 flex items-center justify-center">
                      <Settings size={32} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold font-display">{activeTab} Modules Encrypted</h3>
                      <p className="text-sm font-medium mt-1">Secondary authentication required to access this stratum</p>
                   </div>
                   <button className="px-8 py-3 glass rounded-2xl text-xs font-bold border-white/10">Request Strathmore Auth</button>
                </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
}
