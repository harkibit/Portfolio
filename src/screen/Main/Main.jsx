import React from "react";
import Header from "../../components/Header/Header";
import ProjectGrid from "../../components/ProjectsGrid/ProjectGrid";
import BioPage from "../Bio/BioPage";
import "./Main.css";

export default function Main() {
  const onclick = () => {};
  return (
    <div className="bio-page">
      <Header />
      <ProjectGrid/>
      <BioPage/>

    </div>
  );
}
