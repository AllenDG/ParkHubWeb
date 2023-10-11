import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

//import images =================>
import logo from "../../assets/images/Logo.png";
import profile from "../../assets/images/profile.jpg";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">
            <img src={logo} alt="Logo" />
          </span>
        </div>

        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">69</span>
          </div>

          <div className="topbarIconContainer">
            <Language />
          </div>

          <div className="topbarIconContainer">
            <Settings />
          </div>

          <img src={profile} alt="Profile image" className="topAvatar"></img>
        </div>
      </div>
    </div>
  );
}
