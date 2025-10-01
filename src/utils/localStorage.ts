import {createEffect, createSignal, type Signal} from 'solid-js';
import {createStore, type SetStoreFunction, type Store} from 'solid-js/store';

/** Create store with data persistance */
export function createLocalStore<T extends object>(
  key: string,
  defaultVal: T,
  storage = localStorage,
): [Store<T>, SetStoreFunction<T>] {
  const localState = storage.getItem(key);

  const [state, setState] = createStore<T>(
    localState ? JSON.parse(localState) : defaultVal,
  );

  createEffect(() => storage.setItem(key, JSON.stringify(state)));

  return [state, setState];
}

/** Create signal with data persistance */
export function createLocalSignal<T>(
  key: string,
  defaultVal: T,
  storage = localStorage,
): Signal<T> {
  const initialValue = storage.getItem(key)
    ? (JSON.parse(storage.getItem(key)!) as T)
    : defaultVal;

  const [value, setValue] = createSignal<T>(initialValue);

  const setValueAndStore = ((arg) => {
    const v = setValue(arg!);
    storage.setItem(key, JSON.stringify(v));
    return v;
  }) as typeof setValue;

  return [value, setValueAndStore];
}
