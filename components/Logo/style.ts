import styled from "styled-components"

interface LogoInterface {
  fontSize: string
}

export const LogoWrapper = styled.h1<LogoInterface>`
  cursor: pointer;
  font-size: ${({ theme, fontSize }) => theme.fonts.fontSizes[fontSize]};
  .logo {
    vertical-align: middle;
    margin: 10px;
    color: ${({ theme }) => theme.colors.teal['400']};
  }

`
