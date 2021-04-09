import React from "react";

import "./UserSettings.css";
import Button from "@material-ui/core/Button";

const UserSettings = () => {
  return (
    <main>
      <div className="main__container">
        <div className="main__title">
          <h3>User Settings</h3>
        </div>

        <div className="main__cards">
          <div className="card">
            <i
              className="fa fa-user-o fa-2x text-lightblue"
              aria-hidden="true"
            ></i>
            <div className="card_inner">
              <p className="text-title">Chrysa Alexopoulou</p>
              <span className="text">c.alexopolou@liquidmedia.gr</span>
              <span className="text">Liquid Media</span>
            </div>
          </div>

          <div className="card2">
            <div className="main__title">
              <h4>Change Password</h4>
            </div>
            <div className="old-password-area">
              <h4 id="input-text">Old Password*</h4>
              <input type="text" className="input-field" />
            </div>
            <div className="new-confirm-password-area">
              <div className="new-password-area">
                <h4 id="input-text">New Password*</h4>
                <input type="password" className="input-field" />
              </div>
              <div className="confirm-password-area">
                <h4 id="input-text">Confirm New Password*</h4>
                <input type="password" className="input-field" />
              </div>
            </div>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#F67A6F",
                color: "white",
                textTransform: "capitalize",
                marginTop: "5px",
              }}
            >
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default UserSettings;
