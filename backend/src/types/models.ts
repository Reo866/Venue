export interface User {
  id: string;
  isim: string;
  email: string;
  telefon: string;
  rol: 'visitor' | 'local' | 'admin';
  moodPreferences: string[];
  budgetRange: string;
  interests: string[];
  profilePhoto?: string;
  verifiedLevel: 'none' | 'phone' | 'photo' | 'full';
  location?: string;
}

export interface Experience {
  id: string;
  title: string;
  description: string;
  price: number;
  startTime: string;
  endTime: string;
  capacity: number;
  hostUserId: string;
  participants: string[];
}

export interface Venue {
  id: string;
  name: string;
  locationCoordinates: { lat: number; lng: number };
  category: string;
  rating: number;
  reviewsCount: number;
  activeEvents: number;
  images: string[];
}

export interface Event {
  id: string;
  title: string;
  category: string;
  startDate: string;
  endDate: string;
  price: number;
  venueId: string;
  attendees: string[];
}
