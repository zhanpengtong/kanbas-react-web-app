import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterReducer";
import AddRedux from "../AddRedux";

function CounterRedux() {
  const { count } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();
  return (
    <div>
        <h2>Counter Redux</h2>
        <h3>{count}</h3>
        <button onClick={() => dispatch(increment())}>
        Increment </button>
        <button onClick={() => dispatch(decrement())}>
        Decrement </button>
        <AddRedux />
    </div>
  );
}
export default CounterRedux;