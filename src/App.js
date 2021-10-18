import React, { useState, useEffect } from "react";
import axios from "axios";
import FoodItemsSlider from "./components/FoodItemsSlider/FoodItemsSlider";
import Navbar from "./components/Navbar/Navbar";
import Filters from "./components/Filters/Filters";
import "./App.css";
const App = () => {
  const [items, setItems] = useState({});
  const [filtered, setFiltered] = useState({});
  const [value, setValue] = useState("chicken");

  useEffect(() => {
    async function getMealsbyName() {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
      );

      setItems(res.data.meals);
      setFiltered(Array.from(res.data.meals));
    }

    getMealsbyName();
  }, []);

  return (
    <>
      <Navbar />
      <FoodItemsSlider items={items} />
      <Filters items={filtered} />
    </>
  );
};

export default App;
