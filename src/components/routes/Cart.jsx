import React, { useEffect, useState } from "react";
import CartCard from "../CartCard";
import Checkout from "../Checkout";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    setCartItems(cartItems);
  }, []);

  useEffect(() => {
    const price = cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    setTotalPrice(price);
  }, [cartItems]);

  const removeItem = (cartItemName) => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCartItems = cartItems.filter((e) => e.name !== cartItemName);

    localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    setCartItems(updatedCartItems);
  };

  const increaseItem = (cartItemName) => {
    const localStorageCartItems =
      JSON.parse(localStorage.getItem("cart")) || [];

    const itemToUpdate = localStorageCartItems.find(
      (i) => i.name === cartItemName
    );

    itemToUpdate.quantity++;

    localStorage.setItem("cart", JSON.stringify(localStorageCartItems));
    setCartItems(localStorageCartItems);
  };

  const decreaseItem = (cartItemName) => {
    const localStorageCartItems =
      JSON.parse(localStorage.getItem("cart")) || [];

    const updatedCartItems = localStorageCartItems.map((item) => {
      if (item.name === cartItemName) {
        item.quantity--;
      }
      return item;
    });

    const filteredCartItems = updatedCartItems.filter(
      (item) => item.quantity > 0
    );

    localStorage.setItem("cart", JSON.stringify(filteredCartItems));
    setCartItems(filteredCartItems);
  };

  return (
    <div className="cart-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartCard
            key={item.name}
            name={item.name}
            id={item.id}
            price={Math.floor(item.price * item.quantity)}
            image={item.image}
            quantity={item.quantity}
            removeItem={removeItem}
            increaseItem={increaseItem}
            decreaseItem={decreaseItem}
          />
        ))}
      </div>
      <div className="checkout-container">
        <Checkout totalPrice={Math.floor(totalPrice.toString())} />
      </div>
    </div>
  );
}

export default Cart;
