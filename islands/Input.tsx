import type { Signal } from "@preact/signals";

interface Props {
  text: Signal<string>;
};

const Input = ({ text }: Props) => {
    console.log('render');
    
  return (
    <div>
      <span>Input</span>
      <input value={text} onInput={e => text.value = e.currentTarget.value} />
    </div>
  );
};


export default Input;