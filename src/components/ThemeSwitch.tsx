import usePrefsStore from '@store/userPrefs';

export const ThemeSwitch = () => {
  const userPrefs = usePrefsStore();

  const switchTheme = () => {
    if (userPrefs().theme === 'dark') {
      userPrefs().setThemePref('light');
    } else {
      userPrefs().setThemePref('dark');
    }
  };

  const showTheme = () => {
    if (userPrefs().theme !== 'dark') {
      return 'light';
    }
    return 'dark';
  };

  return <button onClick={() => switchTheme()}>{showTheme()}</button>;
};
