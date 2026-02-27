import * as Notifications from 'expo-notifications';

export const registerPushNotifications = async () => {
  const permission = await Notifications.requestPermissionsAsync();
  if (!permission.granted) return null;
  return Notifications.getExpoPushTokenAsync();
};

export const sendLocalSuggestionNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: { title: 'Yeni deneyim önerisi', body: 'Mood tercihine göre yeni bir deneyim bulundu.' },
    trigger: null
  });
};
