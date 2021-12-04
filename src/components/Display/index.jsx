import { useSelector } from "react-redux";

const Display = () => {
  const counter = useSelector((store) => store.counter);

  return (
    <>
      <h1>{counter}</h1>
    </>
  );
};

export default Display;
