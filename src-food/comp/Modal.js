import { React, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import ModalBody from "./ModalBody";

const ModalComp = (props) => {
  let initailVal = Math.round((1 * 22.9 + 3 * 16.51 + 2 * 12.99) * 100) / 100;
  const [totalAmount, setTotalAmount] = useState(initailVal);

  // let totalVal1
  // const calcTotalCost = (totalVal) => {
  //   console.log(totalVal);
  //   totalVal1 = initailVal + totalVal
  //   setTotalAmount(Math.round(totalVal1*100)/100)
  //   // initailVal = totalVal1
  // };

  let totalVal2;
  const appendNewVal = (newValData) => {
    console.log(newValData);
    totalVal2 = totalAmount + newValData;
    setTotalAmount(Math.round(totalVal2 * 100) / 100);
  };

  
  console.log(props.modalValProp);
  // function createMarkup() {
  //   return {__html: props.modalValProp};
  // }

  return (
    <>
      <Modal show={props.value} onHide={props.closeProp}>
        <Modal.Header closeButton>
          <Modal.Title>Your Orders</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.modalValProp}
          {/* <div dangerouslySetInnerHTML={{ __html: props.modalValProp }}></div> */}
          <ModalBody
            // totalFunc={calcTotalCost}
            newVal={appendNewVal}
            dishName={"Sushi"}
            dishCost={22.99}
            dishQuantity={1}
          ></ModalBody>
          <ModalBody
            newVal={appendNewVal}
            // totalFunc={calcTotalCost}
            dishName={"Schnitzel"}
            dishCost={16.51}
            dishQuantity={3}
          ></ModalBody>
          {/* <ModalBody
            newVal={appendNewVal}
            // totalFunc={calcTotalCost}
            dishName={"Barbeque Borgir"}
            dishCost={12.99}
            dishQuantity={2}
          ></ModalBody> */}

          <div className="d-flex mt-3 modal-total">
            <h5>Total Amount</h5>
            <span className="modal-total-cost">${totalAmount}</span>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="success">Order</Button>
          <Button variant="secondary" onClick={props.closeProp}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalComp;
