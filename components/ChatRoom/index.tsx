import React, { useState } from 'react'
import {FiMaximize} from 'react-icons/fi'
import { ChatRoomWrapper, Title, ChatBody, Message } from './style'

// should pass messages as props
const ChatRoom: React.FC = () => {
  const [open, setOpen] = useState(false)
  const handleOnClick = () => setOpen(prev => !prev)
  const user = "user2";

  const messages = [
    {message: "test1", sender: "user1"},
    {message: "test2", sender: "user2"},
    {message: "test3", sender: "user3"},
    {message: "test3", sender: "user3"},
    {message: "test3", sender: "user3"},
    {message: "test3", sender: "user3"},
    {message: "test3", sender: "user3"},
    {message: "test3", sender: "user3"},
    {message: "test3", sender: "user3"},
    {message: "test3", sender: "user3"},
    {message: "test3", sender: "user3"},
    {message: "test3", sender: "user3"},
    {message: "test3", sender: "user3"},
    {message: "test3", sender: "user3"},
    {message: "test3", sender: "user3"},
  ]

  return (
    <ChatRoomWrapper>
      <Title>
        Chat Room
        <FiMaximize className="maximize-icon" onClick={handleOnClick}/>
      </Title>
      <ChatBody open={open}>
        {
          messages.map((msg, idx) => {
            return (
              <Message key={idx} own={msg.sender === user}>
                <p>1</p>
                <p>{msg.message}</p>
              </Message>)
          })
        }
      </ChatBody>

    </ChatRoomWrapper>
  )
}

export default ChatRoom
