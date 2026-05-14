import { useEffect, useState } from "react";
import Header from "./Header";
import Search from "./Search";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";

function App() {
  // Stores all plants
  const [plants, setPlants] = useState([]);

  // Stores search input
  const [search, setSearch] = useState("");

  // Fetch plants on page load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);

  // Add new plant
  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Filter plants by search
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Header />

      <Search search={search} setSearch={setSearch} />

      <NewPlantForm onAddPlant={handleAddPlant} />

      <PlantList plants={filteredPlants} />
    </div>
  );
}

export default App;