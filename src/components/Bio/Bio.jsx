import React from "react";
import Typography from "@material-ui/core/Typography";
import "./Bio.css";
import SendIcon from "@material-ui/icons/Send";
import { AnimateGroup } from 'react-animation'


export default function Bio() {
  const skills = ["Reactjs", "HTML", "CSS","SASS", "LESS", "Teamwork", "Responsive design", "Good eye for design"]
  return (
    <div className="bio">
      <Typography variant="h3" component="h3" gutterBottom>
        Hi
      </Typography>
      <Typography variant="h5" component="h5" gutterBottom className="bio-text">
        I'm Hiba, an enthusiastic front-end web developer who brings mock-ups to
        life using HTML5, CSS3, JavaScript and React. Focused on building
        websites and apps that are responsive and reusable. Ability to work
        independently with a knack for collaborating closely with the team to
        support projects during all phases of delivery and maintaining an
        organized workflow using a project management tool (like GitHub).
      </Typography>
      <Typography variant="h3" component="h3" gutterBottom>
        Top skills
      </Typography>
      <ul>
        <AnimateGroup animation="bounce">
          {skills.map(word => (<li key={word}>
            {word}
          </li>))}
        </AnimateGroup>
      </ul>
      <Typography
        variant="h5"
        component="h5"
        className="primary-text-color"
        gutterBottom
      >
        <div className="send-msg">
          <SendIcon /> &nbsp;Send me a message
        </div>
      </Typography>
    </div>
  );
}
