import {React, useState} from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import ModalComp from "./comp/Modal";
import NavBar from "./comp/NavBar";
import OrderList from "./comp/OrderList";
import "./index.css";
import CartProvider from "./store/CartProvider";

const App = () => {

  const [userData , setUserData] = useState('')

  const checkPassFunc = (data) => {
    // console.log(data);
    
    setUserData((prevData) => {
      return [data, ...prevData];
    });
  }

  return (
    <CartProvider>
      <NavBar passVal={userData}></NavBar>

      <div className="container d-flex h-100 main">
        <div className="row justify-content-center align-self-center">
          <h1 className="text-center mt-4 bg-light">Hello</h1>

          <OrderList dataPassFunc1={checkPassFunc}></OrderList>
        </div>
      </div>
    </CartProvider>
  );
};

export default App;
