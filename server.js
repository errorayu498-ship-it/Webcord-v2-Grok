const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));  // frontend files yahan se serve honge

// Webhook Sender Endpoint
app.post('/api/webhook/send', async (req, res) => {
  const { url, content, amount = 1, delay = 0 } = req.body;

  if (!url || !content) {
    return res.status(400).json({ error: 'Webhook URL aur message zaroori hai' });
  }

  let successCount = 0;
  let failed = [];

  for (let i = 0; i < amount; i++) {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
      });

      if (!response.ok) {
        const err = await response.text();
        failed.push(`Message ${i+1}: ${err}`);
        continue;
      }

      successCount++;
    } catch (err) {
      failed.push(`Message ${i+1}: ${err.message}`);
    }

    if (i < amount - 1 && delay > 0) {
      await new Promise(r => setTimeout(r, delay * 1000));
    }
  }

  res.json({
    success: successCount,
    failed,
    message: `\( {successCount}/ \){amount} messages sent`
  });
});

// Bot/User Message Sender Endpoint
app.post('/api/discord/send', async (req, res) => {
  const { token, channelId, content, amount = 1, delay = 0, isBot = true } = req.body;

  if (!token || !content) {
    return res.status(400).json({ error: 'Token aur message zaroori hai' });
  }

  if (!channelId) {
    return res.status(400).json({ error: 'Channel ID zaroori hai (user token ke liye mandatory, bot ke liye bhi recommend)' });
  }

  const auth = isBot ? `Bot ${token}` : token;

  let successCount = 0;
  let failed = [];

  for (let i = 0; i < amount; i++) {
    try {
      const response = await fetch(`https://discord.com/api/v13/channels/${channelId}/messages`, {
        method: 'POST',
        headers: {
          'Authorization': auth,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content })
      });

      if (!response.ok) {
        const err = await response.text();
        failed.push(`Message ${i+1}: ${err}`);
        continue;
      }

      successCount++;
    } catch (err) {
      failed.push(`Message ${i+1}: ${err.message}`);
    }

    if (i < amount - 1 && delay > 0) {
      await new Promise(r => setTimeout(r, delay * 1000));
    }
  }

  res.json({
    success: successCount,
    failed,
    message: `\( {successCount}/ \){amount} messages sent`
  });
});

// Start server
app.listen(port, () => {
  console.log(`WEBCORD PORTAL running on port ${port}`);
});
