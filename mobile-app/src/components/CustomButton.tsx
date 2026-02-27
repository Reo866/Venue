import React from 'react';
import { Pressable, Text } from 'react-native';

export const CustomButton = ({ title, onPress }: { title: string; onPress: () => void }) => (
  <Pressable onPress={onPress} style={{ backgroundColor: '#0EA5E9', padding: 14, borderRadius: 12, marginVertical: 6 }}>
    <Text style={{ color: '#fff', textAlign: 'center', fontWeight: '700' }}>{title}</Text>
  </Pressable>
);
