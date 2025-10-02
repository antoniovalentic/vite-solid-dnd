import {ParentComponent, JSX} from 'solid-js';
import {unoMerge} from 'unocss-merge';

import styles from './styles.module.css';

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'ghost' | 'link' | 'primary' | 'secondary';
}

const Button: ParentComponent<ButtonProps> = (props) => {
  return (
    <button
      {...props}
      class={unoMerge(
        styles.button,
        props.variant && styles['button-' + props.variant],
        props.class,
      )}
    >
      {props.children}
    </button>
  );
};

export default Button;
