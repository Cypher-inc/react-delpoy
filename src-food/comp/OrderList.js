import React from "react";
import "./OrderList.css";
import "react-bootstrap";
import { Container, Row, Button } from "react-bootstrap";

const OrderList = (props) => {
  const dataPassFunc = () => {
    const data = `<ModalBody
      newVal={appendNewVal}
      dishName={"Barbeque Borgir"}
      dishCost={12.99}
      dishQuantity={2}
    ></ModalBody>`;
    props.dataPassFunc1(data);
  };

  return (
    <Container className="content">
      <Row className="justify-content-center">
        <div className="bg-light mt-5 orderList">
          <div className="d-flex flex-row bd-highlight mb-2 mt-2 justify-content-between">
            <div className="p-2 bd-highlight flex1">
              <b>Sushi</b>
              <p className="desc">Finest fish and veggies</p>
              <p className="cost">$22.99</p>
            </div>
            <div className="p-2 bd-highlight flex2">
              <b>Quantity</b>
              <input type="number" className="QuantityInput" />

              <Row className="btn-row">
                <Button
                  variant="warning"
                  className="mt-2"
                  onClick={dataPassFunc}
                >
                  +Add
                </Button>{" "}
              </Row>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex flex-row bd-highlight mb-2 mt-2 justify-content-between">
            <div className="p-2 bd-highlight flex1">
              <b>Shnitzel</b>
              <p className="desc">Finest fish and veggies</p>
              <p className="cost">$16.95</p>
            </div>
            <div className="p-2 bd-highlight flex2">
              <b>Quantity</b>
              <input type="number" className="QuantityInput" />

              <Row className="btn-row">
                <Button variant="warning" className="mt-2">
                  +Add
                </Button>{" "}
              </Row>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex flex-row bd-highlight mb-2 mt-2 justify-content-between">
            <div className="p-2 bd-highlight flex1">
              <b>Barbeque Burger</b>
              <p className="desc">Finest fish and veggies</p>
              <p className="cost">$12.99</p>
            </div>
            <div className="p-2 bd-highlight flex2">
              <b>Quantity</b>
              <input type="number" className="QuantityInput" />

              <Row className="btn-row">
                <Button variant="warning" className="mt-2">
                  +Add
                </Button>{" "}
              </Row>
            </div>
          </div>
          <hr></hr>
          <div className="d-flex flex-row bd-highlight mb-2 mt-2 justify-content-between">
            <div className="p-2 bd-highlight flex1">
              <b>Green Bowl</b>
              <p className="desc">Finest fish and veggies</p>
              <p className="cost">$18.99</p>
            </div>
            <div className="p-2 bd-highlight flex2">
              <b>Quantity</b>
              <input type="number" className="QuantityInput" />

              <Row className="btn-row">
                <Button variant="warning" className="mt-2">
                  +Add
                </Button>{" "}
              </Row>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
};

export default OrderList;
