import '../styles/globals.css'
import Navbar from '../components/LandingPage/Navbar'
import Div100vh from 'react-div-100vh'
function MyApp({ Component, pageProps }) {
  
  return <Div100vh>
  <Navbar/>
  <Component {...pageProps} />
  </Div100vh>
}

export default MyApp
