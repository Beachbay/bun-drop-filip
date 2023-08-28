import React, { useEffect, useState } from "react";
import BurgerCard from "../BurgerCard";

function Home() {
  const [filterdBurgers, setFilterdBurgers] = useState([]);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        const filterdBurgers = data.filter(
          (item) => item.id >= 1 && item.id <= 3
        );
        setFilterdBurgers(filterdBurgers);
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
      <div className="greeting-container">
        <h1 id="welcome">WELCOME TO</h1>
        <h1 id="bun">BUN DROP</h1>
      </div>
      <h3>POPULAR ITEMS:</h3>
      <div className="products-container home-cards ">
        {filterdBurgers?.map((b) => (
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

export default Home;
