import { useState, useEffect } from "react";

const useCounter = (forwardFunc) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setCounter(
          forwardFunc
            ? (prevCounter) => prevCounter + 1
            : (prevCounter) => prevCounter - 1
        );
    }, 1000);

    return () => clearInterval(interval);
  }, [forwardFunc]);

  return counter;
};

export default useCounter;
