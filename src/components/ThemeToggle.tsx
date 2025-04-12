import React, { useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { useThemeStore } from '../lib/theme';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useThemeStore();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-20 right-6 z-50 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-gray-800 dark:text-white" />
      ) : (
        <Sun className="w-5 h-5 text-gray-800 dark:text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;