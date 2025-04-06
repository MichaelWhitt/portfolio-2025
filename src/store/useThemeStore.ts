import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface ThemeState {
  reducedMotion: boolean;
  fontSize: 'normal' | 'large' | 'x-large';
  highContrast: boolean;
  toggleReducedMotion: () => void;
  setFontSize: (size: 'normal' | 'large' | 'x-large') => void;
  toggleHighContrast: () => void;
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      reducedMotion: false,
      fontSize: 'normal',
      highContrast: false,
      toggleReducedMotion: () => set((state) => ({ reducedMotion: !state.reducedMotion })),
      setFontSize: (fontSize) => set({ fontSize }),
      toggleHighContrast: () => set((state) => ({ highContrast: !state.highContrast })),
    }),
    {
      name: 'theme-storage',
    }
  )
);