import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ROUTE_PATH from "constant/routePath";

import Diary from "Pages/Diary";
import Achieve from "Pages/Achieve";

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTE_PATH.home} component={Diary} />
        <Route path={ROUTE_PATH.achieve} component={Achieve} />
      </Switch>

      {/* <MenuButton /> */}
    </Router>
  );
}

export default Routes;
