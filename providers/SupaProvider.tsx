import React from 'react'
import { UserProvider } from '@supabase/auth-helpers-react'
import { supabaseClient } from '@supabase/auth-helpers-nextjs'


interface Props {
  children: React.ReactNode
}

const SupaProvider: React.FC<Props> = ({ children }) => {
  return (
    <UserProvider supabaseClient={supabaseClient}>
      {children}
    </UserProvider>
  )
}


export default SupaProvider
