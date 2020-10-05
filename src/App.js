import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./assets/css/style.css";
import Header from "./components/Header";
import routes from "./utils/routes/index";
import firebase from "./config/firebase";
import AppContext from "./store/AppContext";
import AuthRoute from "./utils/routes/AuthRoute";
import GuestRoute from "./utils/routes/GuestRoute";
import Loading from "./components/Loading";
import NotFound from "./page/NotFound";

function App() {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [user, setuser] = useState({});

  useEffect(() => {
    setisLoading(true);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setisLoading(false);
        setisLoggedIn(true);
        setuser(user);
        console.log(user);
      } else {
        setisLoading(false);
        setuser({});
        setisLoggedIn(false);
      }
    });
  }, []);

  if (isLoading) return <Loading />;

  return (
    <Router>
      <AppContext.Provider value={[isLoggedIn, user]}>
        <Header />
        <Switch>
          {routes.map((route, index) => {
            if (route.protected === "guest") {
              return (
                <GuestRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            }
            if (route.protected === "auth") {
              return (
                <AuthRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                />
              );
            }
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            );
          })}
          return (
          <Route path="*">
            <NotFound />
          </Route>
          )
        </Switch>
      </AppContext.Provider>
    </Router>
  );
}

export default App;
