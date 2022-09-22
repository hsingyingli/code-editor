import React, { createContext, ReactNode, useEffect, useState } from 'react'
import AuthContext, { User, IUser } from '../context/AuthContext'
import useRefreshToken from '../hooks/useRefreshToken'




interface Props {
  children: ReactNode
}

const AuthProvider: React.FC<Props> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<IUser | null>(null);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const refresh = useRefreshToken();

  useEffect(() => {
    const verifyRefreshToken = async () => {
      try {
        const res = await refresh();
      } catch (error) {
      } finally {
        setIsAuthLoading(false);
      }
    };

    verifyRefreshToken()
  }, [])


  return (
    <AuthContext.Provider value={{ isAuthLoading, userInfo, setUserInfo }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
