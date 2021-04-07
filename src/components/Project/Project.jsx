import React from "react";
import Sign from "../Sign/Sign";
import "./Project.css";
import Typography from "@material-ui/core/Typography";
import ButtonComp from "../Button/Button";
import ProjectCard from "../ProjectCard/ProjectCard"

export default function Project(props) {
  const {name, description, image} = props
  return (
    <div className="project">
      <div className = "project-description">
        <Sign />
        <div>
        <Typography variant="h4" component="h4" gutterBottom>
          {name}
        </Typography>
        <Typography variant="h6" component="h6" gutterBottom className = "gray-text">
          {description}
        </Typography>
        </div>
        <ButtonComp text = "See project"/>
      </div>
      <div>
        {/* <ProjectCard/> */}
      </div>
    </div>
  );
}
