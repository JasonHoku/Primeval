import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Pages

import HomeDashboard from "./Home/";
import ShopPage from "./Shop/";
import GalleryPage from "./Gallery/";
import ShopGalleryPage from "./ShopGallery/";
import Music from "./Music/";
import Contact from "./Contact/";
import About from "./About/";
import Cart from "./Cart/";
import Account from "./Account/";
// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppFooter from "../../Layout/AppFooter/";

import AppSidebar from "../../Layout/AppSidebar/";
// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";

const Dashboards = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route path={`${match.url}/home`} component={HomeDashboard} />
          <Route path={`${match.url}/shop`} component={ShopPage} />
          <Route
            path={`${match.url}/shopgallery`}
            component={ShopGalleryPage}
          />
          <Route path={`${match.url}/gallery`} component={GalleryPage} />
          <Route path={`${match.url}/music`} component={Music} />
          <Route path={`${match.url}/contact`} component={Contact} />
          <Route path={`${match.url}/about`} component={About} />
          <Route path={`${match.url}/Cart`} component={Cart} />
          <Route path={`${match.url}/Account`} component={Account} />
        </div>
      </div>
    </div>
  </Fragment>
);

export default Dashboards;
