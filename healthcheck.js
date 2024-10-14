const http = require('http');

http.get('http://localhost:5000', (res) => {
    if (res.statusCode !== 200) {
        process.exit(1);
    }
}).on('error', () => {
    process.exit(1);
});
