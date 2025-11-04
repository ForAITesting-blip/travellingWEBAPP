export const hero = {
  title: 'Armenia, crafted for the soulful traveler',
  subtitle: 'Caucasus journeys reimagined',
  description:
    'Traverse monasteries carved into cliffs, taste ancient vintages and modern cuisine, meet artisans shaping the nation’s new chapter, and rest in design-led boutique stays.',
  ctaPrimary: 'Design my itinerary',
  ctaSecondary: 'Browse destinations',
  media: {
    type: 'video' as const,
    url: 'https://cdn.coverr.co/videos/coverr-snowy-mountains-at-dawn-5203/1080p.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1521292270410-a8c2d75bb803?auto=format&fit=crop&w=1600&q=80',
  },
}

export interface Destination {
  id: string
  name: string
  region: string
  description: string
  highlights: string[]
  seasons: string[]
  activities: string[]
  image: string
  gallery: string[]
  coordinates: [number, number]
  difficulty: 'Easy' | 'Moderate' | 'Challenging'
  duration: string
  rating: number
  tags: string[]
}

export const destinations: Destination[] = [
  {
    id: 'dilijan-forest-escape',
    name: 'Dilijan National Park',
    region: 'Tavush',
    description: 'A lush alpine sanctuary with moss-covered forests, artisan villages, and the famed Silk Road monastery of Haghartsin.',
    highlights: ['Forest bathing in Parz Lake', 'Chef-led foraging lunches', 'Clay masters of Teghut village'],
    seasons: ['Spring', 'Autumn'],
    activities: ['Hiking', 'Craft Workshops', 'Boutique Stays'],
    image: 'https://images.unsplash.com/photo-1530460583791-f1ffcf0f04fb?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598257006468-5fef28f7b4f8?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: [40.7414, 44.8636],
    difficulty: 'Moderate',
    duration: '3 nights',
    rating: 4.9,
    tags: ['Forest', 'Design Hotel', 'Slow Travel'],
  },
  {
    id: 'lake-sevan',
    name: 'Lake Sevan Azure Shores',
    region: 'Gegharkunik',
    description: 'Sun-drenched high-altitude beaches, monasteries overlooking turquoise waters, and contemporary lakefront architecture.',
    highlights: ['Sevanavank sunrise liturgy', 'Sail & shashlik picnic', 'Design residency at Noyan Tun'],
    seasons: ['Summer', 'Autumn'],
    activities: ['Sailing', 'Culinary', 'Photography'],
    image: 'https://images.unsplash.com/photo-1568640347023-cb3223c82395?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560264897-9d9d8e59f52b?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1526481280695-3c46967ea2d4?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: [40.3324, 45.3541],
    difficulty: 'Easy',
    duration: '2 nights',
    rating: 4.8,
    tags: ['Lake', 'Architecture', 'Families'],
  },
  {
    id: 'tatev-skyline',
    name: 'Tatev Skyline Route',
    region: 'Syunik',
    description: 'Ride the world’s longest reversible cable car, explore the Tatev Monastery plateau, and dine in Areni’s caves with wine pioneers.',
    highlights: ['Wings of Tatev sunrise glide', 'Areni amphora tasting', 'Khndzoresk cave village trek'],
    seasons: ['Spring', 'Autumn'],
    activities: ['Aerial Tram', 'Wine', 'Heritage'],
    image: 'https://images.unsplash.com/photo-1560877020-7c557fc5a69a?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1580982763290-5edd2cfbe9d9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560439514-4e9645039924?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: [39.3786, 46.2455],
    difficulty: 'Moderate',
    duration: '4 nights',
    rating: 4.95,
    tags: ['UNESCO', 'Wine', 'Adventure'],
  },
  {
    id: 'yerevan-cultural-suite',
    name: 'Yerevan Cultural Suite',
    region: 'Yerevan',
    description: 'Private gallery tours, behind-the-scenes with jazz musicians, and architectural walks revealing Soviet modernism and new design.',
    highlights: ['Tumo Studios craft immersion', 'Komitas Conservatory performance', 'Nighttime wine crawl'],
    seasons: ['Year-round'],
    activities: ['Art', 'Music', 'Culinary'],
    image: 'https://images.unsplash.com/photo-1583339522870-0d9c9c974147?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1562514155-444b14e5325c?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: [40.1792, 44.4991],
    difficulty: 'Easy',
    duration: '3 nights',
    rating: 4.7,
    tags: ['City', 'Design', 'Nightlife'],
  },
  {
    id: 'geghard-echoes',
    name: 'Geghard Echoes & Garni Temple',
    region: 'Kotayk',
    description: 'Experience the acoustics of Geghard’s rock-hewn chambers and the classical columns of Garni set against basalt cliffs.',
    highlights: ['Private choir performance', 'Sound bath in organ pipes canyon', 'Lavash baking with locals'],
    seasons: ['Spring', 'Winter'],
    activities: ['Spiritual', 'Culinary', 'Photography'],
    image: 'https://images.unsplash.com/photo-1562156723-388c6c70e8d4?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589629791085-3f38c070cdbf?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1598009063955-3b3f98e81238?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: [40.1545, 44.7229],
    difficulty: 'Easy',
    duration: 'Day trip',
    rating: 4.83,
    tags: ['Heritage', 'Sound', 'UNESCO'],
  },
  {
    id: 'arat-summit',
    name: 'Mount Aragats Summit Loop',
    region: 'Aragatsotn',
    description: 'Summit Armenia’s highest peak with alpine guides, sleep in boutique mountain huts, and enjoy astrophotography above the clouds.',
    highlights: ['Cosmic Ray Station stargazing', 'Lake Kari ice plunge', 'Summit champagne breakfast'],
    seasons: ['Summer'],
    activities: ['Mountaineering', 'Wellness', 'Night Sky'],
    image: 'https://images.unsplash.com/photo-1512395671519-1aee1ab61e0a?auto=format&fit=crop&w=1600&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1524836701751-bceced06dcef?auto=format&fit=crop&w=1200&q=80',
    ],
    coordinates: [40.5333, 44.2000],
    difficulty: 'Challenging',
    duration: '5 nights',
    rating: 4.92,
    tags: ['Adventure', 'Luxury Camp', 'Astronomy'],
  },
]

