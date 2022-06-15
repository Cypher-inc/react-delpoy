import { React, useState } from "react";
import { Container, Navbar, Nav, Button } from "react-bootstrap";
import ModalComp from "./Modal";
import "./NavBar.css";

const NavBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ModalComp
        value={show}
        closeProp={handleClose}
        showProp={handleShow}
      ></ModalComp>
      <Navbar bg="dark" variant="dark">
        <Container className="navbar-main justify-content-between">
          <Navbar.Brand href="#home">React Meals</Navbar.Brand>
          <Nav className="d-flex flex-row-reverse">
            <Button variant="primary" size="lg"
            onClick={handleShow}>
              🛒 Your Cart <span className="cart-val">5</span>
            </Button>{" "}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
