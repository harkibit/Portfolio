import React from "react";
import Header from "../../components/Header/Header";
import ProjectGrid from "../../components/ProjectsGrid/ProjectGrid";
import BioPage from "../Bio/BioPage";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <Header />
      <ProjectGrid/>
      <BioPage/>
    </div>
  );
}
