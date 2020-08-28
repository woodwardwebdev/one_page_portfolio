import React from "react";
import DisplayWindow from "./DisplayWindow";
import MyAppBar from "./MyAppBar";

const displayNames = {
  about: "About",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact",
  bonus: "Bonus Recipes",
};

export default function Page() {
  const [location, setLocation] = React.useState("");
  const changeLocation = (newLocation) => {
    const loc = newLocation.substring(1);
    setLocation(displayNames[loc]);
  };
  return (
    <div className="fullscreen">
      <MyAppBar location={location} />
      <div className="page">
        <DisplayWindow changeLocation={changeLocation} />
      </div>
    </div>
  );
}
