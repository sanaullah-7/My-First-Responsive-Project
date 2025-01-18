import { useState } from "react";
import image1 from "./images/Deleteicon.png";

export default function Comp1() {
  const [image, setImage] = useState(null);

  // This function runs when a user selects an image
  const handleImageChange = (event) => {
    // Get the file selected by the user
    const selectedImage = event.target.files[0];

    if (selectedImage) {
      // Create a URL to preview the image and set it to state
      setImage(URL.createObjectURL(selectedImage));
    }
  };
  // Function to remove the selected image
  const handleRemoveImage = () => {
    setImage(); // Reset the image state
  };

  return (
    <>
      <form>

        <div className="flex  justify-between px-5  sm:px-20 mt-16">
          <h1 className="font-semibold sm:font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl font-sans">CREATE NEW RECIPE</h1>
          <button className="w-[60px] sm:w-[85px] bg-[#DB8A89] text-white rounded-xl  ">
            Save
          </button>
        </div>

        <section className="flex   justify-center ">
          {/* Image preview w-[40%]  sm:w-max*/}
        
          <main className="mt-16 px-10 sm:px-0 max-w-lg  ">{/* sm:w-full you can aslo put it but little bittle same  */}
            <h1 className="text-2xl md:text-[2xl]  md:text-3xl font-semibold  sm:font-bold">RECIPE</h1>
           
            <input
              type="text"
              required
              placeholder="Recipe Title"
              className="border-[1px] border-[#a8a5b6] rounded-xl w-full p-2 mb-2 mt-10"
              name=""
              id=""
            />

            {/* div 1 */}
            <div className="relative">
              <h1 className="border-[#d85250] border-[1px] rounded-xl text-center font-semibold text-sm w-[8em] h-[2em] p-1 absolute mt-8 ml-4 ">
                Recipe Image
              </h1>
              <img
                src={image}
                 alt="Recipes"
                title="Delicious"
                className="h-[15em] w-full rounded-2xl object-cover bg-[#EDECF2]"
              />

              {/* remove image button */}
              <button
                onClick={handleRemoveImage}
                className="border-[1px] border-[#e6312e] p-2 rounded-lg absolute right-4 bottom-3"
              >
                <img src={image1} alt="" />
              </button>
            </div>

            {/* 2 div */}
            
              {/* Hidden file input */}
              
              <input
                type="file"
                accept="image/*"
                id="fileInput"
                style={{ display: "none" }} // Hides the file input
                onChange={handleImageChange} // Call the function when the file is selected
              />

              {/* Button that triggers the file input */}
              <button
                onClick={() => document.getElementById("fileInput").click()} // Triggers the file input
                className="border-[1px] border-[#DB8A89]  px-2 mb-5 mt-2  rounded-lg text-[#d85250]"
              >
                <h1 className="text-3xl">+</h1>Add Photo
              </button>
           

            {/* After image */}
            <textarea
              type="text"
              placeholder="Description"
              className="border-[1px] border-[#a8a5b6] rounded-xl h-[6em] w-full p-2 mb-2 "
              name=""
              id=""
            />
            <h1 className="text-3xl font-bold mt-5">INREDIENTS</h1>

            <input
              type="text"
              placeholder="Lorem Ipsum Dolor Amet"
              className="border-[1px] border-[#a8a5b6] rounded-xl w-full p-2 mb-2 mt-4 text-opacity-50 "
              name=""
              id=""
            />

            <input
              type="text"
              placeholder="Add Ingredients"
              className="border-[1px] border-[#a8a5b6] rounded-xl w-full p-2 mb-2 mt-1 "
              name=""
              id=""
            />
            <h1 className="border-[1px] border-[#ce4947] text-[#d6514f] pb-1 px-2 relative bottom-7 rounded-lg w-[4em] mt-8">
              + Add
            </h1>
            
            <h1 className="text-3xl font-bold mt-2">COOKING NOTES</h1>

            <input
              type="text"
              placeholder="Lorem Ipsum Dolor Amet"
              className="border-[1px] border-[#a8a5b6] rounded-xl w-full p-2 mb-2 mt-4 text-opacity-50 "
              name=""
              id=""
            />

            <input
              type="text"
              placeholder="Add Another Step"
              className="border-[1px] border-[#a8a5b6] rounded-xl w-full p-2 mb-2 mt-1 "
              name=""
              id=""
            />
            <h1 className="border-[1px] border-[#ce4947] text-[#d6514f] pb-1 px-2 relative bottom-7 rounded-lg w-[4em] mt-8">
              + Add
            </h1>
          </main>
       
        </section>
      
      </form>
    </>
  );
}
