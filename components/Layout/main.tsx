import React from 'react'
import Head from 'next/head'
import { LayoutWrapper, Container } from './style'

interface Props {
  children: React.ReactNode
  type: string
}

const Main: React.FC<Props> = ({ children, type = 'Home' }) => {
  const title = `${type} - online code editor`
  return (
    <LayoutWrapper>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={`${type} - online code editor`} />
        <meta name="author" content="Hsing Ying Li" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>{title}</title>
      </Head>


      <Container>
        {children}
      </Container>
    </LayoutWrapper>
  )
}

export default Main
