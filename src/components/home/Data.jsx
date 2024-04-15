import React from "react";
import { TypeAnimation } from "react-type-animation";

const Data = () => {
  return (
    <div
      className="flex flex-col justify-center items-center h-screen"
      style={{
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "#000000", margin: "0" }}>
        Welcome to my website!
      </h1>

      <TypeAnimation
        sequence={[
          "I am a Frontend Engineer.", // Text
          3000, // Delay in ms
          "I am a Security Engineer.", // Text
          3000, // Delay in ms
        ]}
        wrapper="h2"
        style={{
          fontSize: "2rem", // Smaller than the welcome message
          fontWeight: "normal", // Not bold
          color: "#000000",
          paddingTop: "1rem",
        }}
        cursor={true}
        repeat={Infinity}
      />
    </div>
  );
};

export default Data;
