import type { NextPage } from 'next'
import Layout from '../../components/Layout/Main'
import { RoomWrapper } from '../../styles/Rooms.style'
import useWebSocket from '../../hooks/useWebSocket'
import { useEffect, useState } from 'react'
import useRefreshToken from '../../hooks/useRefreshToken'





const RoomsPage: NextPage = () => {
  const [accessToken, setAccessToken] = useState('')
  const refresh = useRefreshToken()

  const handleRefresh = async () => {
    const res = await refresh()
    console.log(res)
    //const res = await axios.post("/v1/tokens/renew_access")
    //console.log(res)
  }




  return (
    <Layout type={'room'} nav={true}>
      <RoomWrapper>
        <button onClick={handleRefresh}>renew</button>
      </RoomWrapper>
    </Layout>
  )
}


export default RoomsPage
