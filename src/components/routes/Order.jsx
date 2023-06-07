import { dividerClasses } from "@mui/material";
import React, { useEffect, useState } from "react";
import { faHelicopter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Order() {
  const [randomTime, setRandomTime] = useState(0);

  useEffect(() => {
    deliveryTime();
  });

  const deliveryTime = () => {
    const minMinutes = 1;
    const maxMinutes = 60;
    const randomMinutes = Math.floor(
      Math.random() * (maxMinutes - minMinutes + 1) + minMinutes
    );
    setRandomTime(randomMinutes);
  };
  return (
    <div className="order-container">
      <h1 style={{ fontWeight: "bold", marginBottom: "0px" }}>Thank you for your order!</h1>
      {randomTime !== null && (
        <h2>Your order will arive in {randomTime} min</h2>
      )}
      <FontAwesomeIcon icon={faHelicopter} beat id="helicopter"/>
      
    </div>
  );
}

export default Order;
