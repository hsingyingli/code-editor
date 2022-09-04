import React, { useState } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { v4 as uuidv4 } from 'uuid';
import { FaCode } from "react-icons/fa";
import toast from 'react-hot-toast';
import { HomePageWrapper, LoginForm, Logo, Input, Button, Label } from '../styles/Home.style'
import Layout from '../components/Layout/main'


const Home: NextPage = () => {
  const router = useRouter()
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const handleOnSubmit = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    console.log('click')
    if (!roomId || !username) {
      toast.error('Room id & username is required');
      return
    }
    router.push({
          pathname: '/room/[rid]',
          query: { rid: roomId },
    })
  }

  const createNewRoom = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setRoomId(uuidv4());
  }

  return (
    <Layout>
      <HomePageWrapper>
        <LoginForm onSubmit={handleOnSubmit}>
          <Logo>
            <FaCode size={45} className='logo' />
            Code editor
          </Logo>
          <Label>Room ID</Label>
          <Input
            type='text'
            placeholder="ROOM ID"
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)} />

          <Label>Username</Label>
          <Input
            type='text'
            placeholder='USERNAME'
            value={username}
            onChange={(e) => setUsername(e.target.value)} />
          <Button type="submit">Enter</Button>
          <span>
            if you don't have an invite than create &nbsp;
            <a href='' onClick={createNewRoom}>new room</a>
          </span>
        </LoginForm>
      </HomePageWrapper>
    </Layout>
  )
}

export default Home
