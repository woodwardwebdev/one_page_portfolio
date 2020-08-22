import React from "react";
import DisplayWindow from "./DisplayWindow";
import MyAppBar from "./MyAppBar";

export default function Page() {
  return (
    <div className="fullscreen">
      <MyAppBar />
      <div class="page">
        <DisplayWindow />
      </div>
    </div>
  );
}
