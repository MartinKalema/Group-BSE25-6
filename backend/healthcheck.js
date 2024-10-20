const http = require('http');

const url = process.env.HEALTH_CHECK_URL || 'http://localhost:5000/health';
const timeout = parseInt(process.env.HEALTH_CHECK_TIMEOUT, 10) || 1000; // 1 second default

function healthCheck() {
  return new Promise((resolve, reject) => {
    const req = http.get(url, { timeout }, (res) => {
      if (res.statusCode >= 200 && res.statusCode < 300) {
        resolve('Health check passed');
      } else {
        reject(
          new Error(`Health check failed. Status code: ${res.statusCode}`)
        );
      }
    });

    req.on('error', (err) => {
      reject(new Error(`Health check failed: ${err.message}`));
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error(`Health check timed out after ${timeout}ms`));
    });
  });
}

healthCheck()
  .then((message) => {
    console.log(message);
    process.exit(0);
  })
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
