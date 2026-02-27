import React from 'react';
import { Text, View } from 'react-native';
import { Experience } from '../types';

export const ExperienceCard = ({ item }: { item: Experience }) => (
  <View style={{ backgroundColor: '#fff', padding: 12, borderRadius: 10, marginBottom: 10 }}>
    <Text>{item.title}</Text><Text>{item.price} ₺</Text><Text>Aktif katılımcı: {item.aktifKatilimci}</Text>
  </View>
);
