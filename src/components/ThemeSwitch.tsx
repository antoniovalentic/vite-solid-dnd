import usePrefsStore from '../store/userPrefs';

export const ThemeSwitch = () => {
  const userPrefs = usePrefsStore();

  const switchTheme = () => {
    if (userPrefs().theme === 'dark') {
      userPrefs().setThemePref('light');
    } else {
      userPrefs().setThemePref('dark');
    }
  };

  return <button onClick={() => switchTheme()}>{userPrefs().theme}</button>;
};
