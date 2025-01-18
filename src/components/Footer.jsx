import { Link } from "react-router-dom"
import image1 from "../assets/Ficon.png"
import image2 from "../assets/Xicon.png"
import image3 from "../assets/Insta-icon.png"

export default function Footer()
{
    return(
        <main className="bg-[black] text-white mt-16">
            <div className="flex flex-col items-center sm:flex sm:flex-row justify-between p-5  md:p-10">
                <div >
                   <h1 className="text-xl text-center sm:text-start font-sans font-bold">WEB LOGO</h1>
                   <p  className="w-72 text-sm mt-4">Lorem ipsum dolor sit amet consectetur.
                      Duis lorem purus ipsum sed id tortor
                      vulputate iaculis. Aliquam bibendum dictu
                      felis aenean nisl duis. Dictumst sed integ
                      vitae velit lectus nunc. Tristique tincidun
                      in tellus sagittis ab.</p>
                </div>
                <div>
                   <h1 className="text-xl font-sans font-bold mt-5 sm:mt-0">QUICK LINKS</h1>
                     <div className=" sm:mt-4 text-center sm:text-start ">
                       <h1><Link to={"/home"}>Home</Link></h1>
                       <h1><Link to={"/recipe"}>Recipe</Link></h1>
                       <h1><Link to={"/share-recipe"}>Share Recipe</Link></h1>
                       <h1><Link to={"/contact"}>Contact Us</Link></h1>
                    </div>
                </div>
                <div>
                  <h1 className="text-xl font-bold font-sans mt-5 sm:mt-0  ">FOllOW US ON</h1>
                    <div className="mt-4 flex justify-evenly sm:mb-16">
                      <img src={image1} alt="" />
                      <img className="bg-white" src={image2} alt="" />
                      <img  src={image3} alt="" />
                    </div>
                </div>
            </div>
           
        </main>
    )
}