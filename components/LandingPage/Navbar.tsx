import Link from "next/link"
import { useRouter } from "next/router";
import { AiOutlineHome, AiOutlineShop, AiOutlineShoppingCart, AiOutlineInfoCircle } from "react-icons/ai";

const Navbar = () => {
    const iconSize = 33

    const router = useRouter()

    return (
        <div className="absolute w-screen bottom-2 p-2 text-gray-100">
        <nav className="flex justify-around bg-neutral-800 p-2 rounded-2xl">
            <Link href="/"><AiOutlineHome className={router.pathname=="/" ? "text-orange-500" : ""} size={iconSize}/></Link>
            <Link href="/shop"><AiOutlineShop className={router.pathname=="/shop" ? "text-orange-500" : ""} size={iconSize}/></Link>
            <Link href="/cart"><AiOutlineShoppingCart className={router.pathname=="/cart" ? "text-orange-500" : ""} size={iconSize}/></Link>
            <Link href="/info"><AiOutlineInfoCircle className={router.pathname=="/info" ? "text-orange-500" : ""} size={iconSize}/></Link>
        </nav>
        </div>
    )
}

export default Navbar
