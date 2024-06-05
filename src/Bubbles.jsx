import React from "react";
import "./bubbles.css";
import bubblePop from "./assets/bubblePop.mp3";
import bubblePop2 from "./assets/bubblePop2.mp4";

export default function Bubbles({ project, image }) {
  const handleBubbleClick = (event) => {
    new Audio(bubblePop2).play();
    // new Audio(bubblePop).play();
    const bubble = event.currentTarget; //handle the bubble div (current target refers to the element to which div handler is attached)
    // console.log(bubble);
    const bubbleImage = bubble.querySelector(".bubbleImage");
    const bubbleName = bubble.querySelector(".projectName");
    // bubble.style.transform = "scale(5)";
    // bubble.style.opacity = "0";

    bubble.style.animation =
      "pop 80ms cubic-bezier(0.16, 0.87, 0.48, 0.99) forwards";
    if (bubbleImage) {
      bubbleImage.style.opacity = "0";
    }
    if (bubbleName) {
      bubbleName.style.opacity = "0";
    }

    setTimeout(() => {
      bubble.style.display = "none";
      bubbleName.style.display = "none";
    }, 300);
  };

  return (
    <div className="bubbleContainer" onClick={handleBubbleClick}>
      <div className="bubbles">
        <span></span>
        <img src={image} alt="bubbleImage" className="bubbleImage" />
      </div>
      <p className="projectName">{project}</p>
    </div>
  );
}
