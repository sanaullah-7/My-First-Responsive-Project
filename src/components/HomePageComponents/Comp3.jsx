
import image2 from "./images/image2.png"
import { Link } from "react-router-dom"
export default function Copm3()
{
    return(
        <>
        <div className="grid grid-cols-1 sm:flex p-10 md:p-20 md:gap-x-20">
            <div className="">
                <img className="h-[17em] sm:h-[30em] w-full sm:w-[60em] lg:w-[40em]" src={image2} alt="" />
            </div>
            <div className=" text-center mt-7 sm:mt-24 lg:mt-32 ">
              <h1 className="text-2xl lg:text-4xl font-bold">SHARE YOUR <i className="text-[#DB8A89]">RECIPE</i></h1>
              <p className="w-[60%] ml-[20%] mt-3" >Lorem ipsum dolor sit amet consectetur. Penatibus molestie Amet
                 adipiscing eu blandit et netus. Mi ante tristique volutpat
                 vitae massa sit ac.
              </p>
              <button className="bg-[#DB8A89] max-w-lg lg:w-[23%] p-3 rounded-xl text-white mt-7"><Link to={"/share-recipe"}>Share Recipe</Link></button>
            </div>
        </div>
        </>
    )
}