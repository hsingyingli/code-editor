import styled from "styled-components";



// <--------Banner--------->
export const BannerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.div`
  font-size: ${({theme}) => theme.fonts.fontSizes['3xl']};
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 1rem;
  }
`



// <--------Matrix Rain Canvas--------->
export const StyledCanvas = styled.canvas`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`
