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
import image12 from "./images/SearchIcon.png"



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
        image1:image6,
        image2:image3,
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
    {
        image1:image10,
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
    
]

export default function RecipeComp1()
{
    return(
        <>
        
        <div className="flex justify-between absolute w-full  sm:top-28 px-16">
            <h1 className=" text-2xl sm:text-4xl font-extrabold sm:font-bold ">RECIPES</h1>
            <div className="relativwe">
           <input type="search" placeholder="Search" className="border-black border-opacity-30 sm:text-lg md:text-xl  lg:text-2xl px-1 sm:px-8 md:px-10 lg:px-14 rounded-xl border-[2px] absolute right-24 w-[19%] sm:w-[22%] md:w-[26%]  h-[2em]" />
           <img className="h-[15px] sm:h-[23px] lg:h-[2rem] absolute right-[100px] sm:right-[31%] md:right-[32.7%] lg:right-[30%] mt-2" src={image12} alt="" />
           </div>
        </div>
        
         <main className="  grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3   sm:gap-x-6 lg:gap-x-7 mt-20 px-9 sm:px-4 lg:px-10">
                    {Card.map((item)=>(
                    
                   <div className="bg-[#cce2c1]  h-auto rounded-xl shadow-2xl mt-14  ">
                      <img className="rounded-t-xl w-full " src={item.image1} alt="" />
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
                   ))}
                </main>
                </>
    )
}