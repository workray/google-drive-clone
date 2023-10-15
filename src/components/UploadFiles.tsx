import React from "react";
import Button from "./common/Button";

export default function UploadFiles() {
  return (
    <div className="m-4">
      <Button title="Add a File" btnClass="btn-success" />
      <Button title="Create a Folder" btnClass="btn-success" />
    </div>
  );
}
