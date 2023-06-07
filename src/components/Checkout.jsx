import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Checkout({ totalPrice }) {
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    adress: "",
    zip: "",
    city: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    const allInputsFilled = Object.values(formValues).every(
      (value) => value.trim() !== ""
    );

    if (!allInputsFilled) {
      toast.error("Please enter all fields");
    } else {
      window.location.href = "/order";
      localStorage.clear();
    }
  };

  return (
    <div className="checkout-box">
      <ToastContainer />
      <p
        style={{
          marginLeft: "15px",
          fontWeight: "500",
          fontSize: "30px",
          marginTop: "15px",
        }}
      >
        CHECKOUT
      </p>

      <div>
        <h3
          style={{
            marginLeft: "15px",
            fontWeight: "400",
            fontSize: "15px",
            marginTop: "15px",
          }}
        >
          PAYMENT METHO
        </h3>
        <button className="payment-btn">
          <img
            id="swish"
            src="./images/SwishLogoSecondaryLight-BG.png"
            alt="my image"
          />
        </button>
        <button className="payment-btn">
          <img id="MC" src="./images/mc_symbol_opt_45_3x.png" alt="my image" />
        </button>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <h3 className="checkout-text">First Name</h3>
          <input
            className="input-big"
            placeholder="Sven"
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={handleChange}
          />
          <h3 className="checkout-text">Last Name</h3>
          <input
            className="input-big"
            placeholder="Svensson"
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={handleChange}
          />
          <h3 className="checkout-text">Street Address</h3>
          <input
            className="input-big"
            placeholder="Malmögatan 4"
            type="text"
            name="adress"
            value={formValues.adress}
            onChange={handleChange}
          />
          <div className="checkout-small">
            <div>
              <h3 className="checkout-text">City</h3>
              <input
                className="input-small"
                type="text"
                placeholder="Malmö"
                name="city"
                value={formValues.city}
                onChange={handleChange}
              />
            </div>
            <div>
              <h3 className="checkout-text">Zip</h3>
              <input
                className="input-small"
                type="text"
                placeholder="123 45"
                name="zip"
                value={formValues.zip}
                onChange={handleChange}
              />
            </div>
          </div>
        </form>

        <hr
          style={{
            border: "2px solid #B1C0CB",
            borderRadius: "2px",
            marginTop: "20px",
          }}
        />
        <div className="total-price">
          <h4>Total Cost</h4>
          <h4>{totalPrice}$</h4>
        </div>

        <button id="checkout-btn" onClick={handleSubmit}>
          CHECK OUT
        </button>
      </div>
    </div>
  );
}

export default Checkout;
