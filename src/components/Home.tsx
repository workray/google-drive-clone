import React from "react";
import styles from "./Home.module.scss";
import Topbar from "./Topbar";
import UploadFiles from "./UploadFiles";

export default function HomeComponent() {
  return (
    <div>
      <Topbar />

      <UploadFiles />
    </div>
  );
}
