import { useDispatch } from "react-redux";
import { increase, decrease } from "../../store/modules/counter/actions";

const Counter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="buttons">
        <button onClick={() => dispatch(increase(1))}>+</button>
        <button onClick={() => dispatch(decrease(1))}>-</button>
      </div>
    </>
  );
};

export default Counter;
