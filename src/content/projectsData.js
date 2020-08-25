import colors from "../img/project_imgs/hero/colors.png";
import discord from "../img/project_imgs/hero/discord.png";
import mileage from "../img/project_imgs/hero/mileage.png";
import movies from "../img/project_imgs/hero/movies.png";
import opinionrated from "../img/project_imgs/hero/opinionrated.png";
import shopping from "../img/project_imgs/hero/shopping.png";

const projectsData = [
  {
    img: colors,
    title: "Color Picker App",
    author: "Colin Woodward",
    cols: 1,
    gitLink: "https://github.com/woodwardwebdev/color_picker_app",
    liveLink: "http://www.google.co.uk",
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
    img: discord,
    title: "Discord Bot",
    author: "Colin Woodward",
    cols: 1,
    gitLink: "https://github.com/woodwardwebdev/kick_darrack_discord_bot",
    liveLink: "",
    descText:
      "This node.js app creates a bot on a Discord server that kicks a specific player every Monday at a set time. I built this to fix the problem of a player logging in with a new disposable account each week and clogging up the member roster.",
    improvements: [
      "Add other functional abilities to show server information",
      "Add sound effect or music playback capabilities",
    ],
  },
  {
    img: mileage,
    title: "Mileage Tracker With Google API",
    author: "Colin Woodward",
    cols: 1,
    gitLink: "https://github.com/woodwardwebdev/travelapp",
    liveLink: "",
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
    title: "Movie Search using API",
    author: "Colin Woodward",
    cols: 1,
    gitLink: "https://github.com/woodwardwebdev/movie_search",
    liveLink: "",
    descText:
      "This app was built in Express using ejs templating. It uses an open movie database API to let the user search for a movie title and see the cover image and more information about the top ten results related to their search. This was the first app I finished that I consider fully useful and functional.",
    improvements: [
      "Add function to find site to purchase or watch selected movie on",
      "Expand service to search for books or video games",
      "Allow user to choose how many results are shown, rather than a hard coded ten",
    ],
  },
  {
    img: opinionrated,
    title: "Opinionrated! - A question and answer voting app",
    author: "Colin Woodward",
    cols: 1,
    gitLink: "https://github.com/woodwardwebdev/opinionrated_backend",
    liveLink: "",
    descText:
      "I built this app in React with a node.js / MongoDB backend. It allows users to create anonymous questions, to be answered by other users. After this, all users can see the answers to questions, randomly chosen and vote on whether they agree or disagree with that opinion. Only after they have voted can they see who wrote the response. This app taught me a lot about relations in databases and thinking logically through data structures and how best to pass those through the component tree.",
    improvements: ["Implement accounts and authentication", "Improve styling"],
  },
  {
    img: shopping,
    title: "Shopping List",
    author: "Colin Woodward",
    cols: 1,
    gitLink: "",
    liveLink: "",
    descText:
      "This is a simple To-Do app re-skinned to be a shopping list. I don't think this could be a Junior Dev portfolio without one of these, so here it is! Built with React.",
    improvements: [
      "Allow user to create an order relating to the layout of their supermarket, then sort items by category in order of that list",
      "Move ticked off items to the bottom of the list",
    ],
  },
];

export default projectsData;
