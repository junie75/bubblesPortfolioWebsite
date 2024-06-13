import React, { useEffect, useState } from "react";
import "./bubbles.css";
import styled, { keyframes } from "styled-components";
import bubblePop from "./assets/bubblePop.mp3";
import bubblePop2 from "./assets/bubblePop2.mp4";

const popAfter = keyframes`
  0% {
    // transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-150px);
  }
`;

const PopSpan = styled.div`
  display: flex;
  position: absolute;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: yellow;
  border: 2px solid yellow;
  animation: ${popAfter} 5s ease;
  // transition: transform 5s;
  // z-index: 3;
`;

export default function Bubbles({ project, image }) {
  const animationTime = "200ms";
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

  const popAnimation = () => {
    const bubblePop = document.getElementsByClassName("bubblePop");

    // for (var i = 0; i < 8; i++) {
    //   //get the pop point ID (pop1 - pop8)
    //   var indexer = "pop" + (i + 1);
    //   const el = document.getElementById(indexer);

    //   //set and restart the animation
    //   el.style.display = "none"; // Remove the element from the flow
    //   void el.offsetHeight; // Force a reflow
    //   el.style.display = "flex";
    // }
    popPoints.forEach(({ pointName, direction }) => {
      const animationString = `${direction} ${animationTime} ${animationStyle}`;

      const popPointElement = document.getElementById(pointName);

      if (popPointElement) {
        popPointElement.style.display = "none"; // Remove the element from the flow
        void popPointElement.offsetHeight; // Force a reflow
        popPointElement.style.display = "flex";
        popPointElement.style.animation = animationString;
      }
      console.log("popPointElement = ", popPointElement);
      console.log("popPointElement.style = ", popPointElement.style);
    });
  };

  const [popped, setPopped] = useState(false);

  // useEffect(() => {
  //   if (popped) {
  //     popAnimation;
  //     setPopped(false);
  //   }
  // }, [popped]);

  const handleBubbleClick = (event) => {
    new Audio(bubblePop2).play();
    // new Audio(bubblePop).play();
    const bubble = event.currentTarget; //handle the bubble div (current target refers to the element to which div handler is attached)
    // console.log(bubble);
    const bubbleImage = bubble.querySelector(".bubbleImage");
    const bubbleName = bubble.querySelector(".projectName");
    // const bubblePop = bubble.querySelector(".bubblePop");
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
      bubble.style.opacity = "0";
      bubbleName.style.display = "none";
      // bubblePop.style.display = "initial";
      // bubblePop.style.opacity = "1";
    }, 300);

    setPopped(true);
    popAnimation();

    // setTimeout(() => {
    // bubblePop.style.opacity = "1";
    // bubblePop.style.animation = `${popAfter} 5s ease`;
    // bubblePop.style.transition = "transform 5s";
    // }, 800);

    // return popAnimation();
  };

  return (
    <>
      <div className="bubbleContainer" onClick={handleBubbleClick}>
        <div className="bubbles">
          <span className="bubbleLighting"></span>
          <img src={image} alt="bubbleImage" className="bubbleImage" />
        </div>
        {popPoints.map((popPoint, index) => {
          // const animationString =
          //   popPoint.direction + " " + animationTime + " " + animationStyle;
          // const animationString = `${popPoint.direction} ${animationTime} ${animationStyle}`;
          // console.log("animationString = ", animationString);
          console.log("id =", popPoint.pointName);

          <div
            key={index}
            id={popPoint.pointName}
            className="bubblePop"
            // style={{ animation: animationString }}
          />;
          const poppers = document.getElementById(popPoint.pointName);
          // console.log("doc.getElement = ", poppers);
          // console.log("poppers.style = ", poppers.style);
        })}
        {/* {popped && <div className="bubblePop"></div>} */}
        {/* {popAnimation()} */}
        <p className="projectName">{project}</p>
      </div>
    </>
  );
}
