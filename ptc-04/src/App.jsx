import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  reset,
} from "./redux/slices/counterSlice";
import Navbar from "./components/Navbar";

const App = () => {
  const num = useSelector((state) => state.counter.value);
  const theme = useSelector((state) => state.theme.value);

  const dispatch = useDispatch();

  return (
    <>
    <Navbar/>
      <div className="w-full h-screen bg-gray-800 text-white flex justify-center items-center gap-5 flex-col">
        <h1 className="text-5xl font-medium">{num}</h1>
        <div className="flex gap-5">
          <button
            className="px-10 py-5 rounded-2xl bg-green-400 cursor-pointer"
            onClick={() => {
              dispatch(increment());
            }}
          >
            Increment
          </button>
          <button
            className="px-10 py-5 rounded-2xl bg-red-400 cursor-pointer"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
          <button
            className="px-10 py-5 rounded-2xl bg-pink-400 cursor-pointer"
            onClick={() => dispatch(reset())}
          >
            Reset
          </button>
          <button
            className="px-10 py-5 rounded-2xl bg-blue-400 cursor-pointer"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            increse by 5
          </button>
          <button
            className="px-10 py-5 rounded-2xl bg-amber-400 cursor-pointer"
            onClick={() => dispatch(incrementByAmount(10))}
          >
            increse by 10
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