export interface Itinerary {
  id: string
  title: string
  durationDays: number
  season: string
  audience: string
  pace: 'Relaxed' | 'Balanced' | 'Adventurous'
  summary: string
  highlights: string[]
  mapUrl: string
  schedule: Array<{
    day: number
    title: string
    description: string
    activities: string[]
    tips: string[]
  }>
}

export const itineraries: Itinerary[] = [
  {
    id: 'harvest-hues',
    title: 'Harvest Hues & Monastic Echoes',
    durationDays: 7,
    season: 'Autumn',
    audience: 'Couples',
    pace: 'Balanced',
    summary:
      'From the ochre vineyards of Areni to candlelit vespers in rock-hewn chapels, this itinerary balances culinary artistry with meditative heritage.',
    highlights: ['Areni vintage blending', 'Geghard choral immersion', 'Dilijan forest tea ritual'],
    mapUrl: 'https://www.google.com/maps/d/embed?mid=1-armenian-map',
    schedule: [
      {
        day: 1,
        title: 'Yerevan narratives',
        description: 'Private walking salon through modern galleries and hidden courtyards followed by rooftop welcome dinner.',
        activities: ['Gallery salon', 'Rooftop tasting', 'Jazz speakeasy'],
        tips: ['Pack a light shawl for evening breezes'],
      },
      {
        day: 2,
        title: 'Garni acoustic awakening',
        description: 'Sunrise yoga amid basalt columns, sound bath inside Geghard, lavash baking with village matriarchs.',
        activities: ['Basalt canyon hike', 'Sound bath', 'Lavash atelier'],
        tips: ['Wear light layers for mountain mornings'],
      },
      {
        day: 3,
        title: 'Areni harvest immersion',
        description: 'Grape harvest with winemakers, amphora tasting, vineyard lunch with folk quartet serenade.',
        activities: ['Harvest participation', 'Wine blending', 'Folk serenade'],
        tips: ['Closed-toe shoes recommended'],
      },
      {
        day: 4,
        title: 'Noravank canyon glow',
        description: 'Golden hour photography workshop and private dinner inside a canyon cave with modern Armenian cuisine.',
        activities: ['Photography class', 'Cave dining', 'Celestial storytelling'],
        tips: ['Camera or phone fully charged'],
      },
      {
        day: 5,
        title: 'Dilijan design retreat',
        description: 'Forest bathing, atelier visits, and spa rituals with locally harvested botanicals.',
        activities: ['Forest bathing', 'Artisan atelier', 'Botanical spa'],
        tips: ['Gladly pack comfortable walking shoes'],
      },
      {
        day: 6,
        title: 'Lake Sevan azure day',
        description: 'Sail across the lake, savor smoked trout brunch, witness sunset at Sevanavank.',
        activities: ['Sunrise sail', 'Trout brunch', 'Monastery sunset'],
        tips: ['Bring swimwear for optional plunge'],
      },
      {
        day: 7,
        title: 'Closure & reflection',
        description: 'Farewell brunch at Cascade house, curated memory booklet, private transfer to airport.',
        activities: ['Memory circle', 'Farewell brunch'],
        tips: ['Review curated album delivered digitally'],
      },
    ],
  },
  {
    id: 'winter-solace',
    title: 'Winter Solace & Thermal Springs',
    durationDays: 5,
    season: 'Winter',
    audience: 'Wellness Seekers',
    pace: 'Relaxed',
    summary: 'Snow-dusted monasteries, geothermal springs, Nordic saunas, and mindful rituals surrounded by the silence of winter mountains.',
    highlights: ['Jermuk spa rituals', 'Geghard candlelit chants', 'Aragats observatory stargazing'],
    mapUrl: 'https://www.google.com/maps/d/embed?mid=1-winter-map',
    schedule: [
      {
        day: 1,
        title: 'Snow arrival',
        description: 'Transfer to thermal resort, welcome tea ceremony, evening sauna cycle.',
        activities: ['Tea ceremony', 'Guided sauna', 'Fireplace meditation'],
        tips: ['Pack swimwear for spa rituals'],
      },
      {
        day: 2,
        title: 'Frozen monastery whispers',
        description: 'Geghard private chanting, snowshoeing to hidden hermitage, mulled wine picnic.',
        activities: ['Snowshoe trek', 'Choral private set', 'Picnic'],
        tips: ['Thermal layers provided on-site'],
      },
      {
        day: 3,
        title: 'Jermuk cascading spa',
        description: 'Hydrotherapy circuits, spa cuisine, aromatherapy workshop.',
        activities: ['Hydrotherapy circuit', 'Spa lunch', 'Aromatherapy mixing'],
        tips: ['Hydrate frequently'],
      },
      {
        day: 4,
        title: 'Aragats starlight',
        description: 'Drive to observatory, astrophotography workshop, midnight sky bathing.',
        activities: ['Observatory tour', 'Astro workshop', 'Starlit soak'],
        tips: ['Layered clothing essential'],
      },
      {
        day: 5,
        title: 'Return to city glow',
        description: 'Brunch at design house, farewell massage, curated gifting.',
        activities: ['Design brunch', 'Massage', 'Gift curation'],
        tips: ['Airport concierge handles luggage'],
      },
    ],
  },
  {
    id: 'summit-pulse',
    title: 'Summit Pulse & Velvet Nights',
    durationDays: 6,
    season: 'Summer',
    audience: 'Adventure Friends',
    pace: 'Adventurous',
    summary: 'Chase sunrises on Mount Aragats, rappel canyon walls, dive into hot springs, and dance under open-sky jazz sets.',
    highlights: ['Aragats summit', 'Vorotan canyon rappel', 'Open-air jazz'],
    mapUrl: 'https://www.google.com/maps/d/embed?mid=1-summit-map',
    schedule: [
      {
        day: 1,
        title: 'City warm-up',
        description: 'Bike tour of Yerevan, private DJ rooftop set, gear fitting.',
        activities: ['Cycling', 'DJ session', 'Gear prep'],
        tips: ['Hydrate and stretch post-flight'],
      },
      {
        day: 2,
        title: 'Canyon adrenaline',
        description: 'Rappel volcanic cliffs, picnic by cascades, sunset yoga.',
        activities: ['Rappelling', 'Waterfall picnic', 'Yoga'],
        tips: ['Guided safety briefing included'],
      },
      {
        day: 3,
        title: 'Summit ascent',
        description: 'Early summit push with alpine guides, celebratory champagne breakfast.',
        activities: ['Summit trek', 'Glacier traverse', 'Summit celebration'],
        tips: ['All alpine gear provided'],
      },
      {
        day: 4,
        title: 'Crater lakes recovery',
        description: 'Mountain hut sauna, lake plunge, storytelling under the stars.',
        activities: ['Sauna', 'Lake swim', 'Story fire'],
        tips: ['Bring swimsuit and warm layers'],
      },
      {
        day: 5,
        title: 'Jazz nights',
        description: 'Return to Yerevan for open-air jazz festival with backstage passes.',
        activities: ['Jazz festival', 'Backstage meet', 'Night photography'],
        tips: ['Dress smart casual'],
      },
      {
        day: 6,
        title: 'Farewell & spa',
        description: 'Deep tissue massages, culinary farewell with experimental chefs.',
        activities: ['Massage', 'Chef’s table'],
        tips: ['Allergies accommodated with notice'],
      },
    ],
  },
]

