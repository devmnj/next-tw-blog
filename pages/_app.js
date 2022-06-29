import Layout from '../Components/Layout'
import '../styles/globals.css'
import { createClient, Provider } from 'urql';
import getConfig from 'next/config'
const {  publicRuntimeConfig } = getConfig()
const client = createClient({
  url: publicRuntimeConfig.GQL_HOST,
});
function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
