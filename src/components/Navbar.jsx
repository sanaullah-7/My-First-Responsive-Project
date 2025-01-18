import { Link, useLocation } from "react-router-dom";
import { SlOptionsVertical } from "react-icons/sl";
import { useState } from "react"


export default function Navbar()
{
    // setOpen are use to change the state of Open false into true
    const [Open , setOpen] =  useState(false)


    const HandelToggle = ()=>
    {
        setOpen(!Open)
    }
     
    

    const Location =useLocation()



    return(
   <>
  
   <div className="hidden sm:flex justify-between mt-5 md:px-8 lg:px-20 ">
    <h1 className="font-serif font-bold text-lg md:text-2xl ">NUTRITION MAPPER</h1>

    <div className="flex sm:gap-x-4 lg:gap-x-10 font-semibold md:font-bold mr-5  z-10 ">
    <h1><Link className={`hover:text-[blue] ${Location.pathname === "/home"   ? "text-[#DB8A89]":""}`} to={"/home"}>Home </Link></h1>
     <h1 ><Link className={`hover:text-[blue] ${Location.pathname === "/recipe" ? "text-[#DB8A89]":""}`} to={"/recipe"}>Recipes</Link></h1>
     <h1><Link className={`hover:text-[blue] ${Location.pathname === "/share-recipe" ? "text-[#DB8A89]":"text-[r]"}`} to={"/share-recipe"}>Share Recipe</Link></h1>
     <h1><Link className={`hover:text-[blue] ${Location.pathname === "/contact" ? "text-[#DB8A89]":""}`} to={"/contact"}>Contact</Link></h1>
    </div>

    {/* i give it z-index */}
    <button className="w-[80px] bg-[#DB8A89] text-white rounded-xl  z-20 "><Link to={"/"}>Login</Link></button>
   </div>
    {/* For Moblie Screen */}
           <div className="sm:hidden ">
              <div className=" flex justify-between p-2 text-lg font-semibold ">
               
               {Open?
                            (
                               <SlOptionsVertical onClick={HandelToggle} />
                              
                            ):(
                          
                               
                               <SlOptionsVertical onClick={HandelToggle} />
                           )}
               
             
               
              
                 <h1 className=" text-xl font-extrabold font-serif">NUTRITION MAPPER</h1>
                {/* <div className="w-[40px] h-[40px] bg-white rounded-full"></div> */}
                <button className="w-[80px] bg-[#DB8A89] text-white rounded-xl  z-20 "><Link to={"/"}>Login</Link></button>
   
              </div>
   
               {Open ? (
                    <div className="text-lg font-semibold" >
                        <h1><Link className={`hover:text-[blue] ${Location.pathname === "/home"   ? "text-[#DB8A89]":""}`} to={"/home"}>Home </Link></h1>
                        <h1 ><Link className={`hover:text-[blue] ${Location.pathname === "/recipe" ? "text-[#DB8A89]":""}`} to={"/recipe"}>Recipes</Link></h1>
                        <h1><Link className={`hover:text-[blue] ${Location.pathname === "/share-recipe" ? "text-[#DB8A89]":"text-[r]"}`} to={"/share-recipe"}>Share Recipe</Link></h1>
                        <h1><Link className={`hover:text-[blue] ${Location.pathname === "/contact" ? "text-[#DB8A89]":""}`} to={"/contact"}>Contact</Link></h1>
                    </div>
   
                  ):("")
                }
           </div>
 
  
   
   </>
    );
}