export interface Experience {
  id: string
  title: string
  category: string
  description: string
  location: string
  season: string
  duration: string
  intensity: string
  media: {
    image: string
    video?: string
  }
  spots: number
  priceFrom: number
}

export const experiences: Experience[] = [
  {
    id: 'areni-barrel',
    title: 'Areni Amphora Winemaking Ritual',
    category: 'Culinary & Wine',
    description: 'Harvest grapes at dawn with fourth-generation vintners, blend amphora wines, and dine inside a candlelit cave.',
    location: 'Vayots Dzor',
    season: 'Autumn',
    duration: '6 hours',
    intensity: 'Leisurely',
    media: {
      image: 'https://images.unsplash.com/photo-1488485339565-566d63f7ca43?auto=format&fit=crop&w=1200&q=80',
    },
    spots: 12,
    priceFrom: 420,
  },
  {
    id: 'duduk-lullaby',
    title: 'Duduk Lullaby Masterclass',
    category: 'Art & Culture',
    description: 'Learn the evocative Armenian duduk from Grammy-nominated musicians inside a historic Yerevan studio.',
    location: 'Yerevan',
    season: 'Year-round',
    duration: '3 hours',
    intensity: 'Intimate',
    media: {
      image: 'https://images.unsplash.com/photo-1507836581345-15bcbeab1d69?auto=format&fit=crop&w=1200&q=80',
    },
    spots: 6,
    priceFrom: 280,
  },
  {
    id: 'lori-ridge',
    title: 'Lori Ridge Hot Air Dawn',
    category: 'Adventure',
    description: 'Ascend above Lori’s canyons at sunrise, sip mountain herbal infusions, and picnic on a floating deck.',
    location: 'Lori',
    season: 'Summer',
    duration: '4 hours',
    intensity: 'Moderate',
    media: {
      image: 'https://images.unsplash.com/photo-1444290452683-86d77c61e5f8?auto=format&fit=crop&w=1200&q=80',
    },
    spots: 10,
    priceFrom: 390,
  },
  {
    id: 'lavash-gastronomy',
    title: 'Lavash Gastronomy Atelier',
    category: 'Culinary & Wine',
    description: 'Bake UNESCO-listed lavash with village matriarchs, infuse it with wild herbs, and pair with natural wines.',
    location: 'Kotayk',
    season: 'Spring',
    duration: '5 hours',
    intensity: 'Leisurely',
    media: {
      image: 'https://images.unsplash.com/photo-1604908177070-0ac9f8d6ef74?auto=format&fit=crop&w=1200&q=80',
    },
    spots: 8,
    priceFrom: 210,
  },
  {
    id: 'goris-stargaze',
    title: 'Vorotan Stargazing & Sound Bath',
    category: 'Wellness',
    description: 'Meditate under a canopy of stars with crystal bowls tuned to ancient modes, followed by herbal tonics.',
    location: 'Syunik',
    season: 'Summer',
    duration: '5 hours',
    intensity: 'Restorative',
    media: {
      image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80',
    },
    spots: 14,
    priceFrom: 260,
  },
  {
    id: 'gyumri-atelier',
    title: 'Gyumri Artist Atelier Crawl',
    category: 'Art & Culture',
    description: 'Wander cobblestone streets, sketch with resident artists, and dine in a restored 19th-century townhouse.',
    location: 'Gyumri',
    season: 'Spring',
    duration: '7 hours',
    intensity: 'Leisurely',
    media: {
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    },
    spots: 16,
    priceFrom: 320,
  },
]

