# GDG JSSATE Bengaluru Website

A responsive website for Google Developer Group at JSS Academy of Technical Education, Bengaluru with automatic mobile/desktop detection.

## Features

- 🎯 **Automatic Device Detection**: Serves mobile-optimized version for mobile devices and desktop version for desktop devices
- 📱 **Mobile-First Design**: Dedicated mobile layout with touch-friendly interactions
- 💻 **Desktop Experience**: Full-featured desktop version with advanced animations
- 🚀 **Modern Tech Stack**: Built with HTML5, CSS3, JavaScript, and Node.js
- ✨ **Interactive Elements**: Carousels, animations, and dynamic content

## Prerequisites

- Node.js (version 14.0.0 or higher)
- npm (comes with Node.js)

## Installation

1. **Clone or download the project files**

2. **Install dependencies:**
   ```bash
   npm install
   ```

## Running the Server

### Development Mode
```bash
npm run dev
```
This will start the server with auto-restart on file changes (requires nodemon).

### Production Mode
```bash
npm start
```

### Manual Start
```bash
node server.js
```

## Access the Website

Once the server is running, open your browser and navigate to:
- **Local**: http://localhost:3000
- **Network**: http://[your-ip]:3000

## How It Works

The server automatically detects the user's device type based on the User-Agent header:

- **Mobile Devices** (Android, iOS, etc.) → Serves `mobile-index.html`
- **Desktop Devices** (Windows, macOS, Linux) → Serves `index.html`

### Device Detection Logic

The server checks for these mobile indicators in the User-Agent:
- Android
- webOS
- iPhone
- iPad
- iPod
- BlackBerry
- IEMobile
- Opera Mini
- Mobile/mobile
- CriOS

## File Structure

```
├── server.js              # Node.js server with device detection
├── package.json           # Project dependencies and scripts
├── index.html             # Desktop version of the website
├── mobile-index.html      # Mobile version of the website
├── images/                # All website images and assets
└── README.md             # This file
```

## Customization

### Adding New Mobile Detection Rules

Edit the `isMobileDevice()` function in `server.js`:

```javascript
function isMobileDevice(userAgent) {
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i;
    return mobileRegex.test(userAgent);
}
```

### Changing Port

Set the PORT environment variable:
```bash
PORT=8080 npm start
```

Or modify the PORT variable in `server.js`:
```javascript
const PORT = process.env.PORT || 8080;
```

## Deployment

### Heroku
1. Create a `Procfile`:
   ```
   web: node server.js
   ```
2. Deploy to Heroku

### Vercel
1. Create `vercel.json`:
   ```json
   {
     "version": 2,
     "builds": [
       {
         "src": "server.js",
         "use": "@vercel/node"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "server.js"
       }
     ]
   }
   ```

### DigitalOcean/AWS/GCP
1. Install Node.js on your server
2. Upload project files
3. Run `npm install`
4. Start with `npm start`

## Troubleshooting

### Port Already in Use
```bash
# Kill process using port 3000
npx kill-port 3000

# Or use a different port
PORT=8080 npm start
```

### Dependencies Issues
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on both mobile and desktop
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions, please contact the GDG JSSATE Bengaluru team.

---

**Made with ❤️ by GDG JSSATE Bengaluru**
