import React, { useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { FilterPanel } from '../../components/FilterPanel';
import { SearchBar } from '../../components/SearchBar';
import { StoryCarousel } from '../../components/StoryCarousel';
import { VenueCard } from '../../components/VenueCard';

const venues = [
  { id: '1', name: 'Girne Marina', rating: 4.8, category: 'Sahil' },
  { id: '2', name: 'Lefkoşa Sokak Lezzetleri', rating: 4.6, category: 'Yeme-İçme' }
];

export const DiscoverScreen = () => {
  const [query, setQuery] = useState('');
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: '700' }}>Keşfet</Text>
      <SearchBar value={query} onChangeText={setQuery} />
      <FilterPanel />
      <StoryCarousel />
      <FlatList data={venues.filter((v) => v.name.toLowerCase().includes(query.toLowerCase()))} renderItem={({ item }) => <VenueCard item={item} />} />
    </View>
  );
};
