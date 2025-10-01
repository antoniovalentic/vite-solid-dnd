import {ParentComponent, JSX} from 'solid-js';
import {unoMerge} from 'unocss-merge';

import styles from './styles.module.css';

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  title?: string;
  showIcon?: boolean;
}

const Button: ParentComponent<ButtonProps> = (props) => {
  return (
    <button class={unoMerge(styles.button, props.class)} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
