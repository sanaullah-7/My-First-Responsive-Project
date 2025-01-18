import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import image5 from "./images/image5.png"
export default function Comp4()
{
    return(
        <>
        <div>
            <h1 className="text-center text-4xl font-bold mt-10">TOP CONTRIBUTOR</h1>
            <section className="flex justify-center">
            <main className="grid grid-cols-1  md:grid-cols-3 gap-x-10 px-20 mt-10">
               
                <div className="">
                <img src={image3} alt="" />
                <div className="bg-[#EDECF2]  text-center font-bold mt-3 rounded-xl p-2">
                    <h1>CONTRIBUTOR BANE</h1>
                    <p><i className="text-[#DB8A89]">450</i> RECIPES</p>
                </div>
                </div>
                <div className=" mt-9 md:mt-0">
                <img src={image4} alt="" />
                <div className="bg-[#EDECF2] text-center font-bold mt-3 rounded-xl p-2">
                    <h1>CONTRIBUTOR BANE</h1>
                    <p><i className="text-[#DB8A89]">450</i> RECIPES</p>
                </div>
                </div>
                <div className=" mt-9 md:mt-0">
                <img src={image5} alt="" />
                <div className="bg-[#EDECF2]  text-center font-bold mt-3 rounded-xl p-2">
                    <h1>CONTRIBUTOR BANE</h1>
                    <p><i className="text-[#DB8A89]">450</i> RECIPES</p>
                </div>
                </div>
             
            </main>
            </section>
        </div>
        </>
    )
}