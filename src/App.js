import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodItemsSlider from "./components/FoodItemsSlider/FoodItemsSlider";
import Navbar from "./components/Navbar/Navbar";
import Filters from "./components/Filters/Filters";
import "./App.css";
const App = () => {
  const [items, setItems] = useState({});
  useEffect(() => {
    async function getMealsbyName() {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=chicken"
      );

      setItems(res.data.meals);
    }

    getMealsbyName();
  }, []);
  return (
    <>
      <Navbar />
      <FoodItemsSlider items={items} />
      <Filters items={items} />
    </>
  );
};

export default App;
