const API_URL = process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:4000';

export const fetchDiscover = async (lat: number, lng: number) => {
  const response = await fetch(`${API_URL}/discover/venues?lat=${lat}&lng=${lng}`);
  return response.json();
};
