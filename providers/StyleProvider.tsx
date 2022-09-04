import React from 'react'
import GlobalStyle from '../styles/globals'
import {ThemeProvider} from 'styled-components'
import theme from '../utils/theme/theme'

interface Props {
  children: React.ReactNode
}

const StyleProvider: React.FC<Props> = ({ children }) => {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}


export default StyleProvider
