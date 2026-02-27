import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export const StoryCarousel = () => (
  <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {['Yeni Deneyim', 'Bugün Etkinlik', 'Pro Circle'].map((label) => (
      <View key={label} style={{ width: 110, height: 110, backgroundColor: '#DBEAFE', marginRight: 8, borderRadius: 12, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{label}</Text>
      </View>
    ))}
  </ScrollView>
);
