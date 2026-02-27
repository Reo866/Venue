import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DiscoverScreen } from '../screens/discover/DiscoverScreen';
import { EventsScreen } from '../screens/events/EventsScreen';
import { ExperiencesScreen } from '../screens/experiences/ExperiencesScreen';
import { MessagingScreen } from '../screens/messaging/MessagingScreen';
import { OnboardingScreen } from '../screens/onboarding/OnboardingScreen';
import { ProCircleScreen } from '../screens/procircle/ProCircleScreen';
import { ProfileScreen } from '../screens/profile/ProfileScreen';
import { WalletScreen } from '../screens/payments/WalletScreen';

const RootStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const DiscoverStack = () => <Stack.Navigator><Stack.Screen name="DiscoverHome" component={DiscoverScreen} options={{ title: 'Keşfet' }} /></Stack.Navigator>;
const ExperiencesStack = () => <Stack.Navigator><Stack.Screen name="ExperiencesHome" component={ExperiencesScreen} options={{ title: 'Deneyimler' }} /></Stack.Navigator>;
const EventsStack = () => <Stack.Navigator><Stack.Screen name="EventsHome" component={EventsScreen} options={{ title: 'Etkinlikler' }} /></Stack.Navigator>;
const ProCircleStack = () => <Stack.Navigator><Stack.Screen name="ProCircleHome" component={ProCircleScreen} options={{ title: 'Pro Circle' }} /></Stack.Navigator>;
const ProfileStack = () => <Stack.Navigator><Stack.Screen name="ProfileHome" component={ProfileScreen} options={{ title: 'Profil' }} /><Stack.Screen name="Wallet" component={WalletScreen} options={{ title: 'Cüzdan' }} /></Stack.Navigator>;
const MessagingStack = () => <Stack.Navigator><Stack.Screen name="MessagingHome" component={MessagingScreen} options={{ title: 'Mesajlar' }} /></Stack.Navigator>;

const MainTabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="DiscoverStack" component={DiscoverStack} options={{ title: 'Keşfet' }} />
    <Tab.Screen name="ExperiencesStack" component={ExperiencesStack} options={{ title: 'Deneyimler' }} />
    <Tab.Screen name="EventsStack" component={EventsStack} options={{ title: 'Etkinlikler' }} />
    <Tab.Screen name="MessagingStack" component={MessagingStack} options={{ title: 'Mesajlar' }} />
    <Tab.Screen name="ProCircleStack" component={ProCircleStack} options={{ title: 'Pro Circle' }} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} options={{ title: 'Profil' }} />
  </Tab.Navigator>
);

export const AppNavigator = () => (
  <RootStack.Navigator screenOptions={{ headerShown: false }}>
    <RootStack.Screen name="OnboardingStack" component={OnboardingScreen} />
    <RootStack.Screen name="MainTabs" component={MainTabNavigator} />
  </RootStack.Navigator>
);
