import React from "react";
import {useRouter} from 'next/router'
import { FaCode } from "react-icons/fa";
import { LogoWrapper } from "./style";

interface LogoInterface {
  size: number
  fontSize: string
  }


const Logo: React.FC<LogoInterface> = ({size, fontSize}) => {
  const router = useRouter();
  const RedirectToHome = () => router.push('/')
  return (
      <LogoWrapper onClick={RedirectToHome} fontSize={fontSize}>
        <FaCode size={size} className='logo' />
        Coder
      </LogoWrapper>
  )
}


export default Logo
