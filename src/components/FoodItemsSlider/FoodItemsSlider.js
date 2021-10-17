import React from "react";
import "./FoodItemsSlider.css";
import Container from "@mui/material/Container";
import Slider from "react-slick";
import SliderItem from "../SliderItem/SliderItem";
import NextArrow from "../Arrows/NextArrow";
import PrevArrow from "../Arrows/PrevArrow";

const settings = {
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,

  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,

  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 475,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 664,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 941,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

const FoodItemsSlider = (props) => {
  return (
    <>
      <div className="slider-container">
        <Container maxWidth="md">
          <h3 className="slider-title">Most Frequently Ordered</h3>
          <Slider {...settings}>
            {Array.from(props.items).map((item) => {
              return <SliderItem key={item.idMeal} item={item} />;
            })}
          </Slider>
        </Container>
      </div>
    </>
  );
};

export default FoodItemsSlider;
