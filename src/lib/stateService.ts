/**
 * PropFutures.ai Unified Ecosystem State Engine
 * Robust offline-first caching & persistence layers.
 */

// --- Default Data Sets ---

const DEFAULT_FIRMS = [
  { 
    id: 1, 
    name: 'Apex Trader', 
    category: 'Futures', 
    discount: '20%', 
    speed: 'Instant', 
    trust: 9.8, 
    rating: 4.9, 
    active: true, 
    xp: '2.5x', 
    status: 'Active', 
    color: 'bg-blue-500',
    featured: true,
    trending: true,
    extractionCode: 'APX_MATRIX_88',
    profitSplit: '90/10',
    dailyDrawdown: '5%',
    totalDrawdown: '10%',
    phaseNodes: '1_PHASE_EVAL',
    tradingPlatform: 'MT5, Rithmic, Tradovate',
    restrictionsMatrix: 'No HFT, No Copy Trading, Max 20 contracts',
    origin: 'USA',
    verificationLevel: 'TIER_1_VERIFIED',
    bio: 'Apex Trader is the world-leading futures evaluation node providing direct market routing feeds and high liquidity bridges long-trusted by high-frequency operations.'
  },
  { 
    id: 2, 
    name: 'Funding Pips', 
    category: 'Forex', 
    discount: '15%', 
    speed: '24h', 
    trust: 9.5, 
    rating: 4.8, 
    active: true, 
    xp: '1.8x', 
    status: 'Active', 
    color: 'bg-emerald-500',
    featured: true,
    trending: false,
    extractionCode: 'PIP_PULSE_22',
    profitSplit: '85/15',
    dailyDrawdown: '5%',
    totalDrawdown: '10%',
    phaseNodes: '2_PHASE_DELTA',
    tradingPlatform: 'C-Trader, Match-Trader',
    restrictionsMatrix: 'No restriction on news trading, EA allowed',
    origin: 'UAE',
    verificationLevel: 'TIER_1_VERIFIED',
    bio: 'Funding Pips is a premium Forex evaluation network emphasizing rapid cycle times and low latency pricing feeds.'
  },
  { 
    id: 3, 
    name: 'FTMO', 
    category: 'Forex', 
    discount: '10%', 
    speed: 'Same Day', 
    trust: 9.9, 
    rating: 5.0, 
    active: true, 
    xp: '1.2x', 
    status: 'Active', 
    color: 'bg-indigo-500',
    featured: true,
    trending: true,
    extractionCode: 'FTM_STABLE_01',
    profitSplit: '90/10',
    dailyDrawdown: '5%',
    totalDrawdown: '10%',
    phaseNodes: '2_PHASE_DELTA',
    tradingPlatform: 'MT4, MT5, DXTrade',
    restrictionsMatrix: 'Overnight and weekend holding restrictions on standard mode',
    origin: 'Czech Republic',
    verificationLevel: 'TIER_1_VERIFIED',
    bio: 'FTMO represents the gold standard of Forex prop capital. Operating directly under regulated liquidity provisions with audited metrics.'
  },
  { 
    id: 4, 
    name: 'Topstep', 
    category: 'Futures', 
    discount: '5%', 
    speed: 'Instant', 
    trust: 9.7, 
    rating: 4.7, 
    active: true, 
    xp: '1.5x', 
    status: 'Active', 
    color: 'bg-orange-500',
    featured: false,
    trending: true,
    extractionCode: 'TOP_EXTRCT_09',
    profitSplit: '90/10',
    dailyDrawdown: '4%',
    totalDrawdown: '8%',
    phaseNodes: '1_PHASE_EVAL',
    tradingPlatform: 'NinjaTrader, Tradovate, TradingView',
    restrictionsMatrix: 'Consistency rules apply, strict scaling plan enforcement',
    origin: 'USA',
    verificationLevel: 'TIER_1_VERIFIED',
    bio: 'Topstep is the pioneering futures fund. Focused heavily on disciplined risk parameters and structured growth nodes.'
  },
  { 
    id: 5, 
    name: 'The5ers', 
    category: 'Forex', 
    discount: '12%', 
    speed: '48h', 
    trust: 9.2, 
    rating: 4.5, 
    active: false, 
    xp: '1.0x', 
    status: 'Paused', 
    color: 'bg-pink-500',
    featured: false,
    trending: false,
    extractionCode: 'FIV_DELTA_55',
    profitSplit: '100% Split Mode',
    dailyDrawdown: '5%',
    totalDrawdown: '10%',
    phaseNodes: 'INSTANT_FUNDED',
    tradingPlatform: 'MT5, C-Trader',
    restrictionsMatrix: 'No copy trading from third-part signals',
    origin: 'Israel',
    verificationLevel: 'PENDING_AUDIT',
    bio: 'The5ers offers unique scaling paths enabling instant funding models. Direct capitalization routes with structured profit expansion.'
  }
];

