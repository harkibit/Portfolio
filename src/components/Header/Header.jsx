import React from "react";
import Typography from "@material-ui/core/Typography";
import "./Header.css";
import ButtonComp from "../Button/Button";
import Particle from "../Particles/Particles";
import HeaderText from "../HeaderText/HeaderText";
import DownloadLink from "react-download-link";
import resume from "../../assets/resume.pdf"

export default function Header() {
  return (
    <div className="header">
      <div className="header-text">
        <Typography variant="h4" gutterBottom className="gray-text">
          Hiba Abdel Karim
        </Typography>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          className="job-title"
        >
          <HeaderText />
        </Typography>
        <DownloadLink
          label={<ButtonComp text="Download resume" onclick={onclick} />}
          filename="https://docs.google.com/document/d/19s42W70w8EqQSCcyF1T5VBSMD90FHhcF0-x7FzdaGjk/edit?usp=sharing"
          exportFile={() => "My cached data"}
        />
      </div>
      <div className="particles-div">
        <Particle />
        <Particle />
      </div>
    </div>
  );
}
