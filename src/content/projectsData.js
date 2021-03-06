import brochure from '../img/project_imgs/hero/brochure.png'
import colors from "../img/project_imgs/hero/colors.png";
import discord from "../img/project_imgs/hero/discord.png";
import mileage from "../img/project_imgs/hero/mileage.png";
import movies from "../img/project_imgs/hero/movies.png";
import rada from '../img/project_imgs/hero/rada.png'
import {
  colorsImgs,
  discordImgs,
  mileageImgs,
  moviesImgs,
  radaImgs,
  brochureImgs
} from "../content/projectsImgs";

const projectsData = [
  {
    img: brochure,
    moreImgs: brochureImgs,
    title: "Brochure Site",
    slug: "brochure",
    author: "Colin Woodward",
    cols: 1,
    gitLink: "https://github.com/woodwardwebdev/brochure_site",
    liveLink: "https://brochure-site-one.vercel.app/",
    tech: ["Next.js"],
    descText:
      "A responsive multi-page brochure style site built using Next.js. The framework allows for server side rendering for speedy load times. The owner of the site can use a CMS provided by Prismic.io to write and add blogs to it.",
    improvements: [
      "More Interactive pages",
      "Style Tweaks",
      "Animations and polish",
      "Maps and widgets",
    ],
  },
  {
    img: colors,
    moreImgs: colorsImgs,
    title: "Color Picker App",
    slug: "colors",
    author: "Colin Woodward",
    cols: 1,
    gitLink: "https://github.com/woodwardwebdev/color_picker_app",
    liveLink: "https://cw-react-colors.netlify.app/",
    tech: ["React.js"],
    descText:
      "Built as a code-along, this app is a multi-page full featured React app. It allows the user to view color palettes, create their own and copy values directly to the clipboard.",
    improvements: [
      "Use a database instead of localstorage for palettes",
      "Implement accounts and authentication to allow storage",
      "Add a voting feature for community favourite palettes",
      "Add dark mode",
    ],
  },
  {
    img: rada,
    moreImgs: radaImgs,
    title: "RADA Grad Search",
    slug: "grad_search",
    author: "Colin Woodward",
    cols: 1,
    gitLink: "https://github.com/woodwardwebdev/grad_match",
    liveLink: "https://gradmatch.herokuapp.com/",
    tech: ["node.js", "Express"],
    descText:
      "This app takes in an IMDb 'full cast list' link and scrapes the page. It then displays a list of people in that film that graduated from RADA.",
    improvements: [
      "Technical roles were not easily scrapeable - could be improved",
      "Add filtering methods",
    ],
  },
  {
    img: discord,
    moreImgs: discordImgs,
    title: "Discord Bot",
    slug: "discord_bot",
    author: "Colin Woodward",
    cols: 1,
    gitLink: "https://github.com/woodwardwebdev/kick_darrack_discord_bot",
    liveLink: "",
    tech: ["node.js", "Express", "Discord API"],
    descText:
      "This node.js app creates a bot on a Discord server that kicks a specific player every Monday at a set time. I built this to fix the problem of a player logging in with a new disposable account each week and clogging up the member roster.",
    improvements: [
      "Add other functional abilities to show server information",
      "Add sound effect or music playback capabilities",
    ],
  },
  {
    img: mileage,
    moreImgs: mileageImgs,
    title: "Mileage Tracker With Google API",
    slug: "mileage_tracker",
    author: "Colin Woodward",
    cols: 1,
    gitLink: "https://github.com/woodwardwebdev/travelapp",
    liveLink: "",
    tech: [],
    descText:
      "I built this app to experiment with Google's Directions API. The app lets you pre-define locations of travel and stores them in the database. You can then choose any two of them and the app will use the API to calculate the mileage of the trip and store that as a Journey in the database. I learned a lot about API useage and environment variables while building this.",
    improvements: [
      "Host app on permanent server",
      "Create API to allow for a mobile app to push data to the server",
      "Use Twilio or another messaging service to send a text to remind user to update their mileage daily/weekly",
      "Look into integrating with a Calendar app to reference work days and remind or suggest mileage smartly",
    ],
  },
  {
    img: movies,
    moreImgs: moviesImgs,
    title: "Movie Search using API",
    slug: "movies",
    author: "Colin Woodward",
    cols: 1,
    gitLink: "https://github.com/woodwardwebdev/movie_search",
    liveLink: "https://movie-app-with-api.herokuapp.com/",
    tech: [],
    descText:
      "This app was built in Express using ejs templating. It uses an open movie database API to let the user search for a movie title and see the cover image and more information about the top ten results related to their search. This was the first app I finished that I consider fully useful and functional.",
    improvements: [
      "Add function to find site to purchase or watch selected movie on",
      "Expand service to search for books or video games",
      "Allow user to choose how many results are shown, rather than a hard coded ten",
    ],
  },

];

export default projectsData;
