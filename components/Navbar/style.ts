import styled, { keyframes } from "styled-components";

interface HambugerInterface {
  openNav: string
}

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`


export const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 1rem;
  max-width: calc(100vw - 2rem);
  height: 2.6rem;
  z-index: 1000;
  backdrop-filter: blur(10px);
  width: 100%;
  display: flex;
  align-items: center;
`


export const NavItemsWrapper = styled.ul`
  list-style-type: none;

  li {
    display:inline;
    margin-left: 1.5rem;
    cursor: pointer;
  }

  li:hover {
    color: ${({ theme }) => theme.colors.teal['400']};
  }


  ${({ theme }) => theme.query.MEDIA_QUERY_SM} {
    display: none;
  }
`


export const HambugerWrapper = styled.div`
  position: relative;
  margin-left: auto;
  width: 30px;
  height: 30px;
  border: 1px solid white;
  border-radius: 5px;
  cursor: pointer;
  padding: 2px;
  transition: all 0.2s ease-in-out;
  background-color: rgba(255, 255, 255, 0.16);

  :hover {
    background-color: rgba(255, 255, 255, 0.08);
  }
`
export const IconWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`


export const HambugerBody = styled.div<HambugerInterface>`
    display: ${({ openNav }) => openNav === 'true' ? 'block' : 'none'};
    position: absolute;
    top: 40px;
    right: 0px;
    border: 1px solid white;
    border-radius: 5px;
    width: 250px;
    background-color: #292929;
    animation: 0.2s ${fadeIn} ease-in-out;
    outline: none;

    ul {
      list-style-type: none;
      padding: 0;
    }
    
    ul > li {
      font-size: ${({ theme }) => theme.fonts.fontSizes.lg};
      padding: 0.5rem 0.5rem;
    }


    ul>li:hover {
      background-color: #7F7F7F;
    }

    hr {
      border-top: 1px solid #292929;
      background-color: #7F7F7F;
    }


`


export const Button = styled.button`
  padding: 0.5rem 1.5rem;
  color: white;
  font-size: ${({ theme }) => theme.fonts.fontSizes.sm};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: calc(100% - 1rem);
  margin: 0.5rem 0.5rem;
  border-radius: 5px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.teal['400']};
  background: none;

  :hover {
    border-color: ${({ theme }) => theme.colors.teal['700']};
  }

  ;
`



