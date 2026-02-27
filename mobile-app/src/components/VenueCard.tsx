import React from 'react';
import { Text, View } from 'react-native';
import { Venue } from '../types';

export const VenueCard = ({ item }: { item: Venue }) => (
  <View style={{ backgroundColor: '#fff', padding: 12, borderRadius: 10, marginBottom: 10 }}>
    <Text>{item.name}</Text><Text>{item.category}</Text><Text>Puan: {item.rating}</Text>
  </View>
);
