import React from "react";
import DisplayWindow from "./DisplayWindow";
import MyAppBar from "./MyAppBar";

export default function Page() {
  return (
    <div>
      <MyAppBar />
      <div className="page">
        <DisplayWindow />
      </div>
    </div>
  );
}
