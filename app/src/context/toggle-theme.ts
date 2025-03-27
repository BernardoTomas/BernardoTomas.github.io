import { createContext } from 'react';

type ThemeContextType = {
  theme: 'dark' | 'light',
};

export const ThemeContext = createContext({} as ThemeContextType);