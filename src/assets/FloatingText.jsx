import React from "react";
import styled, { keyframes } from "styled-components";
import bubblePop2 from "./bubblePop2.mp4";

const floating = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
`;

const pop = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
`;

const FloatingSpan = styled.span`
  display: inline-block;
  font-size: 110px;
  font-family: "RubberDuck", sans-serif;
  // color: #fff;
  color: #ffffff00;
  // text-shadow: 5px 5px 5px var(--secondary-color);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(255, 255, 255, 1);
  text-shadow: 0 0 1px rgba(255, 255, 255, 0.1);
  // text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
  animation: ${floating} 5s ease-in-out infinite;
  animation-delay: ${(props) => props.delay}s;
  transition: transform 0.3s, text-shadow 200ms;
  cursor: pointer;
  opacity: 1;

  &:hover {
    // color: linear-gradient(90deg, #8c52ff, #ff914d);
    // text-shadow: 50px 50px 10px rgba(255, 250, 239, 0.8);
    text-shadow: 0 0 10px rgba(255, 255, 255, 0);
  }
`;

const FloatingText = ({
  text,
  viewProjectsClicked,
  setViewProjectsClicked,
  navigate,
}) => {
  if (viewProjectsClicked) {
    const spans = document.querySelectorAll(".floatingSpan");
    spans.forEach((span, index) => {
      if (span.style.opacity !== "0") {
        setTimeout(() => {
          span.style.animation =
            "pop 80ms cubic-bezier(0.16, 0.87, 0.48, 0.99) forwards";
          span.style.opacity = "0";
          const audio = new Audio(bubblePop2);
          audio.play();
        }, index * 100);
        setViewProjectsClicked(false);
      }
    });

    // navigate to the projects page after all spans have popped
    setTimeout(() => {
      navigate("/projects");
      setViewProjectsClicked(false);
    }, spans.length * 100 + 300);
  }

  const handleBubbleClick = (event) => {
    // new Audio(bubblePop).play();
    const bubble = event.currentTarget; //handle the bubble div (current target refers to the element to which div handler is attached)
    console.log(bubble);
    if (bubble.style.opacity != "0" && bubble.textContent != "\u00A0") {
      new Audio(bubblePop2).play();
      // console.log(bubble);
      // const bubbleImage = bubble.querySelector(".bubbleImage");
      // const bubbleName = bubble.querySelector(".projectName");
      // bubble.style.transform = "scale(5)";
      // bubble.style.opacity = "0";

      bubble.style.animation = `pop 80ms cubic-bezier(0.16, 0.87, 0.48, 0.99) forwards`;
      console.log(bubble.style.animation);

      setTimeout(() => {
        bubble.style.opacity = "0";
        bubble.style.cursor = "default";
      }, 300);
    }
    // if (bubbleImage) {
    //   bubbleImage.style.opacity = "0";
    // }
    // if (bubbleName) {
    //   bubbleName.style.opacity = "0";
    // }
  };

  return (
    <div className="floatingText">
      {text.split("").map((char, index) => (
        <FloatingSpan
          key={index}
          delay={index * 0.3}
          onClick={handleBubbleClick}
          className="floatingSpan"
        >
          {char === " " ? "\u00A0" : char}
        </FloatingSpan>
      ))}
    </div>
  );
};

export default FloatingText;
