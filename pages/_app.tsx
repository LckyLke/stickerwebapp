import '../styles/globals.css'
import Navbar from '../components/LandingPage/Navbar'
import useWindowDimensions from '../lib/useWindowDimensions'
import Div100vh from 'react-div-100vh'
function MyApp({ Component, pageProps }) {
  
  return <Div100vh className='bg-zinc-900'>
  <Navbar/>
  <Component {...pageProps} />
  </Div100vh>
}

export default MyApp
