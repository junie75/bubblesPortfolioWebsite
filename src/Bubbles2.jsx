import React, { useState } from "react";
import "./bubbles.css";
import styled, { keyframes } from "styled-components";
import bubblePop2 from "./assets/bubblePop2.mp4";

const PopSpan = styled.div`
  display: flex;
  position: absolute;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 1);
`;

export default function Bubbles({ index, project, image }) {
  const animationTime = "20ms";
  const animationStyle = "ease";
  const popPoints = [
    { pointName: "pop1", direction: "popAfterTop" },
    { pointName: "pop2", direction: "popAfterTopRight" },
    { pointName: "pop3", direction: "popAfterRight" },
    { pointName: "pop4", direction: "popAfterBottomRight" },
    { pointName: "pop5", direction: "popAfterBottom" },
    { pointName: "pop6", direction: "popAfterBottomLeft" },
    { pointName: "pop7", direction: "popAfterLeft" },
    { pointName: "pop8", direction: "popAfterTopLeft" },
  ];

  const [popped, setPopped] = useState(false);

  const handleBubbleClick = (event) => {
    if (!popped) {
      new Audio(bubblePop2).play();

      const bubble = event.currentTarget; // Handle the bubble div (current target refers to the element to which div handler is attached)
      const bubbleImage = bubble.querySelector(".bubbleImage");
      const bubbleName = bubble.parentElement.querySelector(".projectName");

      //sets opacity of image and name without animation scaling them
      if (bubbleImage) {
        bubbleImage.style.opacity = "0";
      }
      if (bubbleName) {
        bubbleName.style.opacity = "0";
      }

      setPopped(true);

      setTimeout(() => {
        bubble.style.opacity = "0";
        bubbleName.style.display = "none";
        //   setPopped(false);
      }, 900);
    } // This should match the duration of the animation
  };

  return (
    <div className="bubbleContainer">
      <div
        className={`bubbles float ${popped ? "pop" : ""}`}
        style={{ animationDelay: `${popped ? 0 : index * 800}ms` }}
        onClick={handleBubbleClick}
      >
        <span className="bubbleLighting"></span>
        <img src={image} alt="bubbleImage" className="bubbleImage" />
        {popped &&
          popPoints.map((popPoint, idx) => (
            // <PopSpan
            <div
              key={idx}
              className="popSpan"
              id={popPoint.pointName}
              style={{
                animation: `${popPoint.direction} ${animationTime} ${animationStyle}`,
              }}
            />
          ))}
      </div>
      <p className="projectName">{project}</p>
    </div>
  );
}
