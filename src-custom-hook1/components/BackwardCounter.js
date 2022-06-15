import Card from "./Card";
import UseCounter1 from "./Cus_hook1";

const BackwardCounter = () => {
  const counter = UseCounter1(false);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
