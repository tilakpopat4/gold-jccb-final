/**
 * The Junagadh Commercial Co-operative Bank Ltd. (JCCB)
 * Standalone Local PC Database Engine (100% Air-Gapped & Offline)
 * Zero Cloud / Zero Firebase Dependencies - Local Host Storage Architecture
 */

// Default static branch list used for initial seed / local fallback (All 18 Branches)
const DEFAULT_JCCB_BRANCHES = [
    { code: "99", branchCode: "99", name: "99 HEAD OFFICE", shortName: "HO", branchName: "99 HEAD OFFICE", branchNameGuj: "૯૯ હેડ ઓફિસ (મુખ્ય કચેરી)", role: "admin", roleTitle: "Head Office Super Admin", isActive: true, isHO: true, isHeadOffice: true, password: "Rahul#80810" },
    { code: "01", branchCode: "01", name: "01 AZADCHOWK BRANCH", shortName: "CBB", branchName: "01 AZADCHOWK BRANCH", branchNameGuj: "૦૧ આઝાદચોક શાખા", role: "branch_manager", roleTitle: "Branch Manager", isActive: true, isHO: false, isHeadOffice: false, password: "Admin@123" },
    { code: "02", branchCode: "02", name: "02 JOSHIPARA BRANCH", shortName: "JPB", branchName: "02 JOSHIPARA BRANCH", branchNameGuj: "૦૨ જોશીપરા શાખા", role: "branch_manager", roleTitle: "Branch Manager", isActive: true, isHO: false, isHeadOffice: false, password: "Admin@123" },
    { code: "03", branchCode: "03", name: "03 DOLATPARA BRANCH", shortName: "DPB", branchName: "03 DOLATPARA BRANCH", branchNameGuj: "૦૩ દોલતપરા શાખા", role: "branch_manager", roleTitle: "Branch Manager", isActive: true, isHO: false, isHeadOffice: false, password: "Admin@123" },
    { code: "04", branchCode: "04", name: "04 KODINAR BRANCH", shortName: "KDR", branchName: "04 KODINAR BRANCH", branchNameGuj: "૦૪ કોડીનાર શાખા", role: "branch_manager", roleTitle: "Branch Manager", isActive: true, isHO: false, isHeadOffice: false, password: "Admin@123" },
    { code: "05", branchCode: "05", name: "05 KESHOD BRANCH", shortName: "KSD", branchName: "05 KESHOD BRANCH", branchNameGuj: "૦૫ કેશોદ શાખા", role: "branch_manager", roleTitle: "Branch Manager", isActive: true, isHO: false, isHeadOffice: false, password: "Admin@123" },
    { code: "06", branchCode: "06", name: "06 VANTHALI BRANCH", shortName: "VTL", branchName: "06 VANTHALI BRANCH", branchNameGuj: "૦૬ વંથલી શાખા", role: "branch_manager", roleTitle: "Branch Manager", isActive: true, isHO: false, isHeadOffice: false, password: "Admin@123" },
    { code: "07", branchCode: "07", name: "07 MANAVADAR BRANCH", shortName: "MNV", branchName: "07 MANAVADAR BRANCH", branchNameGuj: "૦૭ માણાવદર શાખા", role: "branch_manager", roleTitle: "Branch Manager", isActive: true, isHO: false, isHeadOffice: false, password: "Admin@123" },
    { code: "08", branchCode: "08", name: "08 GANDHINAGAR BRANCH", shortName: "GNB", branchName: "08 GANDHINAGAR BRANCH", branchNameGuj: "૦૮ ગાંધીનગર શાખા", role: "branch_manager", roleTitle: "Branch Manager", isActive: true, isHO: false, isHeadOffice: false, password: "Admin@123" },
    { code: "09", branchCode: "09", name: "09 LIMBDI BRANCH", shortName: "LIM", branchName: "09 LIMBDI BRANCH", branchNameGuj: "૦૯ લીંબડી શાખા", role: "branch_manager", roleTitle: "Branch Manager", isActive: true, isHO: false, isHeadOffice: false, password: "Admin@123" },
    { code: "10", branchCode: "10", name: "10 MENDARDA BRANCH", shortName: "MND", branchName: "10 MENDARDA BRANCH", branchNameGuj: "૧૦ મેંદરડા શાખા", role: "branch_manager", roleTitle: "Branch Manager", isActive: true, isHO: false, isHeadOffice: false, password: "Admin@123" },
    { code: "11", branchCode: "11", name: "11 VISAVADAR BRANCH", shortName: "VIS", branchName: "11 VISAVADAR BRANCH", branchNameGuj: "૧૧ વિસાવદર શાખા", role: "branch_manager", roleTitle: "Branch Manager", isActive: true, isHO: false, isHeadOffice: false, password: "Admin@123" },
    { code: "12", branchCode: "12", name: "12 JAMNAGAR BRANCH", shortName: "JAM", branchName: "12 JAMNAGAR BRANCH", branchNameGuj: "૧૨ જામનગર શાખા", role: "branch_manager", roleTitle: "Branch Manager", isActive: true, isHO: false, isHeadOffice: false, password: "Admin@123" },
    { code: "13", branchCode: "13", name: "13 BUS STAND BRANCH", shortName: "STB", branchName: "13 BUS STAND BRANCH", branchNameGuj: "૧૩ બસ સ્ટેન્ડ શાખા", role: "branch_manager", roleTitle: "Branch Manager", isActive: true, isHO: false, isHeadOffice: false, password: "Admin@123" },
    { code: "14", branchCode: "14", name: "14 LATHI BRANCH", shortName: "LTH", branchName: "14 LATHI BRANCH", branchNameGuj: "૧૪ લાઠી શાખા", role: "branch_manager", roleTitle: "Branch Manager", isActive: true, isHO: false, isHeadOffice: false, password: "Admin@123" },
    { code: "16", branchCode: "16", name: "16 AHMEDABAD BRANCH", shortName: "AHM", branchName: "16 AHMEDABAD BRANCH", branchNameGuj: "૧૬ અમદાવાદ શાખા", role: "branch_manager", roleTitle: "Branch Manager", isActive: true, isHO: false, isHeadOffice: false, password: "Admin@123" },
    { code: "17", branchCode: "17", name: "17 RAJKOT BRANCH", shortName: "RJT", branchName: "17 RAJKOT BRANCH", branchNameGuj: "૧૭ રાજકોટ શાખા", role: "branch_manager", roleTitle: "Branch Manager", isActive: true, isHO: false, isHeadOffice: false, password: "Admin@123" },
    { code: "18", branchCode: "18", name: "18 ZANZARDA BRANCH", shortName: "ZAN", branchName: "18 ZANZARDA BRANCH", branchNameGuj: "૧૮ ઝાંઝરડા શાખા", role: "branch_manager", roleTitle: "Branch Manager", isActive: true, isHO: false, isHeadOffice: false, password: "Admin@123" }
];

