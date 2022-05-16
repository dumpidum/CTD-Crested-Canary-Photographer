import '../styles/globals.css'
import Layout from '../components/Layout'

import { SessionProvider } from "next-auth/react"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {AuthProvider} from '../components/Context/AuthContext'


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
