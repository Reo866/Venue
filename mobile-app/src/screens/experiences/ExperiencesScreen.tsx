import React from 'react';
import { FlatList, View } from 'react-native';
import { ExperienceCard } from '../../components/ExperienceCard';

const experiences = [{ id: '1', title: 'Kıbrıs Kahve Atölyesi', description: '', price: 450, aktifKatilimci: 12 }];

export const ExperiencesScreen = () => (
  <View style={{ flex: 1, padding: 16 }}>
    <FlatList data={experiences} renderItem={({ item }) => <ExperienceCard item={item} />} />
  </View>
);
