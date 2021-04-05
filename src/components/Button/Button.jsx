import React from "react";
import "./Button.css"
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

export default function ButtonComp({ text, onclick }) {
  return (
      <button className = "btn-style" onClick = {onclick}>
        {text}
      </button>
  );
}
