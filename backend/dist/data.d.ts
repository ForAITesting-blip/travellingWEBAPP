export declare const hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    media: {
        type: "video";
        url: string;
        thumbnail: string;
    };
};
export interface Destination {
    id: string;
    name: string;
    region: string;
    description: string;
    highlights: string[];
    seasons: string[];
    activities: string[];
    image: string;
    gallery: string[];
    coordinates: [number, number];
    difficulty: 'Easy' | 'Moderate' | 'Challenging';
    duration: string;
    rating: number;
    tags: string[];
}
export declare const destinations: Destination[];
export interface Itinerary {
    id: string;
    title: string;
    durationDays: number;
    season: string;
    audience: string;
    pace: 'Relaxed' | 'Balanced' | 'Adventurous';
    summary: string;
    highlights: string[];
    mapUrl: string;
    schedule: Array<{
        day: number;
        title: string;
        description: string;
        activities: string[];
        tips: string[];
    }>;
}
export declare const itineraries: Itinerary[];
export interface Experience {
    id: string;
    title: string;
    category: string;
    description: string;
    location: string;
    season: string;
    duration: string;
    intensity: string;
    media: {
        image: string;
        video?: string;
    };
    spots: number;
    priceFrom: number;
}
export declare const experiences: Experience[];
export declare const festivals: {
    id: string;
    name: string;
    month: string;
    location: string;
    description: string;
    theme: string;
    image: string;
}[];
export declare const stories: {
    id: string;
    traveler: string;
    country: string;
    quote: string;
    journey: string;
    image: string;
    rating: number;
}[];
export declare const planners: {
    generateRecommendation: (request: CustomPlanRequest) => {
        title: string;
        summary: string;
        highlights: string[];
        nextSteps: string[];
    };
};
export interface CustomPlanRequest {
    name: string;
    email: string;
    travelWindow: string;
    preferences: string[];
    message?: string;
}
//# sourceMappingURL=data.d.ts.map