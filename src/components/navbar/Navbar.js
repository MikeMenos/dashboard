import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import avatar from "../../assets/avatar.svg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const Navbar = ({ openSidebar, sidebarOpen }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <nav className="navbar">
      <div className="navbar__left">
        <div className="nav_icon">
          <i
            onClick={() => {
              openSidebar();
            }}
            className="fa fa-bars"
            aria-hidden="true"
          ></i>

          <FontAwesomeIcon
            icon={["fas", "search"]}
            id={sidebarOpen ? "search-icon" : "search-icon_closed"}
          />
          <form className="search-form">
            <input
              className="form-control search-bar"
              placeholder="Search..."
              type="text"
            />
          </form>
        </div>
      </div>

      <div className="navbar__right">
        <FontAwesomeIcon icon={["far", "bell"]} style={{ cursor: "pointer" }} />
        <img
          src={avatar}
          alt=""
          id="avatar"
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{ cursor: "pointer" }}
        />
        <Button
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          style={{ textTransform: "Capitalize" }}
          id="namebutton"
        >
          Mike Menos
        </Button>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
          style={{ width: "12%", marginTop: "10px" }}
          id="popper"
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <Link
                      to="/usersettings"
                      style={{ textDecoration: "none", color: "#2e4a66" }}
                    >
                      <MenuItem onClick={handleClose}>User Settings</MenuItem>
                    </Link>

                    <MenuItem
                      onClick={handleClose}
                      style={{ color: "#2e4a66" }}
                    >
                      Logout
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </nav>
  );
};

export default Navbar;
