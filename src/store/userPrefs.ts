import {createWithSignal} from 'solid-zustand';
import {persist} from 'zustand/middleware';
import initTheme from '@utils/theme';

export type Theme = 'light' | 'dark';
export type ThemePref = Theme | 'system';

type UserPrefs = {
  theme: ThemePref;
};

type UserPrefsState = UserPrefs & {
  setThemePref: (theme: ThemePref) => void;
};

const defaultUserPrefs: UserPrefs = {
  theme: 'system',
};

const usePrefsStore = createWithSignal<UserPrefsState>()(
  persist(
    (set) => ({
      ...defaultUserPrefs,
      setThemePref: (t) => {
        set({theme: t});
        initTheme(t);
      },
    }),
    {
      name: 'userPrefs',
    },
  ),
);

export default usePrefsStore;
