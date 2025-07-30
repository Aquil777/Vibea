import Head from 'next/head'
import CheckoutPageTemplate from 'components/templates/CheckoutPage'

const CheckoutPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Vibea shop - checkout</title>
      </Head>
      <CheckoutPageTemplate />
    </>
  )
}

export default CheckoutPage
