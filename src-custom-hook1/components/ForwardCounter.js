import Card from "./Card";
import UseCounter1 from "./Cus_hook1";

const ForwardCounter = () => {
  // console.log(CustomCounter1());
  
  const counter = UseCounter1(true)

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
