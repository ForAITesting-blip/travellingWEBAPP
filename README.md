# Armenia Travel Web Application

A stunning, modern web application for exploring and booking travel experiences in Armenia. Built with React, TypeScript, Redux Toolkit, Tailwind CSS, Framer Motion, and Node.js.

## ✨ Features

- **Beautiful UI/UX**: Modern, responsive design with smooth animations
- **Interactive Destinations**: Browse and filter destinations by category
- **Tour Packages**: Explore curated tour packages with detailed information
- **Booking System**: Easy-to-use booking form for trip reservations
- **State Management**: Redux Toolkit for efficient state management
- **Animations**: Framer Motion for smooth, engaging animations
- **Backend API**: Node.js/Express backend with RESTful endpoints

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime
- **Express** - Web framework
- **TypeScript** - Type safety
- **CORS** - Cross-origin resource sharing

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm

### Setup

1. **Clone the repository**
```bash
cd /workspace
```

2. **Install client dependencies**
```bash
cd client
npm install
```

3. **Install server dependencies**
```bash
cd ../server
npm install
```

## 🚀 Running the Application

### Development Mode

1. **Start the backend server** (in terminal 1)
```bash
cd server
npm run dev
```
The server will run on http://localhost:5000

2. **Start the frontend** (in terminal 2)
```bash
cd client
npm run dev
```
The app will run on http://localhost:5173

### Production Build

1. **Build the frontend**
```bash
cd client
npm run build
```

2. **Build the backend**
```bash
cd server
npm run build
```

3. **Start the production server**
```bash
cd server
npm start
```

## 📂 Project Structure

```
/workspace
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── store/         # Redux store and slices
│   │   ├── types/         # TypeScript type definitions
│   │   ├── hooks/         # Custom React hooks
│   │   ├── App.tsx        # Main app component
│   │   ├── main.tsx       # Entry point
│   │   └── index.css      # Global styles
│   ├── index.html
│   ├── tailwind.config.js
│   └── package.json
├── server/                # Backend Node.js application
│   ├── src/
│   │   └── index.ts       # Express server and API routes
│   ├── tsconfig.json
│   └── package.json
└── README.md
```

## 🎨 Key Features

### Home Page
- Hero section with stunning visuals
- Featured destinations showcase
- Tour packages display
- Why choose us section

### Destinations
- Filter by category (all, city, nature, historical)
- Beautiful destination cards with ratings
- Detailed destination pages
- Direct booking integration

### Tours
- Curated tour packages
- Detailed inclusions
- Duration and pricing information

### Booking System
- Simple booking form
- Real-time form validation
- Confirmation page

### Animations
- Smooth page transitions
- Hover effects
- Scroll-triggered animations
- Loading states

## 🌐 API Endpoints

### Destinations
- `GET /api/destinations` - Get all destinations (with optional category filter)
- `GET /api/destinations/:id` - Get destination by ID

### Tours
- `GET /api/tours` - Get all tours
- `GET /api/tours/:id` - Get tour by ID

### Bookings
- `POST /api/bookings` - Create a new booking

## 🎯 Future Enhancements

- User authentication and profiles
- Real database integration (MongoDB/PostgreSQL)
- Payment integration
- Review and rating system
- Multi-language support
- Advanced search and filtering
- Interactive maps
- Photo galleries
- Blog section

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 💡 Tips

- The app uses Unsplash images for demonstration purposes
- Backend runs on port 5000, frontend on port 5173
- Both servers support hot-reload in development mode
- Tailwind CSS is configured with custom colors and animations

---

Built with ❤️ for Armenia Travel
