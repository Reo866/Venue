import { fakerTR as faker } from '@faker-js/faker';
import { writeFileSync } from 'node:fs';

const cities = ['Lefkoşa', 'Girne', 'Gazimağusa', 'Güzelyurt', 'İskele'];
const moods = ['Relax', 'Party', 'Network', 'Explore'];

const users = Array.from({ length: 10000 }, (_, i) => ({
  id: faker.string.uuid(),
  isim: faker.person.fullName(),
  email: faker.internet.email(),
  telefon: faker.phone.number('+90 5## ### ## ##'),
  rol: i % 2 === 0 ? 'local' : 'visitor',
  moodPreferences: faker.helpers.arrayElements(moods, { min: 1, max: 3 }),
  budgetRange: faker.helpers.arrayElement(['0-500', '500-1500', '1500-5000']),
  interests: faker.helpers.arrayElements(['Gastronomi', 'Müzik', 'Doğa', 'Sanat', 'Spor'], { min: 1, max: 4 }),
  profilePhoto: faker.image.avatar(),
  verifiedLevel: faker.helpers.arrayElement(['none', 'phone', 'photo', 'full']),
  location: faker.helpers.arrayElement(cities)
}));

const venues = Array.from({ length: 2000 }, () => ({
  id: faker.string.uuid(),
  name: `${faker.helpers.arrayElement(cities)} ${faker.company.buzzNoun()}`,
  locationCoordinates: { lat: 35 + Math.random(), lng: 33 + Math.random() },
  category: faker.helpers.arrayElement(['Kafe', 'Restoran', 'Bar', 'Plaj', 'Müze']),
  rating: Number(faker.number.float({ min: 3.4, max: 5, precision: 0.1 }).toFixed(1)),
  reviewsCount: faker.number.int({ min: 20, max: 1200 }),
  activeEvents: faker.number.int({ min: 0, max: 12 }),
  images: [faker.image.url(), faker.image.url()]
}));

const experiences = Array.from({ length: 1000 }, () => ({
  id: faker.string.uuid(),
  title: faker.helpers.arrayElement(['Sahil Yoga', 'Tarih Turu', 'Gece Kulübü Rotası', 'Kıbrıs Mutfağı Atölyesi']),
  description: faker.lorem.paragraph(),
  price: faker.number.int({ min: 250, max: 5000 }),
  startTime: faker.date.soon().toISOString(),
  endTime: faker.date.soon({ days: 10 }).toISOString(),
  capacity: faker.number.int({ min: 10, max: 80 }),
  hostUserId: faker.helpers.arrayElement(users).id,
  participants: faker.helpers.arrayElements(users, { min: 5, max: 30 }).map((u) => u.id)
}));

const events = Array.from({ length: 800 }, () => ({
  id: faker.string.uuid(),
  title: faker.helpers.arrayElement(['DJ Gecesi', 'Açık Hava Sineması', 'Networking Brunch']),
  category: faker.helpers.arrayElement(moods),
  startDate: faker.date.soon().toISOString(),
  endDate: faker.date.soon({ days: 20 }).toISOString(),
  price: faker.number.int({ min: 100, max: 3000 }),
  venueId: faker.helpers.arrayElement(venues).id,
  attendees: faker.helpers.arrayElements(users, { min: 20, max: 200 }).map((u) => u.id)
}));

const procircle = Array.from({ length: 1500 }, () => ({
  id: faker.string.uuid(),
  userId: faker.helpers.arrayElement(users).id,
  membershipType: faker.helpers.arrayElement(['Silver', 'Gold', 'Platinum']),
  expiryDate: faker.date.future().toISOString().split('T')[0]
}));

const reviews = Array.from({ length: 50000 }, () => ({
  id: faker.string.uuid(),
  userId: faker.helpers.arrayElement(users).id,
  venueId: faker.helpers.arrayElement(venues).id,
  rating: faker.number.int({ min: 1, max: 5 }),
  comment: faker.lorem.sentence()
}));

const messages = Array.from({ length: 100000 }, () => ({
  id: faker.string.uuid(),
  threadId: faker.string.uuid(),
  senderId: faker.helpers.arrayElement(users).id,
  messageBody: faker.lorem.sentence(),
  timestamp: faker.date.recent().toISOString()
}));

const payload = { users, venues, experiences, events, procircle, reviews, messages };
writeFileSync('seed-data.json', JSON.stringify(payload));
console.log('Seed verisi üretildi: seed-data.json');
