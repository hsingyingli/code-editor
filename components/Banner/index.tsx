import React from 'react';
import { useRouter } from 'next/router'
import { FaCode } from "react-icons/fa";
import MatrixRainCanvas from './Canvas';
import { BannerWrapper, Logo, Button, ButtonGroup } from './style'


interface Props {
  isAuth: boolean
}

const Banner: React.FC<Props> = ({ isAuth }) => {
  const router = useRouter()

  const RedirectToRooms = () => router.push('./rooms');
  const RedirectToProfile = () => router.push('./profile')
  const RedirectToLogin = () => router.push('./login')

  return (
    <BannerWrapper>
      <MatrixRainCanvas />
      <Logo>
        <FaCode />
        <h1>Start Coding</h1>
      </Logo>
      <p>Coder is a Realtime online code editor that you code with others.</p>
      {
        isAuth ?
          (
            <ButtonGroup>
              <Button onClick={RedirectToRooms}>Rooms</Button>
              <Button bgColor="fill" onClick={RedirectToProfile}>Profile</Button>
            </ButtonGroup>
          ) :
          (
            <Button onClick={RedirectToLogin}>Login</Button>
          )
      }

    </BannerWrapper>
  );
}

export default Banner;


