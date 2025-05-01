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

      <div className="absolute inset-0 bg-purple-300 rounded-full hover:scale-105 shadow-lg transition-colors duration-300">
        <span className="absolute left-1 top-1.5 size-4 text-white-400 hidden peer-checked:block z-10">
            <Icon icon={sunIcon} className="w-4 h-4" />
          </span>

          <span className="absolute right-1 top-1.5 size-4 text-white block peer-checked:hidden z-10">
            <Icon icon={moonIcon} className="w-4 h-4" />
          </span>
      </div>
    </label>
  );
}
