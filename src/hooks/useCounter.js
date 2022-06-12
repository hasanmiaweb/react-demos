import { useState } from "react";
const useCounter = ({ initial = 0, lowerBound = 0, upperBound = 7 }) => {
  const [count, setCounter] = useState(initial);
  const handleInt = () => {
    if (count < upperBound) {
      setCounter(count + 1);
    }
  };
  const handleDec = () => {
    if (count > lowerBound) {
      setCounter(count - 1);
    }
  };

  return {
    count,
    handleDec,
    handleInt,
  };
};

export default useCounter;
