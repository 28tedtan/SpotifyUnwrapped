import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Serve static files
app.use(express.static(__dirname));

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'HomePage.html'));
});

// Serve other HTML pages
app.get('/dj-player', (req, res) => {
  res.sendFile(join(__dirname, 'dj-player.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(join(__dirname, 'about.html'));
});

app.get('/settings', (req, res) => {
  res.sendFile(join(__dirname, 'settings.html'));
});

app.get('/friends', (req, res) => {
  res.sendFile(join(__dirname, 'friends.html'));
});

app.get('/badges', (req, res) => {
  res.sendFile(join(__dirname, 'badges.html'));
});

// Handle 404 errors - this should be the last route for any unused page
app.use((req, res) => {
  res.status(404).sendFile(join(__dirname, '404.html'));
});

// Start the server using port 3000 or wtv 3000 is the most generic one lmao
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 