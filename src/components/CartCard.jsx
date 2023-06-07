import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

function CartCard(item) {
  return (
    <div class="cart-card">
      <div className="left">
        <img src={item.image} alt="Product Image" />
        <h3 class="product-name">{item.name}</h3>
      </div>
      <div className="count">
        <button class="decrement" onClick={() => item.decreaseItem(item.name)}>
          -
        </button>
        <span class="quantity-value">{item.quantity}</span>
        <button class="increment" onClick={() => item.increaseItem(item.name)}>
          +
        </button>
      </div>
      <div class="cart-details">
        <p class="product-price">{item.price}$</p>
        <FontAwesomeIcon
          id="delete-btn"
          icon={faTrashCan}
          onClick={() => item.removeItem(item.name)}
        />
      </div>
    </div>
  );
}

export default CartCard;
