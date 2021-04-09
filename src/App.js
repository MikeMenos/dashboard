import { useState } from "react";
import "./App.css";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import Campaigns from "./components/campaigns/Campaigns";
import Billing from "./components/billing/Billing";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faGoogle,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

// import Login from "./components/login/Login";
import UserSettings from "./components/userSettings/UserSettings";

library.add(faBell, faSearch, faGoogle, faFacebook, faTwitter);

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const [containerOpen, setcontainerOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(!sidebarOpen);
    setcontainerOpen(!containerOpen);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
    setcontainerOpen(false);
    console.log("clicked");
  };

  return (
    <Router>
      <div className={containerOpen ? "container" : "container_closed"}>
        <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        <Switch>
          <Route
            path="/"
            component={() => <Main closeSidebar={closeSidebar} />}
            exact
          />
          <Route
            path="/campaigns"
            component={() => <Campaigns closeSidebar={closeSidebar} />}
            exact
          />
          <Route
            path="/billing"
            component={() => <Billing closeSidebar={closeSidebar} />}
            exact
          />
          <Route
            path="/usersettings"
            component={() => <UserSettings closeSidebar={closeSidebar} />}
            exact
          />
        </Switch>
        <Sidebar
          sidebarOpen={sidebarOpen}
          openSidebar={openSidebar}
          closeSidebar={closeSidebar}
        />
      </div>
      {/* <Login /> */}
    </Router>
  );
};

export default App;
