import React from "react";
import Project from "../Project/Project";
import "./Projects.css";

export default function ProjectGrid() {
  return (
    <div className="projects">
      <Project
        name="Discover north lebanon"
        description="Discover North Lebanon is a web based application. It allows you to explore different cities and activities that can be done in north Lebanon."
      />
      <Project />
      <Project />
      <Project />
    </div>
  );
}
