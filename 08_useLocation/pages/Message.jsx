import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Message() {
  const [message] = useState({ id: "001", title: "消息1", content: "锄禾日当午" })
  return (
    <div>
      Message
      <NavLink 
        to="detail" 
        state={{
          id: message.id,
          title: message.title,
          content: message.content
        }}
      >detail</NavLink>
      <Outlet />
    </div>
  )
}
