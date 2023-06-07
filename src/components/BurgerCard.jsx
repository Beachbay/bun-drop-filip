import React from "react";

function BurgerCard({
  name,
  description,
  id,
  image,
  price,
  addToLocalStorage,
}) {
  return (
    <div
      style={{ flexDirection: "column", justifyContent: "center" }}
      className="hotel-item flex-container"
    >
      <div className="card">
        <img
          style={{ width: "100%", borderRadius: "10px" }}
          src={image}
          alt=""
        />
        <h3 style={{ fontWeight: "600", fontSize: "20px" }}>{name}</h3>
        <p style={{ fontSize: "10px" }}>{description}</p>

        <button
          id="cart-btn"
          onClick={() => {
            addToLocalStorage(id);
          }}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default BurgerCard;
