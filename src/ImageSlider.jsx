import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
// import images from "./ddCarousel";
import ddImages from "./ddCarousel.js";
import "./ProjectPages.css";

const ImageSlider = ({ images, orientation = "vertical" }) => {
  // state to store the width of the carousel
  const [width, setWidth] = useState(0);

  // reference to the carousel element
  const carouselRef = useRef();

  //calculate the width of the carousel to determine how far it can scroll by subtracting the visible width from the total width
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <motion.div ref={carouselRef} className="carousel">
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }} //constrains the drag to the width of the carousel so it doesn't scroll past the images
        className="innerCarousel"
      >
        {
          //map through the images and display them in a vertical or horizontal orientation
          orientation === "vertical"
            ? images.map((image, index) => {
                return (
                  <motion.div className="carouselItemVert" key={index}>
                    <img src={image} alt="imageofProject" />
                  </motion.div>
                );
              })
            : images.map((image, index) => {
                return (
                  <motion.div className="carouselItemHoriz" key={index}>
                    <img src={image} alt="imageofProject" />
                  </motion.div>
                );
              })
        }
      </motion.div>
    </motion.div>
  );
};

export default ImageSlider;