const DEFAULT_USERS = [
  { id: 101, name: 'Alex Thompson', email: 'alex@example.com', role: 'Premium', status: 'Active', country: 'US', points: 12400, linked: true, xp: 450, walletBalance: 250 },
  { id: 102, name: 'Sarah Jenkins', email: 'sarah@example.com', role: 'Elite', status: 'Active', country: 'UK', points: 45000, linked: true, xp: 950, walletBalance: 1200 },
  { id: 103, name: 'Michael Chen', email: 'mchen@example.com', role: 'Free', status: 'Banned', country: 'CA', points: 0, linked: false, xp: 0, walletBalance: 0 },
  { id: 104, name: 'Elena Rodriguez', email: 'elena@example.com', role: 'Premium', status: 'Pending', country: 'ES', points: 5200, linked: true, xp: 120, walletBalance: 50 },
  { id: 105, name: 'David Smith', email: 'david@example.com', role: 'Premium', status: 'Active', country: 'AU', points: 8900, linked: false, xp: 320, walletBalance: 100 },
  { id: 106, name: 'Sophie Martin', email: 'sophie@example.com', role: 'Elite', status: 'Active', country: 'FR', points: 31000, linked: true, xp: 810, walletBalance: 750 }
];

const DEFAULT_SIGNALS = [
  {
    id: 1,
    pair: 'XAU/USD',
    type: 'LONG',
    entry: '2342.10',
    sl: '2331.00',
    tp: '2368.50',
    rr: '1:2.5',
    status: 'ACTIVE',
    winRate: '72%',
    time: '2m ago',
    confidence: 85,
    category: 'COMMODITIES',
    provider: 'Neural Apex',
    chart: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 2,
    pair: 'EUR/USD',
    type: 'SHORT',
    entry: '1.08420',
    sl: '1.08650',
    tp: '1.07950',
    rr: '1:2.1',
    status: 'ACTIVE',
    winRate: '68%',
    time: '14m ago',
    confidence: 78,
    category: 'FOREX',
    provider: 'Alpha Quantum',
    chart: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 3,
    pair: 'BTC/USD',
    type: 'LONG',
    entry: '66,240',
    sl: '65,400',
    tp: '68,200',
    rr: '1:1.8',
    status: 'PENDING',
    winRate: '64%',
    time: '45m ago',
    confidence: 62,
    category: 'CRYPTO',
    provider: 'Bit Node',
    chart: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=300&auto=format&fit=crop'
  },
  {
    id: 4,
    pair: 'GBP/JPY',
    type: 'SHORT',
    entry: '192.450',
    sl: '193.100',
    tp: '190.500',
    rr: '1:3.0',
    status: 'CLOSED',
    result: 'HIT TP',
    winRate: '75%',
    time: '2h ago',
    profit: '+195 PIPS',
    category: 'FOREX',
    provider: 'London Core',
    chart: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=300&auto=format&fit=crop'
  }
];

const DEFAULT_PRODUCTS = [
  { 
    id: 1, 
    name: 'Neural Edge Elite', 
    firm: 'FTMO', 
    price: '$155', 
    oldPrice: '$210', 
    discount: '30%', 
    type: 'CHALLENGE_CODE', 
    rating: 4.9, 
    reviews: 124, 
    rarity: 'Legendary',
    stock: 5,
    endsIn: '02:45:12',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop'
  },
  { 
    id: 2, 
    name: 'Quantum Scalper v4', 
    firm: 'PropFutures', 
    price: '$89', 
    oldPrice: '$120', 
    discount: '15%', 
    type: 'SOFTWARE', 
    rating: 4.8, 
    reviews: 82, 
    rarity: 'Elite',
    stock: 12,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1200&auto=format&fit=crop'
  },
  { 
    id: 3, 
    name: 'Apex $200k Node', 
    firm: 'APEX', 
    price: '$45', 
    oldPrice: '$180', 
    discount: '75%', 
    type: 'CHALLENGE_CODE', 
    rating: 4.7, 
    reviews: 210, 
    rarity: 'Common',
    stock: 42,
    endsIn: '08:12:45',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop'
  },
  { 
    id: 4, 
    name: 'Nexus VIP Signal', 
    firm: 'PropFutures', 
    price: '$299', 
    oldPrice: '$350', 
    discount: 'Free Payout Access', 
    type: 'SUBSCRIPTION', 
    rating: 5.0, 
    reviews: 45, 
    rarity: 'Mythic',
    stock: 2,
    image: 'https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1200&auto=format&fit=crop'
  }
];