const LOCAL_STORAGE_KEY = "jccb_gold_system_state_v2";
const LEGACY_STORAGE_KEY = "jccb_gold_state";
const LOCAL_AUDIT_KEY = "jccb_local_audit_logs";
const LOCAL_PRESENCE_KEY = "jccb_local_presence";

/**
 * Helper to get local state safely
 */
function getLocalState() {
    try {
        let raw = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (!raw) {
            raw = localStorage.getItem(LEGACY_STORAGE_KEY);
        }
        if (raw) return JSON.parse(raw);
    } catch (e) {
        console.warn("[LocalDB] Error reading local state:", e);
    }
    return null;
}

/**
 * Helper to write local state safely
 */
function setLocalState(stateObj) {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(stateObj));
        if (typeof window.saveStateToIndexedDB === "function") {
            window.saveStateToIndexedDB(stateObj).catch(() => {});
        }
        return true;
    } catch (e) {
        console.warn("[LocalDB] LocalStorage save warning:", e);
        return false;
    }
}

/**
 * Local Database Service - 100% Offline, Zero Cloud Dependency
 */
const LocalDBService = {
    isInitialized: true,
    isLocalMode: true,
    currentUser: { uid: "LOCAL_USER", email: "local@jccb.local" },
    userProfile: { uid: "LOCAL_USER", role: "admin", branchId: "99", isActive: true },

    init: async function() {
        console.log("[LocalDB] Initialized in 100% Air-Gapped Local PC Mode. Zero Firebase/Cloud dependencies.");
        this.isInitialized = true;
        return true;
    },

    onAuthStateChanged: function(callback) {
        if (typeof callback === 'function') {
            callback(this.currentUser, this.userProfile);
        }
    },

    login: async function(email, password) {
        return { user: this.currentUser, profile: this.userProfile };
    },

    logout: async function() {
        console.log("[LocalDB] Logged out from local session.");
    },

    isAdmin: function() {
        return true;
    },

    isBranchManager: function() {
        return true;
    },

    getUserBranchId: function() {
        return "99";
    },

    compressBase64Image: function(dataUrl, maxWidth = 400, quality = 0.6) {
        return new Promise((resolve) => {
            if (!dataUrl || typeof dataUrl !== "string" || !dataUrl.startsWith("data:image")) {
                return resolve(dataUrl || "");
            }
            if (dataUrl.length < 120000) {
                return resolve(dataUrl);
            }
            try {
                const img = new Image();
                img.onload = () => {
                    try {
                        const canvas = document.createElement("canvas");
                        let width = img.width;
                        let height = img.height;
                        if (width > maxWidth) {
                            height = Math.round((height * maxWidth) / width);
                            width = maxWidth;
                        }
                        canvas.width = width;
                        canvas.height = height;
                        const ctx = canvas.getContext("2d");
                        ctx.drawImage(img, 0, 0, width, height);
                        const compressed = canvas.toDataURL("image/jpeg", quality);
                        resolve(compressed);
                    } catch (e) {
                        resolve(dataUrl);
                    }
                };
                img.onerror = () => resolve(dataUrl);
                img.src = dataUrl;
            } catch (err) {
                resolve(dataUrl);
            }
        });
    },

    // =================================================================
    // LOANS DATA MANAGEMENT (100% Local PC Persistence)
    // =================================================================

    saveLoan: async function(loanData) {
        const loanId = String(loanData.id || loanData.loanId || `GL_${Date.now()}_${loanData.branchCode || '01'}`).trim();
        const state = getLocalState() || {};
        if (!Array.isArray(state.loans)) state.loans = [];

        const payload = {
            ...loanData,
            id: loanId,
            loanId: loanId,
            branchId: String(loanData.branchCode || loanData.branchId || '01'),
            updatedAt: new Date().toISOString()
        };
        if (!payload.createdAt) payload.createdAt = new Date().toISOString();

        const idx = state.loans.findIndex(l => String(l.id || l.loanId) === loanId);
        if (idx >= 0) {
            state.loans[idx] = { ...state.loans[idx], ...payload };
        } else {
            state.loans.push(payload);
        }

        // Remove from deleted list if present
        if (Array.isArray(state.deletedLoanIds)) {
            state.deletedLoanIds = state.deletedLoanIds.filter(id => id !== loanId);
        }

        setLocalState(state);
        console.log("[LocalDB] Loan saved strictly to local PC storage:", loanId);
        return payload;
    },

    getLoans: async function(branchCode = null) {
        const state = getLocalState() || {};
        let list = Array.isArray(state.loans) ? state.loans : [];
        if (branchCode && branchCode !== "99") {
            list = list.filter(l => String(l.branchCode || l.branchId) === String(branchCode));
        }
        return list;
    },

    deleteLoan: async function(loanId) {
        const cleanId = String(loanId).trim();
        const state = getLocalState() || {};
        if (Array.isArray(state.loans)) {
            state.loans = state.loans.filter(l => String(l.id || l.loanId) !== cleanId);
        }
        if (!state.deletedLoanIds) state.deletedLoanIds = [];
        if (!state.deletedLoanIds.includes(cleanId)) {
            state.deletedLoanIds.push(cleanId);
        }
        setLocalState(state);
        console.log("[LocalDB] Loan deleted from local PC storage:", cleanId);
        return true;
    },

    getDeletedLoanIds: async function() {
        const state = getLocalState() || {};
        return Array.isArray(state.deletedLoanIds) ? state.deletedLoanIds : [];
    },

    saveDeletedLoanId: async function(loanId) {
        return this.deleteLoan(loanId);
    },

    // =================================================================
    // CUSTOMER PROFILES (100% Local PC Persistence)
    // =================================================================

    saveCustomer: async function(custData) {
        const custId = String(custData.id || custData.customerId || `CUST_${Date.now()}`).trim();
        const state = getLocalState() || {};
        if (!Array.isArray(state.customers)) state.customers = [];

        const payload = { ...custData, id: custId, customerId: custId, updatedAt: new Date().toISOString() };
        const idx = state.customers.findIndex(c => String(c.id || c.customerId) === custId);
        if (idx >= 0) {
            state.customers[idx] = { ...state.customers[idx], ...payload };
        } else {
            state.customers.push(payload);
        }
        setLocalState(state);
        return payload;
    },

    getCustomers: async function() {
        const state = getLocalState() || {};
        return Array.isArray(state.customers) ? state.customers : [];
    },

    // =================================================================
    // BRANCH SETTINGS & SEEDS (100% Local PC Persistence)
    // =================================================================

    saveSettings: async function(settingsData) {
        const state = getLocalState() || {};
        state.settings = { ...(state.settings || {}), ...settingsData };
        setLocalState(state);
        return state.settings;
    },

    getSettings: async function() {
        const state = getLocalState() || {};
        return state.settings || null;
    },

    // =================================================================
    // RULES MASTER (100% Local PC Persistence)
    // =================================================================

    saveRules: async function(rulesData) {
        const state = getLocalState() || {};
        state.rules = { ...(state.rules || {}), ...rulesData };
        setLocalState(state);
        return state.rules;
    },

    getRules: async function() {
        const state = getLocalState() || {};
        return state.rules || null;
    },

    // =================================================================
    // BRANCHES MASTER & PASSWORDS (100% Local PC Persistence)
    // =================================================================

    saveBranchesList: async function(branchesList) {
        const state = getLocalState() || {};
        state.branches = Array.isArray(branchesList) ? branchesList : DEFAULT_JCCB_BRANCHES;
        setLocalState(state);
        return state.branches;
    },

    getBranchesList: async function() {
        const state = getLocalState() || {};
        return (Array.isArray(state.branches) && state.branches.length > 0) ? state.branches : DEFAULT_JCCB_BRANCHES;
    },

    getBranches: async function() {
        return this.getBranchesList();
    },

    saveBranch: async function(branchData) {
        const rawCode = String(branchData.code || branchData.branchCode || "01").replace(/\D/g, '');
        const branchCode = rawCode ? rawCode.padStart(2, '0') : "01";
        const state = getLocalState() || {};
        if (!Array.isArray(state.branches)) state.branches = [...DEFAULT_JCCB_BRANCHES];

        const idx = state.branches.findIndex(b => b.code === branchCode);
        const payload = {
            ...branchData,
            code: branchCode,
            branchCode: branchCode,
            updatedAt: new Date().toISOString()
        };
        if (idx >= 0) {
            state.branches[idx] = { ...state.branches[idx], ...payload };
        } else {
            state.branches.push(payload);
        }
        setLocalState(state);
        return payload;
    },

    // =================================================================
    // VALUERS MASTER (100% Local PC Persistence)
    // =================================================================

    saveValuersList: async function(valuersList, deletedValuerIds = []) {
        const state = getLocalState() || {};
        state.valuers = Array.isArray(valuersList) ? valuersList : [];
        if (Array.isArray(deletedValuerIds)) {
            state.deletedValuerIds = deletedValuerIds;
        }
        setLocalState(state);
        return state.valuers;
    },

    getValuersList: async function() {
        const state = getLocalState() || {};
        return {
            list: Array.isArray(state.valuers) ? state.valuers : [],
            deletedIds: Array.isArray(state.deletedValuerIds) ? state.deletedValuerIds : []
        };
    },

    // =================================================================
    // PRODUCT SCHEMES (100% Local PC Persistence)
    // =================================================================

    saveProductsList: async function(productsList) {
        const state = getLocalState() || {};
        state.products = Array.isArray(productsList) ? productsList : [];
        setLocalState(state);
        return state.products;
    },

    getProductsList: async function() {
        const state = getLocalState() || {};
        return Array.isArray(state.products) ? state.products : null;
    },

    // =================================================================
    // DAILY GOLD RATES (100% Local PC Persistence)
    // =================================================================

    saveDailyRates: async function(ratesData) {
        const state = getLocalState() || {};
        state.goldRates = { ...(state.goldRates || {}), ...ratesData };
        if (!Array.isArray(state.rateHistory)) state.rateHistory = [];
        
        const todayStr = ratesData.rateDate || new Date().toISOString().split("T")[0];
        const existingIdx = state.rateHistory.findIndex(r => r.date === todayStr);
        const histItem = {
            date: todayStr,
            rate22K: parseFloat(ratesData["22K"] || ratesData.rate22K || 0),
            rate24K: parseFloat(ratesData["24K"] || ratesData.rate24K || 0),
            isLocked: ratesData.isLocked || false,
            lockedAt: ratesData.lockedAt || new Date().toISOString(),
            lockedBy: ratesData.lockedBy || "LOCAL_ADMIN",
            updatedBy: ratesData.updatedBy || "LOCAL_ADMIN"
        };
        if (existingIdx >= 0) {
            state.rateHistory[existingIdx] = histItem;
        } else {
            state.rateHistory.push(histItem);
        }
        setLocalState(state);
        return state.goldRates;
    },

    getDailyRates: async function() {
        const state = getLocalState() || {};
        return state.goldRates || null;
    },

    // =================================================================
    // AUDIT LOGS & PRESENCE (100% Local PC Persistence)
    // =================================================================

    logAuditEvent: async function(eventType, description, metadata = {}) {
        try {
            const raw = localStorage.getItem(LOCAL_AUDIT_KEY);
            const logs = raw ? JSON.parse(raw) : [];
            const newLog = {
                id: `AUDIT_${Date.now()}_${Math.random().toString(36).substr(2, 6)}`,
                timestamp: new Date().toISOString(),
                eventType: eventType || "SYSTEM_EVENT",
                description: description || "",
                metadata: metadata || {}
            };
            logs.unshift(newLog);
            if (logs.length > 500) logs.length = 500;
            localStorage.setItem(LOCAL_AUDIT_KEY, JSON.stringify(logs));
        } catch (e) {
            console.warn("[LocalDB] Audit log error:", e);
        }
    },

    getAuditLogs: async function(limit = 100) {
        try {
            const raw = localStorage.getItem(LOCAL_AUDIT_KEY);
            const logs = raw ? JSON.parse(raw) : [];
            return logs.slice(0, limit);
        } catch (e) {
            return [];
        }
    },

    updateDevicePresence: async function(sessionInfo = {}) {
        try {
            const presence = {
                ...sessionInfo,
                lastSeen: new Date().toISOString(),
                ip: "127.0.0.1 (Local Host)",
                status: "ONLINE (Local PC)"
            };
            localStorage.setItem(LOCAL_PRESENCE_KEY, JSON.stringify(presence));
            return presence;
        } catch (e) {
            return null;
        }
    },

    getDevicePresences: async function() {
        try {
            const raw = localStorage.getItem(LOCAL_PRESENCE_KEY);
            if (raw) return [JSON.parse(raw)];
        } catch (e) {}
        return [{
            branchCode: "01",
            branchName: "Local Branch Terminal",
            status: "ONLINE (Local Host)",
            lastSeen: new Date().toISOString(),
            ip: "127.0.0.1 (Local Host)"
        }];
    },

    // Local listeners (no-op or immediate callback with zero cloud calls)
    listenDailyRates: function(cb) { if (typeof cb === "function") cb(getLocalState()?.goldRates || null); },
    listenDeletedLoans: function(cb) { },
    listenLoans: function(branchCode, cb) { if (typeof cb === "function") cb(getLocalState()?.loans || []); },
    listenSettings: function(cb) { if (typeof cb === "function") cb(getLocalState()?.settings || null); },
    listenRules: function(cb) { if (typeof cb === "function") cb(getLocalState()?.rules || null); },
    listenBranches: function(cb) { if (typeof cb === "function") cb(getLocalState()?.branches || DEFAULT_JCCB_BRANCHES); },
    listenValuers: function(cb) { if (typeof cb === "function") cb(getLocalState()?.valuers || [], getLocalState()?.deletedValuerIds || []); },
    listenProducts: function(cb) { if (typeof cb === "function") cb(getLocalState()?.products || null); },
    listenCustomers: function(cb) { if (typeof cb === "function") cb(getLocalState()?.customers || []); },
    listenGlobalSyncSignal: function(cb) { },
    getGlobalSyncSignal: async function() { return null; },
    broadcastGlobalSyncSignal: async function() { return true; },
    terminateDeviceSession: async function() { return true; }
};

// Global backward-compatible aliases
window.FirebaseService = LocalDBService;
window.LocalDBService = LocalDBService;
