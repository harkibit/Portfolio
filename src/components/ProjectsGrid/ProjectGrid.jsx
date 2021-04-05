import React from "react";
import Project from "../Project/Project";
import "./Projects.css";
import projects from "../../data/projects.json"

export default function ProjectGrid() {
  return (
    <div className="projects">
      {
          projects.map( p => {
              return <Project name = {p.name} description = {p.description}/>
          })
      }
    </div>
  );
}
