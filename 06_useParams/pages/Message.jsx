import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Message() {
  const [message] = useState({ id: "001", title: "消息1", content: "锄禾日当午" },)
  return (
    <div>
      Message
      <NavLink to={`detail/${message.id}/${message.title}/${message.content}`}>detail</NavLink>
      <Outlet />
    </div>
  )
}