const DEFAULT_COUPONS = [
  { id: 1, code: 'PROP_X_20', discount: '20%', type: 'Global', active: true, count: 42 },
  { id: 2, code: 'APEX_50', discount: '50%', type: 'Apex Node', active: true, count: 181 },
  { id: 3, code: 'PIPS_85', discount: '15%', type: 'Forex Single', active: false, count: 0 }
];

const DEFAULT_TICKETS = [
  { 
    id: 1, 
    subject: 'MT5 Connection Terminal Offline', 
    category: 'Futures Node Bridge', 
    priority: 'HIGH', 
    status: 'OPEN', 
    user: 'Alex Thompson', 
    time: '2h ago',
    messages: [
      { sender: 'user', text: 'My Apex live gateway fails to connect on MT5. Kept saying BAD_CREDENTIALS.', time: '2h ago' }
    ]
  },
  { 
    id: 2, 
    subject: 'Delayed Reward Extraction Settlement', 
    category: 'Payout Cluster', 
    priority: 'MEDIUM', 
    status: 'REPLIED', 
    user: 'Sarah Jenkins', 
    time: '1d ago',
    messages: [
      { sender: 'user', text: 'I redeemed the FTMO $100 Challenge voucher but have not received the extraction code.', time: '1d ago' },
      { sender: 'admin', text: 'Sarah, we have manually validated your XP sync. Re-fetching extraction keys now.', time: '4h ago' }
    ]
  }
];

