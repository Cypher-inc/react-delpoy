import "./ModalBody.css";
import { React, useRef, useState } from "react";

const ModalBody = (props) => {
  const [quantityVal, setQuantityVal] = useState(props.dishQuantity);
  const quantityInput = useRef(null);

  let dummyVal;
  dummyVal = quantityVal;
  const incFunc = () => {
    if (quantityVal > 0) {
      // console.log(Number(quantityInput.current.textContent[1]));
      dummyVal++;
      // console.log(dummyVal);
      setQuantityVal(dummyVal);
      props.newVal(props.dishCost);
      // modalBodyChange(dummyVal);
    }
  };

  const decFunc = () => {
    if (quantityVal > 1) {
      // console.log(Number(quantityInput.current.textContent[1]));
      dummyVal--;
      // console.log(dummyVal);
      setQuantityVal(dummyVal);
      props.newVal(-props.dishCost);
      // modalBodyChange(dummyVal);
    }
  };


  return (
    <>
      <div className="pt-2 pb-3 m-1 order-details">
        <h5>{props.dishName}</h5>
        <div className="d-flex modal-info align-items-center">
          <span className="ModalTotal">${props.dishCost}</span>
          <span
            className="ModalQuantity"
            ref={quantityInput}
            // value={quantityVal}
          >
            x{quantityVal}
          </span>
          <div>
            <button
              type="button"
              className="btn btn-outline-dark dark-btn1"
              onClick={decFunc}
            >
              ➖
            </button>
            <button
              type="button"
              className="btn btn-outline-dark"
              onClick={incFunc}
            >
              ➕
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalBody;
