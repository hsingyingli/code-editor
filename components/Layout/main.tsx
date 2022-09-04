import React from 'react'
import Head from 'next/head'
import {LayoutWrapper, Container} from './style'

interface Props {
  children: React.ReactNode
}

const Main: React.FC<Props> = ({ children }) => {
  return (
    <LayoutWrapper>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="online code editor" />
        <meta name="author" content="Hsing Ying Li" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>online code editor</title>
      </Head>


      <Container>
        {children}
      </Container>
    </LayoutWrapper>
  )
}

export default Main
