import React from "react";
import DisplayWindow from "./DisplayWindow";
import MyAppBar from "./MyAppBar";

export default function Page() {
  return (
    <div className="fullscreen">
      <MyAppBar />
      <div className="page">
        <DisplayWindow />
      </div>
    </div>
  );
}
