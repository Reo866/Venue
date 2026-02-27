import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { CustomButton } from '../../components/CustomButton';
import { useOnboarding } from '../../context/OnboardingContext';

export const OnboardingScreen = ({ navigation }: any) => {
  const { update } = useOnboarding();
  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: '700' }}>Venue'a Hoş Geldin</Text>
      <Text>Açılış: Sosyal deneyimini kişiselleştir.</Text>
      <CustomButton title="Ziyaretçi olarak devam et" onPress={() => update({ rol: 'Ziyaretçi' })} />
      <CustomButton title="Local olarak devam et" onPress={() => update({ rol: 'Local' })} />
      <CustomButton title="Mood: Relax" onPress={() => update({ mood: 'Relax' })} />
      <CustomButton title="Mood: Party" onPress={() => update({ mood: 'Party' })} />
      <CustomButton title="Bütçe: 500-1500 ₺" onPress={() => update({ budget: '500-1500' })} />
      <CustomButton title="Ziyaret süresi: 3 gün" onPress={() => update({ sure: '3 gün' })} />
      <CustomButton title="İlgi: Gastronomi" onPress={() => update({ ilgiAlanlari: ['Gastronomi'] })} />
      <View style={{ marginTop: 16 }}>
        <CustomButton title="Devam Et" onPress={() => navigation.replace('MainTabs')} />
      </View>
    </ScrollView>
  );
};
