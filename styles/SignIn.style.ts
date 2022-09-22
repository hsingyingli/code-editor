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
  margin: 1rem;
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

  ${({ theme }) => theme.query.MEDIA_QUERY_SM} {
    width: ${({ theme }) => theme.sizes.xs};
  }

`

export const Logo = styled.h1`
  cursor: pointer;
  .logo {
    vertical-align: middle;
    margin: 0px;
    margin-left: 0;
    color: ${({ theme }) => theme.colors.teal['400']};
  }

`

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: ${({ theme }) => theme.fonts.fontSizes['2xl']};
`
export const Input = styled.input`
  margin-top: 0.6rem;
  margin-bottom: 0.6rem;
  padding: 8px;
  font-size: ${({ theme }) => theme.fonts.fontSizes.md};
  border: none;
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

export const Info = styled.div`
  margin-top: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`


