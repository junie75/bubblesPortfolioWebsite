import React from "react";
import styled, { keyframes } from "styled-components";
import bubblePop2 from "./assets/bubblePop2.mp4";

const FloatingText = ({
  text,
  viewProjectsClicked,
  setViewProjectsClicked,
  navigate,
}) => {
  const popSound = new Audio(bubblePop2);
  popSound.preload = "auto";
  if (viewProjectsClicked) {
    const spans = document.querySelectorAll(".floatingSpan");

    // pop each remaining bubble letter when the view projects button is clicked
    spans.forEach((span, index) => {
      if (span.style.opacity !== "0") {
        // pop the bubble letter one at a time in order
        setTimeout(() => {
          // span.style.animation =
          //   "pop 80ms cubic-bezier(0.16, 0.87, 0.48, 0.99) forwards";
          span.classList.add("bubble-pop");
          span.style.opacity = "0";
          // const audio = new Audio(bubblePop2);
          popSound.currentTime = 0; //reset the audio to the beginning
          popSound.play();
        }, index * 100);
        // setViewProjectsClicked(false);
      }
    });

    // navigate to the projects page after all spans have popped
    const totalAnimationTime = spans.length * 100 + 300;
    setTimeout(() => {
      navigate("/projects");
      setViewProjectsClicked(false);
    }, totalAnimationTime);
  }

  const handleBubbleClick = (event) => {
    const bubble = event.currentTarget; //handle the bubble div (current target refers to the element to which div handler is attached)

    // if the bubble is not already popped and the bubble is not a space apply the pop animation
    if (bubble.style.opacity != "0" && bubble.textContent != "\u00A0") {
      // new Audio(bubblePop2).play();
      popSound.play();
      bubble.style.animation = `pop 80ms cubic-bezier(0.16, 0.87, 0.48, 0.99) forwards`;
      console.log(bubble.style.animation);

      // set the opacity of the bubble to 0 after the pop animation
      setTimeout(() => {
        bubble.style.opacity = "0";
        bubble.style.cursor = "default";
      }, 300);
    }
  };

  // split the text into two lines
  // const splitText = text.split(" ");
  // const firstLine = splitText[0].split("");
  // // add a space to the end of the first line
  // firstLine.push(" ");
  // const secondLine = splitText[1].split("");

  function splitTextIntoLines(text) {
    // Split the text into an array of words
    const words = text.split(" ");

    // Create an array to hold the split lines
    const lines = [];

    // Loop through each word and split it into characters
    for (let word of words) {
      const line = word.split(""); // Split word into characters
      line.push(" "); // Optionally, add a space to the end of the word
      lines.push(line); // Push the line to the lines array
    }

    return lines;
  }

  //   return (
  //     <div className="floatingText">
  //       {text.split("").map((char, index) => (
  //         <div
  //           key={index}
  //           // delay={index * 0.3}
  //           onClick={handleBubbleClick}
  //           className="floatingSpan"
  //           style={{ animationDelay: `${index * 0.3}s` }}
  //         >
  //           {char === " " ? "\u00A0" : char}
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };

  //   return (
  //     <div className="floatingText">
  //       <div className="floatingLine">
  //         {firstLine.map((char, index) => (
  //           <div
  //             key={index}
  //             onClick={handleBubbleClick}
  //             className="floatingSpan"
  //             style={{ animationDelay: `${index * 0.3}s` }}
  //           >
  //             {char === " " ? "\u00A0" : char}
  //           </div>
  //         ))}
  //       </div>
  //       <div className="floatingLine">
  //         {secondLine.map((char, index) => (
  //           <div
  //             key={index}
  //             onClick={handleBubbleClick}
  //             className="floatingSpan"
  //             style={{ animationDelay: `${index * 0.3}s` }}
  //           >
  //             {char === " " ? "\u00A0" : char}
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };

  const lines = splitTextIntoLines(text);

  return (
    <div className="floatingText">
      {lines.map((line, lineIndex) => (
        <div key={lineIndex} className="floatingLine">
          {line.map((char, charIndex) => (
            <div
              key={charIndex}
              onClick={handleBubbleClick}
              className="floatingSpan"
              style={{ animationDelay: `${charIndex * 0.3}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default FloatingText;
