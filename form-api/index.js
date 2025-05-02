const express = require('express');
const cors = require('cors');
const { createClient } = require('redis');

const app = express();
const PORT = 3001;

const redis = createClient({ url: process.env.REDIS_URL });

redis.connect()
  .then(() => console.log('Connected to Redis'))
  .catch(err => console.error('Redis connection error:', err));

app.use(cors());
app.use(express.json());

// Health check or base route
app.get('/', (req, res) => {
  res.send('Form API is running');
});

// Contact form submission route
app.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields required.' });
  }

  try {
    const payload = {
      name,
      email,
      message,
      time: new Date().toISOString(),
    };

    await redis.rPush('contactQueue', JSON.stringify(payload));
    res.status(200).json({ status: 'ok' });
  } catch (err) {
    console.error('Error pushing to Redis:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Form API listening on port ${PORT}`);
});
