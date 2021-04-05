import React from "react";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

export default function ButtonComp({text, onclick}) {
  return (
    <div>
      <Button
        variant="contained"
        color="secondary"
        startIcon={<CloudUploadIcon />}
        size="large"
        onClick={onclick}
      >
        {text}
      </Button>
    </div>
  );
}
