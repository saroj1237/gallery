import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect, useLocation
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
import { AnimatePresence, motion } from "framer-motion";
import AnimatedRoute from "./utils/routes/AnimatedRoute";

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

  const location = useLocation();

  if (isLoading) return <Loading />;

  return (
   
      <AppContext.Provider value={[isLoggedIn, user]}>
        <Header />
        <AnimatePresence exitBeforeEnter initial={false} >
          <Switch key={location.pathname} location={location}>
            {routes.map((route, index) => {
              if (route.protected === "guest") {
                return (
                  <GuestRoute key={index} path={route.path} exact={route.exact}>
                    <route.component></route.component>
                  </GuestRoute>
                );
              }
              if (route.protected === "auth") {
                return (
                  <AuthRoute key={index} path={route.path} exact={route.exact}>
                    <route.component />
                  </AuthRoute>
                );
              }
              return (
                <AnimatedRoute
                  key={index}
                  path={route.path}
                  exact={route.exact}
                >
                  <route.component />
                </AnimatedRoute>
              );
            })}
            return (
            <Route path="*">
              <NotFound />
            </Route>
            )
          </Switch>
        </AnimatePresence>
      </AppContext.Provider>

  );
}

export default App;
