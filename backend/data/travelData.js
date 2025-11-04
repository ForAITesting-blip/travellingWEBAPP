export const destinations = [
  {
    id: 'yerevan-serenade',
    name: 'Nocturnal Yerevan Serenade',
    region: 'Yerevan',
    category: 'culture',
    shortDescription: 'Jazz cellars, Soviet modernism walks, and rooftop wine tastings across the pink city.',
    description:
      'Immerse in Yerevan’s rhythm with a curator who blends hidden jazz clubs, modern art dens, and sun-drenched fruit markets.',
    highlights: [
      'Private late-night jazz quartet',
      'Soviet modernism walking salon',
      'Brandy tasting at Ararat cellar',
    ],
    bestSeasons: ['Spring', 'Autumn', 'Winter'],
    duration: '2 nights',
    coverImage:
      'https://images.unsplash.com/photo-1528728935500-902c4ce2435f?q=80&w=1974&auto=format&fit=crop',
    coordinates: { lat: 40.1792, lng: 44.4991 },
  },
  {
    id: 'tatev-celestial',
    name: 'Celestial Tatev Passage',
    region: 'Tatev',
    category: 'adventure',
    shortDescription: 'Sky tram into canyon monasteries with dawn liturgy and canyon hikes.',
    description:
      'Hover above Vorotan canyon on the Wings of Tatev, explore medieval monasteries, and hike secret hermit trails with a monk-historian.',
    highlights: [
      'Wings of Tatev sunrise charter',
      'Hermit cave meditation',
      'Canyon wine picnic',
    ],
    bestSeasons: ['Spring', 'Summer', 'Autumn'],
    duration: '3 days',
    coverImage:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=2070&auto=format&fit=crop',
    coordinates: { lat: 39.3801, lng: 46.2419 },
  },
  {
    id: 'dilijan-forest',
    name: 'Dilijan Forest Atelier',
    region: 'Dilijan',
    category: 'wellness',
    shortDescription: 'Slow mornings in misty forests with artist residencies and herbal rituals.',
    description:
      'Stay in a design-forward cabin, learn wood marquetry from artisans, and join herbal distillers to craft your own tonics.',
    highlights: ['Forest bathing ritual', 'Art residency workshop', 'Mountain tea infusion lab'],
    bestSeasons: ['Summer', 'Autumn'],
    duration: '4 days',
    coverImage:
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=2070&auto=format&fit=crop',
    coordinates: { lat: 40.7442, lng: 44.8635 },
  },
  {
    id: 'sevan-azure',
    name: 'Sevan Azure Odyssey',
    region: 'Lake Sevan',
    category: 'nature',
    shortDescription: 'Sapphire lake cruises, peninsula monasteries, and lavash baking at dawn.',
    description:
      'Charter boats across Lake Sevan, taste endemic crayfish delicacies, and witness rituals at Sevanavank peninsula.',
    highlights: ['Fisherman-led dawn cruise', 'Noratus khachkar masterclass', 'Lavash bakery sunrise'],
    bestSeasons: ['Summer', 'Autumn'],
    duration: '2 days',
    coverImage:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2070&auto=format&fit=crop',
    coordinates: { lat: 40.3384, lng: 45.1103 },
  },
  {
    id: 'gyumri-crafts',
    name: 'Gyumri Artisan Revival',
    region: 'Gyumri',
    category: 'culinary',
    shortDescription: 'Clay masterclasses, blacksmith studios, and experimental tandoor feasts.',
    description:
      'Dive into workshops with Gyumri’s craft renaissance movement, culminating in a collaborative supper underneath ironwork vaults.',
    highlights: ['Pottery with Havlabar masters', 'Blacksmith forging experience', 'Closed-door supper club'],
    bestSeasons: ['Spring', 'Autumn', 'Winter'],
    duration: '3 days',
    coverImage:
      'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=2070&auto=format&fit=crop',
    coordinates: { lat: 40.7895, lng: 43.8476 },
  },
  {
    id: 'ararat-vineyards',
    name: 'Ararat Valley Vineyard Circuit',
    region: 'Ararat Valley',
    category: 'culinary',
    shortDescription: 'Boutique vineyard stays, grape heritage labs, and cathedral vistas.',
    description:
      'Trace the lineage of Areni grapes with oenologists, craft blends in clay amphorae, and dine with a view of Biblical Mount Ararat.',
    highlights: ['Amphora wine blending', 'UNESCO Echmiadzin liturgy', 'Farm-to-table brunch'],
    bestSeasons: ['Spring', 'Autumn'],
    duration: '2 days',
    coverImage:
      'https://images.unsplash.com/photo-1519678256455-71a1f9c8d0e7?q=80&w=2070&auto=format&fit=crop',
    coordinates: { lat: 39.85575, lng: 44.565 },
  },
]

