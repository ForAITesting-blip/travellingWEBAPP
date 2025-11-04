import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Destinations data
const destinations = [
  {
    id: 1,
    name: 'Yerevan',
    description: 'The vibrant capital city blending ancient history with modern culture',
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80',
    rating: 4.8,
    price: 150,
    category: 'city',
    highlights: ['Republic Square', 'Cascade Complex', 'Matenadaran', 'Opera House'],
    duration: '3-4 days'
  },
  {
    id: 2,
    name: 'Lake Sevan',
    description: 'The stunning blue jewel of Armenia, one of the largest high-altitude lakes',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    rating: 4.9,
    price: 120,
    category: 'nature',
    highlights: ['Sevanavank Monastery', 'Beach resorts', 'Fresh fish', 'Water sports'],
    duration: '1-2 days'
  },
  {
    id: 3,
    name: 'Tatev Monastery',
    description: 'Medieval monastery accessible by the world\'s longest reversible cable car',
    image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&q=80',
    rating: 5.0,
    price: 200,
    category: 'historical',
    highlights: ['Wings of Tatev', 'Vorotan Gorge', 'Ancient monastery', 'Devil\'s Bridge'],
    duration: '1 day'
  },
  {
    id: 4,
    name: 'Dilijan National Park',
    description: 'Armenia\'s Little Switzerland with lush forests and mineral springs',
    image: 'https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80',
    rating: 4.7,
    price: 180,
    category: 'nature',
    highlights: ['Haghartsin Monastery', 'Old Dilijan', 'Hiking trails', 'Parz Lake'],
    duration: '2-3 days'
  },
  {
    id: 5,
    name: 'Geghard Monastery',
    description: 'UNESCO World Heritage site partially carved out of a mountain',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80',
    rating: 4.9,
    price: 100,
    category: 'historical',
    highlights: ['Rock-cut architecture', 'Sacred spring', 'Cave churches', 'Khachkars'],
    duration: '0.5 day'
  },
  {
    id: 6,
    name: 'Khor Virap',
    description: 'Iconic monastery with breathtaking views of Mount Ararat',
    image: 'https://images.unsplash.com/photo-1601485066598-0c800d4a14bc?w=800&q=80',
    rating: 4.8,
    price: 90,
    category: 'historical',
    highlights: ['Mount Ararat views', 'Ancient dungeons', 'Vineyards', 'St. Gregory'],
    duration: '0.5 day'
  }
];

const tours = [
  {
    id: 1,
    title: 'Complete Armenia Discovery',
    duration: '10 days',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80',
    description: 'Experience the best of Armenia in this comprehensive tour',
    included: ['Accommodation', 'Transportation', 'Guide', 'Meals']
  },
  {
    id: 2,
    title: 'Wine & Culture Tour',
    duration: '5 days',
    price: 650,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80',
    description: 'Explore Armenia\'s ancient winemaking traditions',
    included: ['Wine tastings', 'Hotel stays', 'Transportation', 'Guide']
  },
  {
    id: 3,
    title: 'Adventure Hiking Tour',
    duration: '7 days',
    price: 850,
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&q=80',
    description: 'Trek through Armenia\'s stunning mountain landscapes',
    included: ['Camping gear', 'Meals', 'Expert guides', 'Transportation']
  }
];

// Routes
app.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Welcome to Armenia Travel API' });
});

app.get('/api/destinations', (req: Request, res: Response) => {
  const { category } = req.query;
  let filteredDestinations = destinations;
  
  if (category && category !== 'all') {
    filteredDestinations = destinations.filter(d => d.category === category);
  }
  
  res.json(filteredDestinations);
});

app.get('/api/destinations/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const destination = destinations.find(d => d.id === parseInt(id));
  
  if (!destination) {
    return res.status(404).json({ error: 'Destination not found' });
  }
  
  res.json(destination);
});

app.get('/api/tours', (req: Request, res: Response) => {
  res.json(tours);
});

app.get('/api/tours/:id', (req: Request, res: Response) => {
  const { id } = req.params;
  const tour = tours.find(t => t.id === parseInt(id));
  
  if (!tour) {
    return res.status(404).json({ error: 'Tour not found' });
  }
  
  res.json(tour);
});

// Booking endpoint
app.post('/api/bookings', (req: Request, res: Response) => {
  const { destinationId, tourId, name, email, date, people } = req.body;
  
  // In a real app, save to database
  res.status(201).json({
    message: 'Booking created successfully',
    booking: { destinationId, tourId, name, email, date, people }
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
