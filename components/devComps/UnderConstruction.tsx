import { IoConstructOutline } from "react-icons/io5";
const UnderConstruction = () => {
    return (
        <div className="flex flex-col justify-around items-center text-3xl font-semibold text-neutral-100 h-screen">
            <div>Still under construction...</div>
            <IoConstructOutline size={130}/>
            <div></div>
        </div>
    )
}

export default UnderConstruction
