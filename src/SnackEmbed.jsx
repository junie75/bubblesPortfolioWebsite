import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

const SnackEmbed = () => {
  //   useEffect(() => {
  //     const scriptId = "snack-embed-script";
  //     let script = document.getElementById(scriptId);

  //     if (!script) {
  //       script = document.createElement("script");
  //       script.id = scriptId;
  //       script.src = "https://snack.expo.dev/embed.js";
  //       script.async = true;
  //       document.body.appendChild(script);
  //     }

  //     return () => {
  //       if (script) {
  //         document.body.removeChild(script);
  //       }
  //     };
  //   }, []);

  return (
    <>
      <Helmet>
        <script src="https://snack.expo.dev/embed.js"></script>
      </Helmet>
      <div
        data-snack-id="@junie75/delivered"
        data-snack-platform="ios"
        data-snack-preview="true"
        data-snack-theme="light"
        style={{
          overflow: "hidden",
          background: "#fbfcfd",
          border: "1px solid var(--color-border)",
          borderRadius: "4px",
          height: "505px",
          width: "100%",
        }}
      ></div>
    </>
  );
};

export default SnackEmbed;
