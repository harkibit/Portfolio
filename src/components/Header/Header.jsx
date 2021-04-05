import React from "react";
import Typography from "@material-ui/core/Typography";
import "./Header.css";
import ButtonComp from "../Button/Button";
import { useFlipAnimation } from "react-easy-flip";
import Particle from "../Particles/Particles";

export default function Header() {
  return (
    <div className="header">
      <div className = "header-text">
        <Typography variant="h4" gutterBottom className = "gray-text">
          Hiba Abdel Karim
        </Typography>
        <Typography variant="h1" component="h1" gutterBottom className = "primary-text-color">
          Front End web developer
        </Typography>
        <ButtonComp text="Download resume" onclick={onclick} />
      </div>
      <div className = "particles-div">
        <Particle />
        <Particle />
      </div>
    </div>
  );
}
