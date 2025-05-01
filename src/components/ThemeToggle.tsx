import { useTheme } from '../context/ThemeContext';
import { Icon } from '@iconify/react';
import sunIcon from '@iconify/icons-tabler/sun';
import moonIcon from '@iconify/icons-tabler/moon';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="relative inline-block w-12 h-6">
      <input
        type="checkbox"
        className="theme-controller peer opacity-0 w-full h-full cursor-pointer"
        aria-label="Toggle theme"
        checked={theme === 'dark'}
        onChange={toggleTheme}
      />

      <div className="absolute inset-0 bg-purple-300 dark:bg-purple-800 rounded-full hover:scale-105 shadow-lg transition-all duration-300 ease-in-out">
        <span
          className={`absolute left-1 top-1.5 text-white size-4 z-10 transform transition-opacity duration-300 ${
            theme === 'light' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Icon icon={sunIcon} className="w-4 h-4" />
        </span>

        <span
          className={`absolute right-1 top-1.5 text-white size-4 z-10 transform transition-opacity duration-300 ${
            theme === 'dark' ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Icon icon={moonIcon} className="w-4 h-4" />
        </span>
      </div>
    </label>
  );
}
