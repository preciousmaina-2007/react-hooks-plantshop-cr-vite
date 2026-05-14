import { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);

  function handleToogleStock() {
    setInStock((prev) => !prev);
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />

      <h4>{plant.name}</h4>

      <p>Price: {plant.price}</p>

      
        <button onClick={handleToogleStock}>
          {inStock ? "In Stock" : "Out of Stock"}
        </button>
      
    </li>
  );
}

export default PlantCard;