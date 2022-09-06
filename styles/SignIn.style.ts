import styled from "styled-components";

export const SignInPageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
`


export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => theme.sizes.sm};
  max-width: 90%;
  padding: 1rem;
  border-radius: 0.6rem;
  box-shadow: 0px 0px 15px gray;
  background-color:RGBA(0, 0, 0, 0.2) ;

  span {
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.fonts.fontSizes.xxs};
  }

  a {
    text-decoration:none;
    color: ${({ theme }) => theme.colors.teal['400']};
  }

  a:hover {
    color: ${({ theme }) => theme.colors.teal['500']};
  }

`

export const Logo = styled.h1`
  .logo {
    vertical-align: middle;
    margin: 10px;
    margin-left: 0;
    color: ${({ theme }) => theme.colors.teal['400']};
  }

`

export const Label = styled.label`
  margin: 0.25rem;
  font-size: ${({ theme }) => theme.fonts.fontSizes.xl};
`
export const Input = styled.input`
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 5px;
  font-size: ${({ theme }) => theme.fonts.fontSizes.md};
  border-radius: 5px;
`

export const Button = styled.button`
  padding: 8px;
  color: white;
  font-size: ${({ theme }) => theme.fonts.fontSizes.sm};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  max-width: 80px;
  width: 100%;
  margin-left: auto;
  border-radius: 5px;
  border: 2px solid;
  border-color: ${({ theme }) => theme.colors.teal['400']};
  background: none;

  :hover {
    border-color: ${({ theme }) => theme.colors.teal['700']};
  }

  ;
`



