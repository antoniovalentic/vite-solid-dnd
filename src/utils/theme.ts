import {Theme, ThemePref} from '@store/userPrefs';

/** Initialize app dark/light mode based on user prefs (defaults to light mode) */
const initTheme = (themePref: ThemePref) => {
  if (themePref === 'system') {
    setSystemTheme();
  } else {
    setTheme(themePref);
  }
};

const setSystemTheme = () => {
  // Check for system prefered theme
  if (window && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    setTheme('dark');
    return;
  }
  // Default to light mode
  setTheme('light');
};

const setTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.classList.remove('dark', 'light');
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.add('light');
  }
};

export default initTheme;
