import image1 from "../assets/image1.png";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";//here i use both Hooks for routing navigate and Link
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Login() {

  // Navigate hook use for routing 
  const navigate = useNavigate();


  // togglebutton
    const [showPassword, SetshowPassword] = useState(false);
    const handleShowPassoord = () =>{
      SetshowPassword(!showPassword);
    };
    
  return (
    <>
    <div>
        <img className="w-full h-screen object-cover " src={image1} alt="" />
      </div>
    
      <div className="absolute text-center w-full  top-[13%] sm:top-[12%]">
        <h1 className="text-[35px] sm:text-[40px] font-bold">LOGIN</h1>
        <h1 className="text-[15px] sm:text-[18px]">
          Over <i className="text-white">5000k</i> Recipes from the world
        </h1>
      </div>
      {/* <div className="absolute flex flex-col items-center top-[50%] transform -translate-y-[20%] w-full">
  <div className="h-auto rounded-lg bg-white w-[90%] sm:w-[60%] lg:w-[40%] p-6 sm:p-10 shadow-lg"></div> */}
 

      <div className="absolute top-[28%]   flex flex-col items-center w-full   ">
      <div className=" h-auto  rounded-2xl bg-[#FFFFFF] w-[65%] sm:w-[50%] md:w-[40%] lg:w-[30%]   p-8  ">
        <form className="text-md">
          <input
            type="text"
            required
            placeholder="Username / Email"
            className="border-[1px] border-black h-12 w-full   rounded-md p-4"
          />
          <br /><br />

          <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            required
            placeholder="Password"
            className="border-[1px] border-black h-12 w-full rounded-md p-[4%]"
          />
              <button type="button" className="absolute top-4 right-3" onClick={handleShowPassoord} >{showPassword? <FaRegEyeSlash  /> : <FaRegEye /> }</button>
              </div>
        
         
          <h1 className="text-[#DB8A89] text-end text-semibold">Forgot Password?</h1>
          <br />
          <br />
          {/*in login button i use navigate route */}

          <button className="bg-[#DB8A89] h-12 w-full   rounded-md p-[2%] text-white  "
           onClick={()=> navigate ("/home") }
          >
            Login
          </button>
          <br />

          {/* Registaration Link */}
          Don't have an Account? <button className="text-[#DB8A89] font-bold w-[55px]"> <Link to={"/registration"}>Registration</Link></button>
        </form>
      </div>
      </div>
    </>
    );
}