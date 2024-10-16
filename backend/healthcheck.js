const http = require('http');
const { setTimeout } = require('timers/promises');

const url = process.env.HEALTH_CHECK_URL || 'http://localhost:5000';
const timeout = parseInt(process.env.HEALTH_CHECK_TIMEOUT, 10) || 5000; // 5 seconds default
const retries = parseInt(process.env.HEALTH_CHECK_RETRIES, 10) || 3; // 3 retries default
const retryDelay = parseInt(process.env.HEALTH_CHECK_RETRY_DELAY, 10) || 1000; // 1 second default

async function healthCheck() {
  for (let i = 0; i < retries; i++) {
    try {
      const req = http.get(url, { timeout }, (res) => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
          throw new Error(
            `Health check failed. Status code: ${res.statusCode}`
          );
        }
      });

      // Handle response error
      req.on('error', (err) => {
        throw err;
      });

      // Wait for the request to complete
      await new Promise((resolve, reject) => {
        req.on('timeout', () => {
          req.destroy(); // Destroy the request on timeout
          reject(new Error(`Health check timed out after ${timeout}ms`));
        });
        req.on('end', resolve);
      });

      // If we reach here, the health check succeeded
      console.log('Health check passed');
      return; // Exit the function successfully
    } catch (err) {
      console.error(
        `Health check failed. Attempt ${i + 1} of ${retries}. Error: ${
          err.message
        }`
      );
      await setTimeout(retryDelay);
    }
  }

  console.error(`Health check failed after ${retries} attempts`);
  process.exit(1);
}

healthCheck();
