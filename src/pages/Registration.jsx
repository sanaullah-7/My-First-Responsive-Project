import image1 from "../assets/image1.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Registration() {

  // togglebutton
  const [showPassword, SetshowPassword] = useState(false);
  const handleShowPassoord = () =>{
    SetshowPassword(!showPassword);
  };


  return (
    <>
    {/* background image */}
    <div>
        <img className="w-full h-screen object-cover  " src={image1} alt="" />
      </div>
    {/* text on div */}
      <div className="absolute text-center w-full  top-[10%] sm:top-[8%]">
        <h1 className="text-[35px] sm:text-[40px] font-bold">REGISTRATION</h1>
        <h1 className="text-[15px] sm:text-[18px]">
          Over <i className="text-white">5000k</i> Recipes from the world
        </h1>
      </div>
     {/* main div */}
     <div className="absolute top-[25%] flex flex-col items-center w-full  ">
      <main className=" h-auto  rounded-2xl bg-[#FFFFFF] top-[30%]  p-8 w-[65%] sm:w-[50%] md:w-[40%] lg:w-[30%]  ">
        <form className="text-md">
        <h1></h1>
          <input
            type="text"
            required
            placeholder="Username "
            className="border-[1px] border-[#7a6b6b] h-11 w-full  rounded-md p-4"
          />
          <br /><br />
          
          <input
            type="email"
            required
            placeholder="Email"
            className="border-[1px] border-[#7a6b6b] h-11 w-full rounded-md p-[4%]"
          />
          
          <br />
          <br />
          <div className="relative">
          <input
            type={showPassword? "text" : "password"}
            required
            placeholder="Password"
            className="border-[1px] border-[#7a6b6b] h-11 w-full  rounded-md p-[4%]"
          />
          <button type="button" className="absolute right-3 top-4" onClick={handleShowPassoord} >{showPassword? <FaRegEyeSlash /> : <FaRegEye/> }</button>
          </div>
          <br />
          
          <div className="relative">
          <input
            type={showPassword? 'text' : "passowrd"}
            required
            placeholder="Confirm Password"
            className="border-[1px] border-[#7a6b6b] h-11 w-full  rounded-md p-[4%]"
          />
          <button type="button" className="absolute right-3 top-4" onClick={handleShowPassoord} >{showPassword? <FaRegEyeSlash /> : <FaRegEye/> }</button>
          </div>
          <br />
          

          <button className="bg-[#DB8A89] h-11 w-full  rounded-md p-[2%] text-white  ">
           <Link to={"/home"}> Register</Link>
          </button>
         
          <br />
            Already a member? <button className="text-[#DB8A89] font-bold"> <Link to={"/"}>Login</Link></button>
        </form>
      </main>
      </div>

      
    </>
  );
}
