module.exports = function override(config, env) {
    // Add a fallback for the crypto module
    if (!config.resolve.fallback) { config.resolve.fallback = {}; }
    config.resolve.fallback.crypto = require.resolve('crypto-browserify');
    
    return config;
}
