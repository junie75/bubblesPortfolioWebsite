import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ddImages from "./ddCarousel.js";
import "./ProjectPages.css";

// const imageTry = [
//   require("../src/assets/dd1.png"),
//   require("../src/assets/dd2.png"),
//   require("../src/assets/dd3.png"),
// ];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
// export default function ImageSlider() {
//   return (
//     <Carousel responsive={responsive} containerClass="sliderContainer">
//       {ddImages.map((image, index) => {
//         console.log(image);
//         return (
//           <div className="sliderItem" key={index}>
//             <img src={image} alt="Dinosaur Detector" />
//           </div>
//         );
//       })}
//       ;
//     </Carousel>
//   );
// }
// const ImageSlider = () => {
//   return (
//     <div>
//       <div>Item 1</div>
//       <div>Item 2</div>
//       <div>Item 3</div>
//     </div>
//   );
// };
// const ImageSlider = () => {
//   return (
//     <Carousel
//       responsive={responsive}
//       style={{ height: "300px", width: "100%", backgroundColor: "lightgrey" }}
//     >
//       <div style={{ padding: "20px", background: "red" }}>Item 1</div>
//       <div style={{ padding: "20px", background: "blue" }}>Item 2</div>
//       <div style={{ padding: "20px", background: "green" }}>Item 3</div>
//     </Carousel>
//   );
// };

// const ImageSlider = () => {
//   return (
//     <Carousel
//       responsive={responsive}
//       containerClass="carousel-container"
//       itemClass="carousel-item"
//     >
//       <div className="carousel-item" style={{ backgroundColor: "red" }}>
//         Item 1
//       </div>
//       <div className="carousel-item" style={{ backgroundColor: "blue" }}>
//         Item 2
//       </div>
//       <div className="carousel-item" style={{ backgroundColor: "green" }}>
//         Item 3
//       </div>
//     </Carousel>
//   );
// };

const ImageSlider = () => {
  return (
    <Carousel
      responsive={responsive}
      containerClass="carousel-container"
      itemClass="carousel-item"
    >
      {ddImages.map((image, index) => (
        <div className="carousel-item" key={index}>
          <img src={image} alt={`Dinosaur Detector ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
