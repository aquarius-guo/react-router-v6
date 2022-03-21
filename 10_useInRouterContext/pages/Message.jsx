import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Message() {
  const [message] = useState({ id: "001", title: "消息1", content: "锄禾日当午" });
  const navigate = useNavigate();
  return (
    <div>
      Message
      <button onClick={() => {
        navigate("detail", {
          replace: true,
          state: {
            id: message.id,
            title: message.title,
            content: message.content
          }
        })
      }}>跳转</button>
      <Outlet />
    </div>
  )
}