const DEFAULT_VERIFICATIONS = [
  { id: 1, user: 'Sophie Martin', target: 'Apex Futures', type: 'Payout Proof', rating: '$3,420 Paid out', amount: '$3,420', screenshot: 'https://images.unsplash.com/photo-1620121692029-d088224ddc74?q=80&w=300&auto=format&fit=crop', status: 'PENDING', date: 'Today, 14:24' },
  { id: 2, user: 'Sarah Jenkins', target: 'FTMO Scaling Phase 2', type: 'Certificate', rating: '90% Accuracy', amount: 'N/A', screenshot: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=300&auto=format&fit=crop', status: 'APPROVED', date: 'Yesterday, 09:12' }
];

const DEFAULT_REWARDS = [
  { id: 1, title: 'Neural Ledger v2', cost: 12500, qty: 5, category: 'Hardware', rating: 'Legendary' },
  { id: 2, title: 'TradingView Pro', cost: 1500, qty: 32, category: 'License', rating: 'Elite' },
  { id: 3, title: 'Apex Delta Pass', cost: 5000, qty: 12, category: 'Network', rating: 'Mythic' },
  { id: 4, title: 'Cyber-Trade Station', cost: 150000, qty: 2, category: 'System', rating: 'Legendary' }
];

// --- LocalStorage helpers ---

function loadFromStorage<T>(key: string, defaultValue: T): T {
  try {
    const val = localStorage.getItem(`prop_futures_${key}`);
    return val ? JSON.parse(val) : defaultValue;
  } catch (e) {
    return defaultValue;
  }
}

function saveToStorage<T>(key: string, value: T): void {
  try {
    localStorage.setItem(`prop_futures_${key}`, JSON.stringify(value));
  } catch (e) {
    // Fail silently in sandboxed environments
  }
}

// --- Service Interface ---

export const stateService = {
  // Firms
  getFirms: () => loadFromStorage<any[]>('firms', DEFAULT_FIRMS),
  saveFirms: (firms: any[]) => saveToStorage<any[]>('firms', firms),
  saveFirm: (firm: any) => {
    const current = stateService.getFirms();
    if (firm.id) {
      const updated = current.map(f => f.id === firm.id ? { ...f, ...firm } : f);
      stateService.saveFirms(updated);
    } else {
      const newFirm = { ...firm, id: Date.now(), rating: 4.5 + Math.random() * 0.5 };
      stateService.saveFirms([...current, newFirm]);
    }
  },
  deleteFirm: (id: number) => {
    const current = stateService.getFirms();
    const filtered = current.filter(f => f.id !== id);
    stateService.saveFirms(filtered);
  },

  // Users
  getUsers: () => loadFromStorage<any[]>('users', DEFAULT_USERS),
  saveUsers: (users: any[]) => saveToStorage<any[]>('users', users),
  saveUser: (user: any) => {
    const current = loadFromStorage<any[]>('users', DEFAULT_USERS);
    if (user.id) {
      const updated = current.map(u => u.id === user.id ? { ...u, ...user } : u);
      saveToStorage<any[]>('users', updated);
    } else {
      const newUser = { ...user, id: Date.now() + Math.floor(Math.random() * 1000) };
      saveToStorage<any[]>('users', [...current, newUser]);
    }
  },
  deleteUser: (id: number) => {
    const current = stateService.getUsers();
    const filtered = current.filter(u => u.id !== id);
    stateService.saveUsers(filtered);
  },

  // Signals
  getSignals: () => loadFromStorage<any[]>('signals', DEFAULT_SIGNALS),
  saveSignals: (signals: any[]) => saveToStorage<any[]>('signals', signals),
  saveSignal: (signal: any) => {
    const current = stateService.getSignals();
    if (signal.id) {
      const updated = current.map(s => s.id === signal.id ? { ...s, ...signal } : s);
      stateService.saveSignals(updated);
    } else {
      const newSignal = { ...signal, id: Date.now(), time: 'Just now' };
      stateService.saveSignals([newSignal, ...current]);
    }
  },
  deleteSignal: (id: number) => {
    const current = stateService.getSignals();
    const filtered = current.filter(s => s.id !== id);
    stateService.saveSignals(filtered);
  },

  // Products
  getProducts: () => loadFromStorage<any[]>('products', DEFAULT_PRODUCTS),
  saveProducts: (products: any[]) => saveToStorage<any[]>('products', products),
  saveProduct: (product: any) => {
    const current = stateService.getProducts();
    if (product.id) {
      const updated = current.map(p => p.id === product.id ? { ...p, ...product } : p);
      stateService.saveProducts(updated);
    } else {
      const newProduct = { ...product, id: Date.now() };
      stateService.saveProducts([...current, newProduct]);
    }
  },
  deleteProduct: (id: number) => {
    const current = stateService.getProducts();
    const filtered = current.filter(p => p.id !== id);
    stateService.saveProducts(filtered);
  },

  // Coupons
  getCoupons: () => loadFromStorage<any[]>('coupons', DEFAULT_COUPONS),
  saveCoupons: (coupons: any[]) => saveToStorage<any[]>('coupons', coupons),
  saveCoupon: (coupon: any) => {
    const current = stateService.getCoupons();
    if (coupon.id) {
      const updated = current.map(c => c.id === coupon.id ? { ...c, ...coupon } : c);
      stateService.saveCoupons(updated);
    } else {
      const newCoupon = { ...coupon, id: Date.now(), count: 0 };
      stateService.saveCoupons([...current, newCoupon]);
    }
  },
  deleteCoupon: (id: number) => {
    const current = stateService.getCoupons();
    const filtered = current.filter(c => c.id !== id);
    stateService.saveCoupons(filtered);
  },

  // Tickets
  getTickets: () => loadFromStorage<any[]>('tickets', DEFAULT_TICKETS),
  saveTickets: (tickets: any[]) => saveToStorage<any[]>('tickets', tickets),
  saveTicket: (ticket: any) => {
    const current = stateService.getTickets();
    if (ticket.id) {
      const updated = current.map(t => t.id === ticket.id ? { ...t, ...ticket } : t);
      stateService.saveTickets(updated);
    } else {
      const newTicket = { ...ticket, id: Date.now(), time: 'Just now', messages: ticket.messages || [] };
      stateService.saveTickets([newTicket, ...current]);
    }
  },

  // Verifications
  getVerifications: () => loadFromStorage<any[]>('verifications', DEFAULT_VERIFICATIONS),
  saveVerifications: (verifications: any[]) => saveToStorage<any[]>('verifications', verifications),
  saveVerification: (verification: any) => {
    const current = stateService.getVerifications();
    if (verification.id) {
      const updated = current.map(v => v.id === verification.id ? { ...v, ...verification } : v);
      stateService.saveVerifications(updated);
    } else {
      const newVerification = { ...verification, id: Date.now(), date: 'Just now' };
      stateService.saveVerifications([newVerification, ...current]);
    }
  },

  // Quantum Bounties / Rewards
  getRewards: () => loadFromStorage<any[]>('rewards', DEFAULT_REWARDS),
  saveRewards: (rewards: any[]) => saveToStorage<any[]>('rewards', rewards),
  saveReward: (reward: any) => {
    const current = stateService.getRewards();
    if (reward.id) {
      const updated = current.map(r => r.id === reward.id ? { ...r, ...reward } : r);
      stateService.saveRewards(updated);
    } else {
      const newReward = { ...reward, id: Date.now() };
      stateService.saveRewards([...current, newReward]);
    }
  },
  deleteReward: (id: number) => {
    const current = stateService.getRewards();
    const filtered = current.filter(r => r.id !== id);
    stateService.saveRewards(filtered);
  }
};
