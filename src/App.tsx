import './App.css';
import { useState } from 'react';
import type { MouseEventHandler } from 'react'

function increment(count: number) {
  return count + 1
}

function decrement(count: number) {
  return count - 1
}

type ButtonProps = {
  label: string;
  fn: MouseEventHandler<HTMLButtonElement>;
};
function Button({ label, fn }: ButtonProps) {
  return <button className="counterButton" onClick={fn}>{label}</button>;
}

type DisplayProps = {
  val: number;
};
function Display({ val }: DisplayProps) {
  return <div className="counterDisplay">{val}</div>;
}

type CounterProps = {
  initial: number
};
function Counter({ initial }: CounterProps) {
    const [count, setCount] = useState<number>(initial)
    function plus(): void {
      if (count >= 10) {
        return
      }
      setCount(increment)
    }
    function minus(): void {
      if (count <= 1) {
        return;
      }
      setCount(decrement);
    }
    return <div className="counter">
      <Button label="-" fn={minus} />
      <Display val={count} />
      <Button label="+" fn={plus} />
     </div>;
}

export default function App() {
  const initialVal = 1;
  return <section id="center">
         <h1>Tutorial</h1>
         <Counter initial={initialVal}/>
      </section>;
}
