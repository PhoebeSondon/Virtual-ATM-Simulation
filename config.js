// Configuration for MEAN Stack Integration
// Set USE_BACKEND to true to use MongoDB backend, false to use localStorage

const APP_CONFIG = {
    // Toggle between backend API and localStorage
    USE_BACKEND: true, // Set to false to use localStorage mode
    
    // API Configuration
    // Automatically use the correct URL based on environment
    API_BASE_URL: window.location.hostname === 'localhost' 
        ? 'http://localhost:3000/api'  // Local development
        : `${window.location.origin}/api`,  // Production (deployed)
    
    // Feature flags
    ENABLE_AI_SECURITY: true,
    ENABLE_CURRENCY_EXCHANGE: true,
    ENABLE_MULTILINGUAL: true,
    
    // Session configuration
    SESSION_TIMEOUT: 30000, // 30 seconds in milliseconds (for demo/showcase)
    SESSION_WARNING_TIME: 20000, // 20 seconds (warning appears after 20 seconds)
    
    // Transaction limits
    LIMITS: {
        withdraw: { min: 10, max: 1000 },
        deposit: { min: 10, max: 10000 },
        transfer: { min: 1, max: 5000 }
    }
};

// Make config globally available
window.APP_CONFIG = APP_CONFIG;
