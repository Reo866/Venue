import React from 'react';
import { Text, View } from 'react-native';
import { Event } from '../types';

export const EventCard = ({ item }: { item: Event }) => (
  <View style={{ backgroundColor: '#fff', padding: 12, borderRadius: 10, marginBottom: 10 }}>
    <Text>{item.title}</Text><Text>{item.date}</Text><Text>{item.price} ₺</Text>
  </View>
);