export const experiences = [
  {
    id: 'lavash-rituals',
    title: 'Lavash Rituals & Ancestral Baking',
    focus: 'food',
    description:
      'Step inside a village tonir to bake UNESCO-listed lavash with matriarchs, pairing it with artisanal cheeses and thyme honey.',
    duration: 'Half day',
    intensity: 'relaxed',
    images: [
      'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?q=80&w=1974&auto=format&fit=crop',
    ],
    location: 'Aragatsotn province',
    seasonTips: 'Best during spring lambing season when fresh herbs elevate the table.',
  },
  {
    id: 'cosmic-observatory',
    title: 'Byurakan Cosmic Observatory Sleepover',
    focus: 'outdoor',
    description:
      'Spend the night with astronomers decoding cosmic signals, followed by sunrise yoga on the plateau.',
    duration: 'Overnight',
    intensity: 'moderate',
    images: [
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1974&auto=format&fit=crop',
    ],
    location: 'Byurakan Astrophysical Observatory',
    seasonTips: 'Prime visibility from August to October during meteor showers.',
  },
  {
    id: 'khachkar-craft',
    title: 'Khachkar Stone Carving Atelier',
    focus: 'heritage',
    description:
      'Shape volcanic tuff with a master artisan, understanding symbology and blessings etched into each cross-stone.',
    duration: '3 hours',
    intensity: 'active',
    images: [
      'https://images.unsplash.com/photo-1521293281845-9ffb6837ef80?q=80&w=1974&auto=format&fit=crop',
    ],
    location: 'Noratus',
    seasonTips: 'Combine with Lake Sevan sunrise sail between May and September.',
  },
  {
    id: 'apricot-sonatas',
    title: 'Apricot Sonatas in Vernissage',
    focus: 'crafts',
    description:
      'Join luthiers crafting duduk instruments, then record a bespoke melody with a Grammy-nominated maestro.',
    duration: 'Half day',
    intensity: 'relaxed',
    images: [
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1180&auto=format&fit=crop',
    ],
    location: 'Yerevan Vernissage',
    seasonTips: 'Pairs beautifully with evening jazz sets year-round.',
  },
]

