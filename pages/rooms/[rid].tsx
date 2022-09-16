import type { NextPage } from 'next'
import dynamic from "next/dynamic";
import { useRouter } from 'next/router'
import Layout from '../../components/Layout/Main'
import { RoomWrapper } from '../../styles/Rooms.style'
import useWebSocket from '../../hooks/useWebSocket';
import ChatRoom from '../../components/ChatRoom';
import { useEffect, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';


const Editor = dynamic(
  () => {
    return import("../../components/Editor");
  },
  { ssr: false }
);



const Room: NextPage = () => {
  const router = useRouter()
  const [code, setCode] = useState("")
  const { rid  } = router.query
  const userID = uuidv4()
  const {wsData, readyState, sendMessage} = useWebSocket(userID)


  useEffect(() => {
    const data = {
        action: 'join-room',
        message: 'join',
        roomID: rid,
    }

    if (readyState === 1) {
      sendMessage(JSON.stringify(data))
    }

  }, [readyState])


  useEffect(() => {
    console.log(wsData)
    try {
      const message = JSON.parse(wsData)
      console.log(message)
      switch(message.action) {
        case 'send-message':
          console.log(message.message)
          setCode(message.message)
        break;
      }
    } catch (e) {
      console.log(e)
    }

    }, [wsData])

  return (
    <Layout type='editor' nav={true}>
      <RoomWrapper>
        {/*Editor  Rooms */}
        <Editor rid={rid as string} code={code} readyState={readyState} sendMessage={sendMessage}/>
        <ChatRoom/>
        {/* Code editor */}
      </RoomWrapper>
    </Layout>
  )
}

export default Room;
