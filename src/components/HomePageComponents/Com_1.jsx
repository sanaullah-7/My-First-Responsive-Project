import image1 from "./images/image1.png"
import image2 from "./images/image.png";

export default function Comp1()
{
    return (
        <>
        {/* image */}
        <div >
         <div className=" ml-[48%]  absolute  top-0" >
           <img src={image2} alt="" />
        </div>
       

        <div className="flex ">
           <div className="mt-14 sm:mt-28 md:mt-36 ml-20">
               <h1 className="text-2xl -mx-10 sm:-mx-0  sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold">Your  Daily  Plate  A <br /> <i className="text-[#DB8A89]">Tasteful </i> Journey</h1>
               <p className="w-[100%] h-auto sm:w-[52%] mt-5 -mx-10 sm:-mx-0 ">Lorem ipsum dolor sit amet consectetur. Penatibus molestie
                  adipiscing eu blandit et netus. Mi ante tristique volutpat erat
                  vitae massa sit ac.
               </p>
            </div>
            <div className="z-10 mr-10 sm:mr-20 md:mr-24 lg:mr-32 ">
                <img className="w-full h-auto mt-10 sm:mt-20 md:mt-24 " src={image1} alt="" />
            </div>

        </div>
        </div>
       
        </>
    )

}