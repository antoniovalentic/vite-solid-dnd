import {Component} from 'solid-js';
import {unoMerge} from 'unocss-merge';
import styles from './styles.module.css';

type LinkProps = {
  link: string;
  src: string;
  alt?: string;
  class?: string;
};

export const ImageLink: Component<LinkProps> = (props) => {
  return (
    <a href={props.link} target="_blank">
      <img
        src={props.src}
        class={unoMerge(styles.logo, props.class)}
        alt={props.alt || 'logo'}
      />
    </a>
  );
};
