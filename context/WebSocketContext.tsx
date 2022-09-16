import { createContext } from 'react'

interface WssInterface {
    wss: WebSocket | undefined
}

export default createContext<WssInterface | null>(null)
