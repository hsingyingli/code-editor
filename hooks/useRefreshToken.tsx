import axios from '../utils/axios/axios'


const useRefreshToken = () => {
  const url = process.env.NEXT_PUBLIC_BACKEND_URL
  const refresh = async () => {
    const res = await axios.post(`{url}/v1/tokens/renew_access`)
    return res
  }
  return refresh
}

export default useRefreshToken
