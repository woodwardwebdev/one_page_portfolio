import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    // primary: { 500: "#467fcf" },
    primary: { 500: "#23FF40" },
    type: "dark",
  },
  typography: {
    fontFamily: "Lato, Cutive Mono, Helvetica, Sans-serif",
    h5: { fontWeight: "bold" },
    body2: { letterSpacing: "0.1em" },
  },
});
export default theme;
