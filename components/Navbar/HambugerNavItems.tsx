import React, { useState } from "react"
import { useRouter } from 'next/router'
import { FaBars } from "react-icons/fa";

import { HambugerBody, IconWrapper, HambugerWrapper, Button } from './style'

const HambugerNavItems: React.FC = () => {
  const [open, setOpen] = useState('false')
  const router = useRouter();

  const handleOnClick = () => {
    setOpen(prev => prev === 'false' ? 'true' : 'false')
  }
  const handleLogout = () => {
    //logout()
    router.push('/')
  }

  const RedirectToHome = () => {
    router.push('/')
    setOpen('false')
  }
  const RedirectToProfile = () => {
    router.push('/profile')
    setOpen('false')
  }
  const RedirectToRooms = () => {
    router.push('/rooms')
    setOpen('false')
  }

  return (
    <HambugerWrapper>
      <IconWrapper onClick={handleOnClick}>
        <FaBars />
      </IconWrapper>
      <HambugerBody openNav={open} tabIndex={1}>
        <ul>
          <li onClick={RedirectToHome}>Home</li>
          <li onClick={RedirectToProfile}>Profile</li>
          <li onClick={RedirectToRooms}>Rooms</li>
        </ul>
        <Button onClick={handleLogout}> Logout</Button>
      </HambugerBody>
    </HambugerWrapper>
  )
}

export default HambugerNavItems
