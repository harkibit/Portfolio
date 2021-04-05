import React from "react";
import Typography from "@material-ui/core/Typography";
import "./Bio.css";

export default function Bio() {
  return (
    <div className="bio">
      <Typography variant="h3" component="h3" gutterBottom>
        Hi <br />
      </Typography>
      <Typography variant="h5" component="h5" gutterBottom>
        I'm Hiba, an enthusiastic front-end web developer who brings mock-ups to
        life using HTML5, CSS3, JavaScript and React. Focused on building
        websites and apps that are responsive and reusable. Ability to work
        independently with a knack for collaborating closely with the team to
        support projects during all phases of delivery and maintaining an
        organized workflow using a project management tool (like GitHub).
      </Typography>
      <Typography
        variant="h5"
        component="h5"
        className="primary-text-color"
        gutterBottom
      >
        Send me a message
      </Typography>
    </div>
  );
}
