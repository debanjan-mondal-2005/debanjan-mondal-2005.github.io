import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-3.5 rounded-full bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-yellow-400 border border-slate-200/50 dark:border-slate-800/50 backdrop-blur-md shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none"
      aria-label="Toggle Theme"
      id="themeToggle"
    >
      {theme === 'dark' ? (
        <FiSun className="w-5 h-5 transition-transform group-hover:rotate-45" />
      ) : (
        <FiMoon className="w-5 h-5 transition-transform group-hover:-rotate-12" />
      )}
    </button>
  );
}
