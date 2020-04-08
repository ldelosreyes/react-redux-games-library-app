import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  Header,
  HomePage,
  GamesPage,
  ManageGamePage,
  AboutPage,
  PageNotFound
} from "./";
import { HOME_PAGE, ABOUT_PAGE, GAMES_PAGE } from "../shared";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path={HOME_PAGE} component={HomePage} />
        <Route path={ABOUT_PAGE} component={AboutPage} />
        <Route path={GAMES_PAGE} component={GamesPage} />
        <Route path="/game/:slug" component={ManageGamePage} />
        <Route path="/game" component={ManageGamePage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
