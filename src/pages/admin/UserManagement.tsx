import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Search, 
  Filter, 
  MoreVertical, 
  ShieldCheck, 
  MessageSquare, 
  Ban, 
  UserPlus, 
  ArrowUpRight,
  Download,
  Mail,
  CheckCircle2,
  XCircle,
  TrendingDown
} from 'lucide-react';
import { cn } from '../../lib/utils';

const MOCK_USERS = [
  { id: 1, name: 'Alex Thompson', email: 'alex@example.com', role: 'Premium', status: 'Active', country: 'US', points: 12400, linked: true },
  { id: 2, name: 'Sarah Jenkins', email: 'sarah@example.com', role: 'Elite', status: 'Active', country: 'UK', points: 45000, linked: true },
  { id: 3, name: 'Michael Chen', email: 'mchen@example.com', role: 'Free', status: 'Banned', country: 'CA', points: 0, linked: false },
  { id: 4, name: 'Elena Rodriguez', email: 'elena@example.com', role: 'Premium', status: 'Pending', country: 'ES', points: 5200, linked: true },
  { id: 5, name: 'David Smith', email: 'david@example.com', role: 'Premium', status: 'Active', country: 'AU', points: 8900, linked: false },
  { id: 6, name: 'Sophie Martin', email: 'sophie@example.com', role: 'Elite', status: 'Active', country: 'FR', points: 31000, linked: true },
];

