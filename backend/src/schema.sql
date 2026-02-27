CREATE TABLE users (
  id UUID PRIMARY KEY,
  isim VARCHAR(120) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  telefon VARCHAR(20) UNIQUE NOT NULL,
  rol VARCHAR(20) NOT NULL CHECK (rol IN ('visitor','local','admin')),
  mood_preferences TEXT[] NOT NULL DEFAULT '{}',
  budget_range VARCHAR(40) NOT NULL,
  interests TEXT[] NOT NULL DEFAULT '{}',
  profile_photo TEXT,
  verified_level VARCHAR(20) NOT NULL DEFAULT 'none',
  location TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE venues (
  id UUID PRIMARY KEY,
  name VARCHAR(180) NOT NULL,
  location_coordinates JSONB NOT NULL,
  category VARCHAR(80) NOT NULL,
  rating NUMERIC(2,1) DEFAULT 0,
  reviews_count INTEGER DEFAULT 0,
  active_events INTEGER DEFAULT 0,
  images TEXT[] DEFAULT '{}'
);

CREATE TABLE experiences (
  id UUID PRIMARY KEY,
  title VARCHAR(180) NOT NULL,
  description TEXT NOT NULL,
  price NUMERIC(12,2) NOT NULL,
  start_time TIMESTAMP NOT NULL,
  end_time TIMESTAMP NOT NULL,
  capacity INTEGER NOT NULL,
  host_user_id UUID REFERENCES users(id),
  participants UUID[] DEFAULT '{}'
);

CREATE TABLE events (
  id UUID PRIMARY KEY,
  title VARCHAR(180) NOT NULL,
  category VARCHAR(80) NOT NULL,
  start_date TIMESTAMP NOT NULL,
  end_date TIMESTAMP NOT NULL,
  price NUMERIC(12,2) NOT NULL,
  venue_id UUID REFERENCES venues(id),
  attendees UUID[] DEFAULT '{}'
);

CREATE TABLE procircle_members (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  membership_type VARCHAR(40) NOT NULL,
  expiry_date DATE NOT NULL
);

CREATE TABLE messages (
  id UUID PRIMARY KEY,
  thread_id UUID NOT NULL,
  sender_id UUID REFERENCES users(id),
  message_body TEXT NOT NULL,
  timestamp TIMESTAMP DEFAULT NOW()
);

CREATE TABLE payments (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  amount NUMERIC(12,2) NOT NULL,
  experience_id UUID REFERENCES experiences(id),
  status VARCHAR(20) NOT NULL
);
