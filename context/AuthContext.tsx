import React, { createContext } from 'react'


export type User = {
  username: string,
  email: string
}

export interface IUser {
  accessToken: string | null
  user: User | null
}

interface IAuthContext {
  isAuthLoading: boolean
  userInfo: IUser | null
  setUserInfo: React.Dispatch<React.SetStateAction<IUser | null>> | null
}

const AuthContext = createContext<IAuthContext>({
  isAuthLoading: true,
  userInfo: null,
  setUserInfo: null,
})

export default AuthContext
