import React from 'react';
import { FaCode } from "react-icons/fa";
import MatrixRainCanvas from './Canvas';
import {BannerWrapper, Logo} from './style'


const Banner: React.FC = () => {

  return (
    <BannerWrapper>
      <MatrixRainCanvas />
      <Logo>
        <FaCode size={60}/>
        <h1>Start Coding</h1>      
      </Logo>
      Hello
    </BannerWrapper>
  );
}

export default Banner;
