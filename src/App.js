import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./assets/css/style.css";
import Header from "./components/Header";
import routes from "./utils/routes";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          );
        })}
      </Switch>
    </Router>
  );
}

export default App;
