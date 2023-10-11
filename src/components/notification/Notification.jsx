import React from 'react'
import { MailOutline, DynamicFeed } from "@mui/icons-material";

export default function Notification() {
  return (
    <div className="sidebarMenu">
    <h3 className="sidebarTitle">Notification</h3>
    <ul className="sidebarList">
      <li className="sidebarListItem">
        <MailOutline className="sidebarIcon"/>
        Mail
      </li>

      <li className="sidebarListItem">
        <DynamicFeed className="sidebarIcon"/>
        Feedback
      </li>

    </ul>
  </div>
  )
}
