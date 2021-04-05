// Complete React Code
import React from "react";
import Particles from "react-particles-js";
import "./Particles.css";
export default function Particle() {
  return (
    <div className="particle">
      <Particles
        style={{
          width: "100%",
          height: "100%",
        }}
        params={{
          particles: {},
          line_linked: {
            shadow: {
              enable: true,
              color: "#3CA9D1",
              blur: 1
            }
          }
        }}
      />
    </div>
  );
}
