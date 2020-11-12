import Fetch from 'isomorphic-unfetch'

import Layout from '../components/Layout'
import Prices from '../components/Prices'

export default function Index(props) {
  return (
    <Layout>
      <div>
        <h1>Welcome to BitzPrice</h1>
        <p>Check current Bitcoin rate</p>
        <Prices bpi={props.bpi} />
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
  const { bpi } = await res.json()

  return {
    props: {
      bpi,
    },
  }
}
