import { useState } from "react"

import s from './Counter.module.scss';

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={increment}>Inc</button>
      <button onClick={decrement}>Dev</button>
      <h1 className={s.title}>{count}</h1>
    </>
  )
}