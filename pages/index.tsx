import type { NextPage } from 'next'
import Layout from '../components/Layout/Main'
import Banner from '../components/Banner'



const Home: NextPage = () => {
  const user = true
  return (
    <Layout type='Home'>
      {/* Banner*/}
      <Banner isAuth={user ? true : false} />
    </Layout>
  )
}

export default Home

