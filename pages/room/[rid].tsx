import type { NextPage } from 'next'
import dynamic from "next/dynamic";
import { useRouter } from 'next/router'
import EditorRooms from '../../components/EditorRooms'
import Layout from '../../components/Layout/Main'
import { RoomWrapper } from '../../styles/Room.style'
import useAuth from '../../hooks/useAuth';

const Editor = dynamic(
  () => {
    return import("../../components/Editor");
  },
  { ssr: false }
);

const Room: NextPage = () => {
  const router = useRouter()
  const data = useAuth()
  const { rid } = router.query
  return (
    <Layout type='editor'>
      <RoomWrapper>
        {/*Editor  Rooms */}
        <EditorRooms />
        {/* Code editor */}
        <Editor />
      </RoomWrapper>
    </Layout>
  )
}

export default Room;
