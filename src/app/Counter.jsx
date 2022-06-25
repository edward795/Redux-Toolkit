import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from "../redux/features/counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const [value, setValue] = useState(0);
  const addValue = Number(value) || 0;
  const resetAll = () => {
    setValue(0);
    dispatch(reset());
  };
  const dispatch = useDispatch();
  return (
    <div>
      Counter
      <p>{count}</p>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button onClick={() => dispatch(incrementByAmount(addValue))}>
        increment by amount
      </button>
      <button onClick={resetAll}>reset</button>
    </div>
  );
};
