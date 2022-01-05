import '../styles/globals.css'
import Navbar from '../components/LandingPage/Navbar'
function MyApp({ Component, pageProps }) {
  return <div className='bg-zinc-900 h-screen'>
  <Navbar/>
  <Component {...pageProps} />
  </div>
}

export default MyApp
