const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 45553;

// Serve static files from the current directory
app.use(express.static(__dirname, {
    setHeaders: (res, path) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'HomePage.html'));
});

app.get('/trending', (req, res) => {
    res.sendFile(path.join(__dirname, 'trending.html'));
});

app.get('/friends', (req, res) => {
    res.sendFile(path.join(__dirname, 'friends.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/settings', (req, res) => {
    res.sendFile(path.join(__dirname, 'settings.html'));
});

// Error handling for 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 