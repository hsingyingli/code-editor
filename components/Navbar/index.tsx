import React from "react"
import {NavWrapper} from './style'
import Logo from "../Logo"
import NavItems from "./NavItems"
import HambugerNavItems from "./HambugerNavItems"

const Navbar: React.FC = () => {
  return (
    <NavWrapper> 
      <Logo size={20} fontSize={'xl'}/>
      <NavItems/>
      <HambugerNavItems/>
    </NavWrapper>
  )
}


export default Navbar
