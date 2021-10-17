import React from "react";
import "./SliderItem.css";

export const SliderItem = ({ item }) => {
  return (
    <>
      <div className="slider-item-container">
        <div className="slider-item-cover">
          <img
            src={item.strMealThumb}
            className="slider-item-image"
            alt={item.strMeal}
          />
        </div>
        <div className="slider-item-text">
          <div className="slider-item-title">{item.strMeal}</div>
          <div className="slider-item-subtitle">
            <div className="slider-item-subtitle-1">{item.strArea}</div>
            <div className="slider-item-subtitle-2">RE-ORDER</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderItem;
