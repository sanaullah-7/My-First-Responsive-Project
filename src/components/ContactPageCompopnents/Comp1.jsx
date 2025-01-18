
export default function Comp1()
{
    return(
        <>
        <form>
            <div className="flex justify-between px-20 mt-16">
                <h1 className="font-semibold sm:font-bold text-xl sm:text-2xl md:text-3xl  lgtext-4xl font-sans">CONTACT US</h1>
                <button className="w-[85px] bg-[#DB8A89] text-white rounded-xl  ">Sumbit</button>
            </div>
            <div className="flex justify-center px-20  sm:px-0">
                <div className="mt-20">
                <div className="space-x-6 mb-5 flex ">
                    <input type="text" required placeholder="First Name" className="border-[black]  border-[2px] border-opacity-25 p-2 px-4 w-full rounded-md "  name="" id="" />
                    <input type="text" placeholder="Last Name" className="border-[black] border-[2px] border-opacity-25  p-2 px-4 w-full rounded-md " name="" id="" />
                </div>
                <div className="grid space-y-4">
                    <input type="email" placeholder="Email" required className="border-[black] border-[2px] border-opacity-25  p-2 px-4  rounded-md " name="" id="" />
                    <select name=""  className="border-[black] border-[2px] border-opacity-25 p-2 px-4  rounded-md font-medium " id="">
                        <option value="">Select Subject</option>
                        <option value="">CEO</option>
                        <option value="">Manager</option>
                    </select>
                    <textarea placeholder="Description"  className="border-[black] border-[2px] border-opacity-25 p-2 px-4 align-text-top h-[10em] rounded-md" name="" id=""></textarea>
                    
                </div>
                </div>
            </div>
        </form>
        
        </>
    )
}