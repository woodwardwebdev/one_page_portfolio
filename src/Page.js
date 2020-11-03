import React from "react";
import DisplayWindow from "./DisplayWindow";
import MyAppBar from "./MyAppBar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Prismic from "prismic-javascript";
import { Client } from './prismic-configuration'

const displayNames = {
  about: "- About",
  skills: "- Skills",
  projects: "- Projects",
  contact: "- Contact",
  bonus: "- Bonus Recipes",
};

export default function Page({ props }) {
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
        <DisplayWindow changeLocation={changeLocation} media={media} blogs={props} />
      </div>
    </div>
  );
}

Page.getInitialProps = async (ctx) => {
  const req = ctx.req
  const page = await Client(req).query(
    Prismic.Predicates.at('document.type', 'blog_post'),
    { orderings: '[my.blog_post.date desc]' }

  )
  console.log(page)
  return { props: page }
}
