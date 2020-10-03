import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Chat from "./components/Chat/Chat";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import { useStateValue } from "./StateProvider";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    //BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <div className="app_body_main">
            <Router>
              <Sidebar />
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chat />
                </Route>
                <Route path="/">{/* <Chat /> */}</Route>
              </Switch>
            </Router>
          </div>
          <div className="app_body_footer">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
