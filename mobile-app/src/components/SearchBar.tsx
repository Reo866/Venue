import React from 'react';
import { TextInput } from 'react-native';

export const SearchBar = ({ value, onChangeText }: { value: string; onChangeText: (v: string) => void }) => (
  <TextInput
    placeholder="Mekan, deneyim veya etkinlik ara"
    value={value}
    onChangeText={onChangeText}
    style={{ backgroundColor: '#fff', padding: 12, borderRadius: 10, marginBottom: 10 }}
  />
);
