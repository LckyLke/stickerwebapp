import '../styles/globals.css'
import Navbar from '../components/LandingPage/Navbar'
import useWindowDimensions from '../lib/useWindowDimensions'
function MyApp({ Component, pageProps }) {
  const {height} = useWindowDimensions()
  return <div className='bg-zinc-900' style={{
     minHeight: height,
  }}>
  <Navbar/>
  <Component {...pageProps} />
  </div>
}

export default MyApp