export const festivals = [
  {
    id: 'yerevan-jazz',
    name: 'Yerevan Jazz Nights',
    month: 'June',
    location: 'Yerevan Cascade',
    description: 'Open-air concerts blending jazz improv with Armenian folk instruments under summer skies.',
    theme: 'Music',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'areni-wine',
    name: 'Areni Wine Festival',
    month: 'October',
    location: 'Areni Village',
    description: 'Harvest celebration with amphora tastings, folk dances, and chef collaborations in caves.',
    theme: 'Wine',
    image: 'https://images.unsplash.com/photo-1543248939-ff40856f65d4?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'urvakan',
    name: 'Urvakan Contemporary Arts Week',
    month: 'May',
    location: 'Yerevan Industrial Quarter',
    description: 'Immersive sound, art, and performance festival reviving industrial spaces with global creators.',
    theme: 'Art',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'vartsakan',
    name: 'Vardavar Water Celebration',
    month: 'July',
    location: 'Nationwide',
    description: 'A joyous water festival dating back to pagan times, symbolizing purification and renewal.',
    theme: 'Culture',
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'snow-arts',
    name: 'Snow & Jazz Week',
    month: 'February',
    location: 'Tsaghkadzor',
    description: 'Ski by day, jazz and hot springs by night with international artists and Armenian virtuosos.',
    theme: 'Winter',
    image: 'https://images.unsplash.com/photo-1516569422535-2167c0fa8e87?auto=format&fit=crop&w=800&q=80',
  },
]

