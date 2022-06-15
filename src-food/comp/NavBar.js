import { React, useContext, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import ModalComp from "./Modal";
import "./NavBar.css";
import CartConstant from '../store/cart-context'

const NavBar = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log(props.passVal);
  
  // function createMarkup() {
  //   return {__html: props.passVal};
  // }
  const cartCtx = useContext(CartConstant)


  return (
    <>
      <ModalComp
        value={show}
        closeProp={handleClose}
        showProp={handleShow}
        modalValProp={props.passVal}
      ></ModalComp>
      <Navbar bg="dark" variant="dark">
        <Container className="navbar-main justify-content-between">
          <Navbar.Brand href="#home">React Meals</Navbar.Brand>
          <Nav className="d-flex flex-row-reverse">
            <Button variant="primary" size="lg"
            onClick={handleShow}>
              🛒 Your Cart <span className="cart-val">{cartCtx.items.lenght ? cartCtx.items.lenght : 0}</span>
            </Button>{" "}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
