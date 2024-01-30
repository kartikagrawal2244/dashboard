import { ImCircleRight } from "react-icons/im";
import { SlDiamond } from "react-icons/sl";


const Card = () => {
    return (
        <div className="bg-white rounded p-4 pt-8 shadow text-center relative">
            <h5 className="text-lg text-black font-semibold capitalize">adipisicing</h5>
            <h5 className="text-lg text-black font-semibold capitalize" >consectetur</h5>
            <p className="text-base text-black font-normal capitalize">Minimum Money <strong>$50000</strong></p>
            <p className="text-base text-black font-normal capitalize">Minimum Wages <strong>$5000</strong></p>

            <ImCircleRight fontSize={25} className="mx-auto mt-3" />

            <div className="absolute bg-[#04a6dd] w-14 h-14 -top-7 rounded-full left-[40%] ">
                <SlDiamond color="#ffffff" fontSize={30} className="mx-auto mt-3.5" />
            </div>
        </div>
    )
}

export default Card