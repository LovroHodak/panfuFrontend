import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

import "./App.css";

import Home from "./pages/Home";
import Music from "./pages/Music";
import Gallery from "./pages/Gallery";
import GetInTouch from "./pages/GetInTouch";
import Admin from "./pages/Admin";

import Navv from "./components/Navv";
import GigGallery from "./pages/GigGallery";
import MembersGallery from "./pages/MembersGallery";

function App() {
  return (
    <div className="App">
      <Navv />
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Home />;
          }}
        />
        <Route
          exact
          path="/music"
          render={() => {
            return <Music />;
          }}
        />
        <Route
          exact
          path="/gallery"
          render={() => {
            return <Gallery />;
          }}
        />
        <Route
          exact
          path="/contact"
          render={() => {
            return <GetInTouch />;
          }}
        />
        <Route
          exact
          path="/gallery/gig-2017"
          render={() => {
            return <GigGallery />;
          }}
        />
        <Route
          exact
          path="/gallery/members"
          render={() => {
            return <MembersGallery />;
          }}
        />
        <Route
          exact
          path="/admin"
          render={() => {
            return <Admin />;
          }}
        />
      </Switch>
    </div>
  );
}

export default withRouter(App);
