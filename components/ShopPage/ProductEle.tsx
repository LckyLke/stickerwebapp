import { CustomPlaceholder } from "react-placeholder-image"
const ProductEle = () => {
    return (
        <div className="border text-slate-800 p-2 rounded-lg bg-neutral-100">
            <span>Sticker Set 1</span>
            <CustomPlaceholder width={200} height={200}/> 
            <div className="flex justify-around p-1"><button className="border p-1 rounded-md bg-orange-400 text-white">Add to Chart</button></div>
        </div>
    )
}

export default ProductEle
