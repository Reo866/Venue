import React from 'react';
import { Text, View } from 'react-native';

export const ChatMessageBubble = ({ mine, text }: { mine: boolean; text: string }) => (
  <View style={{ alignSelf: mine ? 'flex-end' : 'flex-start', backgroundColor: mine ? '#0EA5E9' : '#E2E8F0', padding: 10, borderRadius: 10, marginVertical: 4 }}>
    <Text style={{ color: mine ? '#fff' : '#0F172A' }}>{text}</Text>
  </View>
);
