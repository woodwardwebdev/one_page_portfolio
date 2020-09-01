import React from "react";
import DisplayWindow from "./DisplayWindow";
import MyAppBar from "./MyAppBar";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const displayNames = {
  about: "- About",
  skills: "- Skills",
  projects: "- Projects",
  contact: "- Contact",
  bonus: "- Bonus Recipes",
};

export default function Page() {
  const [location, setLocation] = React.useState("");
  const isBig = useMediaQuery("(min-width:900px)");
  const isMed = useMediaQuery("(min-width:600px)");
  const isSmall = useMediaQuery("(max-width:599px)");
  const media = { isBig, isMed, isSmall };
  const changeLocation = (newLocation) => {
    const loc = newLocation.substring(1);
    setLocation(displayNames[loc] || "- Projects");
  };
  return (
    <div className="fullscreen">
      <MyAppBar location={location} media={media} />
      <div className="page">
        <DisplayWindow changeLocation={changeLocation} media={media} />
      </div>
    </div>
  );
}
