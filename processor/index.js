const { createClient } = require('redis');
const redis = createClient({ url: process.env.REDIS_URL });
redis.connect();

async function processMessages() {
  while (true) {
    const data = await redis.blPop('contactQueue', 0);
    const message = JSON.parse(data.element);
    console.log('[Processor] Received message:', message);
    console.log( data);
    console.log( message);
  }
}

processMessages();
