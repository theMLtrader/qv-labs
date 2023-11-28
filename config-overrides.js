module.exports = function override(config, env) {
    // Ensure the fallback object exists
    if (!config.resolve.fallback) {
        config.resolve.fallback = {};
    }

    // Existing fallbacks
    config.resolve.fallback.crypto = require.resolve('crypto-browserify');
    config.resolve.fallback.https = require.resolve('https-browserify');
    config.resolve.fallback.zlib = require.resolve('browserify-zlib');
    config.resolve.fallback.url = require.resolve('url/');

    // Add fallbacks for stream and http modules
    config.resolve.fallback.stream = require.resolve('stream-browserify');
    config.resolve.fallback.http = require.resolve('stream-http');

    return config;
}
