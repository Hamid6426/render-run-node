// ES Module compatible Express app
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Express setup
const app = express();
const PORT = process.env.PORT || 3000;

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Health check
app.get('/', (req, res) => {
  res.send('Hello from ESModule Express + Render!');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running at http://0.0.0.0:${PORT}`);
});
