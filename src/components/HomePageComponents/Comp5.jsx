import fire from "./images/FireIcon.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import image5 from "./images/image5.png"
import image6 from "./images/Frame6.png"
import image7 from "./images/Frame7.png"
import image8 from "./images/Frame8.png"
import image9 from "./images/Frame9.png"
import image10 from "./images/Frame10.png"
import image11 from "./images/Frame11.png"
import myimage from "./images/myimage.jpg"
import { Link } from "react-router-dom";


const Card=[
    {
        image1:image6,
        image2:image3,
        image3:fire,
        Dish:"DISH NAME",
        Name:"Lesly Alex",
        h1:"124 Kcal"

    },
    {
        image1:image7,
        image2:image4,
        image3:fire,
        Dish:"DISH NAME",
        Name:"Lesly Alex",
        h1:"124 Kcal"

    },
    {
        image1:image8,
        image2:image5,
        image3:fire,
        Dish:"DISH NAME",
        Name:"Lesly Alex",
        h1:"124 Kcal"

    },
    {
        image1:image9,
        image2:myimage,
        image3:fire,
        Dish:"DISH NAME",
        Name:"Lesly Alex",
        h1:"124 Kcal"

    },
    {
        image1:image10,
        image2:image5,
        image3:fire,
        Dish:"DISH NAME",
        Name:"Lesly Alex",
        h1:"124 Kcal"

    },
    {
        image1:image11,
        image2:image3,
        image3:fire,
        Dish:"DISH NAME",
        Name:"Lesly Alex",
        h1:"124 Kcal"

    },
]
export default function Comp5()
{
   
        return(
        <> 
          <h1 className=" text-center rounded-lg mt-28 text-4xl lg:text-5xl font-bold">POPULAR RECIPES </h1>
       <main className="  grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3   sm:gap-x-6 lg:gap-x-7 sm:mt-5 lg:mt-10 px-9 sm:px-4 lg:px-10">
                           {Card.map((item)=>(
                           <div className="flex justify-center ">
                          <div className="bg-[#cce2c1]  h-auto rounded-xl shadow-2xl mt-14   sm:w-full  ">
                             <img className="rounded-t-xl  w-full " src={item.image1} alt="" />
                               <div className="ml-6 mt-4">
                                  <h1 className="font-bold text-[20px]">{item.Dish}</h1>
                                  <br />
                                    
                                    <div className="flex justify-between">
                                        <div className="flex gap-x-5  font-semibold " >
                                        <img className="h-[3em] rounded-full " src={item.image2} alt="" />
                                            <h1 className="mt-4 text-[21px]  ">{item.Name}</h1>
                                        </div>
                                        <div className="border-[#DB8A89] border-[1px] rounded-xl p-1 mr-5 mt-4 h-8 mb-8 ">
                                        <img className="h-[20px]" src={item.image3} alt="" />
                                        <h1 className="text-[#DB8A89] -mt-5 ml-5">{item.h1}</h1>
                                        </div>
                                    </div>
                             
                              </div>
                          </div>
                          </div>
                          ))}
                       </main>
                    <div className="flex justify-center py-5  mt-5">
                        <button className="bg-[#DB8A89] lg:w-[16%] p-3 text-white text-xl rounded-xl"><Link to={"/recipe"}>See All Recipes</Link></button>
                    </div>
        </>
    )
}