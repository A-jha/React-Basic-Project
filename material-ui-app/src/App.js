import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Notes from "./Pages/Notes";

import Create from "./Pages/Create";

import { createTheme, ThemeProvider } from "@material-ui/core";

import { purple } from "@material-ui/core/colors";

import { Layout } from "./Components/Layout";

import { TemporaryDrawer } from "./Components/Drawer";
const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    secondary: purple,
  },
  typography: {
    fontFamily: "Kufam",
  },
});

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Notes />
            </Route>
            <Route exact path="/create">
              <Create />
            </Route>
            <Route exact path="/drawer">
              <TemporaryDrawer />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};
