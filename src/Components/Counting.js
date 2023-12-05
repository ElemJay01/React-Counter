import { useState } from "react";
import Counter from "./Counter";

const Counting = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const handleReset = () => {
    return setCount(0);
  };

  const handleMinus = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };

  return (
    <Counter
      count={count}
      handleAdd={() => handleAdd()}
      handleReset={() => handleReset()}
      handleMinus={() => handleMinus()}
    />
  );
};

export default Counting;
