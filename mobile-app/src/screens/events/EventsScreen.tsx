import React from 'react';
import { FlatList, View } from 'react-native';
import { EventCard } from '../../components/EventCard';

const events = [{ id: '1', title: 'Kaleiçi Caz Akşamı', category: 'Müzik', date: 'Cuma 21:00', price: 900 }];

export const EventsScreen = () => (
  <View style={{ flex: 1, padding: 16 }}>
    <FlatList data={events} renderItem={({ item }) => <EventCard item={item} />} />
  </View>
);