export const stories = [
  {
    id: 'story-ani',
    traveler: 'Elise & Marco',
    country: 'France',
    quote: 'Our bespoke wine residency in Areni felt like joining a family. We blended amphora wine that will age as long as our memories.',
    journey: 'Harvest & Heritage',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 'story-lucine',
    traveler: 'Narek & Astghik',
    country: 'USA · Armenia',
    quote: 'Returning to my grandparents’ village with Armenian Horizons felt like being handed the keys to our heritage—complete with music & maple syrup lavash.',
    journey: 'Diaspora Homecoming',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=200&q=80',
    rating: 5,
  },
  {
    id: 'story-leo',
    traveler: 'Saanvi & Rohan',
    country: 'India',
    quote: 'We meditated inside rock-cut chapels, rafted the Debed gorge, and danced to Duduk remixes. Each day felt curated for our energy.',
    journey: 'Adventure & Mindfulness',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 4.8,
  },
  {
    id: 'story-lucia',
    traveler: 'Lucia & Diego',
    country: 'Argentina',
    quote: 'Our anniversary dinner in a canyon cave with a private folk quartet remains the most cinematic moment of our lives.',
    journey: 'Celebration Journey',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    rating: 4.9,
  },
]

export const planners = {
  generateRecommendation: (request: CustomPlanRequest) => {
    const highlightMatches = itineraries
      .flatMap((itinerary) => itinerary.highlights)
      .filter((highlight) => request.preferences.some((preference) => highlight.toLowerCase().includes(preference.split(' ')[0].toLowerCase())))

    return {
      title: `${request.preferences[0] || 'Signature'} voyage · ${request.travelWindow}`,
      summary:
        'We will layer heritage encounters, culinary artisans, and design-led stays to mirror your travel energy. Expect daily moments of spontaneity guided by our expert hosts.',
      highlights: highlightMatches.slice(0, 4),
      nextSteps: [
        'Schedule a 30-minute discovery call with your travel architect',
        'Confirm guest list and any celebrations or milestones',
        'Select preferred accommodation style and concierge add-ons',
      ],
    }
  },
}

export interface CustomPlanRequest {
  name: string
  email: string
  travelWindow: string
  preferences: string[]
  message?: string
}
