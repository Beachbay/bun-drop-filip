import React, { useEffect, useState } from "react";
import BurgerCard from "../BurgerCard";

function Menu() {
  const [menu, setMenu] = useState([]);
  const [burgers, setBurgers] = useState([]);
  const [fries, setFries] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/menu")
      .then((res) => res.json())
      .then((data) => {
        const allBurgers = data.filter((i) => i.category === "Burgers");
        setBurgers(allBurgers);

        const allFries = data.filter((i) => i.category === "Fries");
        setFries(allFries);

        const allDrinks = data.filter((i) => i.category === "Drinks");
        setDrinks(allDrinks);

        const sortedMenu = data.sort((a, b) => a.category - b.category);

        setMenu(data);
      });
  }, []);

  function addToLocalStorage(id) {
    // letar efter produkten med id:t som skickas in i funktionen
    const itemToAdd = menu.find((item) => item.id === id);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const itemInCart = cart.find((item) => item.name === itemToAdd.name);

    if (!itemInCart) {
      const item = {
        name: itemToAdd.name,
        price: itemToAdd.price,
        quantity: 1,
        image: itemToAdd.image,
      };

      cart.push(item);
    } else {
      itemInCart.quantity++;
      itemInCart.price += itemToAdd.price;
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  }

  return (
    <div>
      <p
        style={{
          marginBottom: "0px",
          marginTop: "0px",
          fontSize: "48px",
          fontWeight: "600",
          marginLeft: "20px",
        }}
      >
        MENU
      </p>
      <p
        style={{
          marginBottom: "0px",
          marginTop: "0px",
          fontSize: "36px",
          fontWeight: "600",
          marginLeft: "20px",
        }}
      >
        BURGERS
      </p>
      <div className="products-container">
        {burgers?.map((b) => (
          <BurgerCard
            key={b.id}
            name={b.name}
            description={b.description}
            id={b.id}
            price={b.price}
            image={b.image}
            addToLocalStorage={addToLocalStorage}
          />
        ))}
      </div>
      <p
        style={{
          marginBottom: "0px",
          marginTop: "0px",
          fontSize: "36px",
          fontWeight: "600",
          marginLeft: "20px",
        }}
      >
        FRIES
      </p>

      <div className="products-container">
        {fries?.map((b) => (
          <BurgerCard
            key={b.id}
            name={b.name}
            description={b.description}
            id={b.id}
            price={b.price}
            image={b.image}
            addToLocalStorage={addToLocalStorage}
          />
        ))}
      </div>

      <p
        style={{
          marginBottom: "0px",
          marginTop: "0px",
          fontSize: "36px",
          fontWeight: "600",
          marginLeft: "20px",
        }}
      >
        DRINKS
      </p>
      <div className="products-container">
        {drinks?.map((b) => (
          <BurgerCard
            key={b.id}
            name={b.name}
            description={b.description}
            id={b.id}
            price={b.price}
            image={b.image}
            addToLocalStorage={addToLocalStorage}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
