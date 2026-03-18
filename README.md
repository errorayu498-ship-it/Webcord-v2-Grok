# 🎯 WEBCORD PORTAL
## Professional Discord Webhook & Bot Message Sender

> **Programmed by Subhan** ✨

A complete, production-ready web portal for sending Discord messages via webhooks or bot tokens with full error handling, professional UI, and deployment-ready code.

---

## 📋 Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Deployment](#deployment)
- [Usage Guide](#usage-guide)
- [API Documentation](#api-documentation)
- [Security](#security)
- [Troubleshooting](#troubleshooting)
- [File Structure](#file-structure)

---

## ✨ Features

### 🔗 Webhook Sender Tool
- ✓ Send messages via Discord webhook URLs
- ✓ Rich text formatting (Bold, Italic, Underline, Strike, Code blocks)
- ✓ Single message or bulk sending with custom delay
- ✓ Real-time progress tracking with percentage
- ✓ Speed calculator (messages/second)
- ✓ Stop/Pause functionality
- ✓ Rate limit detection and auto-handling
- ✓ Full error messages with solutions

### 🤖 Bot/User Token Sender Tool
- ✓ Single or bulk token support
- ✓ Target specific channel or broadcast to all channels
- ✓ Rich text editor with formatting tools
- ✓ Message amount and delay control
- ✓ Multi-token message rotation
- ✓ Real-time progress bars
- ✓ Speed calculation and statistics
- ✓ Professional error handling

### 🎨 Design & UX
- ✓ Yellow (#FFD700) & Black professional theme
- ✓ Smooth animations and transitions
- ✓ Fully responsive (mobile, tablet, desktop)
- ✓ Toast notifications (bottom-right corner)
- ✓ Loading spinners and progress indicators
- ✓ Beautiful gradients and effects
- ✓ Keyboard friendly and accessible

### 🛡️ Professional Features
- ✓ Full error handling with user-friendly messages
- ✓ Input validation and sanitization
- ✓ CORS support for API requests
- ✓ Rate limit awareness
- ✓ Token management with removal
- ✓ Automatic message escaping
- ✓ Security headers in server

---

## 🚀 Quick Start

### Option 1: HTML File Only (Fastest - 5 seconds)
```bash
# Simply open the HTML file in your browser
1. Open: webcord-portal.html
2. Right-click → Open with Browser
3. Done! Portal is running
```

No installation, no server setup required for testing!

### Option 2: Local Node.js Server
```bash
# Prerequisites: Node.js installed

# 1. Create folder structure
mkdir webcord-portal
cd webcord-portal

# 2. Copy these files:
# - index.html (renamed from webcord-portal.html)
# - server.js
# - package.json

# 3. Install and run
npm install
npm start

# 4. Open browser to http://localhost:3000
```

### Option 3: Deploy on Railway (Production)
See [Deployment Guide](#deployment) below

---

## 📦 Installation

### Requirements
- **For HTML Only**: Any modern browser (Chrome, Firefox, Safari, Edge)
- **For Node Server**: Node.js 18+ and npm
- **For Railway**: GitHub account (free), Railway account (free)

### Step 1: Get Files
Download or clone these files:
```
webcord-portal/
├── index.html          (rename from webcord-portal.html)
├── server.js           (Node.js server)
├── package.json        (dependencies)
├── .gitignore         (Git configuration)
└── README.md          (this file)
```

### Step 2: Local Testing
```bash
# Method A: Just open HTML
Open webcord-portal.html in browser

# Method B: With Node server
npm install
npm start
# Visit http://localhost:3000
```

### Step 3: Deploy to Production
See deployment guide below

---

## 🌐 Deployment

### Railway Deployment (Recommended)

#### Step 1: Prepare Files
```
webcord-portal/
├── index.html
├── server.js
├── package.json
└── .gitignore
```

#### Step 2: Push to GitHub
```bash
# Initialize git
git init
git add .
git commit -m "Initial WEBCORD Portal deployment"

# Create GitHub repo and push
git remote add origin https://github.com/YOUR_USERNAME/webcord-portal.git
git branch -M main
git push -u origin main
```

#### Step 3: Deploy on Railway
1. Go to [railway.app](https://railway.app)
2. Sign in with GitHub
3. Click "New Project"
4. Select "Deploy from GitHub repo"
5. Select your `webcord-portal` repository
6. Railway auto-detects Node.js
7. Wait for deployment (2-3 minutes)
8. Your portal URL appears in Deployments
9. Visit your live portal! 🎉

#### Step 4: Custom Domain (Optional)
1. In Railway: Settings → Domains
2. Add your custom domain
3. Follow DNS instructions

---

## 📖 Usage Guide

### Getting Discord Credentials

#### Webhook URL
```
1. Discord Server → Channel Settings
2. Integrations → Webhooks
3. Create Webhook
4. Copy full URL
Format: https://discord.com/api/webhooks/ID/TOKEN
```

#### Bot Token
```
1. Discord Developer Portal (discord.com/developers)
2. Applications → Create App
3. Bot → Add Bot
4. Copy token
5. Keep this SECRET!
```

#### Channel ID
```
1. Discord Settings → Advanced → Developer Mode
2. Right-click channel
3. Copy Channel ID
```

### Using Webhook Sender

1. **Open Tool**: Click "Webhook Sender" card
2. **Enter URL**: Paste your webhook URL
3. **Write Message**: Type message with optional formatting
4. **Set Amount**: How many times to send (1-10,000)
5. **Set Delay**: Wait time between messages (0.1+ seconds)
6. **Send**:
   - "Send 1 Message" for testing
   - "Start" for bulk sending
   - "Stop" to halt sending

### Using Bot/User Sender

1. **Add Tokens**: Paste token(s), click "Add Token(s)"
2. **Enter Channel ID**: Or leave empty for all channels
3. **Write Message**: Your message content
4. **Configure**:
   - Amount of messages to send
   - Delay between messages
5. **Send**:
   - "Send 1 Message" for single test
   - "Start" to begin bulk sending
   - "Stop" to stop

---

## 🔌 API Documentation

### Health Check
```
GET /api/health
Response:
{
  "status": "operational",
  "service": "WEBCORD Portal",
  "uptime": 123.45,
  "timestamp": "2024-01-01T12:00:00Z",
  "environment": "production"
}
```

### Status Endpoint
```
GET /api/status
Response:
{
  "status": "active",
  "message": "WEBCORD Portal is running",
  "version": "1.0.0",
  "features": {
    "webhook": true,
    "botToken": true,
    "multiToken": true
  }
}
```

### Info Endpoint
```
GET /api/info
Response:
{
  "name": "WEBCORD Portal",
  "version": "1.0.0",
  "author": "Subhan",
  "features": [...]
}
```

---

## 🔒 Security

### Best Practices

**DO:**
- ✓ Use HTTPS in production
- ✓ Keep tokens private
- ✓ Use environment variables for tokens
- ✓ Regenerate compromised webhooks
- ✓ Set proper permissions on channels
- ✓ Monitor webhook usage

**DON'T:**
- ✗ Commit tokens to GitHub
- ✗ Share webhook URLs publicly
- ✗ Use in production without HTTPS
- ✗ Spam messages (violates ToS)
- ✗ Leave tokens in browser console

### Environment Variables
```bash
# Create .env file (never commit this!)
PORT=3000
NODE_ENV=production
```

### Rate Limiting
- Discord: ~1 message/second per webhook
- Default delay: 1 second (safe)
- Portal auto-detects rate limits
- Auto-waits on 429 errors

---

## 🐛 Troubleshooting

### Issue: Blank/White Screen
**Solution:**
```bash
1. Refresh page (Ctrl+R)
2. Clear cache (Ctrl+Shift+Delete)
3. Open Console (F12) check for errors
4. Try different browser
```

### Issue: "Invalid Webhook URL"
**Solution:**
```
1. URL must start with https://
2. Must contain discord.com/api/webhooks/
3. Copy FULL URL from Discord
4. No extra spaces or characters
```

### Issue: "Token Invalid"
**Solution:**
```
1. Token should be long string (50+ chars)
2. No spaces before/after
3. Copy exactly from Developer Portal
4. Tokens can expire - regenerate if needed
```

### Issue: "Rate Limited"
**Solution:**
```
1. Increase delay between messages
2. Use 1+ second minimum
3. Wait 1-5 minutes before retry
4. Try with fewer messages
```

### Issue: "Module not found" (npm start)
**Solution:**
```bash
npm install
# Or delete node_modules and try again:
rm -rf node_modules
npm install
```

### Issue: Port Already in Use
**Solution:**
```bash
# Use different port:
PORT=3001 npm start

# Or find and kill process:
# macOS/Linux: lsof -i :3000 | kill -9
# Windows: netstat -ano | findstr :3000
```

---

## 📁 File Structure

```
webcord-portal/
├── index.html              # Main portal UI (yellow & black theme)
├── server.js               # Node.js server with error handling
├── package.json            # Dependencies and scripts
├── .gitignore              # Git ignore rules
├── README.md               # This file
├── QUICK_START.txt         # Quick start guide
└── DEPLOYMENT_GUIDE.txt    # Detailed deployment instructions
```

### File Descriptions

**index.html** (1 file, ~30KB)
- Complete portal UI
- Webhook and Bot sender tools
- Rich text editor with formatting
- Real-time progress tracking
- Toast notifications
- Fully responsive design

**server.js** (~500 lines)
- HTTP server with error handling
- CORS support
- Health check endpoints
- Static file serving
- Graceful shutdown handling
- Colored console logging

**package.json**
- Node.js version: 18.x
- No production dependencies (lightweight!)
- Includes npm scripts

---

## 🎨 Customization

### Change Colors
Edit CSS variables in `index.html`:
```css
:root {
    --primary: #FFD700;      /* Yellow */
    --secondary: #1a1a1a;    /* Black */
    --accent: #FF6B35;       /* Orange */
    --success: #4CAF50;      /* Green */
    --danger: #FF4444;       /* Red */
}
```

### Change Delays/Amounts
Edit JavaScript defaults:
```javascript
const amount = 1;      // Default amount
const delay = 1;       // Default delay in seconds
const max_amount = 10000;  // Maximum allowed
```

### Add New Tools
Portal structure allows adding new tools easily. Each tool gets:
- A card on main page
- Dedicated tool page with form
- Error handling and progress tracking

---

## 📊 Performance

- **File Size**: ~30KB (single HTML file)
- **Load Time**: < 2 seconds locally
- **Messages/Second**: Depends on Discord rate limits (1+ per second safe)
- **Browser Support**: All modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile**: Fully responsive and functional

---

## 📝 License

MIT License - Free to use and modify

---

## 🤝 Support

### Common Issues Checklist
- [ ] URL is correct and complete
- [ ] Token is valid and not expired
- [ ] Channel ID is correct
- [ ] Delay is at least 0.1 seconds
- [ ] Internet connection is stable
- [ ] Browser console has no errors
- [ ] Discord server rules allow bots/webhooks

### Getting Help
1. Check Troubleshooting section above
2. Open browser console (F12) for errors
3. Read the error message carefully
4. Try with single message first
5. Verify credentials are correct

---

## 🚀 Next Steps

1. **Test Locally**: Open HTML file in browser
2. **Get Credentials**: Webhook URL or bot token from Discord
3. **Send First Message**: Use "Send 1 Message" button
4. **Deploy**: Follow Railway deployment guide
5. **Monitor**: Check API health endpoint regularly

---

## 📞 Credits

**Programmed by Subhan** ✨

A professional, production-ready Discord message portal with:
- Full error handling
- Modern UI with animations
- Multiple tool support
- Railway deployment ready

---

## ✅ Checklist Before Production

- [ ] Test locally first
- [ ] Verify Discord credentials
- [ ] Enable HTTPS on production
- [ ] Keep tokens in environment variables
- [ ] Monitor rate limits
- [ ] Set proper Discord permissions
- [ ] Regular security audits
- [ ] Backup webhook URLs safely
- [ ] Monitor API health endpoints
- [ ] Follow Discord Terms of Service

---

## 🎯 Features Roadmap

Potential future additions:
- [ ] Database integration
- [ ] User authentication
- [ ] Message templates
- [ ] Scheduled messages
- [ ] Message history
- [ ] Webhook groups
- [ ] Analytics dashboard
- [ ] Multi-server support

---

**Happy Messaging! 🎉**

Questions? Check the detailed guides:
- QUICK_START.txt - Fast setup
- DEPLOYMENT_GUIDE.txt - Detailed deployment
- This README.md - Complete reference

---

*Last Updated: January 2024*
*Version: 1.0.0*
*Status: Production Ready ✓*
