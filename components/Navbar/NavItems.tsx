import React from "react"
import { useRouter } from 'next/router'
import { NavItemsWrapper } from './style'


const NavItems: React.FC = () => {
  const router = useRouter()
  return (
    <NavItemsWrapper>
      <li onClick={() => router.push('/')}>Home</li>
      <li onClick={() => router.push('/profile')}>Profile</li>
      <li onClick={() => router.push('/rooms')}>Rooms</li>
    </NavItemsWrapper>
  )
}

export default NavItems
