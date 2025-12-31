import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 right-0 z-50 p-6">
      <button
        onClick={toggleTheme}
        className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors shadow-lg"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun size={24} className="text-amber-400" />
        ) : (
          <Moon size={24} className="text-slate-900" />
        )}
      </button>
    </header>
  );
}

export default Header;
