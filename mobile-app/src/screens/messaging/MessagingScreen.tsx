import React from 'react';
import { ScrollView, View } from 'react-native';
import { ChatMessageBubble } from '../../components/ChatMessageBubble';

export const MessagingScreen = () => (
  <ScrollView contentContainerStyle={{ padding: 16 }}>
    <ChatMessageBubble mine={false} text="Merhaba! Bu akşam etkinliğe geliyor musun?" />
    <ChatMessageBubble mine={true} text="Evet, 20:30 gibi oradayım." />
    <ChatMessageBubble mine={false} text="Harika, görüşürüz!" />
    <View style={{ height: 16 }} />
  </ScrollView>
);
