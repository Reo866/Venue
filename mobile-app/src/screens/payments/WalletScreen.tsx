import React from 'react';
import { Text, View } from 'react-native';
import { CustomButton } from '../../components/CustomButton';

export const WalletScreen = () => (
  <View style={{ padding: 16 }}>
    <Text style={{ fontSize: 20, fontWeight: '700' }}>Cüzdan & Ödemeler</Text>
    <Text>Seçilen deneyim için güvenli ödeme ekranı.</Text>
    <CustomButton title="Ödemeyi Tamamla" onPress={() => undefined} />
  </View>
);
