import React from 'react';
import { PermIdentity, AttachMoney, BarChart } from "@mui/icons-material";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

export default function Menu() {
  return (
    <div className="sidebarMenu">
      <h3 className="sidebarTitle">Menu</h3>
      <ul className="sidebarList">
        <Link to="/users" className="link">
          <li className="sidebarListItem">
            <PermIdentity className="sidebarIcon"/>
            User
          </li>
        </Link>
        
       
      </ul>
    </div>
  );
}
