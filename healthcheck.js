const http = require('http');

const url = process.env.HEALTH_CHECK_URL || 'http://localhost:5000';
const timeout = process.env.HEALTH_CHECK_TIMEOUT || 5000; // 5 seconds default

const req = http.get(url, (res) => {
    if (res.statusCode < 200 || res.statusCode >= 300) {
        console.error(`Health check failed. Status code: ${res.statusCode}`);
        process.exit(1);
    }
    process.exit(0);
});

req.on('error', (err) => {
    console.error(`Health check failed. Error: ${err.message}`);
    process.exit(1);
});

req.setTimeout(timeout, () => {
    console.error(`Health check failed. Request timed out after ${timeout}ms`);
    req.abort();
    process.exit(1);
});