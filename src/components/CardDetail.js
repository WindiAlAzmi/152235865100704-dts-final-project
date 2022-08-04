import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";




const CardDetail = ({item}) => {
  

   
    return (
      <div className="container mx-auto flex flex-col gap-6 p-10">
        <div className="gap-4 mt-10 flex md:flex-row flex-col w-full drop-shadow-md rounded-md">
          <div className=" w-full md:w-1/3  ">
            <img src={item.strMealThumb} className="max-h-72 rounded-full mx-auto" alt="ini gambar" />
          </div>
          <div className="bg-white rounded-md w-full md:w-2/3 p-10 flex flex-col text-left">
            <h1 className="text-2xl font-bold text-gray-800">{item.strMeal} </h1>
            <p className="text-base text-gray-500">{item.strCategory}</p>
            <p className="text-base text-gray-500">{item.strArea}</p>
            <hr />
            <p className="text-base text-gray-500">{item.strInstructions}</p>
          </div>
        </div>

        <div className="flex flex-row-reverse">
          <FontAwesomeIcon icon={faHeart} className="h-8 mr-4 " />
        </div>
        <div className="drop-shadow-lg flex flex-col p-4">
          <div className="text-md bg-gradient-to-r from-win-3 to-win-4 p-4 rounded-t-lg">
            <h2 className="font-bold text-gray-800 font-2xl">ingredients:</h2>
          </div>
          <div className="bg-white border  rounded-b-lg p-4">
            <p className="text-base text-gray-800">{item.strIngredient1}</p>
            <p className="text-base text-gray-800">{item.strIngredient2}</p>
            <p className="text-base text-gray-800">{item.strIngredient3}</p>
            <p className="text-base text-gray-800">{item.strIngredient4}</p>
            <p className="text-base text-gray-800">{item.strIngredient5}</p>
            <p className="text-base text-gray-800">{item.strIngredient6}</p>
          </div>
        </div>
      </div>
    );
}

export default CardDetail;