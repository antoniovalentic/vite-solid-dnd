import {
  createContext,
  createSignal,
  ParentComponent,
  Show,
  Signal,
  useContext,
} from 'solid-js';
import {unoMerge} from 'unocss-merge';

import styles from './styles.module.css';

type AccordionProps = {
  class?: string;
};

type ItemProps = {
  class?: string;
};

type TriggerProps = {
  class?: string;
};

type ContentProps = {
  class?: string;
};

interface Accordion extends ParentComponent<AccordionProps> {
  Item: ParentComponent<ItemProps>;
  Trigger: ParentComponent<TriggerProps>;
  Content: ParentComponent<ContentProps>;
}

type AccordionContext = Signal<boolean>;

const ItemContext = createContext<AccordionContext>();

const Accordion: Accordion = (props) => {
  return (
    <div class={unoMerge('w-full', styles['accordion'], props.class)}>
      {props.children}
    </div>
  );
};

const Item: ParentComponent<ItemProps> = (props) => {
  const [open, setOpen] = createSignal(false);

  const dataStatus = () => {
    return open() ? {'data-expanded': true} : {'data-closed': true};
  };

  return (
    <ItemContext.Provider value={[open, setOpen]}>
      <div class={unoMerge('border-b', styles['item'], props.class)} {...dataStatus()}>
        {props.children}
      </div>
    </ItemContext.Provider>
  );
};
Accordion.Item = Item;

const Trigger: ParentComponent<TriggerProps> = (props) => {
  const [open, setOpen] = useContext(ItemContext)!;

  const dataStatus = () => {
    return open() ? {'data-expanded': true} : {'data-closed': true};
  };

  return (
    <h3 class={unoMerge('border-b', styles['trigger'], props.class)}>
      <button
        type="button"
        on:click={() => setOpen(!open())}
        aria-expanded={open()}
        {...dataStatus()}
      >
        {props.children}
        <ArrowIcon />
      </button>
    </h3>
  );
};
Accordion.Trigger = Trigger;

const ArrowIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="size-4 shrink-0 transition-transform duration-200"
    >
      <path d="M6 9l6 6l6 -6" />
    </svg>
  );
};

const Content: ParentComponent<ContentProps> = (props) => {
  const [open] = useContext(ItemContext)!;

  return (
    <Show when={open()}>
      <div class={unoMerge(styles['content'], 'pb-4')}>{props.children}</div>
    </Show>
  );
};
Accordion.Content = Content;

export default Accordion;
