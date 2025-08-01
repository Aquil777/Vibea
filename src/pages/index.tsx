import Head from 'next/head'

import HomePageTemplate from 'components/templates/HomePage'

const HomePage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Vibea Shop</title>
      </Head>
      <HomePageTemplate />
    </>
  )
}

export default HomePage
