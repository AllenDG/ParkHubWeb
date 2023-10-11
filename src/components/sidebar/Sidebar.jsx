import React from "react";
import "./sidebar.css";
import Dashboard from "../dashboard/Dashboard";
import Menu from "../menu/Menu";
import Notification from "../notification/Notification";


export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div>
          <Dashboard/>
          <Menu/>
          <Notification/>
          
        </div>

      </div>
    </div>
  );
}
