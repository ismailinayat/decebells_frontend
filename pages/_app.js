import '../styles/global.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Head from 'next/head'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import 'react-toastify/dist/ReactToastify.css';
import UserContextProvider from '../contexts/UserContext';
import CartContextProvider from '../contexts/CartContext'
import {QueryClient, QueryClientProvider} from 'react-query';


const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
  return (

    <CartContextProvider>
      <UserContextProvider>
          <QueryClientProvider client={queryClient}>
            <Head>
              <title>Decibells | Sound for soulful people</title>
            </Head>
            <Navbar></Navbar>
            <Component {...pageProps} />
            <Footer></Footer>
          </QueryClientProvider>
      </UserContextProvider>
    </CartContextProvider>
  )
}

export default MyApp
