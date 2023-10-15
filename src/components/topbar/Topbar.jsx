import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";
import { Link } from "react-router-dom"; // Import the Link component

// Import your images here
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
            <Link to="/settings"> {/* Use the Link component to navigate to the settings page */}
              <Settings />
            </Link>
          </div>
          
          
          <Link to="/profile"> {/* Link to the profile page */}
            <img src={profile} alt="Profile image" className="topAvatar" />
          </Link>
          
        </div>
      </div>
    </div>
  );
}
