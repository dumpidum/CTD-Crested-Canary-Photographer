import '../styles/globals.css'
import Layout from '../components/Layout'
import {AuthProvider} from '../config/AuthContext'

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
