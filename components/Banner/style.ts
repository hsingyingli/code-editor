import styled from "styled-components";
import {ButtonInterface} from './type'


// <--------Banner--------->
export const BannerWrapper = styled.div`
  width: calc(100% - 2rem);
  height: 100vh;
  display: flex;
  padding: 0rem 1rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: ${({ theme }) => theme.fonts.fontSizes['lg']};
    text-align: center;
  }
`

export const Logo = styled.div`
  font-size: ${({ theme }) => theme.fonts.fontSizes['3xl']};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 60px;

  h1 {
    margin: 1rem;
    font-size: 4rem;
  }

  p {
    margin: 1rem;
    font-size: 1rem;
  }

  ${({theme}) => theme.query.MEDIA_QUERY_MD} {
    font-size: 50px;
    h1 {
      font-size: 2.5rem;
    }
  }

`

export const ButtonGroup = styled.div`
  margin-top: 1.2rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
`

export const Button = styled.button<ButtonInterface>`
  padding: 8px;
  color: white;
  font-size: ${({ theme }) => theme.fonts.fontSizes.md};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  max-width: 80px;
  width: 100%;
  border-radius: 5px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.teal['400']};
  background: ${({bgColor, theme}) => bgColor ? theme.colors.teal['400']: 'none'};

  :hover {
    border-color: ${({ theme }) => theme.colors.teal['600']};
    background: ${({bgColor, theme}) => bgColor ? theme.colors.teal['600']: 'none'};
  }

  ;
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
