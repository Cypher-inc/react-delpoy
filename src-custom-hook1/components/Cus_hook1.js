import { useEffect, useState } from "react";

const UseCounter1 = (check) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(
        check
          ? (prevCounter) => prevCounter + 1
          : (prevCounter) => prevCounter - 1
      );
    }, 1000);

    // var num1 = 0
    // console.log(num1 ? 'Hello' : 'bye');
    
    
    // return () => clearInterval(interval);
    return interval;
  }, []);
  return counter;
};

export default UseCounter1;
