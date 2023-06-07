import React, { useEffect, useState } from "react";
import BurgerCard from "../BurgerCard";

function Home() {
  const [filterdBurgers, setFilterdBurgers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/menu")
      .then((res) => res.json())
      .then((data) => {
        const filterdBurgers = data.filter(
          (item) => item.id >= 1 && item.id <= 3
        );
        setFilterdBurgers(filterdBurgers);
      });
  }, []);

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
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
