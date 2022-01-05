import LandingPageContainer from "../components/LandingPage/LandingPageContainer"
import EnterShopBtn from "../components/LandingPage/EnterShopBtn"
import Image from "next/image"
import landingimg from "../img/landingimg.jpg"
import { BiCool } from "react-icons/bi"; 

export default function Home() {
  return (
    <>
    <LandingPageContainer>
     <div className=" text-neutral-100 flex justify-center text-2xl font-semibold p-1">Appleintill Sticker Shop<BiCool size={33}/></div> 
      <div className="p-4 rounded-xl "><Image src={landingimg} className=" rounded-2xl"  layout="responsive"/></div>
     <EnterShopBtn/>
     <div></div>
    </LandingPageContainer>
    </>
  )
}
