import CartConstant from "./cart-context";

const CartProvider = (props) => {
  const addItemToCart = (item) => {};
  const removeItemFromCart = (item) => {};

  const cartConstant = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
  };

  return (
    <CartConstant.Provider value={cartConstant}>
      {props.children}
    </CartConstant.Provider>
  );
};
export default CartProvider;
