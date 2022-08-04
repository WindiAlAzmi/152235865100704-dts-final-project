import React from 'react';
import img from '../images/Cooking-pana.svg'
import { NavLink } from "react-router-dom";


const Hero = () => {
 

    return (
      <div className="flex flex-row w-full mt-5 mb-5 ">
        <div className=" w-1/2  flex flex-col justify-center ">
          <div className=" text-center">
            <h1 className="text-gray-800 text-5xl p-2">Flying Recipe</h1>
            <p className="text-gray-500 text-md">this is delicious recipes, see and look these recipes!</p>
          </div>
          <div className=" mx-full items-center flex md:flex-row flex-col md:justify-center gap-8 mt-8">
            <button type="button" className="w-1/2 p-3 md:w-1/3 md:p-2 bg-gradient-to-r font-bold from-win-3 to-win-4 text-gray-800 rounded-full  text-center text-md">
              <NavLink to="search">See All Menu</NavLink>
            </button>

            <button type="button" className="md:w-1/3 p-2 bg-white font-bold border border-gray-800 text-gray-800 rounded-full  text-center  text-md">
              More.
            </button>
          </div>
        </div>
        <div className="w-1/2  container mx-auto  flex flex-row justify-center">
          <img src={img} alt="Logo" className="max-h-72 " />;
        </div>
      </div>
    );
}

export default Hero;