export const itineraries = [
  {
    id: 'aurora-signature',
    title: 'Aurora Signature Circuit',
    theme: 'culture',
    durationDays: 7,
    difficulty: 'moderate',
    bestFor: ['couples', 'culture seekers', 'design lovers'],
    heroImage:
      'https://images.unsplash.com/photo-1509927083120-c4c25162c879?q=80&w=1974&auto=format&fit=crop',
    route: ['Yerevan', 'Areni', 'Dilijan', 'Lake Sevan', 'Tatev'],
    overview:
      'Dive into Armenian arts, wine, and mountain monasteries with curated access and culinary storytelling.',
    dayByDay: [
      {
        day: 1,
        title: 'Pink city prologue',
        summary: 'Private modernism walk, rooftop tasting, Armenian jazz club.',
        activities: ['Modernism architecture tour', 'Brandy masterclass', 'Late-night jazz speakeasy'],
        travelTime: 'Minimal transfers',
      },
      {
        day: 2,
        title: 'Wine archaeology',
        summary: 'Areni cave visit with archaeologist, amphora blending, organic feast.',
        activities: ['Visit Areni-1 cave', 'Blend Areni varietals', 'Supper in vineyard'],
        travelTime: '2.5h driving',
      },
      {
        day: 3,
        title: 'Forest ateliers',
        summary: 'Dilijan artist residency, herbal infusion lab, acoustic recital.',
        activities: ['Forest bathing', 'Herbal tonic workshop', 'Chamber music night'],
      },
      {
        day: 4,
        title: 'Sevan sunrise ritual',
        summary: 'Lake sail, Noratus khachkar carving, lakeside brunch.',
        activities: ['Sunrise sail', 'Khachkar workshop', 'Crayfish degustation'],
      },
      {
        day: 5,
        title: 'Tatev ascension',
        summary: 'Wings of Tatev charter, cave meditation, canyon wine picnic.',
        activities: ['Dawn tram ride', 'Cave meditation', 'Picnic with local vintner'],
      },
      {
        day: 6,
        title: 'Megeri craft guilds',
        summary: 'Gyumri artisan revival tour, ironwork dinner.',
        activities: ['Pottery workshop', 'Blacksmith forging', 'Private supper club'],
      },
      {
        day: 7,
        title: 'Farewell crescendo',
        summary: 'Sound-healing session, gourmet farewell brunch, transfer.',
        activities: ['Sound bath', 'Farewell brunch', 'Airport transfer'],
      },
    ],
  },
  {
    id: 'volcanic-vistas',
    title: 'Volcanic Vistas Trail',
    theme: 'outdoor',
    durationDays: 6,
    difficulty: 'challenging',
    bestFor: ['friends', 'active explorers'],
    heroImage:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?q=80&w=1974&auto=format&fit=crop',
    route: ['Mount Aragats', 'Amberd', 'Azhdahak', 'Dilijan'],
    overview:
      'Summit volcano craters, glacier-fed lakes, and hidden mountain shelters guided by high-altitude experts.',
    dayByDay: [
      {
        day: 1,
        title: 'Aragats acclimatise',
        summary: 'Arrive in base village, evening acclimatisation hike.',
        activities: ['Base camp briefing', 'Sunset acclimatisation walk'],
      },
      {
        day: 2,
        title: 'Four peaks challenge',
        summary: 'Summit southern and western peaks, glacier picnic.',
        activities: ['Summit hike', 'Glacier picnic', 'Star-lit camp'],
      },
      {
        day: 3,
        title: 'Amberd fortress descent',
        summary: 'Trail run to Amberd fortress, fortress storytelling.',
        activities: ['Trail descent', 'Fortress tour', 'Campfire dinner'],
      },
      {
        day: 4,
        title: 'Azhdahak crater lake',
        summary: 'Climb Azhdahak, swim in crater lake, drone photography.',
        activities: ['Summit climb', 'Crater swim', 'Drone workshop'],
      },
      {
        day: 5,
        title: 'Dilijan forest flow',
        summary: 'Mountain biking through national park, craft beer tasting.',
        activities: ['Mountain biking', 'Craft beer tasting', 'Forest cabin stay'],
      },
      {
        day: 6,
        title: 'Cooldown springs',
        summary: 'Thermal spring recovery, closing feast.',
        activities: ['Thermal springs', 'Massage therapy', 'Closing feast'],
      },
    ],
  },
  {
    id: 'family-mosaic',
    title: 'Family Mosaic Quest',
    theme: 'family',
    durationDays: 5,
    difficulty: 'easy',
    bestFor: ['families', 'multi-generational'],
    heroImage:
      'https://images.unsplash.com/photo-1558981375-14145117e8ec?q=80&w=1974&auto=format&fit=crop',
    route: ['Yerevan', 'Geghard', 'Garni', 'Sevan'],
    overview:
      'Myth-making adventures for curious families featuring chocolate alchemy, canyon concerts, and wildlife encounters.',
    dayByDay: [
      {
        day: 1,
        title: 'Yerevan storybook',
        summary: 'Interactive city quest with augmented reality clues.',
        activities: ['City treasure hunt', 'Chocolate lab', 'Evening puppet theatre'],
      },
      {
        day: 2,
        title: 'Symphony in stone',
        summary: 'Garni temple sound bath, gorge jeep ride.',
        activities: ['Sound bath', 'Jeep ride', 'Master potter workshop'],
      },
      {
        day: 3,
        title: 'Geghard echoes',
        summary: 'Monastery chant class, medieval costume dress-up.',
        activities: ['Chant class', 'Costume portraits', 'Honey tasting'],
      },
      {
        day: 4,
        title: 'Lake legends',
        summary: 'Sevan kayaking, folklore storytelling by fire.',
        activities: ['Kayaking', 'Folklore storytelling', 'Lavash making'],
      },
      {
        day: 5,
        title: 'Farewell market',
        summary: 'Farmer’s market challenge, family recipe swap.',
        activities: ['Market challenge', 'Recipe swap', 'Farewell brunch'],
      },
    ],
  },
]
