import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface OnboardingState {
  rol?: 'Ziyaretçi' | 'Local';
  mood?: string;
  budget?: string;
  sure?: string;
  ilgiAlanlari: string[];
}

const defaultState: OnboardingState = { ilgiAlanlari: [] };

const Context = createContext<{ state: OnboardingState; update: (patch: Partial<OnboardingState>) => void }>({
  state: defaultState,
  update: () => undefined
});

export const OnboardingProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<OnboardingState>(defaultState);

  useEffect(() => {
    AsyncStorage.getItem('onboarding').then((raw) => raw && setState(JSON.parse(raw)));
  }, []);

  const update = (patch: Partial<OnboardingState>) => {
    const next = { ...state, ...patch };
    setState(next);
    AsyncStorage.setItem('onboarding', JSON.stringify(next));
  };

  return <Context.Provider value={{ state, update }}>{children}</Context.Provider>;
};

export const useOnboarding = () => useContext(Context);
