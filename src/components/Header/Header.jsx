import React from "react";
import Typography from "@material-ui/core/Typography";
import "./Header.css";
import ButtonComp from "../Button/Button";
import Cube from "../Cube/Cube";

export default function Header() {
  return (
    <div className="header">
      <Cube />
      <Typography variant="h3" gutterBottom>
        Hiba Abdel Karim
      </Typography>
      <Typography variant="h1" component="h1" gutterBottom>
        Front End web developer
      </Typography>
      <ButtonComp text="Download my Cv" onclick={onclick} />
    </div>
  );
}
