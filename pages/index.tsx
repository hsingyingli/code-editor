import type { NextPage } from 'next'
import Layout from '../components/Layout/Main'
import Banner from '../components/Banner'




const Home: NextPage = () => {

  return (
    <Layout type='Home'>
      {/* Banner*/}
      <Banner />
    </Layout>
  )
}

export default Home
