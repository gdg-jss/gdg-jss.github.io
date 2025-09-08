const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to detect mobile devices
function isMobileDevice(userAgent) {
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;
    return mobileRegex.test(userAgent);
}

// Serve static files (images, CSS, JS, etc.)
app.use(express.static(path.join(__dirname)));

// Main route - serve appropriate HTML based on device
app.get('/', (req, res) => {
    const userAgent = req.get('User-Agent');
    const isMobile = isMobileDevice(userAgent);
    
    console.log(`Request from: ${req.ip}`);
    console.log(`User Agent: ${userAgent}`);
    console.log(`Is Mobile: ${isMobile}`);
    
    if (isMobile) {
        res.sendFile(path.join(__dirname, 'mobile-index.html'));
    } else {
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

// Fallback route for any other requests
app.get('*', (req, res) => {
    const userAgent = req.get('User-Agent');
    const isMobile = isMobileDevice(userAgent);
    
    if (isMobile) {
        res.sendFile(path.join(__dirname, 'mobile-index.html'));
    } else {
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📱 Mobile devices will see: mobile-index.html`);
    console.log(`💻 Desktop devices will see: index.html`);
    console.log(`\nPress Ctrl+C to stop the server`);
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n👋 Shutting down server...');
    process.exit(0);
});
