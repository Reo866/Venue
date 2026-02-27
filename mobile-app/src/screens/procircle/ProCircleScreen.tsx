import React from 'react';
import { Text, View } from 'react-native';
import { CustomButton } from '../../components/CustomButton';

export const ProCircleScreen = () => (
  <View style={{ padding: 16 }}>
    <Text style={{ fontSize: 20, fontWeight: '700' }}>Pro Circle</Text>
    <Text>Özel mekanlara erişim, hızlı rezervasyon ve premium eşleştirme.</Text>
    <CustomButton title="Pro Circle'a Başvur" onPress={() => undefined} />
  </View>
);
