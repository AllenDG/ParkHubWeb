import React from 'react'


import { LineStyle, Timeline } from "@mui/icons-material";
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div className="sidebarMenu">
    <h3 className="sidebarTitle">Dashboard</h3>
    <ul className="sidebarList">

    <Link to='/' className='link'>
      <li className="sidebarListItem active">
        <LineStyle className="sidebarIcon"/>
        Home
      </li>
    </Link>

    <Link to='/analytics' className='link'>
      <li className="sidebarListItem">
        <Timeline className="sidebarIcon"/>
        Analytics
      </li>
    </Link>

    
    </ul>
  </div>
  )
}