export default function UserManagement() {
  const [users, setUsers] = useState(MOCK_USERS);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUser, setSelectedUser] = useState<any>(null);

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDeleteUser = (id: number) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      setUsers(users.filter(u => u.id !== id));
      setSelectedUser(null);
    }
  };

  const handleToggleStatus = (id: number) => {
    setUsers(users.map(u => {
      if (u.id === id) {
        const nextStatus = u.status === 'Active' ? 'Banned' : 'Active';
        return { ...u, status: nextStatus };
      }
      return u;
    }));
  };

  const handleSaveUser = () => {
    // In a real app, this would hit an API
    alert('User configuration saved successfully!');
    setSelectedUser(null);
  };

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-display font-bold">User Authority</h1>
          <p className="text-sm text-white/40 mt-1">Manage global trader accounts and permissions</p>
        </div>
        <div className="flex gap-3">
           <button className="px-6 py-3 glass rounded-2xl flex items-center gap-2 text-sm font-bold hover:bg-white/5 transition-colors">
              <Download size={18} /> Export Data
           </button>
           <button className="px-6 py-3 bg-brand-neon text-black rounded-2xl flex items-center gap-2 text-sm font-bold neon-glow hover:scale-[1.02] transition-transform uppercase italic">
              <UserPlus size={18} /> Add User
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Total Verified Users', value: '45,204', icon: Users, color: 'text-brand-neon' },
          { label: 'Daily Active Traders', value: '12,890', icon: CheckCircle2, color: 'text-emerald-500' },
          { label: 'Restricted Access', value: '142', icon: Ban, color: 'text-red-500' },
        ].map((stat, i) => (
          <div key={i} className="glass p-6 rounded-3xl bg-black/40 border-white/5 flex items-center gap-6">
             <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center">
                <stat.icon className={stat.color} size={28} />
             </div>
             <div>
                <div className="text-[10px] uppercase text-white/40 tracking-widest font-bold mb-1">{stat.label}</div>
                <div className="text-2xl font-bold">{stat.value}</div>
             </div>
          </div>
        ))}
      </div>

      <div className="glass rounded-[40px] bg-black/40 border-white/5 overflow-hidden">
        <div className="p-8 border-b border-white/5 flex flex-col md:flex-row justify-between gap-6">
           <div className="relative flex-grow max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/30" size={18} />
              <input 
                type="text" 
                placeholder="Search by name, email or ID..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-3 pl-12 pr-4 focus:outline-none focus:border-brand-neon transition-colors text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
           </div>
           <div className="flex gap-3">
              <button className="p-3 glass rounded-xl hover:bg-white/10"><Filter size={18} /></button>
              <select className="bg-white/5 border border-white/10 rounded-xl px-4 text-sm font-bold focus:outline-none focus:border-brand-neon appearance-none pr-10 relative">
                 <option>All Roles</option>
                 <option>Premium</option>
                 <option>Elite</option>
                 <option>Free</option>
              </select>
           </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] uppercase tracking-[0.2em] text-white/30 border-b border-white/5 bg-white/[0.01]">
                <th className="px-8 py-5 font-bold">Identity</th>
                <th className="px-8 py-5 font-bold">Role & Tier</th>
                <th className="px-8 py-5 font-bold">Reward Pts</th>
                <th className="px-8 py-5 font-bold">Discord Status</th>
                <th className="px-8 py-5 font-bold">Account Status</th>
                <th className="px-8 py-5 text-right font-bold">Actions</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="group hover:bg-white/[0.02] transition-colors border-b border-white/[0.02] last:border-0 cursor-pointer" onClick={() => setSelectedUser(user)}>
                  <td className="px-8 py-5">
                     <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl glass bg-white/5 flex items-center justify-center text-xs font-bold text-brand-neon">
                           {user.name.split(' ').map(n=>n[0]).join('')}
                        </div>
                        <div>
                           <div className="font-bold group-hover:text-brand-neon transition-colors">{user.name}</div>
                           <div className="text-[10px] text-white/40">{user.email}</div>
                        </div>
                     </div>
                  </td>
                  <td className="px-8 py-5">
                     <div className={cn(
                       "inline-flex px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider",
                       user.role === 'Elite' ? "bg-cyan-500/10 text-brand-cyan border border-brand-cyan/20" :
                       user.role === 'Premium' ? "bg-brand-neon/10 text-brand-neon border border-brand-neon/20" :
                       "bg-white/10 text-white/50 border border-white/20"
                     )}>
                        {user.role}
                     </div>
                  </td>
                  <td className="px-8 py-5 font-mono text-white/60">
                     {user.points.toLocaleString()}
                  </td>
                  <td className="px-8 py-5">
                     {user.linked ? (
                        <div className="flex items-center gap-2 text-emerald-500 font-bold text-[10px] uppercase">
                           <MessageSquare size={14} /> Linked
                        </div>
                     ) : (
                        <div className="flex items-center gap-2 text-white/20 font-bold text-[10px] uppercase">
                           <TrendingDown size={14} /> Unlinked
                        </div>
                     )}
                  </td>
                  <td className="px-8 py-5">
                     <div className={cn(
                       "flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest",
                       user.status === 'Active' ? "text-emerald-500" :
                       user.status === 'Banned' ? "text-red-500" :
                       "text-yellow-500"
                     )}>
                        <div className={cn("w-1.5 h-1.5 rounded-full animate-pulse bg-current")} />
                        {user.status}
                     </div>
                  </td>
                  <td className="px-8 py-5 text-right">
                     <button className="p-2 hover:bg-white/10 rounded-xl transition-colors">
                        <MoreVertical size={16} />
                     </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-8 border-t border-white/5 flex justify-between items-center bg-white/[0.01]">
           <p className="text-xs text-white/30">Showing <span className="text-white font-bold">{filteredUsers.length}</span> of <span className="text-white font-bold">{users.length}</span> entries</p>
           <div className="flex gap-2">
              <button className="px-4 py-2 glass rounded-xl text-xs font-bold disabled:opacity-30" disabled>Previous</button>
              <button className="px-4 py-2 bg-brand-neon text-black rounded-xl text-xs font-bold">1</button>
              <button className="px-4 py-2 glass rounded-xl text-xs font-bold">2</button>
              <button className="px-4 py-2 glass rounded-xl text-xs font-bold">Next</button>
           </div>
        </div>
      </div>

      <AnimatePresence>
         {selectedUser && (
           <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedUser(null)}
                className="absolute inset-0 bg-black/90 backdrop-blur-md"
              />
              <motion.div 
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="relative glass-dark max-w-2xl w-full rounded-[40px] border border-white/10 overflow-hidden"
              >
                <div className="p-10">
                   <div className="flex justify-between items-start mb-10">
                      <div className="flex items-center gap-6">
                         <div className="w-20 h-20 rounded-3xl glass bg-brand-neon/10 flex items-center justify-center text-2xl font-bold text-brand-neon">
                             {selectedUser.name.split(' ').map(n=>n[0]).join('')}
                         </div>
                         <div>
                            <h2 className="text-2xl font-display font-bold uppercase italic tracking-tighter">{selectedUser.name}</h2>
                            <p className="text-white/40 text-sm mt-1">{selectedUser.email}</p>
                            <div className="flex gap-2 mt-4">
                               <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold tracking-widest border border-white/10">ID: {selectedUser.id}204</span>
                               <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold tracking-widest border border-white/10">{selectedUser.country}</span>
                            </div>
                         </div>
                      </div>
                      <button onClick={() => setSelectedUser(null)} className="p-3 glass rounded-xl"><XCircle size={24} /></button>
                   </div>

                   <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                      {[
                        { label: 'Earning Rate', value: '2.4%', sub: 'Premium Tier' },
                        { label: 'Total Sales', value: '42', sub: 'Referral Net' },
                        { label: 'Account Life', value: '242d', sub: 'Since Join' },
                        { label: 'Security', value: 'Lvl 3', sub: '2FA Active' },
                      ].map((item, i) => (
                        <div key={i} className="glass p-4 rounded-2xl text-center border-white/5">
                           <div className="text-[10px] uppercase text-white/30 tracking-widest mb-1 font-bold">{item.label}</div>
                           <div className="text-lg font-bold text-brand-neon">{item.value}</div>
                           <div className="text-[10px] text-white/20 mt-1">{item.sub}</div>
                        </div>
                      ))}
                   </div>

                   <div className="space-y-4 mb-10">
                      <h4 className="font-bold text-lg px-1 uppercase tracking-tighter italic">Management Controls</h4>
                      <div className="grid grid-cols-2 gap-4">
                         <button className="flex items-center justify-center gap-3 py-4 glass rounded-2xl hover:bg-emerald-500/10 hover:text-emerald-500 hover:border-emerald-500/30 transition-all font-bold text-xs uppercase tracking-widest">
                            <ShieldCheck size={20} /> Verify Account
                         </button>
                         <button className="flex items-center justify-center gap-3 py-4 glass rounded-2xl hover:bg-yellow-500/10 hover:text-yellow-500 hover:border-yellow-500/30 transition-all font-bold text-xs uppercase tracking-widest">
                            <Mail size={20} /> Reset Security
                         </button>
                         <button className="flex items-center justify-center gap-3 py-4 glass rounded-2xl hover:bg-brand-neon/10 hover:text-brand-neon hover:border-brand-neon/30 transition-all font-bold text-xs uppercase tracking-widest">
                            <TrendingDown size={20} /> Modify Tier
                         </button>
                         <button 
                           onClick={() => handleToggleStatus(selectedUser.id)}
                           className="flex items-center justify-center gap-3 py-4 glass rounded-2xl hover:bg-red-500/10 hover:text-red-500 hover:border-red-500/30 transition-all font-bold text-xs uppercase tracking-widest">
                            <Ban size={20} /> {selectedUser.status === 'Active' ? 'Ban User' : 'Unban User'}
                         </button>
                      </div>
                   </div>

                   <div className="flex gap-4 p-8 bg-white/5 -mx-10 -mb-10">
                      <button onClick={handleSaveUser} className="flex-grow py-5 bg-brand-neon text-black rounded-3xl font-bold neon-glow hover:scale-[1.02] transition-transform uppercase tracking-widest italic">Save Configuration</button>
                      <button onClick={() => handleDeleteUser(selectedUser.id)} className="px-10 py-5 glass rounded-3xl font-bold hover:bg-red-500/10 hover:text-red-500 border-0 transition-colors uppercase tracking-widest italic">Terminate Port</button>
                   </div>
                </div>
              </motion.div>
           </div>
         )}
      </AnimatePresence>
    </div>
  );
}
