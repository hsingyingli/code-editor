import type { NextPage } from 'next'
import Layout from '../components/Layout/Main'
import Banner from '../components/Banner'
import useAuth from '../hooks/useAuth'
import { useEffect } from 'react'



const Home: NextPage = () => {
  const { userInfo } = useAuth()

  return (
    <Layout type='Home'>
      {/* Banner*/}
      <Banner isAuth={userInfo ? true : false} />
    </Layout>
  )
}

export default Home

