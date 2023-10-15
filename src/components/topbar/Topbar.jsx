import React from "react";
import "./topbar.css";


// Import your images here
import logo from "../../assets/images/Logo.png";


export default function Topbar() {
  const handleLogout = () => {
    // Implement the logout logic here, such as clearing user session, etc.
    // For example, if you're using a state management system like Redux, you'd dispatch a logout action.
    // After handling the logout, you can redirect the user to the login page.
    // Replace the following line with your actual logout logic and redirection.
    // Example: history.push('/login');
  };

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
          
            <button  onClick={handleLogout} className="logoutButton">Logout</button>
          </div>

        </div>
      </div>
    </div>
  );
}
