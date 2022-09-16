import type { NextPage } from 'next'
import Layout from '../../components/Layout/Main'
import { RoomWrapper } from '../../styles/Rooms.style'
import useWebSocket from '../../hooks/useWebSocket'
import { useEffect, useState } from 'react'



const RoomsPage: NextPage = () => {
  const {wsData, readyState, sendMessage} = useWebSocket()
  const [value, setValue] = useState("")



  return (
    <Layout type={'room'} nav={true}>
      <RoomWrapper>
      </RoomWrapper>
    </Layout>
  )
}


export default RoomsPage
