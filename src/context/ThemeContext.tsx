import { createContext, useContext, useState, ReactNode } from 'react';

// Создаём тип для контекста
type ThemeContextType = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

// Создаём сам контекст
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  function toggleTheme() {
    const currentTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(currentTheme);
    const htmlElement = document.documentElement;
    if (currentTheme === 'dark') {
      htmlElement.classList.add('dark');
    } else {
      htmlElement.classList.remove('dark');
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Экспортируем кастомный хук useTheme
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
