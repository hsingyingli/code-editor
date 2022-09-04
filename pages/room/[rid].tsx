import type { NextPage } from 'next'
import { useRouter } from 'next/router'

const Room: NextPage = () => {
  const router = useRouter()
  const { rid } = router.query
  return (
    <div>{rid}</div>
  )
}

export default Room;
