import { useCallback, useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'


const useWebSocket = (userID: string) => {
  const ws = useRef<WebSocket>()
  const [wsData, setWsData] = useState('')
  const [readyState, setReadyState] = useState(0)

  const sendMessage = useCallback((data: string) => {
    if (readyState !== 1) {
      toast.error(`Not Connect To Server Yet! State: ${readyState}`)
      return
    }
    ws.current?.send(data)
  }, [ws.current, readyState])

  useEffect(() => {
    ws.current = new WebSocket(`ws://localhost:9010/v1/ws?userID=${userID}`)
    ws.current.onopen = () => setReadyState(ws.current?.readyState ?? 0)
    ws.current.onclose = () => setReadyState(ws.current?.readyState ?? 0)
    ws.current.onerror = () => setReadyState(ws.current?.readyState ?? 0)
    ws.current.onmessage = (e) => {
      setWsData(e.data ?? "")
    }
    return () => ws.current?.close()
  }, [])

  return { wsData, readyState, sendMessage }
}


export default useWebSocket
