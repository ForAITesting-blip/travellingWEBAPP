# 🚀 Quick Start Guide - Armenia Travel App

## Prerequisites
- Node.js 18+ and npm installed

## 🎯 Running the Application

### Option 1: Start Both Servers Manually (Recommended for Development)

**Terminal 1 - Backend Server:**
```bash
cd server
npm run dev
```
Server will run at: http://localhost:5000

**Terminal 2 - Frontend Client:**
```bash
cd client
npm run dev
```
Client will run at: http://localhost:5173

### Option 2: One-Command Start

From the root directory:
```bash
# Start backend
npm run dev:server &

# Start frontend (in same or different terminal)
npm run dev:client
```

## 📦 First Time Setup

If you haven't installed dependencies yet:
```bash
npm run install:all
```

## 🏗️ Building for Production

```bash
npm run build:all
```

## 🌐 Access the Application

Once both servers are running:
1. Open your browser
2. Navigate to http://localhost:5173
3. Explore Armenia's beautiful destinations!

## 📚 Features to Try

1. **Homepage** - See the hero section with animations
2. **Destinations** - Filter by category (city, nature, historical)
3. **Tours** - Browse curated tour packages
4. **Destination Details** - Click any destination for detailed info
5. **Booking** - Try the booking form
6. **About** - Learn about the service

## 🎨 What to Expect

- ✨ Smooth animations throughout
- 📱 Fully responsive design
- 🎯 Interactive UI elements
- 🖼️ Beautiful imagery from Unsplash
- 🚀 Fast performance with Vite

## 🛠️ Tech Stack

**Frontend:**
- React 18 + TypeScript
- Redux Toolkit (State Management)
- Tailwind CSS (Styling)
- Framer Motion (Animations)
- React Router (Navigation)
- Vite (Build Tool)

**Backend:**
- Node.js + Express
- TypeScript
- REST API

## 📁 Project Structure

```
/workspace
├── client/          → React frontend
├── server/          → Node.js backend
├── README.md        → Full documentation
└── START_HERE.md    → This quick start guide
```

## 🐛 Troubleshooting

**Port already in use?**
- Frontend: Change port in `client/vite.config.ts`
- Backend: Change PORT in `server/.env`

**API not connecting?**
- Ensure backend is running on port 5000
- Check `client/src/store/*.ts` for API_URL

**Build errors?**
- Try: `rm -rf node_modules && npm install`
- Clear cache: `npm cache clean --force`

## 💡 Tips

- Use browser DevTools to see Redux state
- Check Network tab to see API calls
- Animations are powered by Framer Motion
- Images are from Unsplash (free stock photos)

---

**Enjoy exploring Armenia! 🇦🇲**
