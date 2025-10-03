import {
  createContext,
  createSignal,
  ParentComponent,
  Show,
  Signal,
  useContext,
} from 'solid-js';
import {unoMerge} from 'unocss-merge';

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
  return <div class={unoMerge('w-full', props.class)}>{props.children}</div>;
};

const Item: ParentComponent<ItemProps> = (props) => {
  const [open, setOpen] = createSignal(false);

  return (
    <ItemContext.Provider value={[open, setOpen]}>
      <div class={unoMerge('border-b', props.class)}>{props.children}</div>
    </ItemContext.Provider>
  );
};
Accordion.Item = Item;

const Trigger: ParentComponent<TriggerProps> = (props) => {
  const [open, setOpen] = useContext(ItemContext)!;

  return (
    <h3 class={unoMerge('border-b', props.class)}>
      <button on:click={() => setOpen(!open())}>{props.children}</button>
    </h3>
  );
};
Accordion.Trigger = Trigger;

const Content: ParentComponent<ContentProps> = (props) => {
  const [open] = useContext(ItemContext)!;

  return (
    <Show when={open()}>
      <div>{props.children}</div>
    </Show>
  );
};
Accordion.Content = Content;

export default Accordion;
