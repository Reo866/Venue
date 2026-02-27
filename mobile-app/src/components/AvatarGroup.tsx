import React from 'react';
import { Text, View } from 'react-native';

export const AvatarGroup = ({ names }: { names: string[] }) => (
  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    {names.slice(0, 3).map((name) => (
      <View key={name} style={{ width: 28, height: 28, borderRadius: 14, backgroundColor: '#E2E8F0', marginRight: -6, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{name[0]}</Text>
      </View>
    ))}
  </View>
);
