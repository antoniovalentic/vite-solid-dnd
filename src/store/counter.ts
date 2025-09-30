import {createWithSignal} from 'solid-zustand';

interface CounterState {
  count: number;
  increment: () => void;
  setCount: (num: number) => void;
}

const useCounterStore = createWithSignal<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({count: state.count + 1})),
  setCount: (num) => set(() => ({count: num})),
}));

export default useCounterStore;
