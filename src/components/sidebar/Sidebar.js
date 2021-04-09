import "./Sidebar.css";
import logo from "../../assets/logo.png";
import logo2 from "../../assets/logo2.png";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
  return (
    <div
      id="sidebar"
      className={
        sidebarOpen ? "sidebar_responsive" : "sidebar_responsive_closed"
      }
    >
      <div className={sidebarOpen ? "sidebar__img" : "sidebar__img_closed"}>
        {sidebarOpen ? (
          <img src={logo} alt="logo" />
        ) : (
          <img src={logo2} alt="logo" />
        )}
      </div>
      <div className={sidebarOpen ? "sidebar__menu" : "sidebar__menu_closed"}>
        <div className={sidebarOpen ? "sidebar__link" : "sidebar__link_closed"}>
          <Link
            to="/"
            onClick={() => {
              closeSidebar();
            }}
          >
            <i className="fa fa-home"></i>
            <span>Dashboard</span>
          </Link>
        </div>
        <div className={sidebarOpen ? "sidebar__link" : "sidebar__link_closed"}>
          <Link
            to="/campaigns"
            onClick={() => {
              closeSidebar();
            }}
          >
            <i className="fa fa-bullhorn"></i>
            <span>Campaigns</span>
          </Link>
        </div>
        <div className={sidebarOpen ? "sidebar__link" : "sidebar__link_closed"}>
          <Link
            to="/billing"
            onClick={() => {
              closeSidebar();
            }}
          >
            <i className="fa fa-money"></i>
            <span>Billing</span>
          </Link>
        </div>
        {/* <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <a href="#">Log out</a>
        </div> */}
      </div>
    </div>
  );
};

export default Sidebar;
