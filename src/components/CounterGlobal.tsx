import {Component} from 'solid-js';
import useCounterStore from '../store/counter';

export const Counter: Component = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);

  return <button onClick={() => increment()}>Count value is {count()}</button>;
};
